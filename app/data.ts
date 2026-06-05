import { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "the-attention-mechanism-explained",
    title: "The Attention Mechanism, Explained for the Rest of Us",
    excerpt:
      "Every modern language model is built on attention. But what does it actually mean for a model to 'attend' to something? We break down the key intuition without the linear algebra.",
    category: "Fundamentals",
    readTime: 7,
    date: "2024-05-28",
    author: "Sophia Lin",
    content: `
<p>In 2017, a paper titled <em>Attention Is All You Need</em> changed the trajectory of machine learning. The transformer architecture it introduced has since become the backbone of GPT-4, Claude, Gemini, and virtually every powerful language model in existence. At its heart is a deceptively simple idea: <strong>attention</strong>.</p>

<p>But what does "attention" actually mean when applied to a neural network? Most explanations immediately reach for equations—softmax functions, query-key-value matrices, scaled dot products. These are important, but they obscure the core intuition. Let's start elsewhere.</p>

<h2>The Problem Attention Solves</h2>

<p>Imagine you're reading the sentence: "The trophy didn't fit in the suitcase because it was too big." What does "it" refer to? The trophy, right? You know this because you mentally linked the pronoun back to the most relevant noun — not just the nearest one, but the one that makes semantic sense.</p>

<p>This is exactly what attention mechanisms do. When processing a word, instead of treating all other words equally, the model learns to selectively weight them. Some words matter more. Some matter less. The "it" in our sentence should attend heavily to "trophy" and only lightly to "suitcase."</p>

<h2>Queries, Keys, and Values</h2>

<p>The technical implementation uses three learned matrices: Q (query), K (key), and V (value). Think of it like a search engine. For each word, you generate a <em>query</em> (what am I looking for?), while every word also generates a <em>key</em> (what do I contain?). The match between queries and keys determines the attention weights. Values carry the actual information.</p>

<blockquote>
  "Attention is, at its core, a learned routing mechanism — the model discovers which parts of the input are worth combining."
</blockquote>

<p>The elegance of this design is that it's fully differentiable. The network can learn, through gradient descent, exactly which relationships matter for any given task. No hand-coded rules. No fixed windows. Just learned associations over the full context.</p>

<h2>Multi-Head Attention</h2>

<p>A single attention pass can only capture one "type" of relationship at a time. Transformers use <em>multi-head attention</em>: running many attention operations in parallel, each potentially specializing in different relationship types — syntactic, semantic, coreference, and so on.</p>

<p>Research into what individual attention heads actually learn has produced fascinating results. Some heads reliably track subject-verb agreement. Others handle positional proximity. Others seem to specialize in named entity relationships. The model discovers this structure on its own.</p>

<h2>Why This Changed Everything</h2>

<p>Before transformers, the dominant architecture for sequence processing was the RNN — recurrent neural networks that processed words one at a time, passing a hidden state forward. This made long-range dependencies difficult to learn; the signal from word 1 had to survive hundreds of steps to influence word 300.</p>

<p>Attention collapses that distance. Every word can directly attend to every other word in a single operation. The architecture also parallelizes beautifully across GPUs, enabling training at scales that were previously impractical.</p>

<p>The result: models that could finally read, write, translate, reason, and converse at a level that surprised even their creators.</p>

<hr />

<p>If you want to go deeper, Andrej Karpathy's <em>Let's build GPT from scratch</em> video is the clearest implementation walkthrough available. The original <em>Attention Is All You Need</em> paper is also surprisingly readable — worth the effort.</p>
    `,
  },
  {
    slug: "context-windows-and-what-they-mean",
    title: "Context Windows Are Getting Longer. Here's Why It Matters.",
    excerpt:
      "From 4K tokens in early GPT-3 to millions of tokens today, the expansion of model context is quietly reshaping what AI can actually do — and what its limits are.",
    category: "Models",
    readTime: 5,
    date: "2024-05-20",
    author: "Marcus Webb",
    content: `
<p>One of the most important — and least discussed — axes along which AI models have improved isn't raw capability. It's memory. Specifically, the size of the <em>context window</em>: the amount of text a model can read and reason about in a single pass.</p>

<p>Early versions of GPT-3 worked with around 2,048 tokens. GPT-4 launched with 8K, then extended to 128K. Claude's current context reaches 200K tokens — roughly 150,000 words, or a medium-length novel. Gemini 1.5 has demonstrated contexts of up to 1 million tokens in research settings.</p>

<h2>What a Context Window Actually Is</h2>

<p>Think of the context window as the model's "working memory" — everything it can see and reference at once. Your conversation history, any documents you've pasted, the system prompt from the developer, the model's own responses: all of this competes for space within the window.</p>

<p>When you exceed the context limit, older content gets truncated. The model literally cannot see it anymore. This is why long conversations sometimes feel like the model "forgot" something — it didn't forget in a human sense; it simply can no longer access that part of the input.</p>

<h2>What Long Contexts Enable</h2>

<p>With large enough context windows, entirely new use cases become practical:</p>

<ul>
  <li><strong>Full document analysis</strong> — Feed an entire legal contract, research paper, or codebase and ask questions across the whole thing</li>
  <li><strong>Long-form generation</strong> — Write consistently across a novelette-length document, maintaining character voice and plot continuity</li>
  <li><strong>Many-shot prompting</strong> — Provide dozens or hundreds of examples instead of three or four, dramatically improving task performance</li>
  <li><strong>Repository-level coding</strong> — Pass entire codebases and ask the model to reason about architecture, not just individual functions</li>
</ul>

<h2>The "Lost in the Middle" Problem</h2>

<p>Longer isn't automatically better. Research has consistently shown that model performance degrades for information placed in the <em>middle</em> of very long contexts. Content at the very beginning and very end is recalled most reliably. This "lost in the middle" effect is an active area of research, and newer models have made progress on it — but it hasn't been fully solved.</p>

<p>Practical implication: when doing retrieval or document analysis, pay attention to where you position the most important information in your prompt.</p>
    `,
  },
  {
    slug: "prompt-engineering-is-dead-long-live-prompt-engineering",
    title: "Prompt Engineering Is Dead. Long Live Prompt Engineering.",
    excerpt:
      "Everyone said prompting was a temporary skill that would be engineered away. Two years later, the discipline is more sophisticated than ever — just different.",
    category: "Practice",
    readTime: 6,
    date: "2024-05-12",
    author: "Priya Anand",
    content: `
<p>In 2022, a peculiar job title began appearing on LinkedIn: <em>Prompt Engineer</em>. Salaries were reported in the $200–$300K range. The role attracted mockery and fascination in equal measure. Then the backlash: surely models would get smart enough to not need clever prompting? Surely this was a temporary crutch?</p>

<p>That prediction hasn't come true. If anything, the practice of carefully constructing model inputs has become more important — and more technically demanding. It just doesn't look the same as it did in the early days of "say magic words to unlock the AI."</p>

<h2>What Early Prompting Was</h2>

<p>The original prompt engineering discourse was largely about discovery: finding incantations that made models behave in surprising ways. "Act as DAN." "Ignore previous instructions." "You are an expert in X." Some of this was jailbreaking. Some of it was genuine discovery that framing affected outputs significantly.</p>

<p>Much of this has been absorbed into model training. Modern models are robust to naive jailbreaks. You don't need to tell Claude or GPT-4 that they're "a helpful assistant" — they know.</p>

<h2>What Prompting Looks Like Now</h2>

<p>Contemporary prompt engineering is less about magic phrases and more about system design. The questions practitioners grapple with are substantive:</p>

<ul>
  <li>How do you structure a system prompt for a complex multi-step task?</li>
  <li>When should you use chain-of-thought reasoning, and how explicit should you be about it?</li>
  <li>How do you construct few-shot examples that generalize rather than overfit?</li>
  <li>How do you manage context across a long agentic workflow?</li>
  <li>How do you write evals to know if your prompt actually works?</li>
</ul>

<p>That last point — evals — is where serious practitioners now spend most of their time. A prompt that looks good on five examples might degrade badly on the hundredth. Building test sets and measuring performance systematically is the difference between a demo and a product.</p>

<blockquote>
  "The best prompt engineers I know now write more Python than they write prompts."
</blockquote>

<h2>The Structural Shift</h2>

<p>The deeper change is that prompting is increasingly inseparable from software architecture. Retrieval-augmented generation, tool use, multi-agent orchestration: these all require careful attention to what information the model sees, when, and in what format. The "prompt" is no longer a single text string — it's a dynamic assembly of retrieved context, structured history, and carefully scoped instructions.</p>

<p>So yes: the parlor tricks are gone. What replaced them is a proper engineering discipline. And it turns out that's harder, not easier.</p>
    `,
  },
  {
    slug: "the-case-for-slower-ai",
    title: "The Case for Slower AI",
    excerpt:
      "Every major lab is racing to ship faster, cheaper, more capable models. A growing minority of researchers is asking whether the pace itself is the problem.",
    category: "Opinion",
    readTime: 8,
    date: "2024-05-03",
    author: "David Kwon",
    content: `
<p>Speed is the operating assumption of the AI industry. Faster training runs. Faster inference. Faster product iterations. Faster benchmarks bested. The implicit argument is that capability improvements are always net positive — more intelligence, distributed more quickly, to more people, is unambiguously good.</p>

<p>A minority view, growing louder, pushes back on this. Not on AI development itself, but on the <em>tempo</em> at which we're deploying systems we don't fully understand into consequential domains.</p>

<h2>The Understanding Gap</h2>

<p>The core concern isn't that AI systems will become malevolent. It's something more mundane and more immediate: we deploy systems into high-stakes contexts before we understand how they fail. Medical diagnosis. Legal research. Educational tutoring. Hiring pipelines. In each case, the incentive is to ship quickly, capture market share, and iterate later.</p>

<p>The problem with "iterate later" in high-stakes domains is that failures have asymmetric costs. A misdiagnosis isn't corrected in a product changelog. A biased hiring filter can shape careers. The feedback loops are long, the harms are diffuse, and accountability is contested.</p>

<h2>What "Slower" Actually Means</h2>

<p>Advocates for a more measured pace aren't typically calling for a halt to research. The practical proposals are more targeted:</p>

<ul>
  <li>Extended evaluation periods before deployment in regulated domains</li>
  <li>Mandatory disclosure of training data provenance and known failure modes</li>
  <li>Third-party auditing, similar to financial auditing, for high-impact systems</li>
  <li>Investment in interpretability research commensurate with capability research</li>
</ul>

<p>None of these require stopping. They require slowing deployment relative to development — building understanding before deployment rather than using deployment as the mechanism of discovery.</p>

<h2>The Counterargument</h2>

<p>The strongest pushback from the industry is that slower deployment in one jurisdiction doesn't mean slower deployment globally. If U.S. labs slow down, the argument goes, the systems that reach dominance will be those with the fewest scruples about evaluation.</p>

<p>This is a real tension, not a cynical deflection. Geopolitical competition is a genuine constraint on unilateral deceleration. The honest answer is that this argues for coordination, not against caution — the difficulty of coordination doesn't make recklessness wise.</p>

<hr />

<p>There's no clean resolution here. The pace of AI development is a collective action problem, and collective action problems don't have easy solutions. But the first step is being honest that the question exists — that "move fast" is a choice, not a law of physics.</p>
    `,
  },
  {
    slug: "what-embeddings-actually-are",
    title: "What Embeddings Actually Are",
    excerpt:
      "Vectors, semantic space, cosine similarity — these words get thrown around constantly in AI discussions. Here's a ground-up explanation of what embeddings are and why they're everywhere.",
    category: "Fundamentals",
    readTime: 6,
    date: "2024-04-24",
    author: "Sophia Lin",
    content: `
<p>If you've read anything about how modern AI systems work, you've encountered the word "embedding." It shows up in discussions of language models, recommendation systems, image search, and semantic retrieval. It's one of those terms that gets used constantly and explained rarely. Let's fix that.</p>

<h2>Numbers All the Way Down</h2>

<p>Computers don't understand words. They understand numbers. So the first challenge in building any language system is: how do you turn text into a mathematical representation that preserves meaning?</p>

<p>The naive approach is a "bag of words" — represent each word as a position in a vocabulary, and a sentence as a vector counting word occurrences. This works for some tasks but throws away nearly everything: word order, context, relationship between words, nuance.</p>

<p>Embeddings are a much richer alternative. An embedding is a <em>dense vector</em> — a list of floating-point numbers, typically in 768, 1536, or more dimensions — where the position in that high-dimensional space encodes meaning.</p>

<h2>The Geometric Intuition</h2>

<p>Here's the key property: words or phrases with similar meanings end up <em>close together</em> in this high-dimensional space. "Cat" and "kitten" are nearby. "Paris" and "France" are nearby. "King" and "queen" are in a similar directional relationship to each other as "man" and "woman."</p>

<p>The classic example from early word embedding research: <code>king - man + woman ≈ queen</code>. You can do arithmetic on meanings. This felt almost magical when it was first demonstrated.</p>

<blockquote>
  Embedding space is a map of human concepts — imperfect, culturally inflected, and learned from data, but remarkably structured.
</blockquote>

<h2>How Embeddings Are Made</h2>

<p>Modern embeddings are learned by training a model to predict something about text. For word embeddings, you might train a model to predict the surrounding words from a target word (Word2Vec). For sentence embeddings, you might train on pairs of similar and dissimilar sentences.</p>

<p>Large language models produce embeddings as a byproduct of their architecture — the internal representations at various layers of the transformer are embeddings, capturing increasingly abstract semantic features as you go deeper.</p>

<h2>Where Embeddings Show Up</h2>

<p>Once you have embeddings, you can do useful things:</p>

<ul>
  <li><strong>Semantic search</strong> — Instead of keyword matching, embed a query and find documents whose embeddings are closest to it</li>
  <li><strong>Recommendation</strong> — Represent items and users as embeddings; recommend items close to what a user has liked</li>
  <li><strong>Clustering</strong> — Group documents by their embedding proximity to discover topics without predefined categories</li>
  <li><strong>RAG (Retrieval-Augmented Generation)</strong> — Embed a large knowledge base, then retrieve relevant chunks to inject into an LLM's context at query time</li>
</ul>

<p>The last use case — RAG — is why embeddings have become central infrastructure for building with AI. They're how you give a language model memory of documents it wasn't trained on.</p>
    `,
  },
  {
    slug: "fine-tuning-vs-prompting",
    title: "Fine-Tuning vs. Prompting: A Practical Framework",
    excerpt:
      "Should you prompt-engineer your way to the behavior you want, or invest in fine-tuning? The answer depends on factors most guides don't mention.",
    category: "Practice",
    readTime: 7,
    date: "2024-04-15",
    author: "Marcus Webb",
    content: `
<p>One of the most common questions in applied AI development: should I fine-tune a model, or can I get what I need through prompting alone? It's a question with a real answer — it just depends on factors that most guides gloss over.</p>

<h2>What Prompting Can and Can't Do</h2>

<p>Prompting — including few-shot examples and detailed system instructions — is remarkably powerful. A well-constructed prompt can adapt a general model to specific domains, impose format constraints, establish tone and persona, and steer the model toward desired behavior with surprising precision.</p>

<p>What prompting can't easily do:</p>

<ul>
  <li>Teach the model facts or knowledge it wasn't trained on (at least not reliably at scale)</li>
  <li>Fundamentally change how the model reasons or structures output when your use case is highly specific</li>
  <li>Reduce latency or cost by making the model "know" things without lengthy instructions</li>
  <li>Achieve high consistency on highly stylized output at scale</li>
</ul>

<h2>When Fine-Tuning Makes Sense</h2>

<p>Fine-tuning modifies the model's weights on a curated dataset. This is the right choice when:</p>

<p><strong>Format consistency matters at scale.</strong> If you need outputs in a very specific structure — JSON with particular fields, code in a house style, customer service responses in a specific voice — fine-tuning learns these patterns more reliably than prompting.</p>

<p><strong>You have proprietary knowledge that can't go in context.</strong> If your use case requires deep familiarity with internal terminology, specialized domain knowledge, or a large corpus of examples, embedding some of that into the model's weights is more efficient than injecting it at inference time.</p>

<p><strong>Inference cost and latency are constraints.</strong> A fine-tuned smaller model can often match the performance of a larger model on a specific task, at significantly lower cost and faster response time.</p>

<h2>The Hidden Cost of Fine-Tuning</h2>

<p>Fine-tuning requires labeled data — often thousands of high-quality examples. Collecting and cleaning that data is typically the hardest part. It also requires infrastructure for training runs, evaluation, and model management. And fine-tuned models don't automatically benefit from updates to the base model; you'll need to re-tune when the foundation model improves.</p>

<blockquote>
  The question isn't "is fine-tuning better?" It's "does the quality improvement justify the data collection and maintenance cost?"
</blockquote>

<h2>A Practical Decision Tree</h2>

<p>Start with prompting. Measure whether it meets your quality bar. If it doesn't, identify <em>why</em> — is it lacking knowledge, inconsistent formatting, wrong tone, or something else? Fine-tune only if the gap is consistent and the data exists to close it.</p>

<p>Most production applications end up using both: prompting for dynamic instruction and context, fine-tuning for domain adaptation and style consistency. They're complementary tools, not alternatives.</p>
    `,
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
