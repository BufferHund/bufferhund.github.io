---
title: "My TypeScript 'Aha!' Moments: Best Practices I Learned on a Real Project"
date: 2025-01-15 13:30:00
updated: 2025-01-17 22:39:00
categories:
  - WebDev
tags: [TypeScript, JavaScript, Best Practices, StudentDeveloper]
---

# My TypeScript 'Aha!' Moments: Best Practices I Learned on a Real Project

I just spent a semester wrestling with a pretty complex web application for my software engineering course. We chose TypeScript from the start, thinking it would magically prevent all bugs. It didn't. But what it *did* do was force us to be better engineers. Along the way, I had a few "aha!" moments—things that, once they clicked, completely changed how I write code. Here are the big ones.

## Lesson 1: Your `tsconfig.json` is Your First Line of Defense

When you first initialize a TypeScript project, you get a `tsconfig.json` file. My initial instinct was to ignore it. Big mistake. The single most important thing I learned was to enable `strict: true`.

Turning on strict mode is like activating a whole suite of safety checks. It forces you to handle `null` and `undefined` values, ensures your functions have explicit return types, and stops you from using `any` implicitly. It felt annoying at first, like the compiler was constantly yelling at me. But every error it caught was a potential runtime bug that would have been a nightmare to track down later. Don't skip this. It's your best friend.

## Lesson 2: `any` is a Lie

When you're in a hurry, it's so tempting to type something as `any`. It makes the compiler errors go away, and you can move on. I learned the hard way that `any` is a lie. It's a backdoor that lets you escape the type system, which defeats the entire purpose of using TypeScript.

Every time we used `any`, it came back to bite us. We'd pass the wrong type of data, and the error would show up deep in some other part of the application, far from the source of the problem. The rule we eventually adopted was: if you don't know the type, use `unknown`. `unknown` is the type-safe version of `any`. It forces you to do a type check before you can use the variable, which is exactly what you should be doing.

## Lesson 3: Use `interface` for Shapes, `type` for Everything Else

The `interface` vs. `type` debate is endless online. Our team settled on a simple convention that made our code much easier to read:

-   **Use `interface` when defining the "shape" of an object.** Think of it as a contract for what a `User` or a `Product` object should look like. Interfaces can also be extended, which is great for object-oriented patterns.
-   **Use `type` for everything else.** This includes creating union types (`type Status = 'pending' | 'success'`), defining function signatures, or creating complex types using utility types.

This simple rule brought a lot of clarity to our codebase.

## Lesson 4: Utility Types Are Pure Magic

This was my biggest "aha!" moment. I spent hours writing boilerplate types until a TA showed me TypeScript's built-in utility types. They are incredible time-savers.

-   Need to create a new type for a form that has all the properties of your `User` interface, but they should all be optional? That's just `Partial<User>`.
-   Need a type that only has the `id` and `name` from your `User`? That's `Pick<User, 'id' | 'name'>`.
-   Need a type that has everything *except* the `password`? `Omit<User, 'password'>`.

Learning to use these utility types felt like unlocking a superpower. It made our code more concise and much more maintainable.

## Lesson 5: Discriminated Unions for State Management

In our React components, we used to have a bunch of boolean flags to manage state: `isLoading`, `isError`, `isSuccess`. It was a mess.

The pattern that cleaned this up completely was discriminated unions. We created a state type like this:

```typescript
type ComponentState<T> = 
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

The `status` property is the "discriminant." In our component, we could now use a simple `switch` statement on `state.status`. The best part is that TypeScript is smart enough to know that if `state.status` is `'success'`, then `state.data` must exist. It made our rendering logic clean, safe, and impossible to mess up.

---

This project taught me that TypeScript isn't about adding rules for the sake of it. It's about providing a framework for writing code that is easier to reason about, maintain, and refactor. These practices were my lifelines, and I won't be starting another project without them.
