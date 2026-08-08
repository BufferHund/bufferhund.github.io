---
title: LLM Research
date: 2025-10-11 16:58:05
---

I’m currently seeking **HiWi / research assistant opportunities** related to **large language models (LLMs)**,
especially in **efficient fine-tuning**, **multimodal fusion**, and **agentic reasoning systems**.

Technically, I have hands-on experience with
**agent fine-tuning**, **MCP (Model Context Protocol)**, and **parameter-efficient adaptation** methods like LoRA, adapters, and quantized distillation.
My work often combines *system-level engineering* with *research-driven experimentation* —
I like building things that help us understand how models think.

I’m particularly interested in:

* **Multimodal understanding** — bridging language, vision, and structured data to ground reasoning.
* **Efficient fine-tuning** — making large models smaller, faster, and adaptive without losing reasoning depth.
* **Interpretability** — uncovering how internal activations, neurons, or adapters encode concepts.

Below are several recent projects that reflect my approach: integrating **practical engineering** with **research curiosity**.

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)
**Keywords:** LLM Compression · Quantization · Knowledge Distillation · LoRA

Reproduced and extended a **teacher–student distillation pipeline** for *Qwen2.5–0.5B-Instruct*.
Combined **LoRA fine-tuning** with **8-bit quantization** to compress the model from 3B to 0.5B parameters.
Achieved *75% of teacher accuracy with 6× lower compute* — demonstrating scalable efficiency for mid-size LLMs.

![Distillation Pipeline Illustration](https://pics.iamzhaokun.com/2025/10/d2eb6cc4c4bc2f2ec960f1fea69ec4cf.png)
---

### **K-Adapter Reproduction & Ablation Study**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)
**Keywords:** Adapter Tuning · Knowledge Injection · PEFT

Re-implemented **K-Adapter (ACL 2021)** for knowledge injection via frozen PLMs.
Ran controlled ablations on adapter layer depth, placement, and task overlap.
Found mid-layer adapters offered optimal trade-offs between factual recall and model stability.


![K-Adapter Reproduction & Ablation Study](https://pics.iamzhaokun.com/2025/10/19525cba61f491581f5153d720497d80.png)
---

### **Hierarchical Character-Level Language Model**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)
**Keywords:** Hierarchical LM · Cache Mechanisms · Representation Learning

Re-implemented **HCLM+Cache (Kawakami et al., 2017)** in PyTorch to study word reuse in open-vocabulary settings.
Introduced **vectorized computation** and **continuous cache management**, improving throughput 3.8× and reducing validation BPC by 11.8%.
Showed that the cache component contributes most to long-range linguistic coherence.

---

### **LoRA-Driven Anime Style Generation**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [Report PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)
**Keywords:** LoRA · Diffusion Models · Multimodal Adaptation

Benchmarked **LoRA** against **Textual Inversion** and **DreamBooth** for anime-style generation using *Stable Diffusion v1.5*.
Showed that LoRA achieved *~47 FID reduction* under small (100-image) datasets while using <2% trainable parameters.
Explored **style blending** by interpolating LoRA checkpoints, demonstrating compositional flexibility.

---
### **Plant Recognition with CNNs and Transfer Learning**

📅 *Jul 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**Keywords:** Computer Vision · CNN · Transfer Learning  

Developed and compared **ResNet**, **EfficientNet**, and **Vision Transformer** baselines on a plant classification dataset.
Demonstrated how **transfer learning** significantly improves data efficiency —  
serving as an early exploration into model generalization and feature reuse.

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *Jan – Mar 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**Keywords:** Mechanistic Interpretability · Hidden-State Control

Reproduced *Self-Conditioned Pretrained LMs (ICML 2022)* focusing on **internal feedback loops** in generation .
Analyzed how hidden-state reuse improves fluency and stability over standard autoregressive decoding.
Demonstrated controllable text steering without external conditioning or retraining.






---

### **Data Contamination in Large Models**

📅 *Feb 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**Keywords:** LLM Evaluation · Dataset Integrity · Temporal Robustness  

Investigated contamination within open LLM evaluation datasets.
Implemented **prefix-based detection** and **cross-version comparison** pipelines to quantify leakage effects.
Provided empirical support for stricter dataset curation in benchmark design.

---

### **MLLM: Towards Multimodal Language Models**

📅 *Mar 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**Keywords:** Multimodal LLMs · Vision–Language Alignment

Surveyed and analyzed recent multimodal LLM architectures (e.g., BLIP-2, Flamingo, LLaVA).
Focused on how **frozen-language backbones** interact with **visual Q-formers** and **alignment objectives**.
Discussed open challenges in cross-modal grounding and scalability of visual–text fusion.

---


### **Temporal Reasoning in Clinical NLP**

📅 *Mar 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)
**Keywords:** Temporal Reasoning · Clinical NLP · Knowledge Graphs

Reviewed how **LLMs handle temporal information** in clinical narratives.
Summarized key challenges in chronological inference and discussed methods like **TIMER-Instruct** and **temporal knowledge graphs** for improving event sequencing and model reliability.

---


### ✨ Research Focus

Across all my work, I’m drawn to one big idea:
how to make large models **more adaptive, explainable, and grounded**.

Whether it’s through **agent fine-tuning**, **multimodal fusion**, or **parameter-efficient learning**,
I enjoy working at the intersection of **research and real systems** —
turning theoretical questions into reproducible, working prototypes.

If your lab or team is exploring similar topics, I’d love to contribute as a **research assistant** or **HiWi**
and help bridge *engineering practicality* with *scientific insight*.





