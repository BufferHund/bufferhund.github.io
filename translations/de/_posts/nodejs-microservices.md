---
title: "Vom Monolithen zu Microservices"
date: 2025-03-25 15:30:00
updated: 2025-03-30 01:00:00
categories:
  - WebDev
tags: [Node.js, Microservices, Backend, Architecture, StudentDeveloper]
lang: de
---



---

# Vom Monolithen zu Microservices

Als ich mit der Erstellung meines Abschlussprojekts für den Softwarearchitekturkurs begann – einer kleinen E-Commerce-Plattform – schrieb ich alles in einer einzigen Node.js-App.
Benutzerauthentifizierung, Produktkatalog, Bestellabwicklung – alles in einem **Express**-Projekt mit einer einzigen **PostgreSQL** Datenbank.

Es hat wunderbar funktioniert.
Bis es nicht mehr geschah.

Als die Funktionen zunahmen, führte eine harmlose Änderung in der Bestelllogik zum Scheitern der Benutzerregistrierung. Das Datenbankschema sah aus wie ein Spinnennetz. Selbst die Bereitstellung eines kleinen Fixes bedeutete, *alles* neu bereitzustellen.

Damals führte unser Professor den Satz ein, der irgendwann jedem Backend-Ingenieur begegnet:
**„begrenzter Kontext.“**
Und damit kam die Idee von **Microservices** – der Architektur, die Freiheit versprach … und Komplexität lieferte.

---

## 1. Die große Trennung: Die Dekonstruktion des Monolithen

Wir begannen mit einer täuschend einfachen Frage: *Wo endet ein Anliegen und wo beginnt ein anderes?*

Nach einigen Whiteboard-Debatten haben wir drei verschiedene „abgegrenzte Kontexte“ – oder Geschäftsdomänen – in unserer App identifiziert:

1. **Benutzerservice** – Registrierung, Anmeldung, Profile.
   Datenbank: Nur Tabelle „Benutzer“.
2. **Produktservice** – Katalogverwaltung und Inventar.
   Datenbank: Tabelle „Produkte“.
3. **Bestellservice** – Warenkorb und Kasse.
   Datenbank: Tabelle „Bestellungen“.

Jeder wurde zu einem unabhängigen **Node.js** Mikrodienst, der auf seinem eigenen Port und mit seiner eigenen Datenbank ausgeführt wird.

Diese Entscheidung – *eine Datenbank pro Dienst* – fühlte sich zunächst radikal an.
Aber es setzte eine mächtige Regel durch: Kein Dienst konnte stillschweigend auf die Daten eines anderen zugreifen. Jede Interaktion musste über klar definierte APIs oder Nachrichten erfolgen.

> This was my first real exposure to **data ownership** — the idea that architecture isn’t just about code separation, but about autonomy and accountability.

---

## 2. Der neue Mittelsmann: Aufbau eines API-Gateways

Nachdem wir alles auseinander genommen hatten, stellte sich die nächste Frage:
*Wie kommuniziert das Frontend mit all diesen verschiedenen Diensten?*

Die Antwort war ein **API Gateway.**

Das Gateway wurde zu unserem einzigen Einstiegspunkt – einem Verkehrscontroller, der „/api/users“ an den Benutzerdienst, „/api/products“ an den Produktdienst usw. weiterleitete.

```js
app.use('/api/users', proxy('http://localhost:3001'));
app.use('/api/products', proxy('http://localhost:3002'));
app.use('/api/orders', proxy('http://localhost:3003'));
```

Es vereinfachte nicht nur das Routing, es wurde auch zu einer **Richtlinienebene**.
Wir haben hier JWT-Authentifizierung, Ratenbegrenzung und Protokollierung implementiert, was bedeutete, dass jede Anfrage eine konsistente Sicherheits- und Überwachungsgrenze durchlief.

Es war mein erster Einblick in die Tatsache, dass „Infrastrukturbelange“ auf einer anderen Ebene angesiedelt sind als „Geschäftslogik“.
Durch diese Trennung fühlte sich das System *konstruiert* und nicht nur *codiert* an.

---

## 3. Der schwierige Teil: Die Dienste miteinander kommunizieren lassen

Die eigentliche Herausforderung bestand nicht darin, die App zu teilen, sondern darin, die Teile wieder zusammenzufügen.

Wenn eine Bestellung aufgegeben wurde, musste der Bestellservice den Benutzerservice („Bestellverlauf aktualisieren“) und manchmal auch den Produktservice („Bestand verringern“) benachrichtigen.

Unser erster naiver Ansatz? Direkte HTTP-Aufrufe:

