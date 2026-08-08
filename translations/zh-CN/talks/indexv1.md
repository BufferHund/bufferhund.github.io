---
title: "学术报告与展示"
lang: zh-CN
---
这里收录了我在海德堡大学参加**研讨课与读书会**期间所做的一部分报告与展示。
其中大多数都是较为简短的学术讨论，内容包括近期论文、实验结果以及复现工作，并与同学和老师交流。
我很喜欢把复杂的研究问题拆解成清晰的核心思路，将理论与实现联系起来，也很享受报告之后的讨论与反馈。


### 🧠 **大语言模型、模型架构与可解释性**

**Mixture-of-Recursions：面向 Token 的自适应计算**  
📅 *2026 年 2 月 2 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/ATTPre_MoR.pdf)  
在课程 *Is Attention All You Need? The Search for a New Architecture* 中介绍了 **Mixture-of-Recursions（MoR）** 架构。  
报告重点解释了 MoR 如何将**递归参数共享**与 **Token 级自适应计算**结合起来，使不同 Token 能够使用不同的有效计算深度，而不必全部经过固定深度的 Transformer 层堆叠。  
同时比较了 **Expert-Choice 与 Token-Choice Routing**，讨论了动态深度条件下 **KV Cache** 面临的挑战，并分析了实验中相较标准 Transformer 最高约 **2.06× 的推理吞吐提升**。

**LLMint8：面向高效大语言模型的量化感知微调**  
📅 *2025 年 6 月 11 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
介绍并分析了 **LLMint8** 的大语言模型**量化感知微调（QAT）**方法。  
报告讨论了如何利用**混合精度训练**与 **INT8 量化**，在尽量保持模型推理能力的同时，将 GPU 显存占用降低约 60%。  
此外还比较了 QLoRA、训练后量化与 QAT，并讨论了效率与模型行为稳定性之间的权衡。

**LMKG-GOFA：使用语言模型构建知识图谱**  
📅 *2025 年 7 月 7 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
讨论了用于**基于大语言模型进行本体与知识图谱构建**的 **LMKG-GOFA** 框架。  
报告解释了大型语言模型如何通过指令提示与结构化模板抽取实体和关系。  
同时分析了实验结果，展示了**语言模型动态扩展知识图谱**的能力，以及这种方法如何连接符号推理与文本生成。

**字符级语言建模：文本理解中的层级结构**  
📅 *2025 年 5 月 21 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
对**层级字符级语言建模**方法进行了批判性介绍与分析。  
报告讨论了多层循环神经网络如何直接从原始字符序列中学习**结构与形态信息**。  
同时将这些早期架构与当前的**子词分词方法和可解释性研究**进行了联系。

**Self-Conditioning：让模型“听从自己”**  
📅 *2024 年 12 月 20 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
介绍了论文 *Self-Conditioned Pretrained Language Models (ICML 2022)*，重点关注**机制可解释性**与**概念级控制**。  
报告解释了如何重新激活特定的“Expert Neurons”，在**无需额外微调**的情况下引导文本生成，从而实现快速、低开销的条件控制。  
此外还将该方法与 **FUDGE** 和 **PPLM** 进行了比较，重点讨论其在速度、困惑度和语义精度方面的优势。

---

### 🩺 **多模态、文档与临床语言理解**

**DeepSeek-OCR：上下文的光学压缩**  
📅 *2026 年 1 月 16 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Document_AI_DeepSeek_OCR.pdf)  
在 *Document AI* 课程中介绍了 **DeepSeek-OCR**，重点讨论了利用**视觉模态作为文本上下文压缩表示**这一核心思路。  
报告解释了 **DeepEncoder** 架构，包括局部视觉处理、**16× Token 压缩器**以及全局视觉编码，之后再由 Mixture-of-Experts 语言模型完成解码。  
同时讨论了**视觉—文本压缩、多语言文档解析与结构化 OCR**等实验，并分析了紧凑视觉表示如何在保留文档理解所需关键信息的同时减少上下文长度。

**时序电子病历的多模态融合研究**  
📅 *2024 年 11 月 10 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
介绍了一篇提出 **T-MAG（Time-series Multimodal Adaptation Gate）** 的论文，该模型用于融合异构电子病历数据。  
报告解释了 **LSTM** 与 **Transformer-XL** 编码器如何融合结构化与文本形式的时序数据，同时利用 **MAG** 动态平衡不同模态，并通过 **Attention-Backtracking** 捕捉长期依赖。  
实验中，以临床文本作为主要模态时取得了最佳预测性能，在卒中数据集上的 AUROC 约为 0.95。  
最后讨论了该方法对**临床结局预测**以及医疗 AI 中**时序表征学习**的意义。

**Clinical Language Understanding — Part I & II**  
📅 *2025 年 2 月 3 日* · [Part I（PDF）](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Part II（PDF）](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
分析了 **2024 Chemotherapy Treatment Timeline Extraction** Shared Task 中的多个系统。  
报告介绍了 LAILab 使用 **Flan-T5 + LoRA** 进行指令微调式时序关系抽取的方法，以及 KCLab 基于 **PubMedBERT** 并融合 **UMLS** 知识的流水线方案。  
比较了端到端方法与流水线方法在电子健康记录处理中的差异，并讨论了**Precision、Recall 与可解释性**之间的权衡。  
最后总结了针对**低频关系类型、半监督数据增强**以及 **LLM 在临床文本中的泛化能力限制**的一些观察。

---

### ⚖️ **AI 伦理、偏见与安全**

**大模型中的数据投毒：风险与防御**  
📅 *2024 年 11 月 25 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
介绍并分析了 *Carlini et al., 2023* 关于**大规模数据投毒实际可行性**的研究。  
报告解释了 *Split-View* 与 *Frontrunning* 攻击如何利用 **LAION-400M**、**Wikipedia** 等分布式或集中式数据集中的失效或可预测 URL。  
研究表明，仅需污染约 **0.01% 的数据（成本约 60 美元）**，就有可能向下游模型中注入定向漏洞。  
最后讨论了**加密完整性校验、随机快照以及基于共识的数据集验证**等防御方法，以提升开放网络规模数据集的安全性。

**AI 会根据方言做出隐性的种族偏见判断**  
📅 *2024 年 11 月 12 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
分析了一项关于 **LLM 与语音转文本系统中方言偏见**的社会语言学研究。  
报告讨论了模型在处理 **African-American Vernacular English（AAVE）** 以及其他非标准方言时，如何编码隐性的社会刻板印象。  
研究发现，当内容本身完全相同、仅方言表达不同的情况下，分类器可能产生**更负面的判断与更高的 Toxicity 分数**。  
最后讨论了通过**Prompt Calibration、更加平衡的表征训练以及 Contrastive Fine-Tuning**减少潜在社会文化偏见的可能方法。
