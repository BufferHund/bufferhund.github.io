---
title: "LLM Forschung"
date: 2025-10-11 16:58:05
lang: de
---


Ich suche derzeit nach **HiWi-/wissenschaftlichen Hilfsstellen** im Zusammenhang mit **großen Sprachmodellen (LLMs)**,
insbesondere in **effizienten fine-tuning**, **multimodalen Fusion** und **agentischen Argumentationssystemen**.

Technisch habe ich praktische Erfahrung damit
**Agent fine-tuning**, **MCP (Model Context Protocol)** und **parametereffiziente Anpassungsmethoden** wie LoRA, Adapter und quantisierte Destillation.
Meine Arbeit kombiniert oft *Engineering auf Systemebene* mit *forschungsgetriebenem Experimentieren* –
Ich mag es, Dinge zu bauen, die uns helfen zu verstehen, wie Modelle denken.

Mich interessiert besonders:

* **Multimodal understanding** — bridging language, vision, and structured data to ground reasoning.
* **Efficient fine-tuning** — making large models smaller, faster, and adaptive without losing reasoning depth.
* **Interpretability** — uncovering how internal activations, neurons, or adapters encode concepts.

Nachfolgend finden Sie einige aktuelle Projekte, die meinen Ansatz widerspiegeln: die Integration von **praktischem Ingenieurwesen** mit **Forschungsneugier**.

---

### **Ressourceneffiziente Destillation von Qwen-Modellen**