```js
await axios.post('http://users-service:3001/api/updateHistory', {...});
```

Es hat funktioniert – bis es nicht mehr funktionierte.
Wenn der Benutzerdienst ausfiel, schlug der gesamte Bezahlvorgang fehl.
Unsere „unabhängigen“ Dienste waren tatsächlich *eng miteinander verbunden.*

Unser Professor führte uns dann in die **ereignisgesteuerte Architektur** ein.

Wir haben einen einfachen Ereignisbus mit dem integrierten „EventEmitter“ von Node (und später RabbitMQ) implementiert.
Beim Erstellen einer Bestellung hat der Bestelldienst ein Ereignis ausgegeben:

```js
eventBus.emit('order.placed', order);
```

Andere Dienste abonnierten und reagierten unabhängig voneinander:

```js
eventBus.on('order.placed', handleUserUpdate);
eventBus.on('order.placed', handleInventoryChange);
```

Es fühlte sich befreiend an.
Zum ersten Mal wussten die Dienste nichts voneinander – sie lauschten nur auf Ereignisse, die für sie wichtig waren.

Da verstand ich die tiefere Lektion:

> **Microservices aren’t about splitting code. They’re about decoupling communication.**

---

## 4. Resilienz: Auf die harte Tour lernen

Einer unserer Microservices – der Produktservice – war für die Tarifberechnung auf einen Drittanbieter-Versand API angewiesen.
Als dieser API ausfiel, ist unser gesamter Bezahlvorgang eingefroren.

Damals entdeckten wir das **Leistungsschaltermuster.**

Ein Leistungsschalter umschließt externe API-Anrufe und überwacht wiederholte Fehler. Wenn ein Endpunkt weiterhin ausfällt, „öffnet er den Stromkreis“ und schließt zukünftige Anrufe sofort kurz.

Hier ist ein vereinfachtes Beispiel:

```js
if (failures >= threshold) {
  throw new Error('Circuit open — skipping external API');
}
```

Es klingt klein, ist aber tiefgreifend.
Es lehrt Sie, **für das Scheitern zu konzipieren, nicht dagegen.**

Das Hinzufügen von Leistungsschaltern, Wiederholungsversuchen und Zeitüberschreitungen verwandelte unser brüchiges Experiment in etwas, das *ordnungsgemäß scheitern* konnte.
Zum ersten Mal verhielt sich unser System weniger wie eine Sammlung von Skripten, sondern eher wie eine verteilte Anwendung.

---

## 5. Der Kompromiss: Freiheit vs. Komplexität

Nach Monaten der Iteration funktionierten unsere Microservices – unabhängig einsetzbar, fehlertolerant und ereignisgesteuert.
Doch der Sieg war bittersüß.

Wir hatten gewonnen:

* Clearer ownership and smaller codebases.
* Independent deployment pipelines.
* A real appreciation for asynchronous design.

Aber wir hatten *bezahlt* mit:

* Complex local development setups (Docker Compose became mandatory).
* Multiple databases to maintain.
* New debugging challenges — tracing one request across three logs.

Irgendwann wurde mir klar, dass meine „Hallo Welt“-Anfragen nun fünf Prozesse und zwei Warteschlangen durchliefen, bevor sie eine Antwort zurückgaben.
Für eine kleine App war es übertrieben, aber eine unbezahlbare Lektion in Sachen Kompromisse.

> Architecture isn’t about chasing elegance.
> It’s about finding the **right amount of complexity** for your scale and context.

---

## 6. Mein Fazit: Die Veränderung der Denkweise

Der Wechsel von einem Monolithen zu Microservices hat mehr als nur meinen Code verändert – er hat meine Denkweise über Systeme verändert.

In einem Monolithen dachte ich in Funktionen.
Bei Microservices musste ich in *Grenzen, Verträgen und Fehlermodi denken.*

Es ist nicht so, dass Microservices „besser“ sind.
Es sind einfach *verschiedene Werkzeuge* für *verschiedene Probleme.*

Für einen Schüler ist diese Erkenntnis transformativ:
**Bei der Skalierbarkeit geht es nicht darum, mehr Benutzer zu bewältigen – es geht darum, mehr Komplexität zu bewältigen.**

Microservices haben mich gelehrt, dass eine gute Architektur nicht diejenige mit den meisten Services oder den ausgefallensten Diagrammen ist.
Es ist die Möglichkeit, über die man nachdenken, unter Druck Fehler beheben und sich ohne Angst weiterentwickeln kann.

Und das war für mich der eigentliche Abschluss.

---

