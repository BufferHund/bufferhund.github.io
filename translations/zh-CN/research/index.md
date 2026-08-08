---
title: "LLM 研究"
lang: zh-CN
---

我即将完成海德堡大学 **计算语言学硕士（AI Track）** 学业，目前正在寻找 **AI 研究或 AI 软件开发方向的全职工作**，希望继续从事 **LLM/VLM Agent、多模态 AI、Agent 评测与安全，以及 AI 应用开发**相关工作。

我的兴趣主要集中在一个问题上：当模型不再只是生成文本，而是开始具备 **视觉理解、记忆、工具调用和环境交互能力**之后，我们该如何理解、评测并提高整个 AI 系统的可靠性？

除了模型与 Agent 评测，我也比较关注 **LLM 工程与实际落地**，包括 RAG、MCP、上下文与记忆管理，以及 LoRA、量化、知识蒸馏等模型适配方法。我喜欢把研究问题落实成可以运行的实验和系统，再从实际结果中分析模型为什么有效、又会在哪里失效。

下面是近期的一些研究和项目。

---

### **Hybrid Conv+GQA vs. Dense Transformers**

📅 *2026 年 8 月* · [GitHub](https://github.com/BufferHund/ATTProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Hybrid%20Conv%2BGQA%20vs.%20Dense%20Transformer.pdf)  
**关键词：** LLM 架构 · 推理效率 · 长上下文 · LoRA

对比 **LFM2.5-1.2B 的 Hybrid Conv+GQA 架构**和 **Qwen3-1.7B Dense Transformer** 在推理效率、长上下文能力和 LoRA 微调方面的表现，并测试吞吐量、TTFT、显存占用、KV Cache、检索能力和困惑度等指标。

在测试环境中，Hybrid 模型最高达到 **11.5× 的吞吐优势**，推理显存降低约 **45%**，KV Cache 仅为 Dense Transformer 的约 **1/9**；但在复杂长距离检索和微调后的模型能力上，Dense Transformer 仍然更稳定。

---

### **Action-Conditioned World Models**

📅 *2026 年 8 月* · [GitHub](https://github.com/mrtanke/dino-wm-representation-study/tree/main) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/GNN_Final_Project.pdf)  
**关键词：** World Model · 表征学习 · DINOv2 · 模型预测控制

基于 **DINO-WM** 在 PointMaze 上研究不同视觉表征和随机动力学设计对世界模型预测与规划能力的影响。

实验一比较了 **DINOv2、V-JEPA 2 和 VFM-VAE**；实验二进一步设计了 **Patch / CLS × Deterministic / Gaussian** 的 2×2 消融实验。结果显示，Deterministic Patch 仍然是最稳定的方案，但 CLS 的表现比最初预期更接近 Patch；Gaussian Dynamics 虽然改善了训练目标，却没有稳定提升实际规划效果。

---

### **Smart Deal Finder — 多模态购物 Agent**

📅 *2026* · [GitHub](https://github.com/BufferHund/smart-deal-finder)  
**关键词：** 多模态 AI · Document AI · VLM · AI Agent · 工具调用

开发了一个面向零售宣传册和购物文档的 **多模态信息理解系统**，利用 VLM 提取商品、价格、折扣等信息，并整理成可供 Agent 使用的结构化数据。

在此基础上构建购物 Agent，根据用户需求和识别出的优惠信息制定购物计划，并调用外部工具辅助完成后续规划。这个项目主要探索如何把 **多模态理解、LLM 推理和工具调用**真正串成一个可以运行的 AI 应用。

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)  
**关键词：** LLM 压缩 · 量化 · 知识蒸馏 · LoRA

复现并扩展了一套面向 *Qwen2.5-0.5B-Instruct* 的 **Teacher–Student 知识蒸馏流程**。
结合 **LoRA 微调**和 **8-bit 量化**，将模型规模从 3B 压缩到 0.5B。
最终在约 **1/6 的计算开销**下保留 Teacher 模型约 *75% 的准确率*，验证了小模型在有限资源下进行高效适配的可行性。

---

### **K-Adapter Reproduction & Ablation Study**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**关键词：** Adapter Tuning · 知识注入 · PEFT

复现 **K-Adapter（ACL 2021）**，研究如何在冻结预训练语言模型主体参数的情况下，通过 Adapter 注入额外知识。
围绕 Adapter 的层数、插入位置和任务重叠设计了多组消融实验。
实验中，中间层 Adapter 在事实记忆和模型稳定性之间取得了更好的平衡。

---

### **Hierarchical Character-Level Language Model**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)  
**关键词：** 分层语言模型 · Cache 机制 · 表征学习

使用 PyTorch 复现 **HCLM+Cache（Kawakami et al., 2017）**，研究字符级语言模型如何利用词语复用信息改善开放词表建模。
通过 **向量化计算**和 **连续 Cache 管理**，将吞吐量提升 3.8×，验证集 BPC 降低 11.8%。
实验也表明，Cache 是改善长距离语言一致性的关键组成部分。

---

### **LoRA-Driven Anime Style Generation**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)  
**关键词：** LoRA · 扩散模型 · 风格适配

基于 *Stable Diffusion v1.5* 比较 **LoRA、Textual Inversion 和 DreamBooth** 在动漫风格微调中的效果与训练成本。
在仅 100 张图像的数据集上，LoRA 将 FID 降低约 **47**，同时可训练参数不足模型总参数的 2%。
此外还通过插值不同 LoRA Checkpoint，尝试组合和混合不同视觉风格。

---

### **Plant Recognition with CNNs and Transfer Learning**

📅 *2025 年 7 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**关键词：** 计算机视觉 · CNN · 迁移学习

在植物分类任务上实现并比较 **ResNet、EfficientNet 和 Vision Transformer** 等模型。
重点分析迁移学习在小数据场景下的效果，实验显示预训练模型能够明显提高数据利用效率。
这是我较早对模型泛化和特征复用问题的一次实践探索。

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *2025 年 1 月 – 3 月* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**关键词：** 机制可解释性 · Hidden-State Control

复现 *Self-Conditioned Pretrained LMs（ICML 2022）*，重点研究语言模型在生成过程中如何利用自身的隐藏状态作为反馈。
分析 Hidden State 的重复利用对生成流畅度和稳定性的影响，并与标准自回归生成进行比较。
实验展示了无需额外条件模型或重新训练即可对生成过程进行一定程度的控制。

---

### **Data Contamination in Large Models**

📅 *2025 年 2 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**关键词：** LLM 评测 · 数据污染 · Benchmark

研究开放 LLM Benchmark 中的数据污染问题。
实现了 **基于前缀的检测方法**和 **跨版本对比流程**，用于分析测试数据泄漏可能对模型评测结果造成的影响。
项目也进一步讨论了为什么 Benchmark 的数据清理、版本管理和时间信息会直接影响评测可信度。

---

### **MLLM: Towards Multimodal Language Models**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**关键词：** 多模态大模型 · Vision–Language Alignment

调研并分析 **BLIP-2、Flamingo、LLaVA** 等多模态大模型的主要架构。
重点关注冻结语言模型与视觉编码器之间如何建立连接，以及 Q-Former、Projection 和不同 Alignment Objective 在视觉—语言对齐中的作用。
同时讨论了多模态 Grounding 和模型扩展中的一些主要问题。

---

### **Temporal Reasoning in Clinical NLP**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)  
**关键词：** 时间推理 · 临床 NLP · 知识图谱

关注 LLM 在临床文本中理解 **事件顺序、时间关系和病程变化**的能力。
梳理了时间推理中的主要困难，并分析 **TIMER-Instruct、时间知识图谱**等方法如何帮助模型更准确地组织事件顺序和时间关系。

---

### ✨ 我关注的问题

这些项目看起来涉及 Agent、World Model、模型压缩、多模态和推理优化等不同方向，但我比较持续关注的是同一个问题：

**一个模型在 Benchmark 上表现很好，并不意味着它已经是一个可靠的 AI 系统。**

当模型开始拥有视觉输入、上下文和记忆，能够调用工具、执行操作，甚至改变外部环境之后，很多单纯的模型指标就不再足够。

我希望继续研究和开发这类 **真正能够与环境交互的 AI 系统**：既关注模型本身的能力，也关注它们的效率、失败模式、鲁棒性，以及最终在真实应用中的可用性。
