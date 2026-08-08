---
title: "我的应用程序可以运行，但速度很慢"
date: 2024-12-30 11:20:00
updated: 2025-01-05 18:48:00
categories:
  - WebDev
tags: [Performance, Optimization, Web Development, StudentDeveloper]
lang: zh-CN
---


# 我的应用程序可以运行，但速度很慢

当我第一次部署我的投资组合项目时，它在我的机器上看起来很好。布局有效，过渡感觉流畅，我对代码感到自豪。
然后第一条评论就来了：

> “It’s nice, but the page takes forever to load.”

这句话改变了我对发展的看法。该应用程序功能齐全，但性能不佳。它“有效”，但“感觉”不对。
这篇文章反思了我对现代 Web 性能的了解、我如何纠正错误以及产生影响的技术模式。

---

## 1. 重新思考“快”：现代速度意味着什么

到 2025 年，性能不仅仅是减小文件大小。
这是关于**减少 JavaScript**、高效渲染以及在靠近用户的地方执行代码。

**Next.js 15**、**Astro** 和 **Qwik** 等框架更进一步——它们将性能视为架构，而不是优化。

我原来的设置？使用 Create React 应用程序构建的传统 React SPA。
所有内容都捆绑在一起，在客户端上呈现，并从单个服务器交付。

一个简单的“npm run build”生成了一个 1.6MB JavaScript 包 - 浏览器必须在页面变为交互式之前处理所有这些包。

---

## 2.最大内容绘画（LCP）：当“漂亮”变得“沉重”

第一个问题很明显：英雄部分。

```html
<img src="/images/hero.png" alt="Hero" />
```

用户首先看到的是 3MB PNG 图像，或者更确切地说，“等待”看到。
修复 LCP 意味着要解决几个层面的问题：

### 一个。转换为现代格式

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif" />
  <source srcset="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" width="1200" height="600" />
</picture>
```

**AVIF** 在大多数现代浏览器中的性能优于 WebP，大小减少高达 80%。

### b.预加载重要的事情

```html
<link rel="preload" as="image" href="/images/hero.avif" />
```

这可确保浏览器在布局计算开始之前尽早开始获取关键资源。

### c.从边缘服务

使用 **Vercel 的边缘网络** 或 **Cloudflare Images**，我将静态资产移至更靠近用户的位置 - 将全局延迟减少到 60 毫秒以下。
结果：移动设备上的 LCP 从 3.4 秒下降到 1.1 秒。

---

## 3. 与下一次绘制的交互 (INP)：减少 JavaScript 过载

页面加载后，感觉还是很慢。按钮响应较晚，输入表单会造成虽小但明显的延迟。
问题不在于渲染，而是 **JavaScript 阻塞了主线程**。

### 一个。拆分代码，不要全部交付

我开始使用 **动态导入** 和 **React.lazy()**，而不是一大堆：

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

仅在实际需要时加载图表组件。

### b. React 服务器组件

在 Next.js 15 中，大多数 UI 现在可以在服务器上呈现并流式传输到浏览器 - 大大减少了客户端解析时间。

```jsx
// app/page.tsx (Server Component)
import Profile from './Profile';

export default async function Page() {
  const data = await getUserData();
  return <Profile data={data} />;
}
```

浏览器立即接收 HTML，同时进行水合作用。

### c.输入响应测试

我使用 Chrome DevTools 的 **Performance Insights** 来测量 INP（与 Next Paint 的交互）。
采用服务器组件和延迟加载后，INP 从 350 毫秒下降到 90 毫秒——感知流畅度有了明显的变化。

---

## 4. 累积布局转移（CLS）：稳定胜于惊喜

没有什么比改变布局更能破坏第一印象了。
我网站的图像和字体在加载时不断跳跃。

### 一个。尽早预留空间

```html
<img src="/team.jpg" width="800" height="400" alt="Team photo" />
```

浏览器现在可以在下载图像之前分配空间。

### b.字体渲染控制

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter.woff2') format('woff2');
  font-display: optional;
}
```

即使字体需要更长的加载时间，使用“font-display：可选”也能确保布局稳定性。

### c. CSS 纵横比

```css
.card-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

异步加载动态图像时不再有跳跃内容。

---

## 5. 超越指标：作为一个系统的性能

一旦解决了明显的瓶颈，我就开始着眼于更大的前景。
性能并不是优化的拼凑而成，而是一种系统级思维方式。

### 一个。边缘优先架构

通过在 **Vercel Edge Functions** 上部署，我将全球服务器响应时间缩短至 100 毫秒以下。
重定向、数据转换或身份验证检查等功能现在可以在用户所在的位置运行。

```js
// middleware.ts
export const config = { matcher: ['/api/:path*'] };

export default async function middleware(req) {
  const token = req.headers.get('Authorization');
  if (!token) return new Response('Unauthorized', { status: 401 });
  return NextResponse.next();
}
```

### b.预测预取

[Quicklink](https://github.com/GoogleChromeLabs/quicklink) 等工具可以自动预取链接：

```js
import quicklink from 'quicklink';
quicklink();
```

在用户点击之前预取视口中可见的链接，从而提供近乎即时的导航。

### c.增量静态再生 (ISR)

现在，页面可以在后台重建，同时提供缓存版本 - 平衡速度和新鲜度。

```js
export const revalidate = 60; // Rebuild every 60 seconds
```

---

## 6. 真正的教训

优化性能改变了我对开发的看法。
这并不是为了压缩 Lighthouse 分数的毫秒数。从第一天开始，它就是关于**响应能力的设计**。

一个快速的网站给人一种专业、值得信赖和有意的感觉。
在边缘运行时、人工智能辅助工具和用户注意力只有两秒的时代，性能不再是一个功能，而是基础。

我的应用程序仍然做同样的事情。
但现在它可以**与**浏览器一起工作，而不是**反对**浏览器。
就在那时我意识到：速度就是同理心，用代码表达。

---