📅 *Jul – September 2025* · [GitHub](https://github.com/BufferHund/ResourceEfficient_Distillation_SemesterProject) · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Resource-Efficient%20Knowledge%20Distillation%20for%20Qwen2.5-0.5B-Instruct.pdf)
**Schlüsselwörter:** LLM Komprimierung · Quantisierung · Wissensdestillation · LoRA

Reproduzierte und erweiterte eine **Lehrer-Schüler-Destillationspipeline** für *Qwen2.5–0.5B-Instruct*.
Kombiniert **LoRA fine-tuning** mit **8-Bit-Quantisierung**, um das Modell von 3B auf 0,5B Parameter zu komprimieren.
Erzielte *75 % der Lehrergenauigkeit mit 6-mal geringerer Rechenleistung* – ein Beweis für skalierbare Effizienz für mittelgroße Unternehmen LLMs.

![Distillation Pipeline Illustration](https://pics.iamzhaokun.com/2025/10/d2eb6cc4c4bc2f2ec960f1fea69ec4cf.png)
---

### **K-Adapter-Reproduktions- und Ablationsstudie**

📅 *Jul – September 2025* · [GitHub](https://github.com/BufferHund/K-Adapter_SemesterProject) · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Exploring%20the%20K-Adapter%20Framework.pdf)
**Schlüsselwörter:** Adapteroptimierung · Wissensinjektion · PEFT

**K-Adapter (ACL 2021)** für die Wissensinjektion über eingefrorene PLMs neu implementiert.
Führte kontrollierte Ablationen für die Tiefe, Platzierung und Aufgabenüberlappung der Adapterschicht durch.
Gefundene Mid-Layer-Adapter boten optimale Kompromisse zwischen Faktenerinnerung und Modellstabilität.


![K-Adapter Reproduction & Ablation Study](https://pics.iamzhaokun.com/2025/10/19525cba61f491581f5153d720497d80.png)
---

### **Hierarchisches Sprachmodell auf Zeichenebene**

📅 *Jul – September 2025* · [GitHub](https://github.com/BufferHund/HierarchicalCharLM_Reimplementation) · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Hierarchical%20Character-level%20Language%20Model%20Re-implementation.pdf)
**Schlüsselwörter:** Hierarchisches LM · Cache-Mechanismen · Repräsentationslernen

**HCLM+Cache (Kawakami et al., 2017)** in PyTorch neu implementiert, um die Wiederverwendung von Wörtern in Umgebungen mit offenem Vokabular zu untersuchen.
Einführung von **vektorisierter Berechnung** und **kontinuierlicher Cache-Verwaltung**, was den Durchsatz um das 3,8-fache verbessert und den Validierungs-BPC um 11,8 % reduziert.
Es wurde gezeigt, dass die Cache-Komponente am meisten zur sprachlichen Kohärenz über große Entfernungen beiträgt.

---

### **LoRA-gesteuerte Generierung von Anime-Stilen**

📅 *Jul – September 2025* · [GitHub](https://github.com/BufferHund/lora_anime_finetune) · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/LoRA-Driven%20Anime%20Style%20Generation.pdf)
**Schlüsselwörter:** LoRA · Diffusionsmodelle · Multimodale Anpassung

Benchmarking **LoRA** mit **Textual Inversion** und **DreamBooth** für die Generierung im Anime-Stil mit *Stable Diffusion v1.5*.
Zeigte, dass LoRA bei kleinen Datensätzen (100 Bilder) bei Verwendung von <2 % trainierbaren Parametern eine FID-Reduktion von ~47* erreichte.
Erkundete **Stilmischungen** durch Interpolation von LoRA-Kontrollpunkten und demonstrierte kompositorische Flexibilität.

---
### **Pflanzenerkennung mit CNNs und Transferlernen**

📅 *Juli 2025* · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Evaluating%20CNN%20Architectures%20and%20Transfer%20Learning%20for%20Plant%20Recognition.pdf)  
**Schlüsselwörter:** Computer Vision · CNN · Transferlernen

Entwicklung und Vergleich der Basislinien **ResNet**, **EfficientNet** und **Vision Transformer** anhand eines Pflanzenklassifizierungsdatensatzes.
Demonstriert, wie **Transfer-Lernen** die Dateneffizienz erheblich verbessert –  
dient als frühe Untersuchung der Modellgeneralisierung und Wiederverwendung von Funktionen.

---

### **Selbstkonditionierte Generation (Reimplementierung)**

📅 *Januar – März 2025* · [GitHub](https://github.com/BufferHund/selfcond-reimplementation) · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**Schlüsselwörter:** Mechanistische Interpretierbarkeit · Hidden-State-Steuerung

Reproduzierte *Selbstkonditionierte vortrainierte LMs (ICML 2022)* mit Schwerpunkt auf **internen Rückkopplungsschleifen** bei der Generierung.
Analysiert, wie die Wiederverwendung verborgener Zustände die Sprachverständlichkeit und Stabilität im Vergleich zur standardmäßigen autoregressiven Dekodierung verbessert.
Demonstrierte steuerbare Textsteuerung ohne externe Konditionierung oder Umschulung.






---

### **Datenkontamination in großen Modellen**

📅 *Februar 2025* · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Data_Contamination_Project_Report.pdf)  
**Schlüsselwörter:** LLM Auswertung · Datensatzintegrität · Zeitliche Robustheit

Untersuchte Kontamination in offenen LLM-Bewertungsdatensätzen.
Implementierte Pipelines zur **präfixbasierten Erkennung** und zum **versionsübergreifenden Vergleich**, um Leakage-Effekte zu quantifizieren.
Bereitstellung empirischer Unterstützung für eine strengere Datensatzkuratierung im benchmark-Design.

---

### **MLLM: Auf dem Weg zu multimodalen Sprachmodellen**

📅 *März 2025* · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/MLLM_Term_Paper.pdf)
**Schlüsselwörter:** Multimodal LLMs · Vision-Sprach-Ausrichtung

Untersuchung und Analyse aktueller multimodaler LLM-Architekturen (z. B. BLIP-2, Flamingo, LLaVA).
Konzentriert sich darauf, wie **eingefrorene Sprachrückgrate** mit **visuellen Q-Formern** und **Ausrichtungszielen** interagieren.
Besprochene offene Herausforderungen bei der modalübergreifenden Verankerung und Skalierbarkeit der Bild-Text-Fusion.

---


### **Zeitliches Denken im klinischen NLP**

📅 *März 2025* · [Bericht PDF](https://pics.iamzhaokun.com/doc/report/Temporal_Reasoning_Term_Paper.pdf)
**Schlüsselwörter:** Temporales Denken · Klinisches NLP · Wissensgraphen

Überprüfte, wie **LLMs mit zeitlichen Informationen** in klinischen Erzählungen umgeht.
Fasst die wichtigsten Herausforderungen chronologisch inference zusammen und diskutiert Methoden wie **TIMER-Instruct** und **zeitliche Wissensgraphen** zur Verbesserung der Ereignissequenzierung und Modellzuverlässigkeit.

---


### ✨ Forschungsschwerpunkt

Bei all meinen Arbeiten zieht es mich zu einer großen Idee:
wie man große Modelle **anpassungsfähiger, erklärbarer und fundierter** macht.

Ob durch **Agent fine-tuning**, **multimodale Fusion** oder **parametereffizientes Lernen**,
Ich arbeite gerne an der Schnittstelle von **Forschung und realen Systemen** —
theoretische Fragen in reproduzierbare, funktionierende Prototypen umwandeln.

Wenn Ihr Labor oder Team ähnliche Themen erforscht, würde ich mich gerne als **wissenschaftlicher Mitarbeiter** oder **HiWi** beteiligen
und dabei helfen, *technische Praktikabilität* mit *wissenschaftlichen Erkenntnissen* zu verbinden.






