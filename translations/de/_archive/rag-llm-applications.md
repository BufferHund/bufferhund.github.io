---
title: "Aufbau meines ersten RAG-Systems: Verankerung von LLMs in der Realität"
date: 2025-01-18 09:30:00
updated: 2025-01-20 08:49:00
categories:
  - ML/NLP
tags: [RAG, LLM, Information Retrieval]
lang: de
---




# Aufbau meines ersten RAG-Systems: Verankerung von LLMs in der Realität

Wenn Sie zum ersten Mal auf große Sprachmodelle stoßen, sticht ein Satz ins Auge: **„Wissensgrenze.“**
Fragen Sie sie nach etwas, das letzte Woche passiert ist, und sie werden höflich ihre Unwissenheit zugeben.

Für ein Forschungsprojekt im letzten Semester bestand unser Ziel darin, ein Frage-und-Antwort-System zu *neuen* Entwicklungen in der Verarbeitung natürlicher Sprache aufzubauen – genau die Art von Problem, bei dem diese Einschränkung am meisten schmerzt.

Da stellte uns unser Professor **Retrieval-Augmented Generation (RAG)** vor – eine täuschend einfache, aber transformative Idee.
Es ist, als würde man einem Modell nicht nur ein Gehirn, sondern einen Bibliotheksausweis geben.

---

## 1. Die „Open-Book-Prüfung“ für LLMs

RAG definiert die Rolle von LLM neu. Anstatt ein statisches Orakel zu sein, wird es zu einem *Dolmetscher* – der in der Lage ist, über neue Informationen nachzudenken, nicht nur über gespeicherte Muster.

Der Prozess verläuft in zwei wesentlichen Schritten:

1. **Abrufen:**
   Wenn ein Benutzer eine Frage stellt, geht das System nicht direkt zum Modell.
   Stattdessen verwendet es einen *Retriever*, um eine Wissensdatenbank – Aufsätze, Wiki-Seiten, interne Dokumente – zu durchsuchen und die relevantesten Auszüge auszuwählen.
2. **Generieren:**
   Der abgerufene Kontext und die Abfrage werden gemeinsam in das Modell eingespeist.
   Die Eingabeaufforderung sieht etwa so aus:

   > “Given the following information, answer the question below.”

Es handelt sich um eine Open-Book-Prüfung für das Modell, bei der das „Lehrbuch“ in Echtzeit aktualisiert wird.

Diese kleine architektonische Wendung verändert alles: Sie verwandelt LLMs von **statischen Wissenssystemen** in **dynamische Argumentationsagenten**.

---

## 2. Meine Hände schmutzig machen: Was ich tatsächlich gebaut habe

Unser Datensatz bestand aus einem Korpus aktueller NLP-Artikel – Tausende von PDFs, die in Text umgewandelt wurden.

Ich begann mit dem Bau des **Retrievers**, dem unbesungenen Helden jeder RAG-Pipeline.
Wir haben jeden Absatz mit **SentenceTransformers** eingebettet und in einem **FAISS**-Index für eine schnelle Vektorsuche gespeichert.

Hier ist eine vereinfachte Skizze der Abruflogik:

```python
from sentence_transformers import SentenceTransformer
import faiss

model = SentenceTransformer("all-MiniLM-L6-v2")

# Build the index
embeddings = model.encode(documents, normalize_embeddings=True)
index = faiss.IndexFlatIP(embeddings.shape[1])
index.add(embeddings)

# Query
query_vec = model.encode([user_query], normalize_embeddings=True)
_, indices = index.search(query_vec, k=5)
retrieved_docs = [documents[i] for i in indices[0]]
```

Es fühlte sich fast magisch an.
Eine Abfrage wie „Was gibt es Neues beim multimodalen Abruf?“* würde einen Absatz anzeigen, in dem CLIP-ähnliche Modelle besprochen werden – selbst wenn das Wort „multimodal“* nie im Text vorkommt.

Bei der semantischen Suche ging es nicht mehr um Schlüsselwörter; es ging um *Sinn*.

Die Generatorseite war unkompliziert: Wir haben die Abfrage und den abgerufenen Kontext mit einer sorgfältig gestalteten Systemeingabeaufforderung an einen OpenAI- oder lokalen LLM-Endpunkt übergeben:

```
You are an assistant that answers questions using the provided documents.
If the answer cannot be found in the context, say “The information is not available.”
```

Diese letzte Anweisung – „Gib zu, wenn du es nicht weißt“ – erwies sich als eine der wichtigsten Zeilen im gesamten System.

---

## 3. Was ich gelernt habe: Das Abrufen ist der eigentliche Engpass

