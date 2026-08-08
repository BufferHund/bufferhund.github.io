---
title: "Auseinandersetzung mit der LLM-Bewertung: Feldnotizen eines Studenten"
date: 2025-03-28 11:10:00
updated: 2025-04-03 23:46:00
categories:
  - ML/NLP
tags: [Evaluation, LLM, Metrics, Machine Learning, Research]
lang: de
---




# Auseinandersetzung mit der LLM-Bewertung: Feldnotizen eines Studenten

Als ich anfing, mit großen Sprachmodellen zu arbeiten, dachte ich, dass die Auswertung der einfachere Teil sein würde.
In meinem früheren NLP-Kurs haben Sie ein Modell trainiert, F1 oder Genauigkeit berechnet und waren fertig.
Aber dann bin ich in die Welt der **generativen Modelle** eingestiegen und alles hat keinen Sinn mehr ergeben.

Wie „bewertet“ man einen Textabschnitt?
Ein Gedicht? Eine Python-Funktion?
Ab wann wird aus einer *plausiblen* Antwort eine *gute* Antwort?

Diese Fragen haben fast jedes Experiment verfolgt, das ich dieses Jahr durchgeführt habe.

---

## 1. Die alte Garde: Als Worte genug waren

Jeder beginnt mit den Klassikern – **BLEU**, **ROUGE**, **METEOR**.
Sie sind die Komfortzone eines jeden, der mit Maschinenübersetzungspapieren aufgewachsen ist.
Sie vergleichen die Überlappung von N-Gramm zwischen der Ausgabe Ihres Modells und Referenztexten, beispielsweise beim Zählen passender Puzzleteile.

Sie sind schnell, reproduzierbar und leicht zu erklären – was wahrscheinlich der Grund ist, warum wir sie immer noch verwenden.
Aber sie haben auch zunehmend das Gefühl, nicht mehr mit dem übereinzustimmen, was LLMs tatsächlich tut.*

Als ich zum ersten Mal ein Zusammenfassungsmodell verfeinerte, ergab es eine klare, elegante Zusammenfassung, die eine völlig andere Formulierung als die Referenz verwendete.
Semantisch perfekt.
BLEU Punktzahl? Schrecklich.

Das war mein erster „Aha“-Moment: Diese Kennzahlen belohnen Nachahmung, nicht Verständnis.
Sie messen die *Oberflächenähnlichkeit*, wenn wir eigentlich die *semantische Ausrichtung* messen wollen.
Es ist das klassische Problem, das Ziel zu treffen, aber den Punkt zu verfehlen.

---

## 2. Fokusverlagerung: Von Token zur Bedeutung

Betreten Sie die neue Welle der **semantischen Metriken** – Tools wie **BERTScore**, **MoverScore** und **BLEURT**.
Anstatt Wörter zu vergleichen, vergleichen sie *Darstellungen* im embedding-Raum.

Das fühlt sich wie ein Fortschritt an.
Wenn ich BERTScore zur Zusammenfassung oder Übersetzung verwende, wird eine Art Bedeutungsüberschneidung erfasst, die bei N-Gramm-Metriken völlig übersehen wird.
Zwei Sätze können sich im Wortlaut unterscheiden, weisen aber dennoch eine hohe kontextuelle Ähnlichkeit auf – ein Zeichen dafür, dass das Modell „es verstanden“ hat.

Aber semantische Metriken bringen ihre eigenen subtilen Fehlermodi mit sich.
Sie verlassen sich auf die Qualität der zugrunde liegenden Einbettungen, was bedeutet, dass jede Verzerrung oder Fehlausrichtung im Referenzmodell Auswirkungen auf die Bewertung hat.
Sie haben gerade eine Art Blindheit (gegenüber der Bedeutung) gegen eine andere (gegenüber dem Kontext) eingetauscht.

Trotzdem bevorzuge ich sie. Sie sind chaotisch, ähneln aber eher der Art und Weise, wie wir Menschen Sprache tatsächlich beurteilen – nach Resonanz, nicht nach Replikation.

---

## 3. Der menschliche Flaschenhals

In unserem Labor endet das Gespräch immer an der gleichen Stelle, egal wie weit sich die Metriken weiterentwickeln:
**„Wir brauchen Menschen.“**

