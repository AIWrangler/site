---
title: Large Language Models Can Self-Improve
excerpt: Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti.
publishDate: 2022-11-07T15:39:36.050Z
image: https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240
category: Research
author: Jiaxin Huang et al.
layout: '@layouts/BlogLayout.astro'
tags: [astro, tailwindcss, frontend]
---

Large Language Models (LLMs) have achieved excellent performances in various tasks. However, fine-tuning an LLM requires extensive supervision. Human, on the other hand, may improve their reasoning abilities by self-thinking without external inputs. In this work, we demonstrate that an LLM is also capable of self-improving with only unlabeled datasets. We use a pre-trained LLM to generate "high-confidence" rationale-augmented answers for unlabeled questions using Chain-of-Thought prompting and self-consistency, and fine-tune the LLM using those self-generated solutions as target outputs. We show that our approach improves the general reasoning ability of a 540B-parameter LLM (74.4%->82.1% on GSM8K, 78.2%->83.0% on DROP, 90.0%->94.4% on OpenBookQA, and 63.4%->67.9% on ANLI-A3) and achieves state-of-the-art-level performance, without any ground truth label. We conduct ablation studies and show that fine-tuning on reasoning is critical for self-improvement.