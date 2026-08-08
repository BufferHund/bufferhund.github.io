---
title: "Vorträge & Präsentationen"
lang: de
---
Hier habe ich einige Vorträge zusammengestellt, die ich im Rahmen von **Seminaren, Kursen und Reading Groups** an der Universität Heidelberg gehalten habe.

Inhaltlich ging es meist um aktuelle Papers, Modellarchitekturen, Experimente oder Reproduktionsarbeiten. Mich interessiert dabei weniger eine reine Zusammenfassung als die Frage, warum ein Ansatz funktioniert, wo es bei der Umsetzung schwierig wird und wie er sich in bestehende Systeme einordnet.

---

### 🧠 **Large Language Models, Modellarchitekturen & Interpretierbarkeit**

**Mixture-of-Recursions: Unterschiedliche Rechentiefe für unterschiedliche Tokens**  
📅 *2. Februar 2026* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/ATTPre_MoR.pdf)  
Im Kurs *Is Attention All You Need? The Search for a New Architecture* habe ich **Mixture-of-Recursions (MoR)** vorgestellt.  
Statt jedes Token durch dieselbe feste Anzahl von Transformer-Layern zu schicken, kombiniert MoR **Parameter Sharing mit dynamischem Routing** und weist Tokens je nach Bedarf unterschiedliche Rechentiefen zu.  
Im Vortrag ging es außerdem um **Expert-Choice vs. Token-Choice Routing**, die praktischen Probleme von **KV Caching bei dynamischer Tiefe** und die Frage, wann sich dieser Ansatz tatsächlich in höherem Inferenzdurchsatz auszahlt.

**LLMint8: Quantization-Aware Fine-Tuning für effizientere LLMs**  
📅 *11. Juni 2025* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/LLMint8_slides_v2_Zhaokun.pdf)  
In diesem Vortrag habe ich den **LLMint8**-Ansatz für Quantization-Aware Fine-Tuning (QAT) analysiert.  
Im Mittelpunkt stand die Frage, wie sich **Mixed-Precision Training und INT8-Quantisierung** kombinieren lassen, um den Speicherbedarf großer Sprachmodelle zu senken, ohne ihre Fähigkeiten unnötig stark zu beeinträchtigen.  
Außerdem habe ich QLoRA, Post-Training Quantization und QAT gegenübergestellt und die jeweiligen Kompromisse bei Speicherbedarf, Trainingsaufwand und Modellqualität diskutiert.

**LMKG-GOFA: Wissensgraphen mit Sprachmodellen aufbauen**  
📅 *7. Juli 2025* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/LMKG_GOFA_slides_0707.pdf)  
Der Vortrag drehte sich um **LMKG-GOFA** und allgemein um die Frage, wie sich große Sprachmodelle für den Aufbau von Ontologien und Wissensgraphen einsetzen lassen.  
Ich habe gezeigt, wie Entitäten und Relationen über Instruktionen und strukturierte Templates extrahiert und bestehende Wissensgraphen anschließend erweitert werden können.  
Spannend fand ich vor allem die Verbindung zwischen der offenen Textverarbeitung von LLMs und der klaren, strukturierten Repräsentation eines Knowledge Graphs.

**Character-Level Language Modeling: Hierarchische Strukturen direkt aus Zeichen lernen**  
📅 *21. Mai 2025* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/character-level_language_modeling_presentation_slides_0521.pdf)  
Hier habe ich einige klassische Ansätze zum hierarchischen Character-Level Language Modeling aufgearbeitet.  
Ein Schwerpunkt lag darauf, wie mehrschichtige rekurrente Netze direkt aus Zeichenfolgen morphologische Muster, lokale Strukturen und höherliegende Repräsentationen lernen.  
Dabei habe ich auch den Bogen zu heutigen **Subword-Tokenizern** und zur Frage geschlagen, wie sich interne Repräsentationen eines Sprachmodells besser verstehen lassen.

**Self-Conditioning: Generierung über interne Modellrepräsentationen steuern**  
📅 *20. Dezember 2024* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Self-conditioning%20presentation%20slides.pdf)  
In diesem Vortrag ging es um *Self-Conditioned Pretrained Language Models (ICML 2022)*.  
Die Idee: interne Neuronen, die mit bestimmten Konzepten zusammenhängen, gezielt zu aktivieren und damit die Generierung zu beeinflussen — **ohne das Modell zusätzlich zu fine-tunen**.  
Ich habe den Ansatz außerdem mit **FUDGE** und **PPLM** verglichen und betrachtet, wie sich die Verfahren bei Kontrollierbarkeit, Geschwindigkeit und zusätzlichem Rechenaufwand unterscheiden.

