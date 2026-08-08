---
title: "Aus „Funktioniert es?“ zu „Will It Break?“: Meine Entwicklung im Softwaretest"
date: 2025-04-30 12:00:00
updated: 2025-05-06 22:07:00
categories:
  - WebDev
tags: [Testing, Quality Assurance, Web Development, StudentDeveloper]
lang: de
---




# Aus „Funktioniert es?“ zu „Will It Break?“: Meine Entwicklung im Softwaretest

Bei den meisten meiner frühen Projekte bedeutete „Testen“, auf **Ausführen** zu klicken, zu prüfen, ob die Ausgabe richtig aussah, und so lange „console.log“-Anweisungen einzufügen, bis dies der Fall war. Es war grob, aber schnell.

Das funktionierte nicht mehr, als ich einem Team beitrat.
Ein Feature, das ich geschrieben habe, würde das eines anderen kaputt machen. Durch die Behebung eines Fehlers wurde ein weiterer Fehler eingeführt. Wir begannen jede Fusion zu fürchten. Da habe ich gelernt, dass es beim Testen nicht darum geht, Fehler zu erkennen, sondern darum, Vertrauen aufzubauen.

Während eines einsemestrigen Projekts bin ich vom Testen aus Frust zum Testen aus Design übergegangen.
Hier erfahren Sie, wie es passiert ist.

---

## 1. Die Grundlage: Unit-Tests als Sicherheitsnetz

Bei Unit-Tests habe ich zum ersten Mal gelernt, dem Compiler weniger und der Testsuite mehr zu vertrauen.

Ein Unit-Test konzentriert sich auf eine kleine, isolierte Funktionalität – eine einzelne Funktion, eine kleine Klasse oder einen Hook. Anfangs dachte ich, sie wären übertrieben. Warum einen trivialen Helfer wie „capitalize()“ testen?

```ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
```

Aber der „Aha“-Moment kam, als ich mehrere dieser Hilfsfunktionen überarbeitete. Ohne Tests war jede Änderung eine Vermutung. Mit ihnen fühlte sich das Refactoring furchtlos an – ich konnte die Logik neu schreiben, „npm test“ ausführen und sofort sehen, ob ich etwas kaputt gemacht habe.

Wir haben **Jest** verwendet und ich habe entdeckt, wie wirkungsvoll sofortiges Feedback sein kann. Bei einer guten Suite von Unit-Tests geht es nicht darum, die Richtigkeit einmal zu überprüfen, sondern darum, sie für immer zu bewahren.

---

## 2. Integrationstests: Wo Teile auf Realität treffen

Unit-Tests beweisen, dass Teile funktionieren. Integrationstests beweisen, dass sie *zusammenwirken*.

Für unsere React-App bedeutete das, die **React-Testbibliothek** zu verwenden, um echtes Benutzerverhalten zu simulieren, anstatt interne Implementierungsdetails zu testen.

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('displays error on invalid credentials', async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'wrong@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
  fireEvent.click(screen.getByText(/login/i));

  expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
});
```

Die Schlüsselidee ist **das Testen des Verhaltens, nicht die Implementierung**.
Es ist Ihnen egal, *wie* der Fehler auftritt – nur, dass er auftritt.

Integrationstests wurden zur mittleren Ebene unserer Vertrauenspyramide: nicht so granular wie Unit-Tests, nicht so umfangreich wie E2E, aber perfekt, um sicherzustellen, dass APIs, Komponenten und Benutzerflüsse alle korrekt miteinander kommunizieren.

---

## 3. Die Spitze der Pyramide: End-to-End-Tests (E2E).

Während Unit- und Integrationstests Mikroskope sind, sind End-to-End-Tests Teleskope.
Sie betrachten das System als Ganzes – die eigentliche User Journey.

Wir haben **Playwright** verwendet, um vollständige Arbeitsabläufe zu automatisieren: Anmelden, Formulare senden, Navigieren in Dashboards.

```ts
import { test, expect } from '@playwright/test';

test('user can sign up and log in', async ({ page }) => {
  await page.goto('https://myapp.dev');
  await page.click('text=Sign Up');
  await page.fill('input[name=email]', 'new@user.com');
  await page.fill('input[name=password]', 'test1234');
  await page.click('button[type=submit]');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
```

Diese Tests waren langsamer und manchmal unzuverlässig, aber sie waren **von unschätzbarem Wert**.
Wir haben sie mithilfe von GitHub-Aktionen in unsere **CI/CD-Pipeline** integriert und alle Bereitstellungen blockiert, die einen Test nicht bestanden haben.
Es hat uns mehrere Male vor dem Versand fehlerhaften Codes bewahrt.

Das Bestehen des E2E-Tests bedeutete eines: Ein echter Benutzer konnte die App tatsächlich nutzen. Das ist das ultimative Maß an Wahrheit.

---

## 4. Jenseits der Pyramide: Erweiterung der Definition von „Test“

Nachdem wir die Grundlagen verstanden hatten, wurde uns klar, dass es beim Testen nicht nur um Logik geht, sondern um *Erfahrung*.

### Visuelle Regressionstests

Wir haben die Screenshot-Differenzierung von Playwright verwendet, um unbeabsichtigte UI-Änderungen zu erkennen.
Eine kleine CSS-Änderung hat einmal ein ganzes Layout verschoben – der visuelle Test hat es erkannt, bevor es jemand anderes tat.

```ts
await expect(page).toHaveScreenshot('homepage.png');
```

### Barrierefreiheitstests

Mit **axe-core** haben wir Barrierefreiheitsprüfungen automatisiert, um fehlenden Alt-Text, niedrige Kontrastverhältnisse und andere Probleme zu erkennen.
Es enthüllte eine demütigende Wahrheit: Es ist einfach, etwas *Funktionales* zu bauen, das für viele Benutzer immer noch *unbrauchbar* ist.

```ts
import { AxePuppeteer } from '@axe-core/playwright';
const results = await new AxePuppeteer(page).analyze();
expect(results.violations).toHaveLength(0);
```

Qualität ist nicht nur Stabilität. Es ist Inklusivität.

---

## 5. Der Wandel der Denkweise: Von der Validierung zur Erkundung

Irgendwann habe ich aufgehört zu fragen: „Funktioniert es?“ und begann zu fragen: „Wie konnte das kaputt gehen?“

Diese Frage verändert alles.
Testen ist keine lästige Pflicht mehr, sondern wird zu einer Designdisziplin. Sie fangen an, Fehler zu antizipieren – Rennbedingungen, fehlerhafte Eingaben, fehlerhafte APIs –, *bevor* sie eintreten.

Bei guten Tests geht es nicht darum, die Richtigkeit Ihres Codes zu beweisen.
Es geht darum, Ihnen den Mut zu geben, etwas zu ändern.

> “If you’re afraid to refactor, you don’t have enough tests.”
> — Kent C. Dodds

Das haben mir die Tests gegeben: Selbstvertrauen, keine Paranoia.

---

## Was ich mitgenommen habe

Beim Testen von Software geht es nicht um Misstrauen; es geht um Haltbarkeit.
Es verändert die Denkweise eines Entwicklers von der *Behebung* von Problemen zur *Verhinderung*.

Zuerst ist es langsamer – aber nur einmal.
Denn jeder Test, den Sie schreiben, verschafft Ihnen Freiheit: die Freiheit zum Umgestalten, zum Experimentieren, zur Verbesserung.

In diesem Moment wurde mir klar: Testen ist nicht der Preis für Qualität.
Es *ist* Qualität.

---

