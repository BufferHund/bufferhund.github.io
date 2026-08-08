---
title: "Multimodalität verstehen: Wie Modelle sehen und lesen"
date: 2024-09-30 14:20:00
updated: 2024-10-07 12:45:00
categories:
  - ML/NLP
tags: [Multimodal AI, Computer Vision, NLP, Grad School]
lang: de
---




# Multimodalität verstehen: Wie Modelle sehen und lesen

Die meiste Zeit meiner NLP-Reise bestand die Welt aus Text. Token, Einbettungen, Transformatoren – alles wunderschön sprachlich. Dann kam die multimodale KI und alles änderte sich.

Plötzlich lasen die Models nicht mehr nur – sie *sahen, hörten, erdeten* und spielten sogar.
Für mein Graduiertenseminar habe ich mich eingehend mit einer Frage beschäftigt:
**Wie bringt man ein Modell dazu, sowohl ein Bild als auch einen Satz zu verstehen – nicht einzeln, sondern zusammen?**

Bei dem, was ich fand, ging es nicht nur um Architektur.
Es ging um *Philosophie*: konkurrierende Vorstellungen davon, was „Verstehen“ überhaupt bedeutet, wenn Wahrnehmung und Sprache aufeinander treffen.

---

## 1. Wann mischen wir die Zutaten?

Jedes multimodale Modell steht vor einer grundlegenden Designfrage:
**Wann treffen die Modalitäten aufeinander?**

### Early Fusion – Alles im Mixer

Die frühe Fusion mischt zu Beginn Modalitäten. Bildpixel und Texttoken werden in denselben Vektorraum projiziert, und ein einzelner Transformator lernt gleichzeitig von beiden.

Auf diese Weise lernen **CLIP** und ähnliche Modelle reichhaltige, gemeinsame Einbettungen – Räume, in denen „ein Hund auf einem Surfbrett“ und das entsprechende Bild nahe beieinander liegen.

Der Vorteil: tiefe, feinkörnige Abstimmung zwischen Vision und Sprache.
Die Kosten: enormer Rechenaufwand und weniger Modularität.

Die frühe Fusion ist leistungsstark, geht jedoch davon aus, dass Ihr Modell alles gemeinsam lernen *kann und sollte* – eine sehr „all-in“-Philosophie.

### Späte Fusion – trennen, dann kombinieren

Die späte Fusion ist pragmatischer. Jede Modalität hat ihr eigenes Spezialmodell – einen Vision-Encoder, einen Sprach-Encoder – und sie verschmelzen erst am Ende.

Es ist, als würden zwei Experten separate Berichte schreiben und dann ihre Notizen vergleichen.
Dadurch lässt sich das System einfacher skalieren und warten, es gehen jedoch subtile Interaktionen auf niedriger Ebene verloren.

> Early fusion aims for *shared representation.*
> Late fusion aims for *specialized collaboration.*

Beide funktionieren. Aber die wirklichen Durchbrüche kommen jetzt von einer dritten Idee – nicht dem Mischen, sondern der *Kommunikation*.

---

## 2. Cross-Modal Attention: Ein Dialog zwischen den Sinnen

Moderne Architekturen wie **Flamingo**, **BLIP-2** und **LLaVA** verschmelzen oder trennen sich nicht vollständig. Sie *unterhalten*.

Sie unterhalten zwei Informationsströme – einen visuellen und einen textlichen – und bauen **Brücken der Aufmerksamkeit** zwischen ihnen.
Der Text-Encoder kann bestimmte Teile des Bildes „anschauen“, während der Vision-Encoder seine Darstellung anhand sprachlicher Hinweise aktualisiert.

Es ist keine Fusion; es ist eine *Aushandlung der Bedeutung.*
Wenn das Modell *„Der Mann hält einen roten Regenschirm“* liest, kann es sich auf den Bildbereich konzentrieren, der tatsächlich rote Pixel in Form eines Regenschirms enthält.

Dieses Design spiegelt etwas zutiefst Menschliches wider:
unsere Fähigkeit, Wahrnehmung und Sprache dynamisch und nicht statisch zu integrieren.
Wir sehen nicht nur und beschreiben dann; wir *sehen, weil wir beschreiben.*

---

## 3. Auf dem Weg zu einem einheitlichen Gehirn: Ein Transformer, der sie alle beherrscht

