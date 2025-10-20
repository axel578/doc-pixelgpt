---
sidebar_position: 4
---

# Too Creative

When AI adds too many unexpected elements.

## 🎨 The Problem

**You wrote:** `diamond sword`  
**AI generated:** Diamond sword with wings, gems, flames, sparkles, and glowing aura

**AI added too much** you didn't ask for.

[SCREENSHOT: Over-creative result]

---

## 🔍 Why This Happens

**High creativity settings:**
```
Low Text Accuracy (1-4) = AI has freedom to add
High Creativity parameter = AI adds decorations
```

**AI interpretation:**
```
"diamond sword" → Base requirement
AI thinks: "I can make this more interesting!"
Adds: Gems, effects, decorations
```

---

## 🔧 Solutions

### Solution 1: Raise Text Accuracy

**Parameter adjustment:**

```
Current: Text Accuracy 4
Result: Too many additions

Change to: Text Accuracy 8-9
Result: More literal, less creative ✓
```

**Higher accuracy = less freedom to add.**

### Solution 2: Add Constraints

**Specify what NOT to add:**

```txt
Original: "diamond sword"
Result: Sword + gems + flames + wings

Constrained: "simple diamond sword, no decorations"
Result: Plain diamond sword ✓
```

**"Simple", "plain", "no decorations"** reduce additions.

### Solution 3: Be Very Explicit

**Describe exactly what you want:**

```txt
Vague: "diamond sword"
AI adds extras

Explicit: "diamond sword with blue blade and straight golden handle, clean design"
AI follows exactly ✓
```

### Solution 4: Use Different Model

**Some models are less creative by default:**

```txt
Creative models: "creative", "stylized" variants
Conservative models: "basic", "vanilla", "simple" variants
```

**Try conservative model** if too much decoration.

---

## 🎯 Controlling Additions

### What AI Might Add

**Common additions:**
```
Gems/jewels on handle or blade
Glowing effects
Patterns and engravings
Wings or other decorations
Magical auras
Sparkles and shimmers
```

### Preventing Specific Additions

**Don't want gems?**
```txt
"diamond sword without gems"
"plain diamond sword"
```

**Don't want glow?**
```txt
"non-glowing sword"
"matte finish diamond sword"
```

**Don't want decorations?**
```txt
"simple clean diamond sword"
"minimal design sword"
```

---

## 📊 Creativity Level Guide

### For Different Items

| Item Type | Recommended Creativity | Why |
|-----------|----------------------|-----|
| Vanilla replacements | Low (Text Acc 8-9) | Match original exactly |
| Custom items | Medium (Text Acc 6-7) | Some flair okay |
| Showcase pieces | High (Text Acc 4-5) | Want impressive details |
| GUIs | Medium-High (Acc 7-8) | Structure important, decorations okay |

---

## 🔧 Specific Scenarios

<details>
<summary>AI adds unwanted gems/jewels</summary>

**Problem:** Every sword gets gems added

**Fix:**
```txt
"diamond sword without gems"
"plain diamond sword"
"simple diamond sword with clean design"
```

Or raise Text Accuracy to 9

</details>

<details>
<summary>AI adds glowing effects</summary>

**Problem:** Items glow when you don't want them to

**Fix:**
```txt
"non-glowing diamond sword"
"matte finish sword without glow"
```

Or specify: "with normal lighting, no magical effects"

</details>

<details>
<summary>AI makes items too ornate</summary>

**Problem:** Simple item becomes heavily decorated

**Fix:**
```txt
"simple iron sword"
"plain wooden pickaxe"
"minimal design helmet"
```

Keywords: "simple", "plain", "minimal", "clean"

</details>

<details>
<summary>AI adds wrong style elements</summary>

**Problem:** Medieval sword gets futuristic elements

**Fix:**
```txt
"medieval iron sword, traditional design only"
"authentic medieval style, no modern elements"
```

Reinforce style, exclude other styles

</details>

---

## ⚖️ Balancing Creativity

### Finding Your Sweet Spot

**Test different Text Accuracy levels:**

```txt
Test 1: Accuracy 9
Result: Very plain, exact
Opinion: Too boring

Test 2: Accuracy 7
Result: Good detail, follows prompt
Opinion: Just right ✓

Test 3: Accuracy 5
Result: Too many extras
Opinion: Too creative
```

**Your ideal setting** depends on use case.

### Project-Specific Settings

**Vanilla pack:**
```
Text Accuracy: 8-9 (minimal additions)
Goal: Match vanilla aesthetic
```

**Custom fantasy pack:**
```
Text Accuracy: 5-6 (some additions okay)
Goal: Creative but controlled
```

**Showcase art:**
```
Text Accuracy: 4-5 (creative additions welcome)
Goal: Impressive, detailed
```

---

## ✅ Creativity Control Checklist

Preventing over-creativity:

- [ ] Text Accuracy set appropriately (8+ for simple)
- [ ] Used constraint keywords ("simple", "plain")
- [ ] Specified "no decorations" if needed
- [ ] Chose less creative model variant
- [ ] Accepted some variation (AI will add something)
- [ ] Iterated to find right balance

:::success Creativity Controlled
[Fix lack of creativity →](not-creative-enough)
:::
