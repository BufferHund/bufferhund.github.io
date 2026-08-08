---
title: "My TypeScript 'Aha!' Moments: Best Practices I Learned on a Real Project"
date: 2025-01-15 13:30:00
updated: 2025-01-17 22:39:00
categories:
  - WebDev
tags: [TypeScript, JavaScript, Best Practices, StudentDeveloper]
---



# My TypeScript “Aha!” Moments: Best Practices I Learned on a Real Project

When I started building a semester-long project in TypeScript, I thought the type system would automatically make our code bug-free.
It didn’t.

What it *did* do, however, was force me to think — carefully, structurally, and sometimes painfully — about how my code worked. By the end of the project, I wasn’t just writing TypeScript; I was writing **better software**.

Here are the five lessons that reshaped how I code.

---

## 1. Your `tsconfig.json` Is the Real Gatekeeper

Like most beginners, I ignored `tsconfig.json` at first. It felt like background noise. But it turned out to be one of the most powerful files in the project.

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

Turning on `strict: true` changed everything.
It forced me to confront null values, undefined returns, and type mismatches — problems that JavaScript would normally let slip into production.

At first, it felt like the compiler was nagging me. Later, I realized it was teaching me.
A properly configured `tsconfig` isn’t bureaucracy — it’s **the first layer of testing**.

---

## 2. `any` Is a Lie, `unknown` Is a Teacher

`any` feels like a shortcut. It isn’t — it’s a blindfold.

Whenever I gave up and typed something as `any`, it silently disconnected TypeScript’s safety net.
Errors stopped showing up where they *should* have, only to explode elsewhere.

Replacing `any` with `unknown` made me slow down — and that was a good thing.

```ts
function handle(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}
```

With `unknown`, the compiler says: *“I don’t know what this is — prove it to me.”*
That forced me to add guards, narrowing types intentionally.
It’s a mindset shift: you stop fighting the type system and start collaborating with it.

---

## 3. `interface` for Shape, `type` for Thought

This one clicked after weeks of inconsistency in our codebase.
Some teammates used `interface`, others preferred `type`, and soon we had chaos.

Here’s the convention that brought sanity:

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

`interface` is for identity; `type` is for abstraction.
Once I saw it that way, I stopped overthinking the difference.

---

## 4. Utility Types Are the Hidden Superpowers

I used to write endless repetitive types — until I discovered TypeScript’s built-in utility types.

```ts
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

Now:

```ts
type PublicUser = Omit<User, 'password'>;
type UserPreview = Pick<User, 'id' | 'name'>;
type EditableUser = Partial<User>;
```

Need something more dynamic? You can even create your own using `keyof`, `infer`, or conditional types:

```ts
type ApiData<T> = T extends { data: infer U } ? U : never;
type Keys<T> = keyof T;
```

And don’t overlook `ReturnType`, `Parameters`, and `Readonly<T>`.
These are the tools that make TypeScript *meta-programming* — a type system that writes types for you.

---

## 5. Discriminated Unions Make State Predictable

Before learning this, I had React components that tracked multiple booleans:
`isLoading`, `isError`, `isSuccess`. And sometimes, all three were true at once.

Discriminated unions simplified everything:

```ts
type ComponentState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

Then in React:

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

TypeScript’s control flow analysis ensures that if you handle `'success'`, you *must* handle `'error'` and `'loading'` too.
You don’t just eliminate runtime bugs — you eliminate *entire categories of impossible states*.

---

## Bonus: `satisfies` and the Future of Safe Inference

One of my favorite newer TypeScript features is the `satisfies` operator.
It lets you keep strong inference *and* enforce a contract at the same time.

```ts
const routes = {
  home: '/',
  about: '/about',
  contact: '/contact'
} satisfies Record<string, string>;

type RouteKey = keyof typeof routes; // "home" | "about" | "contact"
```

Unlike `as Record<string, string>`, this doesn’t erase the original literal types — it keeps them safe and precise.
It’s one of those small additions that makes TypeScript feel *elegant* again.

---

## What I Actually Learned

TypeScript didn’t “catch my bugs.”
It *taught me why those bugs existed*.

It turned runtime panic into compile-time guidance, and it made me slow down — in a good way.
Every red underline became a design review, and every type forced me to clarify my mental model.

TypeScript isn’t about stricter code.
It’s about **clearer thinking**.

And that’s a skill that carries far beyond the compiler.

