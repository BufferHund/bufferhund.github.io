---
title: "Levelaufstieg in React: Meine Reise mit fortgeschrittenen Hooks"
date: 2025-02-20 10:45:00
updated: 2025-02-27 07:19:00
categories:
  - WebDev
tags: [React, Hooks, JavaScript, Frontend, StudentDeveloper]
lang: de
---




# Levelaufstieg in React: Meine Reise mit fortgeschrittenen Hooks

In den ersten Monaten des Lernens von React war meine Welt klein und komfortabel – fast ausschließlich durch „useState“ und „useEffect“ definiert. Sie waren der Hammer und der Schraubenzieher, die ich für jedes Problem benutzte.

Aber als mein Abschlussprojekt über ein paar Spielzeugkomponenten hinausging, stieß ich an eine Wand.
Meine Zustandslogik wurde unkontrollierbar, Komponenten wurden ohne Grund neu gerendert und meine Hooks sahen aus wie Spaghetti.

Da wurde mir klar, dass es im Hook-System von React nicht nur um „useState“ und „useEffect“ ging.
Es handelt sich um eine Designsprache – eine, die Komplexität modellieren, Duplikate reduzieren und Ihre App im großen Maßstab *vorhersehbar* machen kann.

So kam ich von „Ich glaube, ich verstehe Haken“ zu „Ich kann damit entwerfen.“

---

## 1. Als „useState“ zur Falle wurde – und „useReducer“ mich befreite

Es begann mit einem Formular.
Ganz einfach, oder? Ein paar Texteingaben, etwas Validierung und Übermittlungslogik.

Außer, dass ich *zwölf* „useState“-Aufrufe hatte – Werte, Fehler, Touched-Flags – und jedes Update ein Durcheinander von erneuten Renderings auslöste.
Das Bauteil war korrekt, aber zerbrechlich. Ich konnte mir nicht vorstellen, wie sich eine Änderung auf eine andere auswirken könnte.

Dann habe ich „useReducer“ gefunden.

Zuerst dachte ich, es wäre für Zustandsautomaten im Redux-Stil, aber in Wahrheit ist es perfekt für lokale, komplexe Zustände – bei denen sich mehrere Werte im Verhältnis zueinander ändern.

```tsx
// Before: chaos
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [nameError, setNameError] = useState(null);
const [emailError, setEmailError] = useState(null);

// After: clarity
const initialState = { name: '', email: '', errors: {} };

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    default:
      return state;
  }
}

const [formState, dispatch] = useReducer(formReducer, initialState);
```

Jetzt war jede Zustandsänderung **explizit und nachvollziehbar** – wie ein Protokoll von Ereignissen statt eines Netzes von Nebenwirkungen.

> **Lesson:** Whenever you have multiple related pieces of state or complex transitions, `useReducer` turns chaos into a controlled system. It’s not just a hook — it’s an architectural mindset.

---

## 2. Leistung: Als „useMemo“ und „useCallback“ endlich Sinn machten

Irgendwann fing meine App an zu *verzögern*.
Das Eintippen einer Eingabe verursachte sichtbare Verzögerungen. Ich ging davon aus, dass React langsam war – bis ich erfuhr, dass *ich* das Problem war.

Jeder Tastendruck löste eine teure Filterfunktion aus und renderte mehrere untergeordnete Komponenten neu.
Geben Sie ein: „useMemo“ und „useCallback“.

### „useMemo“ für aufwendige Berechnungen

```tsx
const filteredData = useMemo(() => {
  return data.filter((item) => item.includes(query));
}, [data, query]);
```

Ohne „useMemo“ lief dieser Filter bei jedem Rendern – auch wenn „query“ sich nicht geändert hatte.
Jetzt wird es *nur* neu berechnet, wenn seine Abhängigkeiten aktualisiert werden.

### „useCallback“ für stabile Funktionsreferenzen

```tsx
const handleSelect = useCallback((id) => {
  setSelected(id);
}, []);
```

