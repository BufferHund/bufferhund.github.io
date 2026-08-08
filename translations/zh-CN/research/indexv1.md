---

随着我即将完成海德堡大学 **计算语言学硕士（AI Track）** 学业，我目前正在寻找 **AI 研究或 AI 软件开发方向的全职机会**，尤其希望参与 **Agent、多模态与面向实际应用的 AI 系统**。

我的工作结合了 **研究型实验与系统工程**。我具备 **工具调用 Agent、LLM/VLM 评测、RAG、MCP、多模态 Grounding、LoRA、量化与知识蒸馏** 等方面的实践经验。

我尤其关注：当模型开始能够 **观察、记忆、调用工具并与外部环境交互** 后，AI 系统会表现出怎样的行为，以及如何对这些系统进行系统化评测、提升效率并增强可靠性。

下面是一些能够体现这一方向的近期项目。

---

### **Hybrid Conv+GQA vs. Dense Transformers**

📅 *2026 年 8 月* · [GitHub](https://github.com/BufferHund/ATTProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Hybrid%20Conv%2BGQA%20vs.%20Dense%20Transformer.pdf)  
**关键词：** LLM 系统 · 高效推理 · 长上下文 · LoRA

比较了 **LFM2.5-1.2B 的 Hybrid Conv+GQA 架构** 与 **Qwen3-1.7B Dense Transformer** 在推理效率、长上下文行为与 LoRA 适配方面的差异。
构建了覆盖吞吐量、TTFT、GPU 显存、KV Cache、检索与困惑度的评测流程。
在所测试的消费级 GPU 环境中，Hybrid 模型最高实现了 **11.5× 的吞吐提升**、约 **45% 更低的推理显存占用** 和 **9.3× 更小的 KV Cache**，而 Dense Attention 在精确长距离检索与微调后质量上仍表现更强。

---

### **Action-Conditioned World Models**

📅 *2026 年 8 月* · [GitHub](https://github.com/mrtanke/dino-wm-representation-study/tree/main) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/GNN_Final_Project.pdf)  
**关键词：** World Models · 表征学习 · DINOv2 · Model Predictive Control

在 PointMaze 环境中扩展了 **DINO-WM**，研究视觉表征选择与转移不确定性如何影响潜在状态预测与规划。
比较了 **DINOv2、V-JEPA 2 和 VFM-VAE**，并进行了受控的 **Patch/CLS × Deterministic/Gaussian** 架构消融实验。
结果显示，Deterministic Patch 仍是最稳定可靠的基线，而 CLS 表征比预期更具竞争力；Gaussian Dynamics 则没有稳定带来更好的规划表现。

---

### **Smart Deal Finder — 多模态购物 Agent**

📅 *2026* · [GitHub](https://github.com/BufferHund/smart-deal-finder)  
**关键词：** 多模态 AI · Document AI · VLM · LLM Agents · Tool Use

构建了一套 **多模态 Document AI 流程**，用于从零售类文档中提取结构化的商品、价格、折扣及相关信息。
将提取结果进一步接入 **工具调用型购物 Agent**，把用户需求转换为可执行的购物计划。
该项目将 **多模态理解、结构化信息抽取、LLM 推理与外部工具调用** 串联为端到端 AI 工作流。

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)  
**关键词：** LLM 压缩 · 量化 · 知识蒸馏 · LoRA

复现并扩展了一个面向 *Qwen2.5–0.5B-Instruct* 的 **Teacher–Student 知识蒸馏流程**。
结合 **LoRA 微调** 与 **8-bit 量化**，将模型规模从 3B 压缩到 0.5B 参数。
最终在 **6× 更低计算开销** 下达到 Teacher 模型约 *75% 的准确率*，展示了中小型 LLM 的高效压缩与适配能力。

---

### **K-Adapter Reproduction & Ablation Study**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**关键词：** Adapter Tuning · 知识注入 · PEFT

复现了 **K-Adapter（ACL 2021）**，用于在冻结的预训练语言模型中进行知识注入。
针对 Adapter 层深度、插入位置与任务重叠进行了受控消融实验。
结果表明，中间层 Adapter 在事实记忆能力与模型稳定性之间取得了更好的平衡。

---

### **Hierarchical Character-Level Language Model**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)  
**关键词：** 分层语言模型 · Cache 机制 · 表征学习

使用 PyTorch 复现了 **HCLM+Cache（Kawakami et al., 2017）**，研究开放词表场景中的词语复用机制。
通过 **向量化计算** 与 **连续 Cache 管理**，将吞吐量提升 3.8×，并将验证集 BPC 降低 11.8%。
实验表明，Cache 组件对长距离语言一致性的贡献最为显著。

---

### **LoRA-Driven Anime Style Generation**

📅 *2025 年 7 月 – 9 月* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)  
**关键词：** LoRA · 扩散模型 · 多模态适配

基于 *Stable Diffusion v1.5* 比较了 **LoRA、Textual Inversion 与 DreamBooth** 在动漫风格生成任务中的表现。
在仅 100 张图像的小规模数据集上，LoRA 实现了约 *47 的 FID 降幅*，同时可训练参数少于 2%。
此外，通过不同 LoRA Checkpoint 的插值探索了 **风格融合（Style Blending）** 的可组合性。

---

### **Plant Recognition with CNNs and Transfer Learning**

📅 *2025 年 7 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**关键词：** 计算机视觉 · CNN · 迁移学习

在植物分类数据集上开发并比较了 **ResNet、EfficientNet 与 Vision Transformer** 基线模型。
实验展示了 **迁移学习** 对数据效率的显著提升，
也是我较早对模型泛化能力与特征复用问题的一次实践探索。

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *2025 年 1 月 – 3 月* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**关键词：** Mechanistic Interpretability · Hidden-State Control

复现了 *Self-Conditioned Pretrained LMs（ICML 2022）*，重点研究生成过程中的 **内部反馈机制**。
分析隐藏状态复用如何相较标准自回归解码提升生成流畅度与稳定性。
实验展示了无需外部条件输入或重新训练即可实现的可控文本生成。

---

### **Data Contamination in Large Models**

📅 *2025 年 2 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**关键词：** LLM 评测 · 数据集完整性 · 时间鲁棒性

研究了开放 LLM 评测数据集中的数据污染问题。
实现了 **基于前缀的检测方法** 与 **跨版本对比流程**，用于量化数据泄漏带来的影响。
实验结果为更严格的 Benchmark 数据清洗与维护提供了经验性支持。

---

### **MLLM: Towards Multimodal Language Models**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**关键词：** 多模态 LLM · Vision–Language Alignment

调研并分析了 BLIP-2、Flamingo、LLaVA 等近期多模态语言模型架构。
重点关注 **冻结语言模型 Backbone** 如何与 **视觉 Q-Former** 及 **对齐目标** 协同工作。
讨论了 Cross-Modal Grounding 与视觉–文本融合在扩展性方面的主要挑战。

---

### **Temporal Reasoning in Clinical NLP**

📅 *2025 年 3 月* · [报告 PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)  
**关键词：** 时间推理 · 临床 NLP · 知识图谱

分析了 **LLM 如何处理临床文本中的时间信息**。
总结了时间顺序推断中的主要挑战，并讨论了 **TIMER-Instruct** 与 **时间知识图谱** 等方法如何改善事件排序与模型可靠性。

---

### ✨ 研究方向

贯穿这些项目，我始终关注一个共同的问题：

**如何构建不仅能力强，而且在与真实环境交互时依然高效、Grounded、可解释并且可靠的 AI 系统？**

我主要从几个方向探索这一问题：
**高效 LLM 架构与模型适配**、**多模态表征学习**、
**World Models** 与 **工具调用型 Agents**。

我尤其关注模型研究与系统行为之间的交界：
架构选择如何影响实际部署，
表征方式如何影响下游决策，
以及模型如何把多模态信息转化为可靠的行动。
