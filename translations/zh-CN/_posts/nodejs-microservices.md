---
title: "从整体架构到微服务"
date: 2025-03-25 15:30:00
updated: 2025-03-30 01:00:00
categories:
  - WebDev
tags: [Node.js, Microservices, Backend, Architecture, StudentDeveloper]
lang: zh-CN
---



---

# 从整体架构到微服务

当我开始构建软件架构类的最终项目（一个小型​​电子商务平台）时，我在一个 Node.js 应用程序中编写了所有内容。
用户身份验证、产品目录、订单处理 — 所有这些都在一个 **Express** 项目中，具有单个 **PostgreSQL** 数据库。

效果非常好。
直到没有。

随着功能的增长，订单逻辑中的一个无害的更改破坏了用户注册。数据库模式看起来像蜘蛛网。即使部署一个小修复也意味着重新部署*一切。*

就在那时，我们的教授介绍了每个后端工程师最终都会遇到的一句话：
**“有界上下文。”**
随之而来的是**微服务**的想法——这种架构承诺自由……并带来复杂性。

---

## 1. 大分裂：解构单体

我们首先提出一个看似简单的问题：*一个问题在哪里结束，另一个问题从哪里开始？*

经过几次白板辩论后，我们在应用程序中确定了三个不同的“有界上下文”（或业务领域）：

1. **用户服务** — 注册、登录、个人资料。
   数据库：仅限“users”表。
2. **产品服务** — 目录管理和库存。
   数据库：“产品”表。
3. **订单服务** — 购物车和结账。
   数据库：`orders` 表。

每个都成为一个独立的 **Node.js** 微服务，在自己的端口上运行，具有自己的数据库。

这个决定——“每个服务一个数据库”——一开始感觉很激进。
但它强制执行了一条强有力的规则：任何服务都不能悄悄地访问另一个服务的数据。每次交互都必须通过明确定义的 API 或消息进行。

> This was my first real exposure to **data ownership** — the idea that architecture isn’t just about code separation, but about autonomy and accountability.

---

## 2. 新中间人：构建 API 网关

一旦我们把一切分开，下一个问题就出现了：
*前端如何与所有这些不同的服务通信？*

答案是 **API 网关。**

网关成为我们的单一入口点——一个流量控制器，它将“/api/users”路由到用户服务，将“/api/products”路由到产品服务，等等。

```js
app.use('/api/users', proxy('http://localhost:3001'));
app.use('/api/products', proxy('http://localhost:3002'));
app.use('/api/orders', proxy('http://localhost:3003'));
```

它不仅简化了路由——它还成为了**策略层。**
我们在这里实现了 JWT 身份验证、速率限制和日志记录，这意味着每个请求都通过一致的安全和监控边界。

这是我第一次了解到“基础设施问题”如何与“业务逻辑”处于不同的层面。
这种分离让系统感觉是“经过设计的”，而不仅仅是“编码的”。

---

## 3. 困难的部分：让服务相互对话

真正的挑战不是拆分应用程序，而是重新连接各个部分。

下订单时，订单服务需要通知用户服务（“更新订单历史记录”），有时还需要通知产品服务（“减少库存”）。

我们的第一个天真的方法？直接 HTTP 调用：

```js
await axios.post('http://users-service:3001/api/updateHistory', {...});
```

它起作用了——直到它不起作用。
如果用户服务出现故障，整个结帐过程就会失败。
事实上，我们的“独立”服务是*紧密耦合的。*

然后我们的教授向我们介绍了**事件驱动架构。**

我们使用 Node 的内置“EventEmitter”（以及后来的 RabbitMQ）实现了一个简单的事件总线。
创建订单后，订单服务会发出一个事件：

```js
eventBus.emit('order.placed', order);
```

其他服务订阅并独立反应：

```js
eventBus.on('order.placed', handleUserUpdate);
eventBus.on('order.placed', handleInventoryChange);
```

感觉很自由。
第一次，服务并不“了解”彼此——它们只是监听对它们重要的事件。

那时我明白了更深层次的教训：

> **Microservices aren’t about splitting code. They’re about decoupling communication.**

---

## 4. 韧性：艰苦学习

我们的微服务之一 - 产品服务 - 依赖于第三方运输 API 进行费率计算。
当API出现故障时，我们的整个结账流程就冻结了。

就在那时我们发现了**断路器模式。**

断路器包装外部 API 调用，监视重复的故障。如果端点持续出现故障，它会“断开电路”并立即短路未来的呼叫。

这是一个简化的示例：

```js
if (failures >= threshold) {
  throw new Error('Circuit open — skipping external API');
}
```

听起来很小，但意义深远。
它教你**为失败而设计，而不是反对失败。**

添加断路器、重试和超时将我们脆弱的实验变成了可能“优雅地失败”的东西。
我们的系统第一次表现得不像脚本集合，而更像分布式应用程序。

---

## 5. 权衡：自由与复杂性

经过几个月的迭代，我们的微服务开始工作——可独立部署、容错且事件驱动。
但胜利是苦乐参半的。

我们获得了：

* Clearer ownership and smaller codebases.
* Independent deployment pipelines.
* A real appreciation for asynchronous design.

但我们已经*支付*了：

* Complex local development setups (Docker Compose became mandatory).
* Multiple databases to maintain.
* New debugging challenges — tracing one request across three logs.

有一次，我意识到我的“hello world”请求现在在返回响应之前经过了五个进程和两个队列。
对于一个小型应用程序来说，这有点过分了，但却是权衡方面的无价教训。

> Architecture isn’t about chasing elegance.
> It’s about finding the **right amount of complexity** for your scale and context.

---

## 6. 我的收获：心态转变

从整体迁移到微服务改变的不仅仅是我的代码——它改变了我对系统的“思考”方式。

在一个整体中，我以函数的方式思考。
在微服务中，我必须考虑*边界、契约和故障模式。*

这并不是说微服务“更好”。
它们只是针对“不同问题”的“不同工具”。*

对于学生来说，这种认识是变革性的：
**可扩展性并不是要处理更多的用户，而是要处理更多的复杂性。**

微服务告诉我，好的架构并不是拥有最多服务或最奇特图表的架构。
这是一个你可以在压力下进行推理、调试并毫无恐惧地发展的工具。

对我来说，这才是真正的毕业。

---

