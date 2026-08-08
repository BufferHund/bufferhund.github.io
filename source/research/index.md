---
title: LLM Research
date: 2025-10-11 16:58:05
---

As I approach the completion of my **Master’s in Computational Linguistics (AI Track)** at Heidelberg University, I’m looking for **full-time opportunities in AI research or AI software development** where I can work on **agentic, multimodal, and practical AI systems**.

My work combines **research experimentation with system-level engineering**, with hands-on experience in **tool-using agents, LLM/VLM evaluation, RAG, MCP, multimodal grounding, LoRA, quantization, and knowledge distillation**.

I’m particularly interested in how AI systems behave once models can **observe, remember, call tools, and interact with external environments** — and how those systems can be evaluated, made more efficient, and made more reliable.

Below are several recent projects reflecting this approach.

---

### **Hybrid Conv+GQA vs. Dense Transformers**

📅 *Aug 2026* · [GitHub](https://github.com/BufferHund/ATTProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hybrid%20Conv%2BGQA%20vs.%20Dense%20Transformer.pdf)  
**Keywords:** LLM Systems · Efficient Inference · Long Context · LoRA

Compared **LFM2.5-1.2B’s hybrid Conv+GQA architecture** with the **Qwen3-1.7B dense Transformer** across inference efficiency, long-context behavior, and LoRA adaptation.
Built benchmarks for throughput, TTFT, GPU memory, KV-cache usage, retrieval, and perplexity.
Observed up to **11.5× higher throughput**, ~**45% lower inference memory**, and a **9.3× smaller KV cache** for the hybrid model, while dense attention remained stronger on precise long-range retrieval and post-fine-tuning quality.

---

### **Action-Conditioned World Models**

📅 *Aug 2026* · [GitHub](https://github.com/mrtanke/dino-wm-representation-study/tree/main) · [Report PDF](https://pics.iamzhaokun.com/doc/report/GNN_Final_Project.pdf)  
**Keywords:** World Models · Representation Learning · DINOv2 · Model Predictive Control

Extended **DINO-WM** on PointMaze to study how visual representation choice and transition uncertainty affect latent prediction and planning.
Compared **DINOv2, V-JEPA 2, and VFM-VAE**, and conducted a controlled **Patch/CLS × Deterministic/Gaussian** ablation.
Deterministic patch features remained the most reliable baseline, while CLS representations were surprisingly competitive and Gaussian dynamics did not consistently improve planning performance.

---

### **Smart Deal Finder — Multimodal Shopping Agent**

📅 *2026* · [GitHub](https://github.com/BufferHund/smart-deal-finder)  
**Keywords:** Multimodal AI · Document AI · VLM · LLM Agents · Tool Use

Built a **multimodal Document AI pipeline** for extracting structured product, price, discount, and related information from retail documents.
Integrated the extracted data with a **tool-using shopping agent** that converts user requirements into actionable shopping plans.
The project connects **multimodal understanding, structured extraction, LLM reasoning, and external tools** in an end-to-end AI workflow.

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)  
**Keywords:** LLM Compression · Quantization · Knowledge Distillation · LoRA

Reproduced and extended a **teacher–student distillation pipeline** for *Qwen2.5–0.5B-Instruct*.
Combined **LoRA fine-tuning** with **8-bit quantization** to compress the model from 3B to 0.5B parameters.
Achieved *75% of teacher accuracy with 6× lower compute* — demonstrating scalable efficiency for mid-size LLMs.

---

### **K-Adapter Reproduction & Ablation Study**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**Keywords:** Adapter Tuning · Knowledge Injection · PEFT

Re-implemented **K-Adapter (ACL 2021)** for knowledge injection via frozen PLMs.
Ran controlled ablations on adapter layer depth, placement, and task overlap.
Found mid-layer adapters offered optimal trade-offs between factual recall and model stability.

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

Reproduced *Self-Conditioned Pretrained LMs (ICML 2022)* focusing on **internal feedback loops** in generation.
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
Summarized key challenges in chronological inference and discussed methods like
**TIMER-Instruct** and **temporal knowledge graphs**
for improving event sequencing and model reliability.

---

### ✨ Research Focus

Across these projects, I’m interested in a common question:

**How can we build AI systems that are not only capable, but also efficient, grounded, interpretable, and reliable when interacting with real environments?**

I approach this from several directions:
**efficient LLM architectures and adaptation**, **multimodal representation learning**,
**world models**, and **tool-using agents**.

What interests me most is the boundary between model research and system behavior —
how architectural choices affect deployment,
how representations affect downstream decisions,
and how models can turn multimodal information into reliable actions.
