---
title: "Vorträge und Präsentationen"
date: 2025-10-12 11:26:21
lang: de
---


Eine Auswahl von Vorträgen und Präsentationen, die ich während **Seminaren und Lesegruppen** an der Universität Heidelberg gehalten habe.  
Bei den meisten handelte es sich um kurze akademische Diskussionen, bei denen aktuelle Arbeiten, Experimente oder Reproduktionsergebnisse mit Klassenkameraden und Professoren ausgetauscht wurden.  
Es macht mir Spaß, komplexe Forschungsergebnisse in klare Ideen zu zerlegen, Theorie mit Umsetzung zu verbinden und aus den anschließenden Gesprächen zu lernen.


---

### 🧠 **Große Sprachmodelle und Interpretierbarkeit**

**LLMint8: Quantisierungsbewusste Feinabstimmung für effizientes LLMs**  
📅 *11. Juni 2025* · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
Präsentiert und analysiert den **LLMint8**-Ansatz für **quantisierungsbewusstes fine-tuning** (QAT) großer Sprachmodelle.
In dem Vortrag wurde erörtert, wie **Training mit gemischter Präzision** und **INT8-Quantisierung** die Argumentationsqualität aufrechterhalten und gleichzeitig die GPU-Speichernutzung um ~60 % senken.
Außerdem wurden QLoRA, Post-Training-Quantisierung und QAT-Strategien verglichen – was den Kompromiss zwischen Effizienz und Ausrichtungsstabilität hervorhebt.

**LMKG-GOFA: Sprachmodelle als Knowledge Graph Builder**  
📅 *7. Juli 2025* · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
Besprochen das **LMKG-GOFA**-Framework für die **LLM-basierte Ontologie und Wissensgraphenkonstruktion**.
Erklärt, wie große Modelle Entitäten und Beziehungen durch Anweisungsaufforderung und strukturierte Vorlagen extrahieren.
Überprüfte experimentelle Ergebnisse, die zeigen, dass **Sprachmodelle KGs dynamisch erweitern können** und so symbolisches Denken und Textgenerierung verbinden.


**Sprachmodellierung auf Zeichenebene: Hierarchien im Textverständnis**  
📅 *21. Mai 2025* · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/character-level_lingual_modeling_presentation_slides_0521.pdf)  
Präsentiert einen kritischen Überblick über Techniken zur **hierarchischen Sprachmodellierung auf Zeichenebene**.
Untersucht, wie mehrschichtige wiederkehrende Netzwerke **Struktur und Morphologie** aus Rohtextsequenzen erfassen.
Hervorgehoben, wie sich diese Architekturen auf die aktuelle **Unterwort-tokenization- und Interpretierbarkeitsforschung** beziehen.


**Selbstkonditionierung: Modellen beibringen, auf sich selbst zu hören**  
📅 * 20. Dezember 2024 * · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
Rezensierte den Artikel *Self-Conditioned Pretrained Language Models (ICML 2022)* mit Schwerpunkt auf **mechanistischer Interpretierbarkeit** und **Kontrolle auf Konzeptebene**.
Erklärt, wie „Expertenneuronen“ reaktiviert werden können, um die Textgenerierung **ohne zusätzliches fine-tuning** zu steuern und so eine schnelle Konditionierung mit geringem Overhead zu ermöglichen.
Verglich den Ansatz mit **FUDGE** und **PPLM**, wobei Verbesserungen in Bezug auf Geschwindigkeit, Verwirrung und semantische Präzision hervorgehoben wurden.

---

### 🩺 **Multimodales und klinisches Sprachverständnis**




**Forschung zur multimodalen Fusion zeitlicher elektronischer Krankenakten**  
📅 *10. November 2024* · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
Habe einen Artikel überprüft, der **T-MAG (Time-series Multimodal Adaptation Gate)** vorschlägt – ein Fusionsmodell für heterogene EMR-Daten.
Erklärt, wie **LSTM**- und **Transformer-XL**-Encoder strukturierte und textuelle Zeitreihendaten integrieren, während **MAG** mehrere Modalitäten dynamisch ausgleicht und **Attention-Backtracking** langfristige Abhängigkeiten erfasst.
Hervorgehoben, dass klinische Notizen als Hauptmodalität die beste Vorhersageleistung erzielten (AUROC ≈ 0,95 bei Schlaganfalldatensätzen).
Besprochene Implikationen für die **Vorhersage klinischer Ergebnisse** und das **Lernen der zeitlichen Darstellung** in der KI im Gesundheitswesen.


**Klinisches Sprachverständnis – Teil I und II**  
📅 *3. Februar 2025* · [Teil I PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Teil II PDF](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
Analysierte Systeme aus der gemeinsamen Aufgabe **2024 Chemotherapy Treatment Timeline Extraction**.
Zusammengefasstes **LAILabs Flan-T5 + LoRA**-Modell für die anweisungsgesteuerte zeitliche Beziehungsextraktion und **KCLabs PubMedBERT-Pipeline** zur Integration von **UMLS**-Wissen.
Verglichene End-to-End- und Pipeline-Ansätze und diskutierte Kompromisse zwischen **Präzision, Rückruf** und **Interpretierbarkeit** bei der EHR-Verarbeitung.
Abgeschlossen mit Einblicken in die **Behandlung von Niederfrequenzbeziehungen**, die **halbüberwachte Datenerweiterung** und die Grenzen der **LLM-Generalisierung** im klinischen Text.

---

### ⚖️ **KI-Ethik, Voreingenommenheit und Sicherheit**



**Datenvergiftung in großen Modellen: Risiken und Abwehrmaßnahmen**  
📅 *25. November 2024* · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
Präsentiert eine Rezension von *Carlini et al., 2023* zur **praktischen Machbarkeit einer groß angelegten Datenvergiftung**.
Erklärt die *Split-View*- und *Frontrunning*-Angriffe, die abgelaufene oder vorhersehbare URLs in verteilten und zentralisierten Datensätzen wie **LAION-400M** und **Wikipedia** ausnutzen.
Es wurde gezeigt, dass eine Vergiftung von nur **0,01 % der Daten (~ 60 $ Kosten)** gezielte Schwachstellen in nachgelagerte LLMs einschleusen kann.
Besprochene Abwehrmechanismen, einschließlich **kryptografischer Integritätsprüfungen**, **Snapshot-Randomisierung** und **konsensbasierter Datensatzüberprüfung**, um die Sicherheit offener Korpora im Web-Maßstab zu stärken.

**KI generiert verdeckt rassistische Entscheidungen basierend auf Dialekt**  
📅 *12. November 2024 * · [Vorschaufolien (PDF)](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
Analysierte eine soziolinguistische Studie, die **dialektbedingte Vorurteile in LLM- und Speech-to-Text-Systemen** aufdeckte.
In der Präsentation wurde untersucht, wie Modelle implizite Stereotypen bei der Verarbeitung von **African-American Vernacular English (AAVE)** und anderen nicht standardmäßigen Dialekten kodieren.
Hervorgehobene Ergebnisse, dass Klassifikatoren **weniger günstige Urteile und höhere Toxizitätswerte** für identische Inhalte liefern, die sich nur im dialektalen Stil unterscheiden.
Besprochene Abhilfe durch **schnelle Kalibrierung, Repräsentationsausgleich** und **kontrastives fine-tuning** zur Reduzierung latenter soziokultureller Vorurteile.