Ich dachte, dass der LLM der schwierige Teil sein würde.
Das war es nicht. Der *Retriever* war.

Wenn der Retriever versagte und vage oder irrelevante Passagen zurückgab, produzierte der Generator immer noch selbstsicheren, beredten Unsinn.
Dies war das „Müll rein, Müll raus“-Prinzip, das schmerzlich sichtbar gemacht wurde.

Ich habe gelernt, dass es bei der Bewertung eines RAG-Systems nicht darum geht, **BLEU-Scores** oder **F1** für generierten Text zu messen.
Es geht darum, die **Abrufgenauigkeit und -abdeckung** zu messen – die Fähigkeit des Systems, die *richtigen Beweise* aufzudecken.

Mir ist auch ein weiterer subtiler Kompromiss aufgefallen:

* More documents retrieved ⇒ higher recall, but also higher noise.
* Fewer documents ⇒ cleaner input, but risk of missing key facts.

Das Ausbalancieren dieses Kompromisses – oft um *k = 3 bis 5* Kontextblöcke – wurde zu einer iterativen, datengesteuerten Kunst.

---

## 4. Wo RAG glänzt (und wo nicht)

Nach Dutzenden von Experimenten wurde mir klar, dass RAG nicht nur ein technischer Trick ist; Es ist eine philosophische Korrektur.
Es begründet das Vertrauen eines Sprachmodells in *Beweisen*.

RAG leuchtet, wenn:

* **The source corpus changes frequently.** Think news, research, internal documentation.
* **Transparency matters.** You can trace every generated answer back to a citation.
* **Domain adaptation is costly.** RAG gives you domain expertise without retraining the model.

Aber RAG ist kein Allheilmittel.
Wenn der Korpus verrauscht, veraltet oder schlecht aufgeteilt ist, zieht der Abruf alles nach unten.
Und weil es als zweistufiges System arbeitet, wird die **Latenz** bei Echtzeitanwendungen zu einem praktischen Problem.

Es gibt auch eine tiefere Einschränkung: RAG kann Fakten *abrufen*, aber es weiß nicht von Natur aus, *wie man sie argumentieren soll*.
Das Kombinieren mehrerer abgerufener Teile zu einer kohärenten, logisch fundierten Antwort bleibt eine offene Forschungsherausforderung – eine, die Methoden wie **Graph-RAG**, **Multi-Hop-Abruf** und **Hybrid-Reranking** allmählich bewältigen.

---

## 5. Meine Überlegungen: Warum sich RAG anders anfühlt

Die Arbeit an RAG hat meine Sicht auf LLMs völlig verändert.
Früher habe ich sie mir als Wissensmotoren vorgestellt – statische Köpfe mit festen Erinnerungen.
Jetzt sehe ich sie als **Denkrahmen**, die vom Kontext abhängen, genau wie Menschen.

Das Beste daran war, wie *menschlich* sich der Prozess anfühlte.
Wenn ich etwas nicht wusste, googelte ich es, überflog die Top-Ergebnisse und fasste eine Antwort zusammen.
Genau das macht RAG – aber mit Maschinengeschwindigkeit.

Es gab einen Moment, der mir im Gedächtnis geblieben ist:
Nachdem ich tagelang die Abrufschwellenwerte optimiert hatte, stellte ich dem System eine Frage zu einem ACL-Papier von 2024, das ich gerade hinzugefügt hatte.
Das Modell zitierte es korrekt, fasste es prägnant zusammen und fügte einen Haftungsausschluss hinzu:

> “This paper suggests a hybrid dense-sparse retrieval framework, but replication results are limited.”

Es war nicht nur richtig. Es war *nachdenklich*.
Da wurde mir klar, dass die Verankerung eines Modells nicht nur dazu führt, dass es sachlich wird; es macht es **vertrauenswürdig**.

---

## 6. Blick nach vorne

RAG ist nicht das Ende der Geschichte; Es ist der Beginn eines modulareren, besser interpretierbaren KI-Ökosystems.
Bald wird es beim Abrufen nicht nur um Dokumente gehen – es wird sich auf **APIs**, **Datenbanken** und sogar **Sensordaten** erstrecken und es Modellen ermöglichen, Argumente mit realen Systemen zu integrieren.

Durch den Aufbau meines ersten RAG-Systems habe ich etwas Tiefgründiges gelernt:
Die Grenzen der KI liegen nicht in größeren Modellen.
Es geht um eine **bessere Erdung** – die Verbindung von Modellen mit der dynamischen, chaotischen und sich ständig verändernden Welt, die sie verstehen sollen.

> Large language models can speak beautifully, but RAG teaches them to *listen first*.


