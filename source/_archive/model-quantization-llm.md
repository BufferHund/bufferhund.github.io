---
title: "How I Shrank My LLM: A Student's Dive into Model Quantization"
date: 2024-12-20 13:50:00
updated: 2024-12-24 10:31:00
categories:
  - ML/NLP
tags: [Quantization, LLM, Model Compression, Machine Learning, Hardware]
---


# How I Shrank My LLM: A Student’s Dive into Model Quantization

The first time I loaded a large language model for my research, I felt two emotions at once: awe and defeat.
Awe, because the model could generate paragraphs of reasoning that felt eerily human.
Defeat, because my university GPU couldn’t even fine-tune it without crashing.

That moment — sitting in front of a blinking `CUDA out of memory` error — was the real beginning of my education in machine learning.
It was when I realized that intelligence, in machines or in people, is often bounded not by ideas but by **resources**.

That constraint sent me down the path of model compression, and my first real encounter was with *quantization* — a deceptively simple trick that asks a profound question:
*how much precision does intelligence really need?*

---

## 1. Quantization: The Art of Forgetting Just Enough

Most tutorials will tell you quantization “reduces precision from float32 to int8.”
That’s true. But it misses the essence.

What quantization really does is **force a model to forget carefully**.
It doesn’t just shrink numbers; it decides which bits of information are dispensable for performance and which are essential for meaning.

I started thinking of it like language itself.
When we talk, we compress the infinite complexity of reality into finite words — we quantize thought into symbols.
Some nuance is lost, but efficiency is gained.
That trade-off is what allows communication to exist at all.

In neural networks, the story is the same.
Each parameter holds an echo of training data. Quantization turns those high-fidelity echoes into approximations.
The surprising part? Most of the time, the meaning survives.

---

## 2. My First Experiment: The Joy and Discomfort of PTQ

My first experiment used **Post-Training Quantization (PTQ)** — the fast-food version of compression.
No retraining, no fine-tuning; just take a pretrained model and convert its weights to 8-bit integers.

The experience was intoxicating: a model that once demanded 12 GB of VRAM now ran smoothly on my laptop.
But when I ran my evaluation scripts, I noticed something subtle.
Accuracy dropped slightly — not catastrophically, but perceptibly.
The model’s fluency remained, yet its reasoning felt… thinner, like it had forgotten how to second-guess itself.

That’s when I understood that quantization isn’t merely an engineering problem — it’s a question of **epistemology**.
At what point does approximation stop being representation?
Where is the boundary between efficiency and erosion of understanding?

PTQ, for all its elegance, taught me that compression without adaptation is like translation without context: technically correct, yet semantically fragile.

---

## 3. Quantization-Aware Training: Teaching Models to Live With Constraints

To fix that fragility, I tried **Quantization-Aware Training (QAT)** — letting the model *experience* low precision during fine-tuning.
Instead of compressing after the fact, QAT simulates quantization inside the training loop.

This approach felt philosophical:
you don’t just shrink intelligence; you **train it to thrive under limits.**

The results were striking.
My quantized model retained almost all its performance, yet ran faster and smaller.
The difference wasn’t just computational — it was behavioral.
The model had *learned to be precise without being perfect.*

That, to me, was a metaphor for every human researcher working under time, budget, or hardware constraints.
You don’t need infinite resources — you need awareness of your limits and adaptation around them.
QAT is exactly that principle, expressed in code.

---

## 4. The Trade-off That Defines Modern AI

Quantization forced me to confront one of the central paradoxes of our field:
**scale versus accessibility**.

Every new generation of LLMs stretches further into the stratosphere — trillions of parameters, petaflops of compute.
But the higher the peak, the fewer people can climb it.
Quantization, pruning, distillation — these are not just optimizations. They are *acts of democratization.*

They remind us that progress in AI isn’t measured only by the ceiling of capability, but by the **floor of accessibility**.
A model that runs only in a data center teaches no students.
A smaller model that runs on a laptop changes how the next generation learns.

Compression, in that sense, is not the opposite of progress — it’s its conscience.

---

## 5. What Shrinking a Model Teaches About Intelligence

After weeks of tweaking quantization parameters, I realized something personal:
the process of shrinking a model mirrors the process of *understanding it*.

Every approximation you introduce forces a question:
Which details truly matter?
What patterns define intelligence, and what redundancies masquerade as depth?

When you strip away 24 bits of precision and the model still speaks coherently, you start to wonder:
maybe intelligence doesn’t live in precision at all,
but in *structure* — in the way representations are organized, not the exactness of their values.

That realization felt liberating.
Quantization isn’t just about efficiency — it’s about humility.
It reminds us that intelligence, human or artificial, doesn’t require infinite precision to produce meaning.

---

## 6. The Broader Lesson: Constraint as Creativity

By the end of my experiments, I stopped seeing quantization as a hack and started seeing it as a **discipline**.
It’s the art of doing more with less — a kind of intellectual minimalism.

Every researcher starts by dreaming of unlimited compute.
But working within limits teaches something deeper:
that innovation often begins where abundance ends.

My GPU never got stronger.
But my understanding of models — and of intelligence itself — got sharper,
because I had to think about *what to preserve* when you can’t keep everything.

That’s what quantization taught me:
AI research isn’t only about building bigger models; it’s about learning what can be safely forgotten —
and still keep the meaning intact.

---

### Closing Thought

When I started this journey, I thought I was compressing a model.
In hindsight, it was compressing *me*:
forcing my curiosity, ambition, and impatience into a shape that could fit inside reality’s hardware limits.

And in that compression — just like in quantization —
I lost a bit of precision,
but gained a lot of understanding.

