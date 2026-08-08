---
title: Projects
date: 2025-10-11 18:20:29
layout: "page"
---


<!-- ## 🚀 Projects -->

---

### **1. Resource-Efficient Distillation of Qwen Models**

📅 *Jul – Sep 2025*
📎 [GitHub Repository](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject)
**Keywords:** Knowledge Distillation · Quantization · LLM Compression · LoRA

Compressed a **3B-parameter Qwen model** into a **0.5B student** using 4-bit quantization and hybrid distillation loss (KL + CE).
Achieved **~25% lower perplexity** than baseline with strong instruction-following performance.
→ *Goal:* Make large language models deployable under limited compute and memory.

---

### **2. K-Adapter Reproduction & Ablation Study**

📅 *Jul – Sep 2025*
📎 [GitHub Repository](https://github.com/BufferHund/K-Adapter_SemesterProject)
**Keywords:** Adapter Tuning · Knowledge Injection · NLP · RoBERTa

Reproduced and improved the **K-Adapter** framework for modular knowledge injection into RoBERTa.
Ran extensive **ablation studies** on adapter size, placement, and depth—finding middle-layer adapters most effective.
→ *Goal:* Explore efficient, modular fine-tuning strategies for large models.

---

### **3. Plant Recognition System**

📅 *Jul – Sep 2025*
📎 [GitHub Repository](https://github.com/BufferHund/PlantRecognition_SemesterProject)
**Keywords:** Computer Vision · CNN · Image Classification

Built a **CNN-based plant recognition model** to classify species from real-world images.
Implemented preprocessing, data augmentation, and evaluation pipelines for robust training.
→ *Goal:* Enable scalable and accurate plant species identification for ecological use.

---

### **4. Hierarchical Character-Level Language Model**

📅 *Jul – Sep 2025*
📎 [GitHub Repository](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation)
**Keywords:** Hierarchical Modeling · Character-Level NLP · Language Modeling

Reimplemented a **hierarchical char-level LM** capturing structure from characters to words.
Benchmarked variants of hierarchy depth and recurrent configurations for stability and efficiency.
→ *Goal:* Improve low-level linguistic modeling and interpretability.

---

### **5. LoRA Anime Fine-Tune**

📅 *Jul – Sep 2025*
📎 [GitHub Repository](https://github.com/BufferHund/lora_anime_finetune)
**Keywords:** LoRA · Diffusion Models · Style Fine-Tuning

Fine-tuned anime-style diffusion models using **LoRA adapters**, optimizing between **style consistency** and **content preservation**.
Evaluated visual quality, overfitting control, and inference speed.
→ *Goal:* Personalize generative models efficiently with minimal compute.

---

### **6. Self-Conditioned Generation (Reimplementation)**

📅 *Jan – Mar 2025*
📎 [GitHub Repository](https://github.com/BufferHund/selfcond-reimplementation)
**Keywords:** Self-Conditioning · Expert Units · GPT-2

A **toy, script-based reimplementation** of *Self-Conditioning Pre-Trained Language Models (ICML 2022)*.
Implements pipelines to extract hidden states, compute **concept expertise** of neurons, and **steer generation** by activating selected units.
→ *Goal:* Explore how internal neuron activations influence generative behavior.

---

### **7. Time Travel in LLMs (Fork & Experiments)**

📅 *Jan – Mar 2025*
📎 [GitHub Repository](https://github.com/BufferHund/time-travel-in-llms)
**Keywords:** Data Contamination · LLM Evaluation · Temporal Consistency

Forked and extended the **Time Travel in LLMs** framework to replicate the **data contamination detection** pipeline.
Implemented scripts prompting models with partial prefixes to measure memorization and temporal leakage across datasets (e.g., IMDB).
→ *Goal:* Investigate model contamination and reasoning stability across time.

---

### ✨ Summary

These projects illustrate my progression through **early 2025 (theoretical & evaluation research)** toward **mid-2025 (applied efficiency and vision–language systems)**.
All repositories include **clean, reproducible code**, detailed experiment notes, and documentation — bridging **academic research** and **practical AI engineering**.

---




---
title:  LLM Research
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

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject)
**Keywords:** LLM Compression · Quantization · Knowledge Distillation · LoRA

Designed a **hybrid distillation + quantization** pipeline to compress a 3B Qwen model to 0.5B parameters using **4-bit precision** and **LoRA fine-tuning**.
Achieved ~75% of the teacher’s performance at one-sixth compute — demonstrating that *efficiency can scale intelligence*.

---

### **K-Adapter Reproduction & Ablation Study**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject)
**Keywords:** Adapter Tuning · PEFT · Knowledge Injection

Reproduced and analyzed **K-Adapter**, running ablations on adapter placement, size, and depth.
Found **mid-layer adapters** yield the best trade-off between task performance and parameter cost — aligning with current PEFT trends like IA³ and DoRA.

---

### **Hierarchical Character-Level Language Model**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation)
**Keywords:** Hierarchical LM · Representation Learning

Implemented a multi-level character LM to study how **structure emerges from token-level dynamics**.
This project deepened my interest in *representation hierarchies* and interpretability within smaller-scale LMs.

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *Jan – Mar 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation)
**Keywords:** Mechanistic Interpretability · Self-Conditioning · Concept Neurons

Explored how language models can “listen to themselves.”
Reimplemented *Self-Conditioning Pre-Trained LMs (ICML 2022)* to study **neuron-level concept steering** — tracing and reactivating hidden states to influence generation.
It was my first hands-on dive into *mechanistic interpretability*.

---

### **Time Travel in LLMs (Fork & Experiments)**

📅 *Jan – Mar 2025* · [GitHub](https://github.com/BufferHund/time-travel-in-llms)
**Keywords:** Temporal Generalization · Contamination Detection · LLM Evaluation

Extended the **Time Travel in LLMs** benchmark to study **temporal leakage** —
how models recall “future” data during evaluation.
This work sharpened my understanding of *data contamination* and *robust reasoning benchmarks*.

---

### **LoRA Anime Fine-Tuning**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune)
**Keywords:** LoRA · Diffusion Models · Multimodal Adaptation

A creative project using **LoRA fine-tuning** for style adaptation in diffusion models.
Explored cross-modal efficiency: transferring techniques from text-based PEFT to **image generation** —
a small step toward unified multimodal adaptation.

---

### ✨ Research Focus

Across all my work, I’m drawn to one big idea:
how to make large models **more adaptive, explainable, and grounded**.

Whether it’s through **agent fine-tuning**, **multimodal fusion**, or **parameter-efficient learning**,
I enjoy working at the intersection of **research and real systems** —
turning theoretical questions into reproducible, working prototypes.

If your lab or team is exploring similar topics, I’d love to contribute as a **research assistant** or **HiWi**
and help bridge *engineering practicality* with *scientific insight*.



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

Designed a **hybrid distillation + quantization** pipeline to compress a 3B Qwen model to 0.5B parameters using **4-bit precision** and **LoRA fine-tuning**.
Achieved ~75% of the teacher’s performance at one-sixth compute — demonstrating that *efficiency can scale intelligence*.

---

### **K-Adapter Reproduction & Ablation Study**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**Keywords:** Adapter Tuning · PEFT · Knowledge Injection

Reproduced and analyzed **K-Adapter**, running ablations on adapter placement, size, and depth.
Found **mid-layer adapters** yield the best trade-off between task performance and parameter cost — aligning with current PEFT trends like IA³ and DoRA.

---

### **Hierarchical Character-Level Language Model**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)  
**Keywords:** Hierarchical LM · Representation Learning

Implemented a multi-level character LM to study how **structure emerges from token-level dynamics**.
This project deepened my interest in *representation hierarchies* and interpretability within smaller-scale LMs.

---

### **LoRA Anime Fine-Tuning**

📅 *Jul – Sep 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [Report PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)  
**Keywords:** LoRA · Diffusion Models · Multimodal Adaptation

A creative project using **LoRA fine-tuning** for style adaptation in diffusion models.
Explored cross-modal efficiency: transferring techniques from text-based PEFT to **image generation** —
a small step toward unified multimodal adaptation.

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *Jan – Mar 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**Keywords:** Mechanistic Interpretability · Self-Conditioning · Concept Neurons

Explored how language models can “listen to themselves.”
Reimplemented *Self-Conditioning Pre-Trained LMs (ICML 2022)* to study **neuron-level concept steering** — tracing and reactivating hidden states to influence generation.
It was my first hands-on dive into *mechanistic interpretability*.

---

### **Time Travel in LLMs (Fork & Experiments)**

📅 *Jan – Mar 2025* · [GitHub](https://github.com/BufferHund/time-travel-in-llms) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)  
**Keywords:** Temporal Generalization · Contamination Detection · LLM Evaluation

Extended the **Time Travel in LLMs** benchmark to study **temporal leakage** —
how models recall “future” data during evaluation.
This work sharpened my understanding of *data contamination* and *robust reasoning benchmarks*.

---

### **Plant Recognition with CNNs and Transfer Learning**

📅 *Jul 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**Keywords:** Computer Vision · CNN · Transfer Learning  

Developed and compared **ResNet**, **EfficientNet**, and **Vision Transformer** baselines on a plant classification dataset.
Demonstrated how **transfer learning** significantly improves data efficiency —  
serving as an early exploration into model generalization and feature reuse.

---

### **Data Contamination in Large Models**

📅 *Feb 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**Keywords:** LLM Evaluation · Dataset Integrity · Temporal Robustness  

Investigated contamination within open LLM evaluation datasets.
Implemented **prefix-based detection** and **cross-version comparison** pipelines to quantify leakage effects.
Provided empirical support for stricter dataset curation in benchmark design.

---

### ✨ Research Focus

Across all my work, I’m drawn to one big idea:
how to make large models **more adaptive, explainable, and grounded**.

Whether it’s through **agent fine-tuning**, **multimodal fusion**, or **parameter-efficient learning**,
I enjoy working at the intersection of **research and real systems** —
turning theoretical questions into reproducible, working prototypes.

If your lab or team is exploring similar topics, I’d love to contribute as a **research assistant** or **HiWi**
and help bridge *engineering practicality* with *scientific insight*.
