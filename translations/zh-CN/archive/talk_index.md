---
title: "讲座和演讲"
date: 2025-10-12 11:26:21
lang: zh-CN
---


我在海德堡大学**研讨会和阅读小组**期间发表的精选演讲和演讲。  
大多数都是简短的学术讨论——与同学和教授分享最近的论文、实验或复制结果。  
我喜欢将复杂的研究分解为清晰的想法，将理论与实施联系起来，并从随后的对话中学习。


---

### 🧠 **大型语言模型和可解释性**

**LLMint8：量化感知微调以实现高效 LLMs**  
📅 *2025年6月11日* · [幻灯片预览（PDF）](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
提出并分析了大型语言模型的 **量化感知 fine-tuning** (QAT) 的 **LLMint8** 方法。
演讲讨论了**混合精度训练**和 **INT8 量化**如何保持推理质量，同时将 GPU 内存使用量减少约 60%。
还比较了 QLoRA、训练后量化和 QAT 策略 - 强调了效率和对齐稳定性之间的权衡。

**LMKG-GOFA：作为知识图构建器的语言模型**  
📅 *2025年7月7日* · [幻灯片预览（PDF）](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
讨论了用于 **LLM 基于本体和知识图构建**的 **LMKG-GOFA** 框架。
解释了大型模型如何通过指令提示和结构化模板提取实体和关系。
回顾的实验结果表明，**语言模型可以动态扩展知识图谱**，连接符号推理和文本生成。


**字符级语言建模：文本理解中的层次结构**  
📅 *2025年5月21日* · [预览幻灯片（PDF）](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
对**分层字符级语言建模**技术进行了批判性评论。
探索多层循环网络如何从原始文本序列中捕获**结构和形态**。
强调了这些架构如何与当前**子词 tokenization 和可解释性研究**相关。


**自我调节：教导模型倾听自己**  
📅 * 2024 年 12 月 20 日 * · [幻灯片预览（PDF）](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
审阅了论文*自条件预训练语言模型（ICML 2022）*，重点关注**机械可解释性**和**概念级控制**。
解释了如何重新激活“专家神经元”来指导文本生成**无需额外的fine-tuning**，从而实现快速且低开销的调节。
将该方法与 **FUDGE** 和 **PPLM** 进行比较，强调速度、困惑度和��义精度方面的改进。

---

### 🩺 **多模式和临床语言理解**




**时态电子病历多模态融合研究**  
📅 *2024 年 11 月 10 日* · [幻灯片预览（PDF）](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
审阅了一篇提出 **T-MAG（时间序列多模态适应门）** 的论文——一种异构 EMR 数据的融合模型。
解释了 **LSTM** 和 **Transformer-XL** 编码器如何集成结构化和文本时间序列数据，而 **MAG** 动态平衡多种模式以及 **注意力回溯** 捕获长期依赖性。
强调临床记录作为主要方式实现了最佳预测性能（中风数据集上的 AUROC ≈ 0.95）。
讨论了医疗保健人工智能中**临床结果预测**和**时间表示学习**的影响。


**临床语言理解——第一部分和第二部分**  
📅 *2025 年 2 月 3 日* · [第一部分 PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [第二部分 PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
分析来自 **2024 年化疗治疗时间线提取** 共享任务的系统。
总结了 **LAILab 的 Flan-T5 + LoRA** 模型，用于指令调整的时间关系提取和 **KCLab 的 PubMedBERT 管道** 集成 **UMLS** 知识。
比较端到端和管道方法，讨论 EHR 处理中**精确度、召回率**和**可解释性**之间的权衡。
最后总结了对**低频关系处理**、**半监督数据增强**以及临床文本中**LLM泛化**的限制的见解。

---

### ⚖️ **人工智能道德、偏见和安全**



**大型模型中的数据中毒：风险与防御**  
📅 *2024年11月25日* · [预览幻灯片（PDF）](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
提出了*Carlini 等人，2023 年*关于**大规模数据中毒**的实际可行性**的评论。
解释了 *Split-View* 和 *Frontrunning* 攻击，这些攻击利用分布式和集中式数据集中过期或可预测的 URL，例如 **LAION-400M** 和 **Wikipedia**。
表明只要 **0.01% 的数据中毒（约 60 美元成本）** 就可以将目标漏洞注入下游 LLMs。
讨论了防御机制，包括**加密完整性检查**、**快照随机化**和**基于共识的数据集验证**，以加强开放网络规模语料库的安全性。

**人工智能根据方言生成隐蔽的种族主义决策**  
📅 *2024 年 11 月 12 日 * · [预览幻灯片（PDF）](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
分析了一项社会语言学研究，揭示了** LLM 和语音转文本系统中方言驱动的偏见**。
该演示探讨了模型在处理 **非美白话英语 (AAVE)** 和其他非标准方言时如何编码隐式刻板印象。
强调的发现是，对于仅方言���格不同的相同内容，分类器会产生**不太有利的判断和较高的毒性分数**。
讨论了通过**及时校准、代表性平衡**和**对比fine-tuning**来减少潜在的社会文化偏见的缓解措施。