Die ehrgeizigsten Systeme – wie **PaLM-E** oder **GPT-4V** – gehen sogar noch weiter.
Sie unterscheiden überhaupt nicht zwischen den Modalitäten.

In diesen Architekturen ist *alles* ein token – ein Wort, ein Bildausschnitt, sogar eine Roboteraktion.
Der Transformator verarbeitet sie alle als Teil einer riesigen Sequenz.

Konzeptionell ist das atemberaubend.
Es deutet darauf hin, dass Intelligenz vielleicht nicht modalitätsspezifisch ist – vielleicht ist sie *repräsentationsunabhängig*.

In der Praxis erfordert dieser Ansatz jedoch astronomische Daten und Berechnungen.
Einen „universellen Encoder“ für die gesamte menschliche Wahrnehmung zu entwickeln, ist so schwierig, wie es klingt.
Und doch ist es ein kleiner Vorgeschmack darauf, wie ein wirklich **allgemeines** Modell aussehen könnte.

---

## 4. Die pragmatische Revolution: Adapter und Modularität

Als studentischer Forscher ohne Zugang zu Milliarden von Parametern oder Clustern von TPUs liegt meine Faszination in der **adapterbasierten Multimodalität**.

Anstatt ein umfangreiches Vision-Sprachmodell von Grund auf zu trainieren, können wir ein vorhandenes LLM mit kleinen, trainierbaren Modulen – „Adaptern“ – *erweitern*.

Diese Adapter fungieren wie Übersetzer und bilden visuelle Einbettungen (aus einem vorab trainierten Vision-Modell wie ViT oder CLIP) in den embedding-Raum des Sprachmodells ab.
Sie lassen die LLM Bilder ohne vollständige Umschulung „verstehen“.

```python
# Simplified pseudocode
image_features = vision_encoder(image)
adapted_features = adapter(image_features)
response = language_model(prompt, context=adapted_features)
```

Dieser Ansatz ist günstig, elegant und modular.
Auf diese Weise demokratisierten **BLIP-2** und **LLaVA** die multimodale Forschung: indem sie zeigten, dass Multimodalität nicht nur etwas für Milliarden-Dollar-Labore ist.

> Adapters represent a mindset shift — from *scaling everything* to *connecting everything.*

---

## 5. Meine Überlegungen: Warum sich Multimodalität tiefgreifend anfühlt

Das Studium multimodaler Modelle hat meine Einstellung zu Intelligenz verändert.

Reine Textmodelle zeichnen sich durch hervorragende Argumentation aus, aber es mangelt ihnen an Bodenhaftung – sie können die Welt beschreiben, ohne sie jemals zu berühren.
Visionsmodelle nehmen die Welt wahr, können aber keine Bedeutung artikulieren.

Multimodalität schließt diese Lücke.
Es bringt die Semantik näher an die **Verkörperung** – an die Idee, dass Verständnis nicht nur durch Symbole, sondern durch die Interaktion mit der Realität entsteht.

Und doch sah ich auch seine Zerbrechlichkeit.
Sogar hochmoderne Modelle haben immer noch Halluzinationen, richten Bild und Text falsch aus oder werden durch subtile Kontextverschiebungen verwirrt.
Sie „sehen“, aber sie nehmen die Absicht nicht wahr.
Sie „lesen“, aber sie argumentieren nicht kausal.*

Diese Spannung – zwischen Wahrnehmung und Bedeutung – könnte das nächste Jahrzehnt der KI-Forschung bestimmen.

---

## 6. Das Fazit: Sehen ist nicht genug

Multimodalität ist nicht nur eine technische Entwicklung; Es ist eine philosophische Frage.
Es treibt die KI von **symbolischer Intelligenz** hin zu **verkörperter Intelligenz** – Systemen, die das, was sie *sehen*, mit dem, was sie *sagen, in Einklang bringen können.

Am Ende wurde mir klar, dass das Spannendste an der Multimodalität nicht darin besteht, dass Models jetzt Bilder beschriften oder Videos beschreiben können.
Sie zwingen uns, uns einer tieferen Frage zu stellen:

> What does it *really* mean to understand something?

Deshalb fasziniert mich Multimodalität – nicht weil sie der KI mehr Sensoren hinzufügt, sondern weil sie
sondern weil es Modelle ein wenig näher an den menschlichen Zustand bringt:
sehen, lesen und vielleicht eines Tages *begreifen.*

---

