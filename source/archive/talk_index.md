---
title: Talks & Presentations
date: 2025-10-12 11:26:21
---

A selection of talks and presentations I’ve given during **seminars and reading groups** at the University of Heidelberg.  
Most were short academic discussions — sharing recent papers, experiments, or reproduction results with classmates and professors.  
I enjoy breaking down complex research into clear ideas, connecting theory with implementation, and learning from the conversations that follow.  


---

### 🧠 **Large Language Models & Interpretability**

**LLMint8: Quantization-Aware Fine-Tuning for Efficient LLMs**  
📅 *June 11, 2025* · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
Presented and analyzed the **LLMint8** approach for **quantization-aware fine-tuning** (QAT) of large language models.
The talk discussed how **mixed-precision training** and **INT8 quantization** maintain reasoning quality while cutting GPU memory use by ~60%.
Also compared QLoRA, post-training quantization, and QAT strategies — highlighting the trade-off between efficiency and alignment stability.

**LMKG-GOFA: Language Models as Knowledge Graph Builders**  
📅 *July 7, 2025* · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
Discussed the **LMKG-GOFA** framework for **LLM-based ontology and knowledge graph construction**.
Explained how large models extract entities and relations through instruction prompting and structured templates.
Reviewed experimental results showing that **language models can dynamically expand KGs**, bridging symbolic reasoning and text generation.


**Character-Level Language Modeling: Hierarchies in Text Understanding**  
📅 *May 21, 2025* · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
Presented a critical review of **hierarchical character-level language modeling** techniques.
Explored how multi-layer recurrent networks capture **structure and morphology** from raw text sequences.
Highlighted how these architectures relate to current **subword tokenization and interpretability research**.


**Self-Conditioning: Teaching Models to Listen to Themselves**  
📅 * December 20, 2024 * · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
Reviewed the paper *Self-Conditioned Pretrained Language Models (ICML 2022)*, focusing on **mechanistic interpretability** and **concept-level control**.
Explained how “expert neurons” can be reactivated to guide text generation **without additional fine-tuning**, enabling fast and low-overhead conditioning.
Compared the approach with **FUDGE** and **PPLM**, emphasizing improvements in speed, perplexity, and semantic precision.

---

### 🩺 **Multimodal & Clinical Language Understanding**




**Research on Multimodal Fusion of Temporal Electronic Medical Records**  
📅 *November 10, 2024* · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
Reviewed a paper proposing **T-MAG (Time-series Multimodal Adaptation Gate)** — a fusion model for heterogeneous EMR data.
Explained how **LSTM** and **Transformer-XL** encoders integrate structured and textual time-series data, while **MAG** dynamically balances multiple modalities and **attention-backtracking** captures long-term dependencies.
Highlighted that clinical notes as the main modality achieved the best predictive performance (AUROC ≈ 0.95 on stroke datasets).
Discussed implications for **clinical outcome prediction** and **temporal representation learning** in healthcare AI.


**Clinical Language Understanding — Part I & II**  
📅 *February 03, 2025* · [Part I PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Part II PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
Analyzed systems from the **2024 Chemotherapy Treatment Timeline Extraction** shared task.
Summarized **LAILab’s Flan-T5 + LoRA** model for instruction-tuned temporal relation extraction and **KCLab’s PubMedBERT pipeline** integrating **UMLS** knowledge.
Compared end-to-end and pipeline approaches, discussing trade-offs between **precision, recall**, and **interpretability** in EHR processing.
Concluded with insights on **low-frequency relation handling**, **semi-supervised data augmentation**, and the limits of **LLM generalization** in clinical text.

---

### ⚖️ **AI Ethics, Bias & Security**



**Data Poisoning in Large Models: Risks and Defenses**  
📅 *November 25, 2024* · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
Presented a review of *Carlini et al., 2023* on the **practical feasibility of large-scale data poisoning**.
Explained the *Split-View* and *Frontrunning* attacks that exploit expired or predictable URLs in distributed and centralized datasets such as **LAION-400M** and **Wikipedia**.
Showed that poisoning as little as **0.01 % of data (~ $60 cost)** can inject targeted vulnerabilities into downstream LLMs.
Discussed defense mechanisms including **cryptographic integrity checks**, **snapshot randomization**, and **consensus-based dataset verification** to strengthen the security of open web-scale corpora.

**AI Generates Covertly Racist Decisions Based on Dialect**  
📅 *November 12, 2024 * · [Preview Slides (PDF)](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
Analyzed a sociolinguistic study revealing **dialect-driven bias in LLM and speech-to-text systems**.
The presentation examined how models encode implicit stereotypes when processing **African-American Vernacular English (AAVE)** and other non-standard dialects.
Highlighted findings that classifiers produce **less favorable judgments and higher toxicity scores** for identical content differing only in dialectal style.
Discussed mitigation through **prompt calibration, representation balancing**, and **contrastive fine-tuning** to reduce latent sociocultural bias.




