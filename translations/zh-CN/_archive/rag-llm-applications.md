---
title: "构建我的第一个 RAG 系统：在现实中扎根 LLMs"
date: 2025-01-18 09:30:00
updated: 2025-01-20 08:49:00
categories:
  - ML/NLP
tags: [RAG, LLM, Information Retrieval]
lang: zh-CN
---




# 构建我的第一个 RAG 系统：在现实中扎根 LLMs

当你第一次遇到大型语言模型时，有一个短语很突出：**“知识截止”。**
问他们上周发生的事情，他们会礼貌地承认不知道。

对于上学期的一个研究项目，我们的目标是建立一个关于自然语言处理“最近”发展的问答系统——这正是这种限制最严重的问题。

就在那时，我们的教授向我们介绍了**检索增强生成 (RAG)**——一个看似简单但具有变革性的想法。
这就像给模型不仅仅是一个大脑，还有一张借书卡。

---

## 1. LLMs 的“开卷考试”

RAG 重新定义了 LLM 的角色。它不再是一个静态的预言机，而是一个“解释器”——能够推理新信息，而不仅仅是记住模式。

该过程分为两个关键步骤：

1. **检索：**
   当用户提出问题时，系统不会直接进入模型。
   相反，它使用“检索器”来搜索知识库（论文、维基页面、内部文档）并选择最相关的片段。
2. **生成：**
   检索到的上下文和查询一起输入到模型中。
   提示变成这样：

   > “Given the following information, answer the question below.”

这是模型的开卷考试——“教科书”实时更新。

这个小小的架构转变改变了一切：它将LLMs从**静态知识系统**转变为**动态推理代理**。

---

## 2. 亲自动手：我实际构建了什么

我们的数据集是最近 NLP 论文的语料库——数千个 PDF 转换为文本。

我首先构建了 **retriever**，它是任何 RAG 管道中的无名英雄。
我们使用 **SentenceTransformers** 嵌入每个段落，并将它们存储在 **FAISS** 索引中以进行快速矢量搜索。

这是检索逻辑的简化草图：

```python
from sentence_transformers import SentenceTransformer
import faiss

model = SentenceTransformer("all-MiniLM-L6-v2")

# Build the index
embeddings = model.encode(documents, normalize_embeddings=True)
index = faiss.IndexFlatIP(embeddings.shape[1])
index.add(embeddings)

# Query
query_vec = model.encode([user_query], normalize_embeddings=True)
_, indices = index.search(query_vec, k=5)
retrieved_docs = [documents[i] for i in indices[0]]
```

这感觉几乎很神奇。
像“多模态检索中有什么新功能？”这样的查询会出现一段讨论类 CLIP 模型的段落，即使“多模态”这个词从未出现在文本中。

语义搜索不再与关键字有关；而是与关键字有关。这是关于*意义*的。

生成器方面很简单：我们使用精心设计的系统提示将查询和检索到的上下文传递到 OpenAI 或本地 LLM 端点：

```
You are an assistant that answers questions using the provided documents.
If the answer cannot be found in the context, say “The information is not available.”
```

最后一条指令——“当你不知道时就承认”——结果是整个系统中最重要的台词之一。

---

## 3. 我学到了什么：检索是真正的瓶颈

我认为 LLM 将是困难的部分。
事实并非如此。 *猎犬*是。

当检索器失败时——返回模糊或不相关的段落——生成器仍然会产生自信、雄辩的废话。
这就是“垃圾进，垃圾出”的原则，令人痛苦地显而易见。

我了解到，评估 RAG 系统并不是测量生成文本的 **BLEU 分数** 或 **F1**。
这是关于测量**检索精度和覆盖范围**——系统呈现“正确证据”的能力。

我还注意到另一个微妙的权衡：

* More documents retrieved ⇒ higher recall, but also higher noise.
* Fewer documents ⇒ cleaner input, but risk of missing key facts.

平衡这种权衡——通常围绕 *k = 3 到 5* 上下文块——成为一种迭代的、数据驱动的艺术。

---

## 4. RAG 的闪光点（以及不闪光的地方）

经过数十次实验，我意识到 RAG 不仅仅是一个技术技巧；它也是一个技巧。这是一个哲学上的修正。
它奠定了语言模型对“证据”的信心。

RAG 在以下情况下闪烁：

* **The source corpus changes frequently.** Think news, research, internal documentation.
* **Transparency matters.** You can trace every generated answer back to a citation.
* **Domain adaptation is costly.** RAG gives you domain expertise without retraining the model.

但RAG并不是灵丹妙药。
如果语料库有噪音、过时或分块不佳，检索就会拖慢一切。
由于它作为两阶段系统运行，因此**延迟**成为实时应用程序中的一个实际问题。

还有一个更深层次的限制：RAG 可以*获取*事实，但它本质上不知道*如何推理*它们。
将多个检索到的片段组合成一个连贯的、逻辑上合理的答案仍然是一个开放的研究挑战——**Graph-RAG**、**多跳检索**和**混合重新排名**等方法正在开始解决这一挑战。

---

## 5. 我的感想：为什么 RAG 感觉不同

处理 RAG 完全改变了我对 LLMs 的看法。
我曾经认为它们是知识引擎——具有固定记忆的静态思维。
现在，我将它们视为依赖于上下文的**推理框架**，就像人类一样。

最好的部分是这个过程给人的“人性化”感觉。
当我不知道什么时，我会用谷歌搜索，浏览最上面的结果，然后综合一个答案。
这正是RAG所做的——但是以机器速度。

有一个时刻让我印象深刻：
在调整检索阈值几天后，我向系统询问了有关我刚刚添加的 2024 年 ACL 论文的问题。
该模型正确引用了它，总结得很简洁，并添加了免责声明：

> “This paper suggests a hybrid dense-sparse retrieval framework, but replication results are limited.”

这不仅仅是正确的。这是*深思熟虑的*。
就在那时我意识到——建立一个模型不仅使它成为事实，而且还使它成为事实。它使它**值得信赖**。

---

## 6. 展望未来

RAG 并不是故事的结局；这是一个更加模块化、可解释的人工智能生态系统的开始。
很快，检索将不仅仅涉及文档 - 它将扩展到 **API**、**数据库**，甚至**传感器数据**，让模型将推理与现实世界的系统集成。

构建我的第一个 RAG 系统教会了我一些深刻的东西：
人工智能的前沿并不在于更大的模型。
它是**更好的基础**——将模型与他们想要理解的动态、混乱、不断变化的世界联系起来。

> Large language models can speak beautifully, but RAG teaches them to *listen first*.


