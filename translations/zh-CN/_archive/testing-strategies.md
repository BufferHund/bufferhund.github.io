---
title: "来自《有用吗？》到“它会崩溃吗？”：我在软件测试方面的演变"
date: 2025-04-30 12:00:00
updated: 2025-05-06 22:07:00
categories:
  - WebDev
tags: [Testing, Quality Assurance, Web Development, StudentDeveloper]
lang: zh-CN
---




# 来自《有用吗？》到“它会崩溃吗？”：我在软件测试方面的演变

对于我的大多数早期项目，“测试”意味着点击 **Run**，查看输出是否正确，然后添加 `console.log` 语句，直到正确为止。它很粗糙但速度很快。

当我加入团队时，这种情况就不再起作用了。
我写的一个功能可能会破坏别人的功能。修复一个错误会引入另一个错误。我们开始害怕每一次合并。就在那时，我了解到测试不是为了发现错误，而是为了建立信心。

在一个学期的项目中，我从出于挫败感的测试转变为出于设计的测试。
事情是这样发生的。

---

## 1. 基础：单元测试作为安全网

单元测试是我第一次学会少信任编译器而多信任测试套件的地方。

单元测试侧重于一个小的、孤立的功能——单个函数、一个小类或一个钩子。早些时候，我认为他们太过分了。为什么要测试像“capitalize()”这样的简单助手？

```ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
```

但当我重构其中几个实用函数时，我顿时恍然大悟。如果没有测试，每一次改变都是猜测。有了它们，重构就变得无所畏惧——我可以重写逻辑，运行“npm test”，并立即查看是否破坏了任何东西。

我们使用了**Jest**，我发现即时反馈有多么强大。一套好的单元测试并不是要检查一次正确性，而是要永远保留它。

---

## 2. 集成测试：各个部分与现实的结合

单元测试证明部件可以工作。集成测试证明它们“协同工作”。

对于我们的 React 应用程序，这意味着使用 **React 测试库** 来模拟真实的用户行为，而不是测试内部实现细节。

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

关键思想是**测试行为，而不是实现**。
你并不关心错误“如何”出现——只关心它确实出现。

集成测试成为我们置信金字塔的中间层：不像单元测试那样细粒度，不像端到端那样繁重，但非常适合确保 API、组件和用户流程都能正确地相互通信。

---

## 3. 金字塔顶端：端到端（E2E）测试

如果单元测试和集成测试是显微镜，那么端到端测试就是望远镜。
他们将系统视为一个整体——真正的用户旅程。

我们使用 **Playwright** 来自动化整个工作流程：登录、提交表单、导航仪表板。

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

这些测试速度较慢，有时甚至不稳定，但它们**无价**。
我们使用 GitHub 操作将它们集成到我们的**CI/CD 管道**中，阻止任何测试失败的部署。
它多次使我们免于发送损坏的代码。

E2E 测试通过意味着一件事：真正的用户可以实际使用该应用程序。这是真理的最终衡量标准。

---

## 4. 金字塔之外：扩展“测试”的定义

一旦掌握了基础知识，我们就意识到测试不仅仅关乎逻辑，还关乎*体验*。

### 视觉回归测试

我们使用 Playwright 的屏幕截图比较来检测意外的 UI 更改。
一个微小的 CSS 调整曾经改变了整个布局 - 视觉测试在其他人之前发现了它。

```ts
await expect(page).toHaveScreenshot('homepage.png');
```

### 辅助功能测试

借助 **axe-core**，我们自动进行可访问性检查，以捕获丢失的替代文本、低对比度和其他问题。
它揭示了一个令人羞愧的事实：很容易构建一些“功能性”但对许多用户来说仍然“无法使用”的东西。

```ts
import { AxePuppeteer } from '@axe-core/playwright';
const results = await new AxePuppeteer(page).analyze();
expect(results.violations).toHaveLength(0);
```

质量不仅仅是稳定性。这是包容性。

---

## 5.心态转变：从验证到探索

在某些时候，我不再问“这有效吗？”并开始问“这怎么会坏呢？”

这个问题改变了一切。
测试不再是一件苦差事，而是成为一门设计学科。您开始预期失败——竞争条件、错误的输入、不稳定的 API——*在*它们发生之前。

好的测试并不是要证明你的代码是正确的。
它们是为了给你改变它的勇气。

> “If you’re afraid to refactor, you don’t have enough tests.”
> — Kent C. Dodds

这就是测试给我的：信心，而不是偏执。

---

## 我拿走了什么

软件测试并不是关于不信任，而是关于不信任。这是关于耐用性的。
它将开发人员的思维方式从“解决”问题转变为“预防”问题。

一开始会比较慢——但只有一次。
因为你编写的每一个测试都会为你带来自由：重构、实验、改进的自由。

那一刻我意识到——测试并不是质量成本。
它*是*质量。

---

