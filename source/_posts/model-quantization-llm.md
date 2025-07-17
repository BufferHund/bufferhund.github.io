---
title: "How I Shrank My LLM: A Student's Dive into Model Quantization"
date: 2024-12-20 13:50:00
updated: 2024-12-24 10:31:00
categories:
  - ML/NLP
tags: [Quantization, LLM, Model Compression, Machine Learning, Hardware]
---

# How I Shrank My LLM: A Student's Dive into Model Quantization

One of the most exciting and frustrating moments in my Master's program was when I finally got my hands on a powerful, pre-trained language model. The excitement came from its incredible capabilities; the frustration came when I realized it was too big to run on my university-provided GPU for any serious fine-tuning. This sent me down the rabbit hole of model compression, and my first major stop was quantization.

## What Exactly is Quantization?

The way I came to understand quantization is by thinking about digital photos. A professional camera might save a photo as a massive, high-fidelity RAW file. But for sharing online, you convert it to a JPEG. The JPEG is much smaller and faster to load, but you lose a tiny bit of detail.

Quantization does something similar to a language model. It takes the model's parameters (its "weights"), which are usually stored as high-precision 32-bit floating-point numbers, and converts them to a lower-precision format, like 8-bit integers (int8). This makes the model significantly smaller and the calculations much faster, especially on modern GPUs that have specialized hardware for integer math.

## My First Attempt: Post-Training Quantization (PTQ)

My first foray was with Post-Training Quantization (PTQ). It's the most straightforward approach: you take your fully trained, high-precision model and simply convert its weights to the lower-precision format after the fact. It's fast and doesn't require any retraining.

The result? It worked! The model that previously crashed my session was now running smoothly. The trade-off was a small but noticeable drop in accuracy on my evaluation benchmarks. For a quick prototype, it was perfect. But for my final project, I knew I needed to claw back that lost performance.

## The Next Level: Quantization-Aware Training (QAT)

This led me to Quantization-Aware Training (QAT). The idea here is to make the model *aware* of the quantization process *during* training or fine-tuning. You're essentially simulating the effects of quantization in the training loop, allowing the model to learn how to compensate for the loss of precision.

It requires more work because you have to integrate the quantization simulation into your training code, but the results were worth it. With QAT, I was able to get a quantized model that performed nearly as well as the original full-precision version, while still being much smaller and faster.

## The Big Trade-off: Performance vs. Efficiency

My journey with quantization was a lesson in trade-offs. There's no free lunch. Squeezing a model down to a smaller size will almost always have some impact on its performance. The key is to find the sweet spot for your specific application. Are you deploying a model on a smartphone where efficiency is everything? Or are you chasing state-of-the-art results for a research paper where every decimal point of accuracy matters?

For a student like me, quantization is more than just a technical trick. It's an enabling technology. It democratizes access to powerful models, letting us experiment and build interesting applications without needing access to a massive industrial data center. It's a fundamental skill for anyone looking to do practical work in this field. 