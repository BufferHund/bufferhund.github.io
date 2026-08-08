---
title: "My App Was Working, But It Was Slow: A Student's Guide to Web Performance"
date: 2024-12-30 11:20:00
updated: 2025-01-05 18:48:00
categories:
  - WebDev
tags: [Performance, Optimization, Web Development, StudentDeveloper]
---

# My App Was Working, But It Was Slow

When I first deployed my portfolio project, it looked fine on my machine. The layout worked, the transitions felt smooth, and I was proud of the code.
Then came the first comment:

> “It’s nice, but the page takes forever to load.”

That sentence changed how I viewed development. The app was functional — but not performant. It *worked*, but it didn’t *feel* right.
This post is a reflection on what I learned about modern web performance, how I fixed my mistakes, and the technical patterns that made the difference.

---

## 1. Rethinking “Fast”: What Modern Speed Means

In 2025, performance is not just about reducing file sizes.
It’s about **shipping less JavaScript**, rendering efficiently, and executing code close to the user.

Frameworks like **Next.js 15**, **Astro**, and **Qwik** take this further — they treat performance as architecture, not optimization.

My original setup? A traditional React SPA built with Create React App.
Everything was bundled together, rendered on the client, and delivered from a single server.

A simple `npm run build` produced a 1.6MB JavaScript bundle — and browsers had to process all of it before the page became interactive.

---

## 2. Largest Contentful Paint (LCP): When “Pretty” Becomes “Heavy”

The first issue was obvious: the hero section.

```html
<img src="/images/hero.png" alt="Hero" />
```

That 3MB PNG image was the first thing users saw — or rather, *waited* to see.
Fixing LCP meant tackling several layers:

### a. Convert to Modern Formats

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif" />
  <source srcset="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" width="1200" height="600" />
</picture>
```

**AVIF** outperforms WebP in most modern browsers, cutting size by up to 80%.

### b. Preload What Matters

```html
<link rel="preload" as="image" href="/images/hero.avif" />
```

This ensures the browser starts fetching critical assets early, before layout calculations begin.

### c. Serve from the Edge

Using **Vercel’s Edge Network** or **Cloudflare Images**, I moved static assets closer to users — cutting global latency under 60ms.
Result: LCP dropped from 3.4s to 1.1s on mobile.

---

## 3. Interaction to Next Paint (INP): Reducing JavaScript Overload

After the page loaded, it still felt sluggish. Buttons responded late, and typing in forms caused small but noticeable delays.
The issue wasn’t rendering — it was **JavaScript blocking the main thread**.

### a. Split the Code, Don’t Ship It All

Instead of one massive bundle, I started using **dynamic imports** and **React.lazy()**:

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

Only load the chart component when it’s actually needed.

### b. React Server Components

In Next.js 15, most UI can now be rendered on the server and streamed to the browser — dramatically reducing client-side parsing time.

```jsx
// app/page.tsx (Server Component)
import Profile from './Profile';

export default async function Page() {
  const data = await getUserData();
  return <Profile data={data} />;
}
```

The browser receives HTML immediately, while hydration happens in parallel.

### c. Input Responsiveness Testing

I used Chrome DevTools’ **Performance Insights** to measure INP (Interaction to Next Paint).
After adopting server components and lazy loading, INP dropped from 350ms to 90ms — a tangible difference in perceived smoothness.

---

## 4. Cumulative Layout Shift (CLS): Stability Over Surprise

Nothing ruins a first impression like shifting layouts.
My site’s images and fonts constantly jumped around as they loaded.

### a. Reserve Space Early

```html
<img src="/team.jpg" width="800" height="400" alt="Team photo" />
```

The browser can now allocate space before the image downloads.

### b. Font Rendering Control

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-display: optional;
}
```

Using `font-display: optional` ensures layout stability even if the font takes longer to load.

### c. CSS Aspect Ratios

```css
.card-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

No more jumping content when dynamic images load asynchronously.

---

## 5. Beyond Metrics: Performance as a System

Once I fixed the visible bottlenecks, I began looking at the bigger picture.
Performance isn’t a patchwork of optimizations — it’s a system-level mindset.

### a. Edge-First Architecture

By deploying on **Vercel Edge Functions**, I reduced server response time to under 100ms globally.
Functions like redirects, data transforms, or authentication checks now run where the users are.

```js
// middleware.ts
export const config = { matcher: ['/api/:path*'] };

export default async function middleware(req) {
  const token = req.headers.get('Authorization');
  if (!token) return new Response('Unauthorized', { status: 401 });
  return NextResponse.next();
}
```

### b. Predictive Prefetching

Tools like [Quicklink](https://github.com/GoogleChromeLabs/quicklink) make link prefetching automatic:

```js
import quicklink from 'quicklink';
quicklink();
```

Links visible in the viewport are prefetched before the user clicks, giving near-instant navigation.

### c. Incremental Static Regeneration (ISR)

Pages can now rebuild in the background while serving cached versions — balancing speed and freshness.

```js
export const revalidate = 60; // Rebuild every 60 seconds
```

---

## 6. The Real Lesson

Optimizing performance changed how I think about development.
It’s not about squeezing milliseconds for Lighthouse scores. It’s about **designing for responsiveness** from day one.

A fast website feels professional, trustworthy, and intentional.
In an era of edge runtimes, AI-assisted tooling, and users with a two-second attention span, performance is not a feature — it’s the foundation.

My app still does the same thing.
But now it works **with** the browser, not **against** it.
And that’s when I realized: speed is empathy, expressed in code.

---
