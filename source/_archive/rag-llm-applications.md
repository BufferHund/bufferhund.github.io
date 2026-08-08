---
title: "Building My First RAG System: Grounding LLMs in Reality"
date: 2025-01-18 09:30:00
updated: 2025-01-20 08:49:00
categories:
  - ML/NLP
tags: [RAG, LLM, Information Retrieval]
---



# Building My First RAG System: Grounding LLMs in Reality

When you first encounter large language models, one phrase stands out: **“knowledge cutoff.”**
Ask them about something that happened last week, and they’ll politely admit ignorance.

For a research project last semester, our goal was to build a Q&A system about *recent* developments in natural language processing — exactly the kind of problem where that limitation hurts most.

That’s when our professor introduced us to **Retrieval-Augmented Generation (RAG)** — a deceptively simple yet transformative idea.
It’s like giving a model not just a brain, but a library card.

---

## 1. The “Open-Book Exam” for LLMs

RAG reframes the LLM’s role. Instead of being a static oracle, it becomes an *interpreter* — capable of reasoning over new information, not just memorized patterns.

The process unfolds in two key steps:

1. **Retrieve:**
   When a user asks a question, the system doesn’t go straight to the model.
   Instead, it uses a *retriever* to search a knowledge base — papers, wiki pages, internal documents — and selects the most relevant snippets.
2. **Generate:**
   The retrieved context and the query are fed together into the model.
   The prompt becomes something like:

   > “Given the following information, answer the question below.”

It’s an open-book exam for the model — where the “textbook” updates in real time.

This small architectural twist changes everything: it transforms LLMs from **static knowledge systems** into **dynamic reasoning agents**.

---

## 2. Getting My Hands Dirty: What I Actually Built

Our dataset was a corpus of recent NLP papers — thousands of PDFs converted into text.

I started by building the **retriever**, the unsung hero of any RAG pipeline.
We embedded every paragraph using **SentenceTransformers** and stored them in a **FAISS** index for fast vector search.

Here’s a simplified sketch of the retrieval logic:

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

It felt almost magical.
A query like *“What’s new in multi-modal retrieval?”* would surface a paragraph discussing CLIP-like models — even if the word *“multi-modal”* never appeared in the text.

Semantic search was no longer about keywords; it was about *meaning*.

The generator side was straightforward: we passed the query and retrieved context into an OpenAI or local LLM endpoint with a carefully designed system prompt:

```
You are an assistant that answers questions using the provided documents.
If the answer cannot be found in the context, say “The information is not available.”
```

This last instruction — “admit when you don’t know” — turned out to be one of the most important lines in the whole system.

---

## 3. What I Learned: Retrieval Is the Real Bottleneck

I went in thinking the LLM would be the hard part.
It wasn’t. The *retriever* was.

When the retriever failed — returned vague or irrelevant passages — the generator would still produce confident, eloquent nonsense.
This was the “garbage in, garbage out” principle made painfully visible.

I learned that evaluating a RAG system isn’t about measuring **BLEU scores** or **F1** on generated text.
It’s about measuring **retrieval precision and coverage** — the system’s ability to surface the *right evidence*.

I also noticed another subtle trade-off:

* More documents retrieved ⇒ higher recall, but also higher noise.
* Fewer documents ⇒ cleaner input, but risk of missing key facts.

Balancing that trade-off — often around *k = 3 to 5* context chunks — became an iterative, data-driven art.

---

## 4. Where RAG Shines (and Where It Doesn’t)

After dozens of experiments, I realized RAG isn’t just a technical trick; it’s a philosophical correction.
It grounds a language model’s confidence in *evidence*.

RAG shines when:

* **The source corpus changes frequently.** Think news, research, internal documentation.
* **Transparency matters.** You can trace every generated answer back to a citation.
* **Domain adaptation is costly.** RAG gives you domain expertise without retraining the model.

But RAG is not a silver bullet.
If the corpus is noisy, outdated, or poorly chunked, retrieval drags everything down.
And because it operates as a two-stage system, **latency** becomes a practical concern in real-time applications.

There’s also a deeper limitation: RAG can *fetch* facts, but it doesn’t inherently know *how to reason* across them.
Combining multiple retrieved pieces into a coherent, logically sound answer remains an open research challenge — one that methods like **Graph-RAG**, **multi-hop retrieval**, and **hybrid reranking** are beginning to tackle.

---

## 5. My Reflections: Why RAG Feels Different

Working on RAG changed how I view LLMs entirely.
I used to think of them as knowledge engines — static minds with fixed memories.
Now, I see them as **reasoning frameworks** that depend on context, just like humans.

The best part was how *human* the process felt.
When I didn’t know something, I would Google it, skim the top results, and synthesize an answer.
That’s exactly what RAG does — but at machine speed.

There was a moment that stuck with me:
After tuning retrieval thresholds for days, I asked the system a question about a 2024 ACL paper I had just added.
The model cited it correctly, summarized it concisely, and added a disclaimer:

> “This paper suggests a hybrid dense-sparse retrieval framework, but replication results are limited.”

It wasn’t just correct. It was *thoughtful*.
That’s when I realized — grounding a model doesn’t just make it factual; it makes it **trustworthy**.

---

## 6. Looking Ahead

RAG is not the end of the story; it’s the beginning of a more modular, interpretable AI ecosystem.
Soon, retrieval won’t just be about documents — it’ll extend to **APIs**, **databases**, and even **sensor data**, letting models integrate reasoning with real-world systems.

Building my first RAG system taught me something profound:
The frontier of AI isn’t in bigger models.
It’s in **better grounding** — connecting models to the dynamic, messy, constantly changing world they’re meant to understand.

> Large language models can speak beautifully, but RAG teaches them to *listen first*.

