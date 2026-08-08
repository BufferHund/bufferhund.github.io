---
title: "LLM 研究"
date: 2025-10-11 16:58:05
lang: zh-CN
---


我目前正在寻找与 **大型语言模型 (LLMs)** 相关的 **HiWi/研究助理机会**，
特别是在**高效fine-tuning**、**多模态融合**和**代理推理系统**。

从技术上讲，我有实践经验
**代理fine-tuning**、**MCP（模型上下文协议）**和**参数高效的适应**方法，例如LoRA、适配器和量化蒸馏。
我的工作经常将*系统级工程*与*研究驱动的实验*结合起来——
我喜欢构建能够帮助我们理解模型如何思考的东西。

我特别感兴趣的是：

* **Multimodal understanding** — bridging language, vision, and structured data to ground reasoning.
* **Efficient fine-tuning** — making large models smaller, faster, and adaptive without losing reasoning depth.
* **Interpretability** — uncovering how internal activations, neurons, or adapters encode concepts.

以下是最近的几个项目，反映了我的方法：将**实用工程**与**研究好奇心**相结合。

---

### **Qwen 模型的资源高效蒸馏**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [报告PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)
**关键字：** LLM 压缩·量化·知识蒸馏·LoRA

为 *Qwen2.5–0.5B-Instruct* 复制并扩展了**师生蒸馏管道**。
将 **LoRA fine-tuning** 与 **8 位量化** 相结合，将模型参数从 3B 压缩到 0.5B。
在计算量降低 6 倍的情况下实现*75% 的教师准确度* — 展示了中型 LLMs 的可扩展效率。

![Distillation Pipeline Illustration](https://pics.iamzhaokun.com/2025/10/d2eb6cc4c4bc2f2ec960f1fea69ec4cf.png)
---

### **K-Adapter 复制和消融研究**

📅 *7 月 – 2025 年 9 月* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)
**关键词：** 适配器调优·知识注入·PEFT

重新实现了**K-Adapter (ACL 2021)**，用于通过冻结的 PLM 进行知识注入。
对适配器层深度、放置和任务重叠进行受控消融。
发现中间层适配器提供了事实召回和模型稳定性之间的最佳权衡。


![K-Adapter Reproduction & Ablation Study](https://pics.iamzhaokun.com/2025/10/19525cba61f491581f5153d720497d80.png)
---

### **分层字符级语言模型**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [报告PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)
**关键词：** 分层LM·缓存机制·表示学习

在 PyTorch 中重新实现 **HCLM+Cache（Kawakami 等人，2017）**，以研究开放词汇设置中的单词重用。
引入**矢量化计算**和**连续缓存管理**，吞吐量提高3.8倍，验证BPC降低11.8%。
表明缓存组件对远程语言一致性贡献最大。

---

### **LoRA-驱动的动漫风格生成**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [报告PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)
**关键字：** LoRA · 扩散模型 · 多模态适应

使用 *Stable Diffusion v1.5* 对 **LoRA** 与 **Textual Inversion** 和 **DreamBooth** 进行基准测试，以生成动漫风格。
显示 LoRA 在使用 <2% 的可训练参数的情况下，在小型（100 个图像）数据集下实现了 *~47 FID 减少*。
通过插入 LoRA 检查点探索 **风格混合**，展示组合灵活性。

---
### **使用 CNN 和迁移学习进行植物识别**

📅 *2025 年 7 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**关键词：** 计算机视觉 · CNN · 迁移学习

在植物分类数据集上开发并比较 **ResNet**、**EfficientNet** 和 **Vision Transformer** 基线。
展示了**迁移学习**如何显着提高数据效率 —  
作为模型泛化和特征重用的早期探索。

---

### **自条件生成（重新实现）**

📅 *2025 年 1 月 – 3 月* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**关键词：** 机械可解释性·隐藏状态控制

复制*自条件预训练 LM (ICML 2022)*，重点关注生成中的**内部反馈循环**。
分析了隐藏状态重用如何比标准自回归解码提高流畅性和稳定性。
展示了无需外部条件或再训练即可控制的文本转向。






---

### **大型模型中的数据污染**

📅 *2025 年 2 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**关键字：** LLM 评估·数据集完整性·时间鲁棒性

调查了开放LLM评估数据集中的污染。
实施了**基于前缀的检测**和**跨版本比较**管道来量化泄漏影响。
为 benchmark 设计中更严格的数据集管理提供了实证支持。

---

### **MLLM：迈向多模式语言模型**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**关键词：** 多模态 LLMs · 视觉-语言一致性

调查并分析了最新的多模式 LLM 架构（例如 BLIP-2、Flamingo、LLaVA）。
重点关注**冻结语言主干**如何与**视觉 Q-formers** 和 **对齐目标** 交互。
讨论了跨模式基础和视觉文本融合的可扩展性方面的开放挑战。

---


### **临床 NLP 中的时间推理**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)
**关键词：** 时序推理 · 临床 NLP · 知识图谱

回顾了**LLMs如何处理临床叙述中的时间信息**。
总结了按时间顺序 inference 的关键挑战，并讨论了用于改进事件排序和模型可靠性的 **TIMER-Instruct** 和 **时间知识图** 等方法。

---


### ✨ 研究重点

在我所有的工作中，我都被一个伟大的想法所吸引：
如何使大型模型**更具适应性、可解释性和基础性**。

无论是通过**代理fine-tuning**、**多模态融合**，还是**参数高效学习**，
我喜欢在**研究和真实系统**的交叉点工作 -
将理论问题转化为可重复的工作原型。

如果您的实验室或团队正在探索类似的主题，我很乐意作为 **研究助理** 或 **HiWi** 做出贡献
并帮助将“工程实用性”与“科学洞察力”联系起来。