Die Übergabe einer Inline-Funktion an eine untergeordnete Komponente führt dazu, dass React bei jedem Rendern denkt, es handele sich um eine *neue* Requisite.
„useCallback“ stabilisiert die Referenz, sodass gespeicherte untergeordnete Elemente („React.memo“) nicht unnötig neu gerendert werden.

> **Lesson:** These aren’t “magic performance hacks.” They’re tools for **memoization**, not optimization theater.
> Use them when your profiler tells you to — not before.

---

## 3. Das wahre Upgrade: Meine eigenen Hooks schreiben

Der größte Wendepunkt war nicht ein neuer eingebauter Haken.
Mir wurde klar, dass ich **mein eigenes erstellen** konnte.

In der Mitte des Projekts habe ich dieselbe Abruflogik kopiert und in mehrere Komponenten eingefügt:

* `useState` for data
* `useState` for loading
* `useState` for error
* and a `useEffect` to trigger it all

Das ist nicht React – das ist viel Arbeit.

### Umgestaltung in einen benutzerdefinierten Hook

```tsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => isMounted && setData(data))
      .catch((err) => isMounted && setError(err))
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [url]);

  return { data, loading, error };
}
```

Dann in meinen Komponenten:

```tsx
const { data, loading, error } = useApi('/api/users');
```

Eine Zeile. Keine Duplizierung.
Und das Beste daran? Der Hook war testbar, tragbar und zusammensetzbar.

Von da an schneite es:
„useDebounce“ für Sucheingaben.
„useLocalStorage“ für Persistenz.
„useEventListener“ für benutzerdefinierte Browserereignisse.

> **Lesson:** A good custom hook abstracts *behavior*, not just state. It captures patterns that belong to your app’s domain — your own React “vocabulary.”

---

## 4. Denken in Haken: Der mentale Modellwechsel

Was mir die erweiterten Hooks von React wirklich beigebracht haben, war keine neue Syntax – es war eine neue Art zu *denken*.

Hooks sind keine Hilfsmittel. Sie sind **Verhaltenszusammensetzung**.
Anstatt Hierarchien von Komponenten aufzubauen, komponieren Sie Verhalten durch Funktionen.

* `useReducer` → deterministic state transitions
* `useMemo` / `useCallback` → stable identity
* Custom hooks → shared, declarative logic

Dadurch ähnelt React-Code weniger imperativen Skripten, sondern eher einem **System deklarativer Datenflüsse**.
Es ist der Unterschied zwischen „wie die Dinge passieren“ und „was passieren sollte, wenn sich die Bedingungen ändern“.

---

## 5. Die professionelle Lektion

Das Erlernen fortgeschrittener Hooks hat meine Herangehensweise an Komplexität verändert.
Vorher habe ich gegen React gekämpft und versucht, dafür zu sorgen, dass es sich wie Vanilla JavaScript verhält.
Jetzt arbeite ich *mit* React – und entwerfe Systeme, die vom Design her vorhersehbar sind.

Die Wahrheit ist, dass die meisten React Leistungsprobleme und Zustandschaos nicht auf mangelnde Fähigkeiten zurückzuführen sind.
Sie entstehen durch ein Missverständnis der *Zusammensetzung*. Hooks sind Reacts Möglichkeit, Ihnen **Kontrolle ohne Unordnung** zu geben, wenn Sie sie als Muster und nicht als Patches verwenden.

> A senior React developer doesn’t just know more hooks.
> They know when to write fewer of them.

---

## Schlussgedanke

Der Schritt über „useState“ und „useEffect“ hinaus war nicht nur ein technisches Upgrade, sondern ein **konzeptionelles**.
Es hat mich gelehrt, dass es bei React nicht um die Verwaltung des Zustands, sondern um die Verwaltung von *Veränderungen* geht.

Hooks sind im besten Fall die Art und Weise, wie Sie diese Veränderung in kleinen, wiederverwendbaren und eleganten Logikeinheiten erfassen.
Und sobald Sie anfangen, so zu denken, hören Sie auf, einfach „React zu verwenden“ –
Sie beginnen **mit React zu entwerfen.**


