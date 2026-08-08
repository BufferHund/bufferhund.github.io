---
title: "Vorträge & Präsentationen"
lang: de
---
Eine Auswahl an Vorträgen und Präsentationen, die ich im Rahmen von **Seminaren und Lesegruppen** an der Universität Heidelberg gehalten habe.
Die meisten davon waren kurze akademische Beiträge, in denen ich aktuelle Arbeiten, Experimente oder Reproduktionsergebnisse mit Kommiliton:innen und Lehrenden diskutiert habe.
Mir macht es besonders Spaß, komplexe Forschung auf klare Kernideen herunterzubrechen, Theorie mit praktischer Umsetzung zu verbinden und aus den anschließenden Diskussionen zu lernen.


### 🧠 **Large Language Models, Architekturen & Interpretierbarkeit**

**Mixture-of-Recursions: Adaptive Berechnung auf Token-Ebene**  
📅 *2. Februar 2026* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/ATTPre_MoR.pdf)  
Vorgestellt wurde die **Mixture-of-Recursions-(MoR)-Architektur** im Seminar *Is Attention All You Need? The Search for a New Architecture*.  
Ich erläuterte, wie MoR **rekursive Parameterteilung** mit **adaptiver Berechnung auf Token-Ebene** kombiniert, sodass unterschiedliche Tokens unterschiedliche effektive Verarbeitungstiefen nutzen können, anstatt einen festen Transformer-Stack vollständig zu durchlaufen.  
Verglichen wurden **Expert-Choice- und Token-Choice-Routing**; außerdem diskutierte ich die Herausforderungen des **KV-Cachings bei dynamischer Tiefe** sowie Ergebnisse, die unter den evaluierten Bedingungen einen bis zu **2,06× höheren Inferenzdurchsatz** gegenüber einem klassischen Transformer zeigen.

**LLMint8: Quantization-Aware Fine-Tuning für effiziente LLMs**  
📅 *11. Juni 2025* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
Vorgestellt und analysiert wurde der **LLMint8**-Ansatz für **Quantization-Aware Fine-Tuning** (QAT) großer Sprachmodelle.  
Der Vortrag behandelte, wie **Mixed-Precision-Training** und **INT8-Quantisierung** die Qualität des Reasonings weitgehend erhalten und gleichzeitig den GPU-Speicherbedarf um rund 60 % reduzieren können.  
Zusätzlich verglich ich QLoRA, Post-Training Quantization und QAT und diskutierte den Zielkonflikt zwischen Effizienz und Stabilität des Modellverhaltens.

**LMKG-GOFA: Sprachmodelle als Konstrukteure von Wissensgraphen**  
📅 *7. Juli 2025* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
Diskutiert wurde das **LMKG-GOFA**-Framework für die **LLM-basierte Konstruktion von Ontologien und Wissensgraphen**.  
Ich erklärte, wie große Sprachmodelle mittels Instruction Prompting und strukturierter Templates Entitäten und Relationen extrahieren.  
Die experimentellen Ergebnisse zeigten, wie **Sprachmodelle Wissensgraphen dynamisch erweitern können** und damit symbolisches Schließen und Textgenerierung miteinander verbinden.

**Character-Level Language Modeling: Hierarchien im Textverständnis**  
📅 *21. Mai 2025* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
Präsentiert wurde eine kritische Einordnung **hierarchischer zeichenbasierter Sprachmodelle**.  
Ich untersuchte, wie mehrschichtige rekurrente Netzwerke **Strukturen und Morphologie** direkt aus rohen Textsequenzen erfassen.  
Außerdem stellte ich Bezüge zu heutigen Ansätzen der **Subword-Tokenisierung und Interpretierbarkeitsforschung** her.

**Self-Conditioning: Wenn Modelle auf sich selbst hören**  
📅 *20. Dezember 2024* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
Besprochen wurde die Arbeit *Self-Conditioned Pretrained Language Models (ICML 2022)* mit Schwerpunkt auf **mechanistischer Interpretierbarkeit** und **Kontrolle auf Konzeptebene**.  
Ich erklärte, wie sogenannte „Expert Neurons“ reaktiviert werden können, um die Textgenerierung **ohne zusätzliches Fine-Tuning** zu steuern und dadurch eine schnelle, ressourcenschonende Konditionierung zu ermöglichen.  
Der Ansatz wurde mit **FUDGE** und **PPLM** verglichen, wobei insbesondere Verbesserungen bei Geschwindigkeit, Perplexität und semantischer Präzision hervorgehoben wurden.

---

### 🩺 **Multimodales, Dokument- & klinisches Sprachverstehen**

