---
title: "LLM Research"
lang: de
---

Ich stehe kurz vor dem Abschluss meines **Masterstudiums in Computerlinguistik (AI Track)** an der Universität Heidelberg und suche derzeit nach einer **Vollzeitstelle in der KI-Forschung oder KI-Softwareentwicklung**. Besonders interessieren mich Aufgaben rund um **LLM/VLM Agents, multimodale KI, Agent Evaluation & Safety sowie die Entwicklung praktischer KI-Anwendungen**.

Mich beschäftigt vor allem eine Frage: Was passiert, wenn Modelle nicht mehr nur Text erzeugen, sondern **sehen, sich erinnern, Tools aufrufen und mit ihrer Umgebung interagieren** können – und wie lassen sich solche Systeme sinnvoll testen und zuverlässiger machen?

Neben der Evaluation von Modellen und Agents arbeite ich auch gerne an der **technischen Umsetzung von LLM-Systemen**, etwa mit RAG, MCP, Kontext- und Memory-Management sowie LoRA, Quantisierung und Knowledge Distillation. Ich versuche, Forschungsfragen möglichst in reproduzierbare Experimente und funktionierende Systeme zu übersetzen und anschließend genau zu untersuchen, was funktioniert – und wo die Grenzen liegen.

Im Folgenden sind einige meiner aktuellen Projekte aufgeführt.

---

### **Hybrid Conv+GQA vs. Dense Transformers**

📅 *August 2026* · [GitHub](https://github.com/BufferHund/ATTProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hybrid%20Conv%2BGQA%20vs.%20Dense%20Transformer.pdf)  
**Keywords:** LLM-Architekturen · Inference Efficiency · Long Context · LoRA

Vergleich von **LFM2.5-1.2B mit Hybrid Conv+GQA** und dem **Qwen3-1.7B Dense Transformer** hinsichtlich Inferenzgeschwindigkeit, Long-Context-Fähigkeiten und LoRA-Fine-Tuning. Dafür habe ich unter anderem Throughput, TTFT, GPU-Speicher, KV Cache, Retrieval und Perplexity untersucht.

Im getesteten Consumer-GPU-Setup erreichte das Hybrid-Modell bis zu **11,5× höheren Throughput**, rund **45 % weniger Inferenzspeicher** und einen etwa **9,3× kleineren KV Cache**. Bei anspruchsvollerem Long-Range-Retrieval und der Qualität nach dem Fine-Tuning blieb der Dense Transformer dagegen robuster.

---

### **Action-Conditioned World Models**

📅 *August 2026* · [GitHub](https://github.com/mrtanke/dino-wm-representation-study/tree/main) · [Report PDF](https://pics.iamzhaokun.com/doc/report/GNN_Final_Project.pdf)  
**Keywords:** World Models · Representation Learning · DINOv2 · Model Predictive Control

Auf Basis von **DINO-WM** habe ich auf PointMaze untersucht, wie unterschiedliche visuelle Repräsentationen und stochastische Dynamikmodelle die Vorhersage und Planung eines World Models beeinflussen.

Ein Teil der Studie vergleicht **DINOv2, V-JEPA 2 und VFM-VAE**. Zusätzlich haben wir eine kontrollierte **Patch/CLS × Deterministic/Gaussian**-Ablation durchgeführt. Deterministische Patch-Features blieben die stabilste Variante, CLS war jedoch deutlich konkurrenzfähiger als zunächst erwartet. Gaussian Dynamics verbesserten zwar das Trainingsziel, führten aber nicht konsistent zu besserer Planung.

---

### **Smart Deal Finder — Multimodaler Shopping Agent**

📅 *2026* · [GitHub](https://github.com/BufferHund/smart-deal-finder)  
**Keywords:** Multimodale KI · Document AI · VLM · AI Agents · Tool Use

Entwicklung eines **multimodalen Document-AI-Systems**, das aus Prospekten und anderen Einkaufsdokumenten Informationen wie Produkte, Preise und Rabatte extrahiert und in strukturierter Form für einen Agent bereitstellt.

Darauf aufbauend habe ich einen Shopping Agent entwickelt, der Nutzerwünsche mit den erkannten Angeboten kombiniert, Einkaufspläne erstellt und externe Tools in die Planung einbezieht. Das Projekt verbindet **multimodales Verstehen, strukturierte Informationsextraktion, LLM-Reasoning und Tool Use** zu einer durchgängigen Anwendung.

---

### **Resource-Efficient Distillation of Qwen Models**

📅 *Juli – September 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)  
**Keywords:** LLM Compression · Quantisierung · Knowledge Distillation · LoRA

Reproduktion und Erweiterung einer **Teacher–Student-Distillation-Pipeline** für *Qwen2.5-0.5B-Instruct*.
Durch die Kombination von **LoRA-Fine-Tuning** und **8-Bit-Quantisierung** wurde das Modell von 3B auf 0,5B Parameter komprimiert.
Dabei konnten bei etwa **1/6 des Rechenaufwands** rund *75 % der Teacher-Genauigkeit* erhalten werden.

---

### **K-Adapter Reproduction & Ablation Study**

📅 *Juli – September 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)  
**Keywords:** Adapter Tuning · Knowledge Injection · PEFT

Reproduktion von **K-Adapter (ACL 2021)** zur Wissensinjektion in ein eingefrorenes Pretrained Language Model.
In kontrollierten Ablationen habe ich untersucht, wie sich Tiefe, Platzierung und Task-Overlap der Adapter auswirken.
Adapter in mittleren Schichten zeigten dabei den besten Kompromiss zwischen faktischem Recall und Modellstabilität.

---

### **Hierarchical Character-Level Language Model**

📅 *Juli – September 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)  
**Keywords:** Hierarchische Sprachmodelle · Cache-Mechanismen · Representation Learning

