---
title: "Meine App funktionierte, aber sie war langsam"
date: 2024-12-30 11:20:00
updated: 2025-01-05 18:48:00
categories:
  - WebDev
tags: [Performance, Optimization, Web Development, StudentDeveloper]
lang: de
---


# Meine App funktionierte, aber sie war langsam

Als ich mein Portfolio-Projekt zum ersten Mal bereitgestellt habe, sah es auf meinem Computer gut aus. Das Layout funktionierte, die Übergänge fühlten sich reibungslos an und ich war stolz auf den Code.
Dann kam der erste Kommentar:

> “It’s nice, but the page takes forever to load.”

Dieser Satz veränderte meine Sicht auf die Entwicklung. Die App war funktionsfähig – aber nicht performant. Es *funktionierte*, aber es fühlte sich nicht richtig an.
Dieser Beitrag ist eine Reflexion darüber, was ich über die moderne Web-Performance gelernt habe, wie ich meine Fehler behoben habe und welche technischen Muster den Unterschied gemacht haben.

---

## 1. „Schnell“ neu denken: Was moderne Geschwindigkeit bedeutet

Im Jahr 2025 geht es bei der Leistung nicht nur um die Reduzierung der Dateigröße.
Es geht darum, **weniger JavaScript zu versenden**, effizient zu rendern und Code benutzernah auszuführen.

Frameworks wie **Next.js 15**, **Astro** und **Qwik** gehen noch einen Schritt weiter – sie behandeln Leistung als Architektur, nicht als Optimierung.

Mein ursprüngliches Setup? Ein traditionelles React SPA, das mit der App „React erstellen“ erstellt wurde.
Alles wurde gebündelt, auf dem Client gerendert und von einem einzigen Server bereitgestellt.

Ein einfacher „npm run build“ erzeugte ein 1,6 MB großes JavaScript-Bundle – und Browser mussten alles verarbeiten, bevor die Seite interaktiv wurde.

---

## 2. Largest Contentful Paint (LCP): Wenn „hübsch“ zu „schwer“ wird

Das erste Problem war offensichtlich: der Heldenbereich.

```html
<img src="/images/hero.png" alt="Hero" />
```

Dieses 3 MB große PNG-Bild war das Erste, was die Benutzer sahen – oder besser gesagt, darauf *warteten*.
Um LCP zu reparieren, mussten mehrere Ebenen in Angriff genommen werden:

### A. Konvertieren Sie in moderne Formate

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif" />
  <source srcset="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" width="1200" height="600" />
</picture>
```

**AVIF** übertrifft WebP in den meisten modernen Browsern und reduziert die Größe um bis zu 80 %.

### B. Laden Sie vorab, worauf es ankommt

```html
<link rel="preload" as="image" href="/images/hero.avif" />
```

Dadurch wird sichergestellt, dass der Browser frühzeitig mit dem Abrufen kritischer Assets beginnt, bevor mit den Layoutberechnungen begonnen wird.

### C. Vom Rand aus servieren

Mit **Vercel’s Edge Network** oder **Cloudflare Images** habe ich statische Assets näher an die Benutzer herangebracht und so die globale Latenz auf unter 60 ms gesenkt.
Ergebnis: LCP fiel auf Mobilgeräten von 3,4 Sekunden auf 1,1 Sekunden.

---

## 3. Interaktion mit Next Paint (INP): Reduzierung der JavaScript-Überlastung

Nachdem die Seite geladen war, fühlte sie sich immer noch träge an. Die Schaltflächen reagierten spät und das Eingeben von Formularen verursachte kleine, aber spürbare Verzögerungen.
Das Problem war nicht das Rendern – es war **JavaScript, der den Hauptthread blockierte**.

### A. Teilen Sie den Code, versenden Sie nicht alles

Anstelle eines riesigen Pakets habe ich angefangen, **dynamische Importe** und **React.lazy()** zu verwenden:

```jsx
const Chart = React.lazy(() => import('./Chart'));

function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <Chart />
    </Suspense>
  );
}
```

Laden Sie die Diagrammkomponente nur dann, wenn sie tatsächlich benötigt wird.

### B. React Serverkomponenten

In Next.js 15 können die meisten UI jetzt auf dem Server gerendert und an den Browser gestreamt werden, wodurch die clientseitige Analysezeit erheblich verkürzt wird.

```jsx
// app/page.tsx (Server Component)
import Profile from './Profile';

