---
sidebar_position: 1
---

# What is a Prompt?

Understanding the core input to AI.

## 📝 Definition

A **prompt** is the **text description** you write to tell AI what to generate.

**Simple example:**
```txt
Prompt: "diamond sword"
Result: AI generates diamond sword image
```

[SCREENSHOT: Prompt input and generated result]

---

## 🎯 Prompt Components

### Basic Prompt

**Minimum information:**
```txt
[Item name]

Examples:
- "sword"
- "pickaxe"
- "apple"
```

**Result:** Generic version of item.

### Better Prompt

**Add material/color:**
```txt
[Material] [Item]

Examples:
- "diamond sword"
- "iron pickaxe"
- "golden apple"
```

**Result:** More specific, better quality.

### Best Prompt

**Add details:**
```txt
[Material] [Item] with [Details]

Examples:
- "diamond sword with blue blade"
- "iron pickaxe with wooden handle"
- "golden apple with sparkle effect"
```

**Result:** Detailed, high-quality output.

---

## 📏 Prompt Length

### Too Short

```txt
"sword"
```

**Problems:**
- Too vague
- Random results
- Inconsistent quality

### Too Long

```txt
"incredibly magnificent super detailed ultra realistic legendary ancient mystical powerful enchanted diamond sword with extremely ornate golden handle and beautiful shimmering purple gemstones and magical glowing effects and intricate engravings"
```

**Problems:**
- AI gets overwhelmed
- Ignores half the words
- Confused output

### Just Right

```txt
"enchanted blue diamond sword with ornate golden handle and purple gems"
```

**Sweet spot: 5-15 words**

---

## ✍️ Writing Your First Prompt

### Step-by-Step

**1. Choose your item**
```
What do you want? → "sword"
```

**2. Add material**
```
What material? → "diamond sword"
```

**3. Add color (if different from material)**
```
What color? → "blue diamond sword"
```

**4. Add one key detail**
```
Special feature? → "blue diamond sword with golden handle"
```

**Done!** Simple, effective prompt.

---

## 🎨 Prompt Formula

### Basic Formula

```
[Adjective] [Item]

blue sword
golden pickaxe
red apple
```

### Advanced Formula

```
[Adjective] [Material] [Item] with [Detail]

glowing diamond sword with ruby gems
ornate iron pickaxe with leather grip
shiny golden apple with leaf
```

### Complete Formula

```
[Style] [Adjective] [Material] [Item] with [Detail1] and [Detail2]

medieval enchanted diamond sword with blue blade and golden handle
fantasy magical crystal staff with purple orb and silver decorations
```

**Don't use all elements** - only what's needed.

---

## 🎯 Prompt Types

### Object Prompts (Most Common)

**Describing items:**
```txt
Items: "diamond sword", "iron helmet"
Blocks: "stone block with cracks"
Food: "red apple with stem"
```

### Style Prompts

**Emphasizing aesthetic:**
```txt
"minecraft style diamond sword"
"cartoon colorful pickaxe"
"medieval fantasy blade"
```

### Detailed Prompts

**Full descriptions:**
```txt
"enchanted blue diamond sword with ornate golden handle, purple gems, and glowing magical effects"
```

---

## ⚠️ Common Prompt Mistakes

<details>
<summary>Mistake 1: Using non-English</summary>

```txt
❌ "épée en diamant"
✅ "diamond sword"
```

**AI understands English best.**

</details>

<details>
<summary>Mistake 2: Too vague</summary>

```txt
❌ "weapon"
❌ "cool sword"
✅ "blue diamond sword"
```

**Be specific about what you want.**

</details>

<details>
<summary>Mistake 3: Multiple items</summary>

```txt
❌ "sword and pickaxe and helmet"
✅ "sword" (generate separately)
```

**One item per prompt.**

</details>

<details>
<summary>Mistake 4: Using jargon</summary>

```txt
❌ "netherite" (AI may not know)
✅ "dark purple metallic material"
```

**Describe visually if AI doesn't know term.**

</details>

<details>
<summary>Mistake 5: Subjective terms</summary>

```txt
❌ "beautiful sword"
❌ "awesome pickaxe"
✅ "ornate diamond sword with engravings"
```

**Describe appearance, not opinion.**

</details>

---

## 🔄 Prompt Iteration Example

**Goal:** Fantasy magic sword

**Iteration 1:**
```txt
Prompt: "sword"
Result: Brown generic sword
Issue: Too vague
```

**Iteration 2:**
```txt
Prompt: "magic sword"
Result: Sword with slight glow
Issue: Not fantasy enough
```

**Iteration 3:**
```txt
Prompt: "fantasy magic sword with crystals"
Result: Better, has crystals
Issue: Colors not right
```

**Iteration 4:**
```txt
Prompt: "fantasy purple crystal sword with glowing blue blade"
Result: Perfect! ✓
```

**4 iterations to success** - normal process.

---

## ✅ Good Prompt Checklist

Quality prompt should be:

- [ ] In **English** (not other language)
- [ ] **Specific** (not "weapon" - say "sword")
- [ ] **Visual description** (not "cool" - say "blue glowing")
- [ ] **5-15 words** (not too short/long)
- [ ] **Single subject** (not multiple items)
- [ ] **Clear adjectives** (colors, materials, details)

:::success Prompts Understood
[Learn how prompts work →](how-prompts-work)
:::
