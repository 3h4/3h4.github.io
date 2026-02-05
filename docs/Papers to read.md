---
sidebar_position: 3
---

# Papers to read

These are some papers that are important that you know of. Some of these are more readable, otherwise it may be easier to start with a blog post where it is easier to understand, then move on to the paper itself. But it's important to understand the concept!


First of all, read this one by Hinton himself, very nice and very readable:

**Distilling the Knowledge in a Neural Network**
This explains the concept of "Knowledge Distillation," where a smaller "student" model is trained to reproduce the output probabilities (soft targets) of a larger "teacher" model or ensemble. It effectively compresses the knowledge from a heavy model into a deployable one. [NIPS 2014 Workshop / arXiv](https://arxiv.org/abs/1503.02531)

# Models

**ResNet**
Introduced skip connections (residual learning) and inverted bottlenecks. These architectural innovations allow gradients to flow more easily during backpropagation, enabling the training of very deep neural networks (hundreds of layers) without degradation. [CVPR 2016](https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html)

**UNet**
A fully convolutional segmentation architecture originally designed for biomedical images. It features a U-shaped structure with an encoder to capture context and a symmetric decoder to enable precise localization, linked by skip connections. [MICCAI 2015](https://link.springer.com/chapter/10.1007/978-3-319-24574-4_28)

**Attention is All You Need**
This paper introduced the Transformer architecture. It revolutionized sequence modeling by dispensing with recurrence and convolutions entirely, relying on self-attention mechanisms to draw global dependencies between input and output. [NeurIPS 2017](https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html)

**An Image is Worth 16x16 Words (Vision Transformer)**
This paper adapts the Transformer for vision tasks (ViT). It splits an image into patches (e.g., 16x16 pixels) and treats them as a sequence of words (tokens), showing that a pure transformer applied directly to image patches can perform very well on image classification. [ICLR 2021](https://openreview.net/forum?id=YicbFdNTTy)

# Self Supervision

## Contrastive Learning (Foundation)

**SimCLR (2020)**
Learn the "Push-Pull" logic, InfoNCE loss, and the critical role of data augmentation. It shows that the composition of data augmentations plays a major role in defining effective predictive tasks. [ICML 2020](https://proceedings.mlr.press/v119/chen20j.html)

**MoCo v1 (2020)**
Learn about "Memory Banks" and "Momentum Encoders" to train with smaller GPU batches. It decouples the dictionary size from the mini-batch size, allowing for a large set of negative samples. [CVPR 2020](https://openaccess.thecvf.com/content_CVPR_2020/html/He_Momentum_Contrast_for_Unsupervised_Visual_Representation_Learning_CVPR_2020_paper.html)

**SwaV (2020)**
Learn about "Online Clustering" and the "Multi-Crop" strategy for better feature scaling. It enforces consistency between cluster assignments produced for different views of the same image rather than comparing features directly. [NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/70feb62b69f16e0238f741fab228fec2-Abstract.html)

## Asymmetric Learning (Removing Negative Pairs)

**BYOL (2020)**
Learn how a Student-Teacher (Online/Target) setup allows learning without using negative samples. It relies on two neural networks that interact and learn from each other, with the target network being a moving average of the online network. [NeurIPS 2020](https://proceedings.neurips.cc/paper/2020/hash/f3ada80d5c4ee70142b17b8192b2958e-Abstract.html)

**SimSiam (2021)**
Learn why the "Stop-Gradient" operation is mathematically sufficient to prevent model collapse. It simplifies Siamese representation learning by showing that neither negative pairs, large batches, nor momentum encoders are strictly necessary. [CVPR 2021](https://openaccess.thecvf.com/content/CVPR2021/html/Chen_Exploring_Simple_Siamese_Representation_Learning_CVPR_2021_paper.html)

**Barlow Twins (2021)**
Learn how to reduce redundancy by making the cross-correlation matrix an identity matrix. It avoids collapse by measuring the cross-correlation matrix between the outputs of two identical networks fed with distorted versions of a sample. [ICML 2021](https://proceedings.mlr.press/v139/zbontar21a.html)

## The Transformer & Masking Era (Modern SOTA)

**MAE - Masked Autoencoders (2021)**
Learn the generative approach—reconstructing 75% of a masked image using Vision Transformers (ViT). It demonstrates that masking a high proportion of the input image yields a nontrivial and meaningful self-supervisory task. [CVPR 2022](https://openaccess.thecvf.com/content/CVPR2022/html/He_Masked_Autoencoders_Are_Scalable_Vision_Learners_CVPR_2022_paper.html)

**DINO v1 (2021)**
Learn about "Self-Distillation" and how Vision Transformers naturally learn object segmentations. The method interprets self-supervised learning as a form of knowledge distillation with no labels. [ICCV 2021](https://openaccess.thecvf.com/content/ICCV2021/html/Caron_Emerging_Properties_in_Self-Supervised_Vision_Transformers_ICCV_2021_paper.html)

**iBOT (2022)**
Learn how to perform image-level and patch-level (masked) distillation simultaneously. It acts as an image BERT pre-training with an online tokenizer, capturing local semantic patterns. [ICLR 2022](https://openreview.net/forum?id=yV6fD7LYkF)

**DINOv2 (2023)**
Learn the current "Foundation Model" standard that combines all previous techniques for massive scale. It produces high-performance visual features that can be used across various tasks without fine-tuning. [TMLR 2024](https://openreview.net/forum?id=a68SUt6zFt)


