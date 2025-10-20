---
sidebar_position: 1
---

# AI Ignores Prompt

What to do when AI doesn't follow your prompt.

## ❌ The Problem

**You wrote:** `blue diamond sword with golden handle`  
**AI generated:** Brown generic sword

**AI ignored your prompt completely.**

---

## 🔍 Common Causes

### Cause 1: Non-English Prompt

**Problem:**
```txt
Prompt: "épée bleue en diamant"
Result: Generic sword, colors ignored
```

**Why:** AI doesn't understand French well.

**Fix:**
```txt
✅ "blue diamond sword"
```

### Cause 2: Jargon/Unknown Terms

**Problem:**
```txt
Prompt: "netherite sword"
Result: Generic sword, ignores "netherite"
```

**Why:** AI doesn't know "netherite".

**Fix:**
```txt
✅ "dark purple metallic sword with glowing accents"
```

### Cause 3: Too Vague

**Problem:**
```txt
Prompt: "nice sword"
Result: Random sword
```

**Why:** "Nice" is not visual, AI guesses.

**Fix:**
```txt
✅ "ornate diamond sword with decorations"
```

### Cause 4: Model Doesn't Support

**Problem:**
```txt
Using Baby model with complex prompt
Result: Simple output, ignores details
```

**Why:** Baby models have limited understanding.

**Fix:**
```
✅ Upgrade to Standard/Ultimate model
```

---

## 🔧 Diagnostic Process

### Step 1: Check Language

**Is prompt in English?**
```
No → Translate to English
Yes → Continue to Step 2
```

### Step 2: Check Specificity

**Is prompt specific?**
```
"weapon" → Too vague, specify: "sword"
"cool sword" → Specify: "glowing blue sword"
```

### Step 3: Check for Jargon

**Any game-specific terms?**
```
"elytra" → Describe visually: "black wings"
"netherite" → Describe: "dark purple metal"
```

### Step 4: Check Model Capability

**Using appropriate model?**
```
Baby model + complex prompt → Use Ultimate model
16px model + 32px request → Use 32px model
```

---

## ✅ Solutions

### Solution 1: Simplify and Rebuild

**Strip to basics:**

```txt
Original: "magnificent legendary cosmic diamond sword"
Stripped: "diamond sword"
Test: Does this work?

If yes: "blue diamond sword"
Test: Does this work?

If yes: "blue diamond sword with golden handle"
Success! ✓
```

**Build up from working baseline.**

### Solution 2: Use Different Words

**Rephrase concept:**

```txt
Original: "elytra" (ignored)
Alternative 1: "wings" (may work)
Alternative 2: "dragon wings" (better)
Alternative 3: "black dragon wing membranes" (best)
```

**Try synonyms and descriptions.**

### Solution 3: Increase Text Accuracy

**Force AI to follow prompt:**

```txt
Text Accuracy: 5 → 8
```

**Higher accuracy** = more literal interpretation.

### Solution 4: Use Style Selector

**Show AI what you mean:**

```
Upload reference image of desired style
Use in Style Selector
AI copies visual appearance
```

**Bypasses prompt interpretation issues.**

---

## 🔧 Specific Scenarios

<details>
<summary>Colors completely ignored</summary>

**Problem:**
```txt
Prompt: "blue diamond sword"
Result: Gray/white sword
```

**Fixes:**
```
1. Be more explicit: "bright blue colored diamond sword"
2. Repeat color: "blue diamond sword with blue blade"
3. Use different model
4. Add to Style Selector base image with desired colors
```

</details>

<details>
<summary>Material ignored</summary>

**Problem:**
```txt
Prompt: "crystal sword"
Result: Iron/metal sword
```

**Fixes:**
```
1. More descriptive: "transparent purple crystal sword"
2. Add texture: "crystal sword with faceted surface"
3. Reference image showing crystal in Style Selector
```

</details>

<details>
<summary>Details ignored</summary>

**Problem:**
```txt
Prompt: "sword with gems and engravings"
Result: Plain sword
```

**Fixes:**
```
1. Specify details: "sword with three ruby gems on handle and rune engravings on blade"
2. Try more capable model (Ultimate)
3. Lower creativity, raise accuracy
```

</details>

<details>
<summary>Style ignored</summary>

**Problem:**
```txt
Prompt: "medieval sword"
Result: Generic/modern looking sword
```

**Fixes:**
```
1. Add style-specific details: "medieval iron sword with crossguard and knightly decorations"
2. Use style keywords: "medieval fantasy style"
3. Reference image of medieval sword in Style Selector
```

</details>

---

## 📊 Troubleshooting Checklist

When AI ignores prompt:

- [ ] Check: Is it in English?
- [ ] Check: Is it specific enough?
- [ ] Check: Any jargon/unknown terms?
- [ ] Check: Using appropriate model?
- [ ] Check: Text Accuracy high enough?
- [ ] Try: Different phrasing
- [ ] Try: Style Selector with reference
- [ ] Try: Different model

---

## ✅ Prevention

**Avoid issues by:**

```
✅ Always use English
✅ Be specific from the start
✅ Avoid jargon
✅ Use known terms
✅ Test prompts iteratively
✅ Choose appropriate models
```

:::success Prompt Following Fixed
[Fix wrong interpretations →](wrong-interpretation)
:::