Geläufigkeit, Kohärenz, sachliche Genauigkeit, Treue – das sind Dinge, die nur Menschen sinnvoll beurteilen können.
Keine automatische Metrik kann erkennen, ob sich ein Modell mitten in einem Absatz subtil widerspricht oder selbstbewusst eine gefälschte Statistik halluziniert.

Deshalb entwerfen wir menschliche Bewertungen: kleine Studien, paarweise Vergleiche, Likert-Scores.
Und dann stoßen wir auf eine weitere Wand – Kosten, Zeit und Subjektivität.

Als Doktorand dauert die Rekrutierung von Annotatoren, die Definition von Rubriken und die Sicherstellung der Übereinstimmung zwischen Annotatoren oft länger als die eigentliche Modellierung.
Und als die Ergebnisse schließlich zurückkommen, stimmen sie nicht überein.
Die chaotische, menschliche Seite der Bewertung wird sowohl zum Goldstandard als auch zur größten Lärmquelle.

Aber vielleicht passt das.
Wenn LLMs dazu gedacht ist, die menschliche Sprache zu modellieren, sollte ihre Bewertung vielleicht auch unsere Inkonsistenz übernehmen.

---

## 4. Erweiterung der Definition von „gut“: Sicherheit und Voreingenommenheit

In jüngster Zeit hat sich die Bewertung in unserer Abteilung zunehmend in eine ethischere Richtung entwickelt.
Es reicht nicht mehr aus, dass ein Modell fließend spricht oder sachlich korrekt ist; Es muss außerdem **sicher, fair und robust** sein.

Wir umfassen jetzt Benchmarks wie **StereoSet**, **CrowS-Pairs** und kontradiktorische Prompt-Tests.
Wir fragen:

* Does the model treat all demographics equally in sentiment tasks?
* Does it remain stable when phrasing changes slightly?
* Does it produce harmful or biased outputs under pressure?

Auffallend ist, wie sich die Bewertung von einer einzelnen Bewertung zu einem **mehrdimensionalen Gespräch** entwickelt hat.
Leistung steht jetzt neben Verantwortung.
Genauigkeit ist wichtig, aber auch *Verantwortung*.

---

## 5. Was ich gelernt habe: Bewertung als Interpretation

Nachdem ich monatelang versucht habe, Qualität zu quantifizieren, bin ich dazu gekommen, die LLM-Bewertung weniger als „Messung“ und mehr als **Interpretation** zu betrachten.
Es gibt keine einzelne Zahl, die den Wert eines Modells erfasst – nur Perspektiven.

Der richtige Evaluierungsaufbau hängt von der Frage ab, die Sie wirklich stellen:

* *Do I want to measure linguistic overlap?* → BLEU/ROUGE.
* *Do I care about meaning preservation?* → BERTScore or BLEURT.
* *Do I want to understand human preference?* → Human evaluation or pairwise ranking.
* *Do I want to ensure safety?* → Bias, robustness, and toxicity tests.

Eine umfassende Bewertung ist keine Checkliste, sondern ein Mosaik.
Jede Metrik fügt ein Stück hinzu und zusammen ergeben sie ein Bild, das noch unvollständig, aber zunehmend kohärent ist.

---

## 6. Abschließende Überlegungen: Die Wissenschaft der Mehrdeutigkeit

Als Student habe ich die Klarheit älterer NLP-Aufsätze beneidet – eine Metrik, eine Bestenliste, ein Gewinner.
Jetzt sehe ich, dass Mehrdeutigkeit Teil des Territoriums ist.

Die Bewertung von LLMs bedeutet, sich mit der Sprache selbst auseinanderzusetzen: unscharf, kontextbezogen, menschlich.
Es geht weniger darum, *die Zahl* zu finden, als vielmehr darum, herauszufinden, *was die Zahl verbirgt.*

Manchmal ist diese Erkenntnis frustrierend.
Aber es ist auch befreiend – denn es erinnert mich daran, dass es bei der KI-Forschung im besten Fall nicht darum geht, das menschliche Urteilsvermögen zu ersetzen.
Es geht darum, unser Urteil bewusster, transparenter und fundierter zu gestalten.

Das ist die eigentliche Lektion, die ich durch die LLM-Bewertung gelernt habe:
Wir vermessen nicht nur Modelle.
Wir messen, wie wir über Sprache denken – und über uns selbst.

