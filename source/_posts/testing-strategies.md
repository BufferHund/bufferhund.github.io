---
title: "From 'Does It Work?' to 'Will It Break?': My Evolution in Software Testing"
date: 2025-04-30 12:00:00
updated: 2025-05-06 22:07:00
categories:
  - WebDev
tags: [Testing, Quality Assurance, Web Development, StudentDeveloper]
---

# From "Does It Work?" to "Will It Break?": My Evolution in Software Testing

If I'm being honest, for the first couple of years of my computer science degree, "testing" meant running my code, seeing if it worked, and if it didn't, throwing `console.log` statements everywhere until it did. It wasn't until I was put on a team for a major project that I realized how unsustainable that was. A feature I added would break something my teammate wrote, and we'd spend hours trying to figure out why.

This forced me to actually learn about software testing. It started as a chore, but it quickly became one of the most valuable skills I've developed. I learned to think not just about the "happy path," but about all the weird ways things could go wrong.

## The Foundation: Unit Tests

This is where it all starts. Unit tests are small, fast tests that check a single, isolated piece of your code—usually a single function. At first, it felt tedious. Why write a test for a simple `capitalize` function when I can just see that it works?

The "aha!" moment came when I had to refactor a bunch of these utility functions. Without tests, I would have been terrified of breaking something. With a good suite of unit tests, I could make changes with confidence. I'd run the tests, and if they all passed, I knew my refactor didn't break any existing functionality. We used Jest for this, and it was perfect for testing these small, pure functions.

## The Next Level: Integration Tests

Unit tests are great, but they don't tell you if your pieces work together. That's where integration tests come in. For our React application, this meant using a tool like React Testing Library to test whole components.

Instead of just testing a single function, we were now testing a user's interaction with a component. Can a user type in a form? When they click a button, does the right thing happen? We weren't testing the implementation details; we were testing the component from the user's perspective. This is where we caught the most bugs. A unit test might show that our API fetching function worked, but an integration test would show that our component failed to handle the error state from that API call.

## The Top of the Pyramid: End-to-End (E2E) Tests

This was the final piece of the puzzle for me. End-to-end tests automate a real user's journey through your entire application. We used Playwright to write scripts that would literally open a browser, navigate to our site, click buttons, fill out forms, and assert that the right things appeared on the screen.

These tests are slow and can be brittle, but they are incredibly powerful. They are the ultimate confidence booster. If the E2E tests pass, you know that a user can actually sign up, log in, and use the core features of your application. We set these up to run in our CI/CD pipeline (using GitHub Actions) before any deployment. If an E2E test failed, the deployment was automatically blocked. It saved us from deploying broken code more times than I can count.

## Beyond the Pyramid: Other Types of Testing

We also dipped our toes into other types of testing:

-   **Visual Regression Testing:** We used Playwright to take screenshots of our key pages and compare them to previous versions. This caught a lot of embarrassing UI bugs where a CSS change would accidentally mess up the layout on another page.
-   **Accessibility Testing:** We used `axe-core` to automatically check for common accessibility issues, like missing alt text or bad color contrast. It was a humbling experience that showed us how easy it is to build a site that's unusable for some people if you're not careful.

## My Final Takeaway

Learning to test properly was a mindset shift. It's not about proving your code works; it's about trying your best to prove it *doesn't*. It forces you to think about edge cases, error handling, and user behavior. It's more work up front, but it pays for itself tenfold in the long run, especially when you're working on a team. It's the difference between building a house of cards and building something that can withstand a storm. 