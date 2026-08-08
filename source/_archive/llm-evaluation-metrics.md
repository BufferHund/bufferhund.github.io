---
title: "Grappling with LLM Evaluation: A Student's Field Notes"
date: 2025-03-28 11:10:00
updated: 2025-04-03 23:46:00
categories:
  - ML/NLP
tags: [Evaluation, LLM, Metrics, Machine Learning, Research]
---



# Grappling with LLM Evaluation: A Student’s Field Notes

When I first started working with large language models, I thought evaluation would be the easy part.
In my earlier NLP coursework, you trained a model, calculated F1 or accuracy, and you were done.
But then I moved into the world of **generative models**, and everything stopped making sense.

How do you “grade” a paragraph of text?
A poem? A Python function?
At what point does a *plausible* answer become a *good* one?

Those questions have haunted nearly every experiment I’ve run this year.

---

## 1. The Old Guard: When Words Were Enough

Everyone begins with the classics — **BLEU**, **ROUGE**, **METEOR**.
They’re the comfort zone of anyone raised on machine translation papers.
They compare the overlap of n-grams between your model’s output and reference texts, like counting matching puzzle pieces.

They’re fast, reproducible, and easy to explain — which is probably why we still use them.
But they also feel increasingly out of step with what LLMs actually *do.*

The first time I fine-tuned a summarization model, it produced a clean, elegant summary that used entirely different phrasing from the reference.
Semantically perfect.
BLEU score? Terrible.

That was my first “aha” moment: these metrics reward imitation, not understanding.
They measure *surface similarity* when what we actually want to measure is *semantic alignment*.
It’s the classic problem of hitting the target while missing the point.

---

## 2. Shifting Focus: From Tokens to Meaning

Enter the new wave of **semantic metrics** — tools like **BERTScore**, **MoverScore**, and **BLEURT**.
Instead of comparing words, they compare *representations* in embedding space.

This feels like progress.
When I use BERTScore for summarization or translation, it captures a kind of meaning overlap that n-gram metrics completely miss.
Two sentences can differ in wording but still share high contextual similarity — a sign the model “got it.”

But semantic metrics bring their own subtle failure modes.
They rely on the quality of the underlying embeddings, which means any bias or misalignment in the reference model ripples into the evaluation.
You’ve just traded one kind of blindness (to meaning) for another (to context).

Still, I find myself preferring them. They’re messy but closer to how we humans actually judge language — by resonance, not replication.

---

## 3. The Human Bottleneck

In our lab, no matter how far metrics evolve, the conversation always ends in the same place:
**“We need humans.”**

Fluency, coherence, factual accuracy, faithfulness — these are things only people can meaningfully judge.
No automatic metric can tell if a model subtly contradicted itself halfway through a paragraph or confidently hallucinated a fake statistic.

So, we design human evaluations: small-scale studies, pairwise comparisons, Likert scores.
And then we run into another wall — cost, time, and subjectivity.

As a grad student, recruiting annotators, defining rubrics, and ensuring inter-annotator agreement often takes longer than the actual modeling.
And when the scores finally come back, they don’t agree with each other.
The messy, human side of evaluation becomes both the gold standard *and* the biggest source of noise.

But maybe that’s fitting.
If LLMs are meant to model human language, perhaps their evaluation should inherit our inconsistency too.

---

## 4. Expanding the Definition of “Good”: Safety and Bias

Recently, evaluation in our department has begun to evolve in a more ethical direction.
It’s no longer enough for a model to be fluent or factually correct; it also needs to be **safe, fair, and robust**.

We now include benchmarks like **StereoSet**, **CrowS-Pairs**, and adversarial prompt tests.
We ask:

* Does the model treat all demographics equally in sentiment tasks?
* Does it remain stable when phrasing changes slightly?
* Does it produce harmful or biased outputs under pressure?

What’s striking is how evaluation has turned from a single score into a **multi-dimensional conversation**.
Performance now sits alongside responsibility.
Accuracy matters, but so does *accountability*.

---

## 5. What I’ve Learned: Evaluation as Interpretation

After months of trying to quantify quality, I’ve come to think of LLM evaluation less as “measurement” and more as **interpretation**.
There is no single number that captures a model’s worth — only perspectives.

The right evaluation setup depends on the question you’re really asking:

* *Do I want to measure linguistic overlap?* → BLEU/ROUGE.
* *Do I care about meaning preservation?* → BERTScore or BLEURT.
* *Do I want to understand human preference?* → Human evaluation or pairwise ranking.
* *Do I want to ensure safety?* → Bias, robustness, and toxicity tests.

A well-rounded evaluation isn’t a checklist — it’s a mosaic.
Every metric adds one piece, and together they form a picture that’s still incomplete but increasingly coherent.

---

## 6. Closing Reflections: The Science of Ambiguity

As a student, I used to envy the clarity of older NLP papers — one metric, one leaderboard, one winner.
Now I see that ambiguity is part of the territory.

Evaluating LLMs means wrestling with language itself: fuzzy, contextual, human.
It’s less about finding *the number* and more about learning *what the number hides.*

Sometimes, that realization feels frustrating.
But it’s also freeing — because it reminds me that AI research, at its best, isn’t about replacing human judgment.
It’s about making our judgment more deliberate, transparent, and informed.

That’s the real lesson LLM evaluation has taught me:
we’re not just measuring models.
We’re measuring how we think about language — and about ourselves.