---

### 🩺 **Multimodalität, Document AI & Clinical NLP**

**DeepSeek-OCR: Lange Texte in visuellen Repräsentationen komprimieren**  
📅 *16. Januar 2026* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Document_AI_DeepSeek_OCR.pdf)  
Im Seminar *Document AI* habe ich **DeepSeek-OCR** vorgestellt.  
Die zentrale Idee fand ich besonders interessant: Langen Text nicht einfach vollständig als Text-Tokens an ein Sprachmodell weiterzugeben, sondern ihn zunächst visuell darzustellen und anschließend mit einem Vision Encoder auf deutlich weniger visuelle Tokens zu komprimieren.  
Im Vortrag habe ich den **DeepEncoder**, die Token-Kompression und die anschließende Dekodierung erläutert und diskutiert, was diese Art von „visuellem Kontext-Compression“ für lange Dokumente, mehrsprachiges OCR und Long-Context-Modelle bedeuten könnte.

**Multimodale Modellierung zeitlicher elektronischer Patientenakten**  
📅 *10. November 2024* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Research%20on%20Multimodal%20Fusion%20of%20Temporal%20Electronic%20Medical%20Records%20Slides.pdf)  
In diesem Vortrag ging es um ein Modell zur multimodalen Verarbeitung zeitlicher elektronischer Patientenakten.  
**LSTM** und **Transformer-XL** verarbeiten unterschiedliche zeitliche Informationsquellen, während **T-MAG** strukturierte Daten und klinische Texte dynamisch miteinander verbindet.  
Ich habe vor allem betrachtet, welchen Beitrag die einzelnen Modalitäten zur Vorhersage leisten und wie relevante klinische Informationen über längere Zeiträume hinweg erhalten werden können.

**Clinical Language Understanding — Part I & II**  
📅 *3. Februar 2025* · [Part I (PDF)](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part1.pdf) | [Part II (PDF)](https://pics.iamzhaokun.com/doc/talk/Clinical%20Language%20Understanding%20Slides%20Part2.pdf)  
Ausgangspunkt war die **2024 Chemotherapy Treatment Timeline Extraction Shared Task**.  
Ich habe unter anderem LAILabs **Flan-T5 + LoRA**-Ansatz und KCLabs Pipeline auf Basis von **PubMedBERT und UMLS** verglichen.  
Im Mittelpunkt standen die Unterschiede zwischen End-to-End-Modellen und klassischen Pipelines bei Precision, Recall, Interpretierbarkeit und seltenen Relationstypen — sowie die generelle Frage, wie gut LLMs bei knappen klinischen Trainingsdaten tatsächlich generalisieren.

---

### ⚖️ **AI Ethics, Bias & Security**

**Data Poisoning bei großen Modellen: Wie realistisch sind solche Angriffe?**  
📅 *25. November 2024* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/Data%20poisoning%20presentation%200130.pdf)  
Der Vortrag basierte auf *Carlini et al., 2023* und beschäftigte sich mit der praktischen Seite von Data Poisoning bei sehr großen Trainingsdatensätzen.  
Die spannende Frage war weniger, ob sich theoretisch ein Angriff konstruieren lässt, sondern wie leicht Angreifer tatsächlich Einfluss auf Trainingsdaten aus dem offenen Web nehmen können.  
Ich habe die **Split-View- und Frontrunning-Angriffe** erklärt und am Beispiel von LAION-400M und Wikipedia diskutiert, welche Schwachstellen in heutigen Datensammelprozessen entstehen und wie sich ihre Integrität besser absichern ließe.

**Treffen Modelle aufgrund von Dialekt versteckte rassistische Entscheidungen?**  
📅 *12. November 2024* · [Slides ansehen (PDF)](https://pics.iamzhaokun.com/doc/talk/AI%20generates%20covertly%20racist%20decisions%20about%20people%20based%20on%20their%20dialect.pdf)  
Hier habe ich eine soziolinguistische Studie über **Dialekt-Bias in Sprachmodellen** vorgestellt.  
Die Experimente zeigen, dass Modelle identische Inhalte unterschiedlich bewerten können, wenn lediglich Sprachstil oder Dialekt verändert werden.  
Im Vortrag ging es insbesondere um **African-American Vernacular English (AAVE)** und darum, wie versteckte soziale Vorurteile eines Modells Klassifikation, Toxicity Scores und andere nachgelagerte Entscheidungen beeinflussen können.
