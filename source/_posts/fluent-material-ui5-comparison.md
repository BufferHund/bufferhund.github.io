---
title: "Choosing a Look and Feel: My Dive into Material, Fluent, and UI5"
date: 2024-09-15 10:30:00
updated: 2024-09-22 04:44:00
categories:
  - WebDev
tags: [Design Systems, UI/UX, Frontend, StudentDeveloper]
---

# Choosing a Look and Feel: My Dive into Material, Fluent, and UI5

For a course on Human-Computer Interaction, we were tasked with building a prototype for a new application. A big part of our grade was the user interface and overall user experience. This meant I had to move beyond default HTML buttons and choose a real design system and component library.

I quickly fell down the rabbit hole of design philosophies and ended up comparing three of the biggest players: Google's Material Design, Microsoft's Fluent Design, and a more specialized one I discovered called SAP UI5.

## Material Design: The Ubiquitous Standard

The first one I tried was Material Design, using the popular MUI library for React. You can't escape Material Design; it's everywhere, especially on Android and Google's web apps.

**What I liked:**
-   **It's incredibly comprehensive.** There's a component for everything, and the documentation is exhaustive. You can build a complex, good-looking application very quickly.
-   **It feels familiar.** Because it's so widely used, building with it feels like you're creating something that users will intuitively understand.

**What I found challenging:**
-   **It can feel a bit generic.** Because it's so popular, it's sometimes hard to make your application feel unique without a lot of custom styling.
-   **It's very opinionated.** Material Design has strong ideas about how things should look and behave, which is great for consistency but can feel restrictive if you have a different vision.

## Fluent Design: The Modern & Airy Challenger

Next, I explored Microsoft's Fluent Design. As a Windows user, I was familiar with its look and feel—the subtle transparency, the focus on light and depth.

**What I liked:**
-   **It's beautiful.** Fluent feels very modern and clean. The use of acrylic materials and motion gives it a sense of polish that's really appealing.
-   **It's great for information density.** It seems to handle complex, data-heavy interfaces really well, which is a big plus for more "serious" applications.

**What I found challenging:**
-   **The ecosystem is less mature.** While there are good libraries out there, the community and the number of available resources are smaller than Material Design's.
-   **It feels very "Microsoft."** This isn't necessarily a bad thing, but the design language is so tied to the Windows ecosystem that it can feel a bit out of place on other platforms.

## SAP UI5: The Enterprise Powerhouse

This was the wild card for me. I stumbled upon SAP UI5 while looking for design systems specifically for business applications. It's not as well-known as the other two, but it's a powerhouse in the enterprise world.

**What I liked:**
-   **It's built for business.** UI5 is designed from the ground up for complex, data-driven applications. It has powerful components for tables, charts, and forms that are a step above what the general-purpose libraries offer.
-   **It's incredibly consistent.** It provides a rock-solid, unified look and feel that's perfect for a suite of business tools.

**What I found challenging:**
-   **The learning curve is steep.** UI5 has its own way of doing things, and it's deeply integrated with the broader SAP ecosystem. It's not something you can just pick up in a weekend.
-   **It's not very flexible.** It's designed for a specific purpose, and trying to use it for a general-purpose consumer application would be like trying to use a freight train to go to the grocery store.

## My Decision for My Project

In the end, the choice came down to the specific needs of my project.

-   If I were building a standard consumer-facing mobile or web app, I'd probably stick with **Material Design** for its familiarity and massive ecosystem.
-   If I were building a modern, data-rich desktop application, especially for Windows, **Fluent Design** would be a very strong contender.
-   But for my project—a prototype for a complex, data-heavy enterprise dashboard—I actually chose to build with the principles of **SAP UI5** in mind. Even though I didn't use the full framework, its focus on data-centric components and enterprise workflows gave me a great blueprint for how to design my application.

This exploration taught me that a design system is more than just a collection of pretty components. It's a philosophy, and choosing the right one depends entirely on what you're trying to build. 