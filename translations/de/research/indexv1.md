---
title: LLM Research
date: 2025-10-11 16:58:05
---

Da ich kurz vor dem Abschluss meines **Masterstudiums in Computerlinguistik (AI Track)** an der Universität Heidelberg stehe, suche ich derzeit nach **Vollzeitstellen in der KI-Forschung oder KI-Softwareentwicklung**, insbesondere im Bereich **agentischer, multimodaler und praxisnaher KI-Systeme**.

Meine Arbeit verbindet **forschungsorientierte Experimente mit System Engineering**. Ich habe praktische Erfahrung mit **tool-nutzenden Agents, LLM/VLM-Evaluation, RAG, MCP, multimodalem Grounding, LoRA, Quantisierung und Knowledge Distillation**.

Besonders interessiert mich, wie sich KI-Systeme verhalten, sobald Modelle **beobachten, sich erinnern, Tools aufrufen und mit externen Umgebungen interagieren** können – und wie sich solche Systeme systematisch evaluieren, effizienter machen und robuster gestalten lassen.

Im Folgenden stelle ich einige aktuelle Projekte vor, die diesen Ansatz widerspiegeln.

---

### **Hybrid Conv+GQA vs. Dense Transformers**

📅 *Aug. 2026* · [GitHub](https://github.com/BufferHund/ATTProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hybrid%20Conv%2BGQA%20vs.%20Dense%20Transformer.pdf)  
**Keywords:** LLM Systems · Effiziente Inferenz · Long Context · LoRA

Verglichen wurde die **hybride Conv+GQA-Architektur von LFM2.5-1.2B** mit dem **dichten Transformer Qwen3-1.7B** hinsichtlich Inferenz-Effizienz, Long-Context-Verhalten und LoRA-Adaption.
Dafür wurden Benchmarks für Durchsatz, TTFT, GPU-Speicher, KV-Cache-Nutzung, Retrieval und Perplexity aufgebaut.
Unter dem getesteten Consumer-GPU-Setup erreichte das hybride Modell bis zu **11,5× höheren Durchsatz**, etwa **45 % geringeren Inferenzspeicherbedarf** und einen **9,3× kleineren KV-Cache**, während Dense Attention bei präzisem Long-Range-Retrieval und der Qualität nach dem Fine-Tuning stärker blieb.

---

### **Action-Conditioned World Models**

📅 *Aug. 2026* · [GitHub](https://github.com/mrtanke/dino-wm-representation-study/tree/main) · [Report PDF](https://pics.iamzhaokun.com/doc/report/GNN_Final_Project.pdf)  
**Keywords:** World Models · Representation Learning · DINOv2 · Model Predictive Control

Erweiterung des **DINO-WM**-Frameworks auf PointMaze, um zu untersuchen, wie visuelle Repräsentationen und Unsicherheit in den Übergangsdynamiken latente Vorhersagen und Planung beeinflussen.
Verglichen wurden **DINOv2, V-JEPA 2 und VFM-VAE**; zusätzlich wurde eine kontrollierte **Patch/CLS × Deterministic/Gaussian**-Ablation durchgeführt.
Deterministische Patch-Features erwiesen sich als zuverlässigste Baseline, während CLS-Repräsentationen überraschend konkurrenzfähig waren und Gaussian Dynamics die Planungsleistung nicht konsistent verbesserten.

---

### **Smart Deal Finder — Multimodaler Shopping Agent**

📅 *2026* · [GitHub](https://github.com/BufferHund/smart-deal-finder)  
**Keywords:** Multimodale KI · Document AI · VLM · LLM Agents · Tool Use

Entwicklung einer **multimodalen Document-AI-Pipeline** zur Extraktion strukturierter Produkt-, Preis-, Rabatt- und weiterer Informationen aus Handelsdokumenten.
Die extrahierten Daten werden mit einem **tool-nutzenden Shopping Agent** verbunden, der Nutzeranforderungen in konkrete Einkaufspläne überführt.
Das Projekt verknüpft **multimodales Verständnis, strukturierte Extraktion, LLM-Reasoning und externe Tools** in einem durchgängigen KI-Workflow.

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *Juli – Sept. 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)  
**Keywords:** LLM Compression · Quantisierung · Knowledge Distillation · LoRA

Reproduktion und Erweiterung einer **Teacher–Student-Distillation-Pipeline** für *Qwen2.5–0.5B-Instruct*.
Kombination von **LoRA-Fine-Tuning** und **8-Bit-Quantisierung**, um das Modell von 3B auf 0,5B Parameter zu komprimieren.
Erreicht wurden *75 % der Teacher-Genauigkeit bei 6× geringerem Rechenaufwand* – als Beispiel für skalierbare Effizienz bei mittelgroßen LLMs.

---

### **K-Adapter Reproduction & Ablation Study**

📅 *Juli – Sept. 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**Keywords:** Adapter Tuning · Knowledge Injection · PEFT

Re-Implementierung von **K-Adapter (ACL 2021)** zur Wissensinjektion in eingefrorene PLMs.
Durchführung kontrollierter Ablationen zu Adapter-Tiefe, Positionierung und Task-Overlap.
Dabei zeigten Adapter in mittleren Schichten den besten Kompromiss zwischen faktischem Recall und Modellstabilität.

---

### **Hierarchical Character-Level Language Model**

📅 *Juli – Sept. 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)  
**Keywords:** Hierarchische LMs · Cache-Mechanismen · Representation Learning

Re-Implementierung von **HCLM+Cache (Kawakami et al., 2017)** in PyTorch zur Untersuchung von Wortwiederverwendung in Open-Vocabulary-Szenarien.
Durch **vektorisierte Berechnung** und **kontinuierliches Cache-Management** wurde der Durchsatz um 3,8× gesteigert und die Validierungs-BPC um 11,8 % reduziert.
Die Ergebnisse zeigen, dass insbesondere die Cache-Komponente wesentlich zur langfristigen sprachlichen Kohärenz beiträgt.

---

### **LoRA-Driven Anime Style Generation**

📅 *Juli – Sept. 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [Report PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)  
**Keywords:** LoRA · Diffusionsmodelle · Multimodale Adaption

Vergleich von **LoRA**, **Textual Inversion** und **DreamBooth** für Anime-Stil-Generierung mit *Stable Diffusion v1.5*.
LoRA erzielte bei kleinen Datensätzen mit 100 Bildern eine *FID-Reduktion von etwa 47* und benötigte dabei weniger als 2 % trainierbare Parameter.
Zusätzlich wurde **Style Blending** durch Interpolation verschiedener LoRA-Checkpoints untersucht.

---

### **Plant Recognition with CNNs and Transfer Learning**

📅 *Juli 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**Keywords:** Computer Vision · CNN · Transfer Learning

Entwicklung und Vergleich von **ResNet-, EfficientNet- und Vision-Transformer-Baselines** auf einem Datensatz zur Pflanzenklassifikation.
Die Experimente zeigten, dass **Transfer Learning** die Dateneffizienz deutlich verbessert –
als frühe Untersuchung von Generalisierung und Wiederverwendung gelernter Merkmale.

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *Jan. – März 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**Keywords:** Mechanistic Interpretability · Hidden-State Control

Reproduktion von *Self-Conditioned Pretrained LMs (ICML 2022)* mit Fokus auf **interne Feedback-Schleifen** bei der Textgenerierung.
Untersucht wurde, wie die Wiederverwendung versteckter Zustände Fluency und Stabilität gegenüber standardmäßiger autoregressiver Dekodierung verbessert.
Dabei wurde steuerbare Textgenerierung ohne externe Konditionierung oder erneutes Training demonstriert.

---

### **Data Contamination in Large Models**

📅 *Feb. 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**Keywords:** LLM Evaluation · Dataset Integrity · Temporal Robustness

Untersuchung von Datenkontamination in offenen LLM-Evaluationsdatensätzen.
Implementiert wurden **präfixbasierte Erkennung** und **Cross-Version-Vergleiche**, um Leakage-Effekte zu quantifizieren.
Die Ergebnisse liefern empirische Argumente für strengere Datenkuratierung bei der Gestaltung von Benchmarks.

---

### **MLLM: Towards Multimodal Language Models**

📅 *März 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**Keywords:** Multimodale LLMs · Vision–Language Alignment

Überblick und Analyse aktueller multimodaler LLM-Architekturen wie BLIP-2, Flamingo und LLaVA.
Im Mittelpunkt stand die Frage, wie **eingefrorene Sprachmodelle** mit **visuellen Q-Formern** und **Alignment-Zielen** zusammenspielen.
Diskutiert wurden offene Herausforderungen bei Cross-Modal Grounding und der Skalierbarkeit der Vision-Text-Fusion.

---

### **Temporal Reasoning in Clinical NLP**

📅 *März 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)  
**Keywords:** Temporal Reasoning · Clinical NLP · Knowledge Graphs

Analyse, wie **LLMs zeitliche Informationen** in klinischen Texten verarbeiten.
Zusammengefasst wurden zentrale Herausforderungen bei chronologischer Inferenz sowie Ansätze wie **TIMER-Instruct** und **temporale Wissensgraphen** zur Verbesserung von Ereignisreihenfolge und Modellzuverlässigkeit.

---

### ✨ Forschungsschwerpunkte

Über diese Projekte hinweg interessiert mich besonders eine gemeinsame Frage:

**Wie lassen sich KI-Systeme entwickeln, die nicht nur leistungsfähig, sondern auch effizient, gut verankert, interpretierbar und zuverlässig im Umgang mit realen Umgebungen sind?**

Ich untersuche diese Frage aus mehreren Perspektiven:
**effiziente LLM-Architekturen und Adaption**, **multimodales Representation Learning**,
**World Models** und **tool-nutzende Agents**.

Besonders spannend finde ich die Schnittstelle zwischen Modellforschung und Systemverhalten –
wie Architekturentscheidungen die Bereitstellung beeinflussen,
wie Repräsentationen nachgelagerte Entscheidungen prägen
und wie Modelle multimodale Informationen in zuverlässige Handlungen übersetzen können.