export default async function Page() {
  const data = await getUserData();
  return <Profile data={data} />;
}
```

Der Browser empfängt HTML sofort, während die Hydratation parallel erfolgt.

### C. Testen der Eingabereaktionsfähigkeit

Ich habe **Performance Insights** von Chrome DevTools verwendet, um INP (Interaction to Next Paint) zu messen.
Nach der Einführung von Serverkomponenten und verzögertem Laden sank die INP-Zeit von 350 ms auf 90 ms – ein spürbarer Unterschied in der wahrgenommenen Glätte.

---

## 4. Cumulative Layout Shift (CLS): Stabilität statt Überraschung

Nichts verdirbt den ersten Eindruck so sehr wie wechselnde Layouts.
Die Bilder und Schriftarten meiner Website sprangen beim Laden ständig hin und her.

### A. Reservieren Sie frühzeitig einen Platz

```html
<img src="/team.jpg" width="800" height="400" alt="Team photo" />
```

Der Browser kann jetzt Speicherplatz zuweisen, bevor das Bild heruntergeladen wird.

### B. Steuerung der Schriftartwiedergabe

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-display: optional;
}
```

Die Verwendung von „font-display: optional“ gewährleistet die Stabilität des Layouts, auch wenn das Laden der Schriftart länger dauert.

### C. CSS Seitenverhältnisse

```css
.card-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

Keine springenden Inhalte mehr, wenn dynamische Bilder asynchron geladen werden.

---

## 5. Jenseits von Metriken: Leistung als System

Nachdem ich die sichtbaren Engpässe behoben hatte, begann ich, das Gesamtbild zu betrachten.
Leistung ist kein Flickenteppich aus Optimierungen, sondern eine Denkweise auf Systemebene.

### A. Edge-First-Architektur

Durch die Bereitstellung auf **Vercel Edge Functions** konnte ich die Antwortzeit des Servers weltweit auf unter 100 ms reduzieren.
Funktionen wie Weiterleitungen, Datentransformationen oder Authentifizierungsprüfungen werden jetzt dort ausgeführt, wo sich die Benutzer befinden.

```js
// middleware.ts
export const config = { matcher: ['/api/:path*'] };

export default async function middleware(req) {
  const token = req.headers.get('Authorization');
  if (!token) return new Response('Unauthorized', { status: 401 });
  return NextResponse.next();
}
```

### B. Vorausschauendes Prefetching

Tools wie [Quicklink](https://github.com/GoogleChromeLabs/quicklink) ermöglichen das automatische Vorabrufen von Links:

```js
import quicklink from 'quicklink';
quicklink();
```

Im Ansichtsfenster sichtbare Links werden vorab abgerufen, bevor der Benutzer darauf klickt, sodass eine nahezu sofortige Navigation möglich ist.

### C. Inkrementelle statische Regeneration (ISR)

Seiten können jetzt im Hintergrund neu erstellt werden, während zwischengespeicherte Versionen bereitgestellt werden – was für ein ausgewogenes Verhältnis zwischen Geschwindigkeit und Aktualität sorgt.

```js
export const revalidate = 60; // Rebuild every 60 seconds
```

---

## 6. Die wahre Lektion

Die Optimierung der Leistung hat meine Einstellung zur Entwicklung verändert.
Es geht nicht darum, Millisekunden für Lighthouse-Scores zu quetschen. Es geht darum, vom ersten Tag an **im Hinblick auf Reaktionsfähigkeit zu gestalten**.

Eine schnelle Website fühlt sich professionell, vertrauenswürdig und zielstrebig an.
Im Zeitalter von Edge-Runtimes, KI-gestützten Tools und Benutzern mit einer Aufmerksamkeitsspanne von zwei Sekunden ist Leistung kein Merkmal, sondern die Grundlage.

Meine App macht immer noch das Gleiche.
Aber jetzt funktioniert es **mit** dem Browser, nicht **gegen** ihn.
Und da wurde mir klar: Geschwindigkeit ist Empathie, ausgedrückt im Code.

---

