---
title: "我的TypeScript“啊哈！”精彩瞬间：我在实际项目中学到的最佳实践"
date: 2025-01-15 13:30:00
updated: 2025-01-17 22:39:00
categories:
  - WebDev
tags: [TypeScript, JavaScript, Best Practices, StudentDeveloper]
lang: zh-CN
---




# 我的TypeScript“啊哈！”精彩瞬间：我在实际项目中学到的最佳实践

当我开始在 TypeScript 中构建一个为期一个学期的项目时，我认为类型系统会自动使我们的代码没有错误。
事实并非如此。

然而，它所做的就是迫使我仔细地、结构化地、有时甚至是痛苦地思考我的代码是如何工作的。到项目结束时，我不仅仅写了TypeScript；还写了TypeScript。我正在编写**更好的软件**。

以下是重塑我编码方式的五个教训。

---

## 1.你的“tsconfig.json”才是真正的看门人

像大多数初学者一样，我一开始忽略了`tsconfig.json`。感觉就像背景噪音。但事实证明它是该项目中最强大的文件之一。

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

打开 `strict: true` 改变了一切。
它迫使我面对空值、未定义的返回和类型不匹配 - JavaScript 通常会在生产中出现这些问题。

起初，感觉编译器在唠叨我。后来我发现这是在教我。
正确配置的“tsconfig”不是官僚主义——它是**第一层测试**。

---

## 2.“任何”都是谎言，“未知”是老师

“any”感觉像是一条捷径。它不是——它是一个眼罩。

每当我放弃并输入“any”时，它就会默默地断开TypeScript的安全网。
错误不再出现在它们“应该”出现的地方，只会在其他地方爆发。

用“未知”替换“任何”让我放慢了速度——这是一件好事。

```ts
function handle(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
}
```

对于“未知”，编译器会说：*“我不知道这是什么——请向我证明一下。”*
这迫使我添加防护措施，有意缩小类型。
这是一种思维方式的转变：你不再与类型系统作斗争，而是开始与之合作。

---

## 3.“界面”代表形状，“类型”代表思想

在我们的代码库出现了数周的不一致之后，这一问题得到了解决。
有些队友使用“interface”，其他人则更喜欢“type”，很快我们就陷入了混乱。

这是带来理智的惯例：

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

`interface` 用于标识； `type` 用于抽象。
一旦我这样看，我就不再过度思考其中的差异。

---

## 4. 实用程序类型是隐藏的超能力

我曾经编写无休止的重复类型 - 直到我发现 TypeScript 的内置实用程序类型。

```ts
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
```

现在：

```ts
type PublicUser = Omit<User, 'password'>;
type UserPreview = Pick<User, 'id' | 'name'>;
type EditableUser = Partial<User>;
```

需要更有活力的东西吗？您甚至可以使用“keyof”、“infer”或条件类型创建自己的类型：

```ts
type ApiData<T> = T extends { data: infer U } ? U : never;
type Keys<T> = keyof T;
```

并且不要忽视“ReturnType”、“Parameters”和“Readonly<T>”。
这些工具使 TypeScript *元编程* — 为您编写类型的类型系统。

---

## 5. 受歧视的工会让国家变得可预测

在学习这一点之前，我有 React 组件来跟踪多个布尔值：
`isLoading`、`isError`、`isSuccess`。有时，这三者同时成立。

受歧视的工会简化了一切：

```ts
type ComponentState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

然后在 React 中：

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

TypeScript 的控制流分析确保，如果您处理“成功”，您*也必须*处理“错误”和“加载”。
您不仅消除了运行时错误，还消除了*所有类别的不可能状态*。

---

## 奖励：“满足”和安全推理的未来

我最喜欢的新 TypeScript 功能之一是“satisfies”运算符。
它可以让您保持强大的inference *并*同时执行合同。

```ts
const routes = {
  home: '/',
  about: '/about',
  contact: '/contact'
} satisfies Record<string, string>;

type RouteKey = keyof typeof routes; // "home" | "about" | "contact"
```

与“as Record<string, string>”不同，这不会删除原始文字类型 - 它可以保持它们的安全和精确。
这是让 TypeScript 再次感觉“优雅”的小补充之一。

---

## 我实际学到了什么

TypeScript 没有“发现我的错误”。
它*告诉我为什么这些错误存在*。

它将运行时恐慌转变为编译时指导，这让我放慢了速度——以一种很好的方式。
每一条红色下划线都成为一次设计审查，每一种类型都迫使我澄清我的思维模型。

TypeScript 与更严格的代码无关。
这是关于**更清晰的思考**。

这种技能远远超出了编译器的范围。


