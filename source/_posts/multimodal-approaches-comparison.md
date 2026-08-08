---
title: "Making Sense of Multimodality: How Models See and Read"
date: 2024-09-30 14:20:00
updated: 2024-10-07 12:45:00
categories:
  - ML/NLP
tags: [Multimodal AI, Computer Vision, NLP, Grad School]
---



# Making Sense of Multimodality: How Models See and Read

For most of my NLP journey, the world was made of text. Tokens, embeddings, transformers — all beautifully linguistic. Then multimodal AI arrived, and everything changed.

Suddenly, models weren’t just reading — they were *seeing, hearing, grounding,* even *acting.*
For my graduate seminar, I dove deep into one question:
**How do you get a model to understand both an image and a sentence — not separately, but together?**

What I found wasn’t just about architecture.
It was about *philosophy*: competing ideas of what “understanding” even means when perception and language meet.

---

## 1. When Do We Mix the Ingredients?

Every multimodal model faces a fundamental design question:
**When do the modalities meet?**

### Early Fusion — Everything in the Blender

Early fusion mixes modalities at the start. Image pixels and text tokens are projected into the same vector space, and a single transformer learns from both simultaneously.

This is how **CLIP** and similar models learn rich, joint embeddings — spaces where “a dog on a surfboard” and the corresponding image sit close together.

The upside: deep, fine-grained alignment between vision and language.
The cost: enormous computation and less modularity.

Early fusion is powerful, but it assumes your model *can and should* learn everything jointly — a very “all-in” philosophy.

### Late Fusion — Separate, Then Combine

Late fusion is more pragmatic. Each modality has its own specialist model — a vision encoder, a language encoder — and they only merge at the end.

It’s like two experts writing separate reports, then comparing notes.
This makes the system easier to scale and maintain, but you lose subtle low-level interactions.

> Early fusion aims for *shared representation.*
> Late fusion aims for *specialized collaboration.*

Both work. But the real breakthroughs now come from a third idea — not mixing, but *communicating.*

---

## 2. Cross-Modal Attention: A Dialogue Between Senses

Modern architectures like **Flamingo**, **BLIP-2**, and **LLaVA** don’t fully blend or separate. They *converse*.

They maintain two information streams — one visual, one textual — and build **bridges of attention** between them.
The text encoder can “look” at specific parts of the image, while the vision encoder updates its representation based on linguistic cues.

It’s not fusion; it’s a *negotiation of meaning.*
When the model reads *“the man holding a red umbrella,”* it can focus on the region of the image that actually contains red pixels shaped like an umbrella.

This design mirrors something profoundly human:
our ability to integrate perception and language dynamically, not statically.
We don’t just see and then describe; we *see because we describe.*

---

## 3. Toward a Unified Brain: One Transformer to Rule Them All

The most ambitious systems — like **PaLM-E** or **GPT-4V** — go even further.
They don’t distinguish between modalities at all.

In these architectures, *everything* is a token — a word, an image patch, even a robotic action.
The transformer processes all of them as part of one giant sequence.

Conceptually, this is breathtaking.
It suggests that maybe intelligence isn’t modality-specific — maybe it’s *representation-agnostic.*

But in practice, this approach demands astronomical data and compute.
Building a “universal encoder” for all human perception is as hard as it sounds.
And yet, it’s a glimpse of what a truly **general** model might look like.

---

## 4. The Pragmatic Revolution: Adapters and Modularity

As a student researcher without access to billions of parameters or clusters of TPUs, my fascination lies with **adapter-based multimodality.**

Instead of training a massive vision-language model from scratch, we can *extend* an existing LLM with small, trainable modules — “adapters.”

These adapters act like translators, mapping visual embeddings (from a pretrained vision model like ViT or CLIP) into the language model’s embedding space.
They let the LLM “understand” images without full retraining.

```python
# Simplified pseudocode
image_features = vision_encoder(image)
adapted_features = adapter(image_features)
response = language_model(prompt, context=adapted_features)
```

This approach is cheap, elegant, and modular.
It’s how **BLIP-2** and **LLaVA** democratized multimodal research: by showing that multimodality isn’t just for billion-dollar labs.

> Adapters represent a mindset shift — from *scaling everything* to *connecting everything.*

---

## 5. My Reflections: Why Multimodality Feels Profound

Studying multimodal models has changed how I think about intelligence.

Pure text models excel at reasoning but lack grounding — they can describe the world without ever touching it.
Vision models perceive the world but can’t articulate meaning.

Multimodality bridges that gap.
It brings semantics closer to **embodiment** — to the idea that understanding comes not from symbols alone, but from interaction with reality.

And yet, I also saw its fragility.
Even state-of-the-art models still hallucinate, misalign vision and text, or get confused by subtle context shifts.
They “see,” but they don’t *perceive intention.*
They “read,” but they don’t *reason causally.*

That tension — between perception and meaning — might define the next decade of AI research.

---

## 6. The Takeaway: Seeing Isn’t Enough

Multimodality is not just a technical evolution; it’s a philosophical one.
It pushes AI from **symbolic intelligence** toward **embodied intelligence** — systems that can align what they *see* with what they *say.*

In the end, I realized that the most exciting part of multimodality isn’t that models can now caption images or describe videos.
It’s that they force us to confront a deeper question:

> What does it *really* mean to understand something?

That’s why multimodality fascinates me — not because it adds more sensors to AI,
but because it brings models a little closer to the human condition:
to see, to read, and maybe, someday, to *comprehend.*

---
