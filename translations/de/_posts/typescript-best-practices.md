---
title: "Mein TypeScript „Aha!“ Momente: Best Practices, die ich bei einem echten Projekt gelernt habe"
date: 2025-01-15 13:30:00
updated: 2025-01-17 22:39:00
categories:
  - WebDev
tags: [TypeScript, JavaScript, Best Practices, StudentDeveloper]
lang: de
---




# Mein TypeScript „Aha!“ Momente: Best Practices, die ich bei einem echten Projekt gelernt habe

Als ich in TypeScript mit der Erstellung eines Semesterprojekts begann, dachte ich, dass das Typsystem unseren Code automatisch fehlerfrei machen würde.
Das war nicht der Fall.

Was es jedoch tat, war, dass ich – sorgfältig, strukturell und manchmal schmerzhaft – darüber nachdenken musste, wie mein Code funktionierte. Am Ende des Projekts habe ich nicht nur TypeScript geschrieben; Ich habe **bessere Software** geschrieben.

Hier sind die fünf Lektionen, die meine Art zu programmieren verändert haben.

---

## 1. Ihre „tsconfig.json“ ist der wahre Gatekeeper

Wie die meisten Anfänger habe ich „tsconfig.json“ zunächst ignoriert. Es fühlte sich an wie Hintergrundgeräusche. Es stellte sich jedoch heraus, dass es sich um eine der leistungsstärksten Dateien im Projekt handelte.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUncheckedIndexedAccess": true
  }
}
```

Das Einschalten von „strict: true“ hat alles verändert.
Dadurch musste ich mich mit Nullwerten, undefinierten Rückgaben und Typinkongruenzen auseinandersetzen – Probleme, die JavaScript normalerweise in die Produktion einfließen lassen würden.

Zuerst hatte ich das Gefühl, der Compiler würde mich nerven. Später wurde mir klar, dass es mir etwas beibrachte.
Eine richtig konfigurierte „tsconfig“ ist keine Bürokratie – sie ist **die erste Testebene**.

---

## 2. „irgendein“ ist eine Lüge, „unbekannt“ ist ein Lehrer

„any“ fühlt sich wie eine Abkürzung an. Das ist es nicht – es ist eine Augenbinde.

Immer wenn ich aufgab und etwas als „any“ tippte, wurde das Sicherheitsnetz von TypeScript stillschweigend getrennt.
Fehler tauchten nicht mehr dort auf, wo sie hätten sein sollen, nur um an anderer Stelle zu explodieren.

Das Ersetzen von „any“ durch „unknown“ hat mich langsamer gemacht – und das war gut so.

```ts
function handle(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}
```

Mit „unbekannt“ sagt der Compiler: *„Ich weiß nicht, was das ist – beweisen Sie es mir.“*
Das zwang mich, Wachen hinzuzufügen und die Typen absichtlich einzugrenzen.
Es ist eine Änderung der Denkweise: Sie hören auf, gegen das Typensystem zu kämpfen, und beginnen, mit ihm zusammenzuarbeiten.

---

## 3. „Schnittstelle“ für Form, „Typ“ für Gedanke

Dieser hat nach wochenlanger Inkonsistenz in unserer Codebasis Klick gemacht.
Einige Teamkollegen verwendeten „Schnittstelle“, andere bevorzugten „Typ“ und bald herrschte Chaos.

Hier ist die Konvention, die Vernunft brachte:

* **`interface`** defines *the shape* of an object or class — a contract for structure.
* **`type`** defines *relationships, transformations, and variations* — things that extend beyond a single shape.

```ts
interface User {
  id: string;
  name: string;
}

type Status = 'pending' | 'success' | 'error';
type ApiResponse<T> = { data: T; status: Status };
```

„Schnittstelle“ dient der Identität; „Typ“ dient der Abstraktion.
Als ich es so sah, hörte ich auf, über den Unterschied nachzudenken.

---

## 4. Versorgungstypen sind die verborgenen Superkräfte

Früher habe ich endlos sich wiederholende Typen geschrieben – bis ich die integrierten Hilfstypen von TypeScript entdeckte.

```ts
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

Jetzt:

```ts
type PublicUser = Omit<User, 'password'>;
type UserPreview = Pick<User, 'id' | 'name'>;
type EditableUser = Partial<User>;
```

Brauchen Sie etwas Dynamischeres? Sie können sogar Ihre eigenen erstellen, indem Sie „keyof“, „infer“ oder bedingte Typen verwenden:

```ts
type ApiData<T> = T extends { data: infer U } ? U : never;
type Keys<T> = keyof T;
```

Und übersehen Sie nicht „ReturnType“, „Parameters“ und „Readonly<T>“.
Dies sind die Tools, die TypeScript zur *Metaprogrammierung* machen – ein Typsystem, das Typen für Sie schreibt.

---

## 5. Diskriminierte Gewerkschaften machen den Staat berechenbar

Bevor ich das gelernt habe, hatte ich React-Komponenten, die mehrere boolesche Werte verfolgten:
„isLoading“, „isError“, „isSuccess“. Und manchmal trafen alle drei gleichzeitig zu.

Diskriminierte Gewerkschaften haben alles vereinfacht:

```ts
type ComponentState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

Dann in React:

```tsx
switch (state.status) {
  case 'loading':
    return <Spinner />;
  case 'error':
    return <ErrorMessage error={state.error} />;
  case 'success':
    return <DataView data={state.data} />;
}
```

Die Kontrollflussanalyse von TypeScript stellt sicher, dass Sie, wenn Sie mit „Erfolg“ umgehen, auch mit „Fehler“ und „Laden“ umgehen *müssen*.
Sie beseitigen nicht nur Laufzeitfehler, sondern *ganze Kategorien unmöglicher Zustände*.

---

## Bonus: „befriedigt“ und die Zukunft der sicheren Schlussfolgerung

Eine meiner liebsten neueren TypeScript-Funktionen ist der „satisfies“-Operator.
Damit können Sie stark bleiben inference *und* gleichzeitig einen Vertrag durchsetzen.

```ts
const routes = {
  home: '/',
  about: '/about',
  contact: '/contact'
} satisfies Record<string, string>;

type RouteKey = keyof typeof routes; // "home" | "about" | "contact"
```

Im Gegensatz zu „as Record<string, string>“ werden hierdurch die ursprünglichen Literaltypen nicht gelöscht, sondern sie bleiben sicher und präzise.
Es ist eine dieser kleinen Ergänzungen, die TypeScript wieder *elegant* wirken lässt.

---

## Was ich tatsächlich gelernt habe

TypeScript hat meine Fehler nicht erkannt.
Es *zeigte mir, warum diese Fehler existierten*.

Es verwandelte die Laufzeitpanik in eine Anleitung zur Kompilierungszeit und sorgte dafür, dass ich langsamer wurde – im positiven Sinne.
Jede rote Unterstreichung wurde zu einer Designüberprüfung, und jede Schrift zwang mich, mein mentales Modell zu klären.

Bei TypeScript geht es nicht um strengeren Code.
Es geht um **klareres Denken**.

Und das ist eine Fähigkeit, die weit über den Compiler hinausgeht.


