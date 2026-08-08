---
title: "学术报告与展示"
lang: zh-CN
---
这里整理了我在海德堡大学参加**研讨课、课程报告和读书会**期间做过的一些分享。

这些报告大多围绕近期论文、模型架构、实验结果或复现工作展开。相比单纯介绍论文内容，我更关注一个方法为什么有效、实现时会遇到什么问题，以及它和现有系统之间有什么联系。

---

### 🧠 **大语言模型、模型架构与可解释性**

**Mixture-of-Recursions：让不同 Token 使用不同计算深度**  
📅 *2026 年 2 月 2 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/ATTPre_MoR.pdf)  
在 *Is Attention All You Need? The Search for a New Architecture* 课程中分享了 **Mixture-of-Recursions（MoR）**。  
MoR 不再让所有 Token 机械地经过同样数量的 Transformer 层，而是通过**参数共享和动态路由**，为不同 Token 分配不同的计算深度。  
报告中还比较了 **Expert-Choice** 与 **Token-Choice Routing**，讨论了动态深度对 **KV Cache** 带来的实现问题，以及这种设计在推理吞吐上的收益。

**LLMint8：面向高效大模型的量化感知微调**  
📅 *2025 年 6 月 11 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
分享并分析了 **LLMint8** 的量化感知微调（QAT）方法。  
重点讨论了如何结合**混合精度训练和 INT8 量化**，降低大模型训练与部署时的显存开销，同时尽可能保留原有能力。  
另外也对比了 QLoRA、训练后量化和 QAT，讨论不同方案在显存、训练成本和模型质量之间的取舍。

**LMKG-GOFA：用语言模型构建知识图谱**  
📅 *2025 年 7 月 7 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
介绍了 **LMKG-GOFA** 这类利用大语言模型构建本体和知识图谱的方法。  
报告重点梳理了模型如何通过指令和结构化模板完成实体、关系抽取，并进一步扩展已有知识图谱。  
这类工作对我比较有意思的一点，是它把 LLM 的开放式文本能力和知识图谱的结构化表示放到了同一个系统里。

**字符级语言建模：从原始字符中学习层级结构**  
📅 *2025 年 5 月 21 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
回顾了层级字符级语言模型的一些经典思路。  
报告主要讨论多层循环网络如何直接从字符序列中学习词形、局部结构和更高层语义信息，以及这种设计与今天常见的 **Subword Tokenization** 有什么不同。  
也借这个话题重新思考了模型内部表示和可解释性之间的关系。

**Self-Conditioning：利用模型内部表征控制生成**  
📅 *2024 年 12 月 20 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
分享了论文 *Self-Conditioned Pretrained Language Models (ICML 2022)*。  
这项工作尝试直接利用预训练模型内部与特定概念相关的神经元，在**不额外微调模型**的情况下影响生成结果。  
报告中也将它与 **FUDGE** 和 **PPLM** 做了比较，重点讨论生成控制的效果、速度和额外计算开销。

---

### 🩺 **多模态、文档理解与临床 NLP**

**DeepSeek-OCR：把长文本压缩进视觉表示**  
📅 *2026 年 1 月 16 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Document_AI_DeepSeek_OCR.pdf)  
在 *Document AI* 课程中分享了 **DeepSeek-OCR**。  
这项工作的核心想法很特别：与其直接把很长的文本全部送入语言模型，不如先把文本转成图像，再用视觉编码器把大量文字压缩成更少的视觉 Token。  
报告重点介绍了 **DeepEncoder**、Token 压缩过程以及后续语言模型解码，并讨论了这种“视觉压缩上下文”的思路在长文档理解、多语言 OCR 和长上下文建模中的潜力。

**时序电子病历的多模态融合**  
📅 *2024 年 11 月 10 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
分享了一项针对时序电子病历的多模态建模工作。  
模型使用 **LSTM** 和 **Transformer-XL** 分别处理不同形式的时序信息，再通过 **T-MAG** 动态融合结构化数据和临床文本。  
报告中重点讨论了不同模态对最终预测结果的贡献，以及长时间跨度下如何保留有效的临床信息。

**Clinical Language Understanding — Part I & II**  
📅 *2025 年 2 月 3 日* · [Part I（PDF）](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Part II（PDF）](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
围绕 **2024 Chemotherapy Treatment Timeline Extraction** Shared Task，分析了几种临床时序信息抽取方案。  
其中包括 LAILab 的 **Flan-T5 + LoRA** 方法，以及 KCLab 基于 **PubMedBERT + UMLS** 的流水线系统。  
报告主要比较了端到端模型和传统 Pipeline 在 Precision、Recall、可解释性和低频关系识别上的差异，也讨论了临床 NLP 中数据稀缺和模型泛化的问题。

---

### ⚖️ **AI 伦理、偏见与安全**

**大模型数据投毒：攻击到底有多现实？**  
📅 *2024 年 11 月 25 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
分享了 *Carlini et al., 2023* 关于大规模训练数据投毒的研究。  
这项工作的重点并不是设计一个新的复杂攻击算法，而是回答一个更现实的问题：如果训练数据来自开放互联网，攻击者到底有多容易真正影响这些数据？  
报告介绍了 **Split-View** 和 **Frontrunning** 两类攻击，并讨论了 LAION-400M、Wikipedia 等大规模数据源在收集流程中的潜在风险，以及数据完整性校验等可能的防御方式。

**模型会因为方言而产生隐性种族偏见吗？**  
📅 *2024 年 11 月 12 日* · [查看 Slides（PDF）](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
分享了一项关于语言模型中**方言偏见**的社会语言学研究。  
研究发现，即使表达的实际内容相同，只改变语言风格或方言，模型也可能给出明显不同的评价。  
报告重点讨论了 **African-American Vernacular English（AAVE）** 相关实验，以及模型内部隐性社会偏见可能如何影响分类、毒性判断和其他下游决策。
