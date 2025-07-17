---
title: "My App Was Working, But It Was Slow: A Student's Guide to Web Performance"
date: 2024-12-30 11:20:00
updated: 2025-01-05 18:48:00
categories:
  - WebDev
tags: [Performance, Optimization, Web Development, StudentDeveloper]
---

# My App Was Working, But It Was Slow: A Student's Guide to Web Performance

I finally deployed the first version of my portfolio project. All the features worked, the code was (mostly) clean, and I was proud of it. I sent the link to a few friends, and the first piece of feedback I got wasn't about the features—it was, "Whoa, this takes a while to load."

It was a classic student developer mistake. I had focused so much on making it *work* that I never stopped to think about making it *fast*. This sent me on a deep dive into the world of web performance optimization, and I discovered that it's one of the most important aspects of user experience.

## Meeting My New Bosses: The Core Web Vitals

My first stop was Google's Core Web Vitals. I learned that these are the key metrics Google uses to measure the performance of a page, and they directly impact your SEO ranking. They became my report card.

1.  **Largest Contentful Paint (LCP):** How long does it take for the most important content on the page to load? My LCP was terrible. The culprit? A massive, unoptimized hero image I was using on the homepage.
2.  **First Input Delay (FID):** How long does the page take to respond when a user first tries to click or type something? My page would look loaded, but it would be frozen for a second or two.
3.  **Cumulative Layout Shift (CLS):** Does the page content jump around as it loads? My page was a mess. Images would pop in and push text down, creating a jarring experience.

## My Performance Fix-It List

With my "grades" in hand, I started tackling the problems one by one.

### Taming the LCP: The Image Diet

That huge hero image was the first thing to go. I learned a few key techniques:
-   **Next-Gen Formats:** I converted my PNG to a WebP file, which cut the file size by more than half with almost no perceptible loss in quality.
-   **Lazy Loading:** I added `loading="lazy"` to all images that were below the fold. This tells the browser not to even bother downloading them until the user scrolls close to them.
-   **Responsive Images:** I used the `<picture>` element to provide different-sized images for different screen sizes. There was no reason to send a massive desktop image to a mobile phone.

### Fighting the Freeze: JavaScript on a Leash

My FID problem was caused by a massive JavaScript bundle. The browser had to download, parse, and execute all of my site's JavaScript before it could respond to any user input. The solution was to give the browser less JavaScript to deal with at once.

-   **Code Splitting:** I configured my bundler (Webpack) to split my code into smaller chunks. The code for my homepage was in one chunk, the code for my contact page was in another, and so on. Now, the user only downloads the code they need for the page they're on.
-   **Lazy Loading Components:** In my React code, I started using `React.lazy()` to load components only when they were actually needed. The heavy chart library I was using on my dashboard page was no longer part of the initial bundle.

### Stabilizing the Page: The End of Layout Shifts

Fixing the CLS was surprisingly straightforward but made a huge difference.
-   **Image Dimensions:** The biggest win was simply adding `width` and `height` attributes to all my `<img>` tags. This tells the browser the exact size of the image before it loads, so it can reserve the correct amount of space and the layout doesn't jump when the image finally appears.
-   **Font Loading:** I added `font-display: swap;` to my `@font-face` rules. This tells the browser to show a fallback font immediately and then swap in the custom font once it's loaded. It might cause a quick flash of a different font style, but it's much better than having the text be invisible or causing a massive layout shift.

## The Lesson Learned

This whole experience taught me that performance isn't a feature you add at the end; it's a fundamental part of the design and development process. A fast, smooth website feels professional and shows respect for the user's time. It's a lesson I'll carry with me to every project from now on. My portfolio doesn't just work now—it works *well*.