**DeepSeek-OCR: Optische Kompression von Kontext**  
📅 *16. Januar 2026* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Document_AI_DeepSeek_OCR.pdf)  
Vorgestellt wurde **DeepSeek-OCR** im Seminar *Document AI*, mit besonderem Fokus auf die Idee, die **visuelle Modalität als komprimierte Repräsentation textuellen Kontexts** zu verwenden.  
Ich erläuterte die **DeepEncoder**-Architektur, die lokale visuelle Verarbeitung, einen **16× Token-Kompressor** und globale visuelle Kodierung kombiniert, bevor ein Mixture-of-Experts-Sprachmodell die Ausgabe dekodiert.  
Diskutiert wurden Experimente zu **Vision-Text-Kompression, mehrsprachigem Dokumenten-Parsing und strukturiertem OCR** sowie die Frage, wie kompakte visuelle Repräsentationen die Kontextlänge reduzieren können, ohne wesentliche Informationen für das Dokumentverständnis zu verlieren.

**Multimodale Fusion temporaler elektronischer Patientenakten**  
📅 *10. November 2024* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
Besprochen wurde eine Arbeit zu **T-MAG (Time-series Multimodal Adaptation Gate)**, einem Fusionsmodell für heterogene EMR-Daten.  
Ich erklärte, wie **LSTM**- und **Transformer-XL**-Encoder strukturierte und textuelle Zeitreihendaten integrieren, während **MAG** verschiedene Modalitäten dynamisch gewichtet und **Attention-Backtracking** langfristige Abhängigkeiten erfasst.  
Die klinischen Notizen als Hauptmodalität erzielten dabei die beste Vorhersageleistung mit einer AUROC von ungefähr 0,95 auf Schlaganfall-Datensätzen.  
Abschließend diskutierte ich Implikationen für **klinische Outcome-Prognosen** und **temporales Repräsentationslernen** im Bereich Healthcare AI.

**Clinical Language Understanding — Teil I & II**  
📅 *3. Februar 2025* · [Teil I (PDF)](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Teil II (PDF)](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
Analysiert wurden Systeme aus der **2024 Chemotherapy Treatment Timeline Extraction** Shared Task.  
Ich stellte das **Flan-T5 + LoRA**-Modell von LAILab für instruction-tuned temporale Relationsextraktion sowie die **PubMedBERT-Pipeline** von KCLab mit integrierten **UMLS**-Informationen vor.  
Verglichen wurden End-to-End- und Pipeline-Ansätze mit Blick auf Zielkonflikte zwischen **Precision, Recall** und **Interpretierbarkeit** bei der Verarbeitung elektronischer Gesundheitsakten.  
Abschließend diskutierte ich Ansätze für **seltene Relationstypen**, **semi-supervised Data Augmentation** sowie Grenzen der **LLM-Generaliserung** in klinischen Texten.

---

### ⚖️ **KI-Ethik, Bias & Sicherheit**

**Data Poisoning in großen Modellen: Risiken und Gegenmaßnahmen**  
📅 *25. November 2024* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
Vorgestellt wurde eine Analyse von *Carlini et al., 2023* zur **praktischen Machbarkeit großskaliger Data-Poisoning-Angriffe**.  
Ich erklärte die *Split-View*- und *Frontrunning*-Angriffe, die abgelaufene oder vorhersehbare URLs in verteilten und zentralisierten Datensätzen wie **LAION-400M** und **Wikipedia** ausnutzen.  
Die Ergebnisse zeigen, dass bereits die Manipulation von **0,01 % der Daten bei Kosten von ungefähr 60 US-Dollar** gezielte Schwachstellen in nachgelagerte Modelle einschleusen kann.  
Diskutiert wurden Gegenmaßnahmen wie **kryptografische Integritätsprüfungen**, **zufällige Snapshot-Auswahl** und **konsensbasierte Datensatzverifikation**, um die Sicherheit offener Web-Datensätze zu erhöhen.

**KI trifft verdeckt rassistische Entscheidungen auf Basis von Dialekten**  
📅 *12. November 2024* · [Präsentation ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
Analysiert wurde eine soziolinguistische Studie zu **dialektbedingtem Bias in LLMs und Speech-to-Text-Systemen**.  
Die Präsentation untersuchte, wie Modelle implizite Stereotype beim Umgang mit **African-American Vernacular English (AAVE)** und anderen nicht standardsprachlichen Varietäten kodieren.  
Hervorgehoben wurde, dass Klassifikatoren bei inhaltlich identischen Aussagen mit unterschiedlichem Dialekt **ungünstigere Bewertungen und höhere Toxicity-Scores** erzeugen können.  
Abschließend diskutierte ich mögliche Gegenmaßnahmen durch **Prompt Calibration, ausgewogenere Repräsentationen** und **Contrastive Fine-Tuning**, um latente soziokulturelle Verzerrungen zu reduzieren.