Re-Implementierung von **HCLM+Cache (Kawakami et al., 2017)** in PyTorch, um Wortwiederverwendung in einem Open-Vocabulary-Setting zu untersuchen.
Durch **vektorisierte Berechnungen** und ein **kontinuierliches Cache-Management** konnte der Throughput um 3,8× erhöht und die Validation BPC um 11,8 % reduziert werden.
Die Ergebnisse zeigen außerdem, dass der Cache besonders wichtig für langfristige sprachliche Kohärenz ist.

---

### **LoRA-Driven Anime Style Generation**

📅 *Juli – September 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [Report PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)  
**Keywords:** LoRA · Diffusionsmodelle · Style Adaptation

Vergleich von **LoRA, Textual Inversion und DreamBooth** für Anime-Style-Fine-Tuning mit *Stable Diffusion v1.5*.
Mit nur 100 Trainingsbildern reduzierte LoRA den FID um etwa **47**, während weniger als 2 % der Modellparameter trainiert werden mussten.
Zusätzlich habe ich untersucht, wie sich verschiedene LoRA-Checkpoints interpolieren lassen, um Stile miteinander zu kombinieren.

---

### **Plant Recognition with CNNs and Transfer Learning**

📅 *Juli 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**Keywords:** Computer Vision · CNN · Transfer Learning

Implementierung und Vergleich von **ResNet, EfficientNet und Vision Transformer** für eine Pflanzenklassifikationsaufgabe.
Im Mittelpunkt stand die Frage, wie stark Transfer Learning bei begrenzten Trainingsdaten hilft.
Die Ergebnisse zeigen deutlich, dass vortrainierte Modelle die Dateneffizienz verbessern.

---

### **Self-Conditioned Generation (Reimplementation)**

📅 *Januar – März 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**Keywords:** Mechanistic Interpretability · Hidden-State Control

Reproduktion von *Self-Conditioned Pretrained LMs (ICML 2022)* mit Fokus darauf, wie Sprachmodelle ihre eigenen Hidden States als internes Feedback während der Generierung nutzen können.
Ich habe untersucht, wie sich diese Wiederverwendung auf Fluency und Stabilität im Vergleich zur normalen autoregressiven Generierung auswirkt.
Die Experimente zeigen, dass sich die Ausgabe teilweise steuern lässt, ohne ein zusätzliches Conditioning-Modell oder erneutes Training zu benötigen.

---

### **Data Contamination in Large Models**

📅 *Februar 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**Keywords:** LLM Evaluation · Data Contamination · Benchmarks

Untersuchung von **Data Contamination in LLM-Benchmarks**.
Dafür habe ich Verfahren zur **präfixbasierten Erkennung** sowie Cross-Version-Vergleiche implementiert, um mögliche Leakage-Effekte auf Evaluationsergebnisse sichtbar zu machen.
Das Projekt zeigt, wie stark Datenkuratierung, Versionierung und zeitliche Überschneidungen die Aussagekraft eines Benchmarks beeinflussen können.

---

### **MLLM: Towards Multimodal Language Models**

📅 *März 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)  
**Keywords:** Multimodale LLMs · Vision–Language Alignment

Analyse aktueller multimodaler Sprachmodelle wie **BLIP-2, Flamingo und LLaVA**.
Im Mittelpunkt stand die Frage, wie eingefrorene Sprachmodelle mit Vision Encoders verbunden werden und welche Rolle Q-Former, Projection Layers und Alignment Objectives dabei spielen.
Zusätzlich wurden offene Fragen rund um multimodales Grounding und die Skalierung von Vision-Language-Systemen diskutiert.

---

### **Temporal Reasoning in Clinical NLP**

📅 *März 2025* · [Report PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)  
**Keywords:** Temporal Reasoning · Clinical NLP · Knowledge Graphs

Untersuchung der Frage, wie LLMs **Ereignisreihenfolgen, zeitliche Beziehungen und Krankheitsverläufe** in klinischen Texten verstehen.
Dabei habe ich zentrale Schwierigkeiten des Temporal Reasoning zusammengefasst und Ansätze wie **TIMER-Instruct** und temporale Knowledge Graphs betrachtet.

---

### ✨ Woran ich arbeite

Die Projekte reichen von Agents und World Models über Modellkompression bis hin zu multimodaler KI und Inference Optimization. Dahinter steht für mich jedoch immer wieder dieselbe Frage:

**Ein Modell kann auf einem Benchmark sehr gut abschneiden, ohne bereits ein zuverlässiges KI-System zu sein.**

Sobald Modelle visuelle Informationen verarbeiten, Kontext und Memory nutzen, Tools aufrufen oder Aktionen in einer Umgebung ausführen können, reichen klassische Modellmetriken allein oft nicht mehr aus.

Ich möchte deshalb weiter an **KI-Systemen arbeiten, die tatsächlich mit ihrer Umgebung interagieren können** – und dabei nicht nur ihre Fähigkeiten, sondern auch Effizienz, Fehlermodi, Robustheit und praktische Nutzbarkeit untersuchen.
