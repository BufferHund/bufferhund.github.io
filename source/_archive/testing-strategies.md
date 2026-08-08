---
title: "From 'Does It Work?' to 'Will It Break?': My Evolution in Software Testing"
date: 2025-04-30 12:00:00
updated: 2025-05-06 22:07:00
categories:
  - WebDev
tags: [Testing, Quality Assurance, Web Development, StudentDeveloper]
---



# From "Does It Work?" to "Will It Break?": My Evolution in Software Testing

For most of my early projects, “testing” meant hitting **Run**, seeing if the output looked right, and throwing in `console.log` statements until it did. It was crude but fast.

That stopped working the moment I joined a team.
A feature I wrote would break someone else’s. Fixing one bug introduced another. We started to fear every merge. That was when I learned that testing wasn’t about catching errors — it was about building confidence.

Over one semester-long project, I went from testing out of frustration to testing out of design.
Here’s how it happened.

---

## 1. The Foundation: Unit Tests as a Safety Net

Unit tests are where I first learned to trust the compiler less and trust the test suite more.

A unit test focuses on one small, isolated piece of functionality — a single function, a small class, or a hook. Early on, I thought they were overkill. Why test a trivial helper like `capitalize()`?

```ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
```

But the “aha” moment came when I refactored several of these utility functions. Without tests, every change was guesswork. With them, refactoring felt fearless — I could rewrite logic, run `npm test`, and instantly see if I broke anything.

We used **Jest**, and I discovered how powerful instant feedback could be. A good suite of unit tests isn’t about checking correctness once — it’s about preserving it forever.

---

## 2. Integration Tests: Where Pieces Meet Reality

Unit tests prove that parts work. Integration tests prove that they *work together*.

For our React app, that meant using **React Testing Library** to simulate real user behavior instead of testing internal implementation details.

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

The key idea is **testing behavior, not implementation**.
You don’t care *how* the error shows up — only that it does.

Integration tests became the middle layer of our confidence pyramid: not as granular as unit tests, not as heavy as E2E, but perfect for ensuring that APIs, components, and user flows all talk to each other correctly.

---

## 3. The Top of the Pyramid: End-to-End (E2E) Tests

If unit and integration tests are microscopes, end-to-end tests are telescopes.
They look at the system as a whole — the real user journey.

We used **Playwright** to automate full workflows: logging in, submitting forms, navigating dashboards.

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

These tests were slower and sometimes flaky, but they were **invaluable**.
We integrated them into our **CI/CD pipeline** using GitHub Actions, blocking any deployment that failed a test.
It saved us multiple times from shipping broken code.

An E2E test passing meant one thing: a real user could actually use the app. That’s the ultimate measure of truth.

---

## 4. Beyond the Pyramid: Expanding the Definition of “Test”

Once the basics clicked, we realized testing isn’t just about logic — it’s about *experience*.

### Visual Regression Testing

We used Playwright’s screenshot diffing to detect unintended UI changes.
A tiny CSS tweak once shifted an entire layout — the visual test caught it before anyone else did.

```ts
await expect(page).toHaveScreenshot('homepage.png');
```

### Accessibility Testing

With **axe-core**, we automated accessibility checks to catch missing alt text, low contrast ratios, and other issues.
It revealed a humbling truth: it’s easy to build something *functional* that’s still *unusable* for many users.

```ts
import { AxePuppeteer } from '@axe-core/playwright';
const results = await new AxePuppeteer(page).analyze();
expect(results.violations).toHaveLength(0);
```

Quality isn’t just stability. It’s inclusivity.

---

## 5. The Mindset Shift: From Validation to Exploration

At some point, I stopped asking “Does it work?” and started asking “How could this break?”

That question changes everything.
Testing stops being a chore and becomes a design discipline. You start anticipating failure — race conditions, bad inputs, flaky APIs — *before* they happen.

Good tests aren’t about proving your code is right.
They’re about giving you the courage to change it.

> “If you’re afraid to refactor, you don’t have enough tests.”
> — Kent C. Dodds

That’s what testing gave me: confidence, not paranoia.

---

## What I Took Away

Software testing isn’t about distrust; it’s about durability.
It transforms a developer’s mindset from *fixing* problems to *preventing* them.

It’s slower at first — but only once.
Because every test you write buys you freedom: freedom to refactor, to experiment, to improve.

That’s the moment I realized — testing isn’t the cost of quality.
It *is* quality.

---
