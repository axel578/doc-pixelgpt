---
sidebar_position: 3
---

# Inconsistent Results

Getting different results from same prompt.

## 🎲 Understanding Randomness

**AI uses controlled randomness** - same prompt gives different results.

**This is intentional:**
```
Same prompt → 4 different variations
Purpose: Provide options
```

**Not a bug** - it's a feature!

[SCREENSHOT: Same prompt, 4 different results]

---

## ⚖️ Normal vs Problematic Variation

### Normal Variation (Good)

**Same prompt, minor differences:**

```txt
Prompt: "blue diamond sword"

Result 1: Blue sword, gem on handle
Result 2: Blue sword, slightly different blue shade
Result 3: Blue sword, different highlight placement
Result 4: Blue sword, different decorative details
```

**All are blue diamond swords** - variation in details.

**This is expected** - pick your favorite.

### Problematic Variation (Bad)

**Same prompt, major differences:**

```txt
Prompt: "blue diamond sword"

Result 1: Blue sword ✓
Result 2: Red sword ✗
Result 3: Pickaxe instead of sword ✗
Result 4: Completely unrelated item ✗
```

**Core elements changing** - this is a problem.

---

## 🔍 Causes of Bad Inconsistency

### Cause 1: Vague Prompt

**Problem:**
```txt
Prompt: "weapon"
Results: Sword, axe, bow, dagger (all different)
```

**Why:** Too many valid interpretations.

**Fix:**
```txt
✅ "diamond sword" (specific)
```

### Cause 2: Low Text Accuracy

**Problem:**
```txt
Text Accuracy: 2-3
Results: Wildly different each time
```

**Why:** AI has too much creative freedom.

**Fix:**
```txt
✅ Raise Text Accuracy to 6-8
```

### Cause 3: Ambiguous Wording

**Problem:**
```txt
Prompt: "colorful sword"
Results: Different color schemes each time
```

**Why:** "Colorful" can mean many things.

**Fix:**
```txt
✅ "rainbow gradient sword" (specific)
✅ "red and blue striped sword" (explicit colors)
```

---

## 🔧 Reducing Inconsistency

### Method 1: More Specific Prompts

**Before:**
```txt
"magical staff"
Variation: High (many valid interpretations)
```

**After:**
```txt
"dark wooden staff with glowing purple crystal orb"
Variation: Low (specific details)
```

**Specificity reduces randomness range.**

### Method 2: Raise Text Accuracy

**Parameter adjustment:**

```
Text Accuracy 4 → Many variations
Text Accuracy 7 → Moderate variations
Text Accuracy 9 → Minimal variations
```

**Trade-off:** Less creative at higher accuracy.

### Method 3: Use Style Selector

**Most reliable method:**

1. Generate acceptable version once
2. Use as Style reference
3. Generate more with Style Selector
4. Results match style consistently

[See Style Selector →](../../features/style-selector/style-selector-overview)

### Method 4: Use Seed (If Available)

**Some models support seeds:**

```
Same seed + same prompt = same result
Different seed + same prompt = different result
```

:::info Seed Support
Not all Pixel GPT models support seeds. Check model parameters.
:::

---

## 🎯 Consistency for Sets

### Creating Matching Item Sets

**Goal:** 5 matching tools (sword, pickaxe, axe, shovel, hoe)

**Method 1: Consistent Prompts**
```txt
"blue diamond sword with golden handle"
"blue diamond pickaxe with golden handle"
"blue diamond axe with golden handle"
"blue diamond shovel with golden handle"
"blue diamond hoe with golden handle"
```

**Result:** Somewhat consistent, but variations.

**Method 2: Style Selector (Better)**
```txt
Step 1: Generate "blue diamond sword with golden handle"
Step 2: Use as style reference
Step 3: Generate other tools with Style Selector
Result: Very consistent ✓
```

**Most reliable** for matching sets.

---

## 📊 Consistency Levels

| Method | Consistency | Quality | Effort |
|--------|-------------|---------|--------|
| Same prompt only | 60% | Medium | Low |
| Same prompt + high Text Accuracy | 75% | Medium | Low |
| Style Selector | 95% | High | Medium |
| Manual editing after | 100% | Highest | High |

---

## 🎨 When Inconsistency is Good

### Exploring Variations

**Sometimes you WANT variation:**

```txt
Prompt: "magical sword"

Generate 10 times
Get 10 different magical swords
Pick the 3 best
Use those
```

**Variation provides options.**

### A/B Testing

**Test which style works better:**

```txt
Same prompt, different Text Accuracy:
Version A: Accuracy 9 (consistent, plain)
Version B: Accuracy 5 (varied, creative)

Pick which style you prefer
```

---

## 🔧 Troubleshooting Extreme Inconsistency

<details>
<summary>Complete different items each generation</summary>

**Problem:** Same prompt generates sword, then pickaxe, then apple

**Diagnosis:**
- Prompt way too vague ("item", "thing")
- Or non-English
- Or AI doesn't understand key term

**Fix:**
1. Make prompt more specific
2. Translate to English
3. Describe visually if jargon

</details>

<details>
<summary>Colors change drastically</summary>

**Problem:** Blue, then red, then green from same prompt

**Diagnosis:**
- Color not specified in prompt
- Or using term AI doesn't associate with color
- Or Text Accuracy too low

**Fix:**
1. Explicitly state color: "blue blade"
2. Raise Text Accuracy
3. Use colored reference in Style Selector

</details>

<details>
<summary>Quality varies wildly</summary>

**Problem:** Some generations good, others terrible

**Diagnosis:**
- Natural randomness in generation
- Model inconsistency

**Fix:**
1. Generate multiple times (4-8)
2. Pick best results
3. Regenerate if all bad
4. Try different model

</details>

---

## ✅ Consistency Control Checklist

Achieving consistent results:

- [ ] Prompt is specific and detailed
- [ ] Text Accuracy set to 6-8 (balanced)
- [ ] Using Style Selector for matching sets
- [ ] Same model version used throughout
- [ ] Same parameters for all generations
- [ ] Documented successful prompts for reuse

:::success Consistency Achieved
[Fix creativity issues →](too-creative)
:::
