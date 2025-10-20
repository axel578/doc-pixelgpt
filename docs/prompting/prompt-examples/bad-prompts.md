---
sidebar_position: 2
---

# Bad Prompt Examples

Learn what NOT to do.

:::warning Learn from Mistakes
Understanding bad prompts helps you avoid them.
:::

---

## ❌ Too Vague

### Problem Prompts

```txt
❌ "item"
Result: Random item, could be anything
Quality: 10%

❌ "weapon"
Result: Generic weapon, unspecified type
Quality: 20%

❌ "cool sword"
Result: AI doesn't know what "cool" looks like
Quality: 30%

❌ "nice pickaxe"
Result: "Nice" is subjective, AI guesses
Quality: 35%
```

[SCREENSHOT: Vague prompt poor results]

### How to Fix

```txt
✅ "diamond sword" (specify item)
✅ "iron pickaxe" (specify type)
✅ "glowing blue sword" (define "cool" visually)
✅ "ornate golden pickaxe" (define "nice" visually)
```

---

## ❌ Non-English

### Problem Prompts

```txt
❌ "épée en diamant" (French)
Result: Poor quality, confused
Quality: 40%

❌ "다이아몬드 검" (Korean)
Result: Wrong item or generic
Quality: 25%

❌ "espada de diamante" (Spanish)
Result: Inconsistent, low quality
Quality: 35%
```

[SCREENSHOT: Non-English poor results]

### How to Fix

```txt
✅ "diamond sword" (English)
Quality: 95%
```

**Always translate to English first.**

---

## ❌ Multiple Items

### Problem Prompts

```txt
❌ "sword and pickaxe"
Result: Confused mix or just one item
Quality: 30%

❌ "diamond sword ruby pickaxe golden helmet"
Result: Nonsense or ignored items
Quality: 15%

❌ "full diamond armor set with sword and shield"
Result: Confused mess
Quality: 20%
```

[SCREENSHOT: Multiple item prompt failures]

### How to Fix

**Generate separately:**

```txt
Generation 1: "diamond sword" ✓
Generation 2: "ruby pickaxe" ✓
Generation 3: "golden helmet" ✓
```

**One item per prompt.**

---

## ❌ Using Jargon

### Problem Prompts

```txt
❌ "elytra"
Result: AI may not know, random wings
Quality: 40%

❌ "netherite sword"
Result: Generic sword, ignores "netherite"
Quality: 35%

❌ "signalum pickaxe from Thermal Foundation"
Result: Generic pickaxe
Quality: 30%

❌ "Master Sword from Zelda"
Result: Generic sword, doesn't know reference
Quality: 25%
```

[SCREENSHOT: Jargon prompt failures]

### How to Fix

```txt
✅ "black dragon wings with purple highlights"
✅ "dark purple metallic sword with glowing accents"
✅ "orange metallic pickaxe with copper appearance"
✅ "blue and silver sword with triforce symbol"
```

**Describe visually**, not by name.

---

## ❌ Too Complex / Over-Detailed

### Problem Prompts

```txt
❌ "incredibly magnificent super ultra detailed legendary ancient mystical powerful enchanted diamond sword with extremely ornate golden handle featuring intricate Celtic knot engravings and beautiful sparkling purple gemstones embedded throughout the blade and handle with magical glowing blue aura effects"

Result: AI overwhelmed, ignores most words
Quality: 50%
```

[SCREENSHOT: Over-detailed prompt confusion]

### How to Fix

```txt
✅ "enchanted diamond sword with ornate golden handle, purple gems, and blue glow"

Simplified but still detailed:
- Removed redundant words
- Kept key visual elements
- Clear and focused
Quality: 95%
```

**Aim for 5-15 words.**

---

## ❌ Subjective Descriptions

### Problem Prompts

```txt
❌ "beautiful sword"
What does "beautiful" look like? AI guesses.

❌ "awesome pickaxe"
"Awesome" is opinion, not appearance.

❌ "epic legendary weapon"
Neither "epic" nor "legendary" are visual.

❌ "cool modern style"
"Cool" is subjective, unclear.
```

### How to Fix

**Replace subjective with visual:**

```txt
✅ "ornate decorated sword" (instead of "beautiful")
✅ "detailed engraved pickaxe" (instead of "awesome")
✅ "glowing magical weapon with gems" (instead of "epic legendary")
✅ "sleek futuristic design" (instead of "cool modern")
```

---

## ❌ Functional Descriptions

### Problem Prompts

```txt
❌ "powerful fire sword that deals damage"
AI doesn't know what "powerful" or "deals damage" looks like

❌ "fast flying boots"
Speed and flight are not visual

❌ "strong heavy armor"
Strength and weight are not visual

❌ "rare valuable item"
Rarity and value are not visual
```

### How to Fix

```txt
✅ "large flaming red sword with fire effects"
(Looks powerful)

✅ "winged boots with feather decoration"
(Looks like they could fly)

✅ "thick reinforced iron armor with extra plating"
(Looks strong/heavy)

✅ "ornate gemstone with golden frame"
(Looks valuable)
```

**Describe visual characteristics**, not function.

---

## ❌ Requests & Conversations

### Problem Prompts

```txt
❌ "I want a blue diamond sword please"
❌ "Can you make me an iron pickaxe?"
❌ "Please generate a red apple for my server"
❌ "Hello, I would like a magical staff"
```

**AI is not conversational** - doesn't need pleasantries.

### How to Fix

```txt
✅ "blue diamond sword"
✅ "iron pickaxe"
✅ "red apple"
✅ "magical staff with purple orb"
```

**Direct descriptions only.**

---

## ❌ Code/Data Formats

### Problem Prompts

```txt
❌ item:sword color:blue material:diamond
❌ {"type":"sword","color":"blue"}
❌ <sword color="blue" material="diamond"/>
❌ sword --color=blue --material=diamond

❌ (Pasting JSON/YAML/Blockbench data)
```

**AI expects natural language**, not programming syntax.

### How to Fix

```txt
✅ "blue diamond sword"
```

**Natural language description.**

---

## ❌ Wrong Context Items

### Problem Prompts

```txt
❌ "3D sword model for Blockbench"
Pixel GPT generates textures, not 3D models

❌ "photorealistic diamond sword"
Pixel GPT generates pixel art, not photos

❌ "high-poly detailed mesh"
Wrong context - this is for 3D modeling software

❌ "vector graphic sword"
Pixel GPT generates raster images, not vectors
```

### How to Fix

**Understand what Pixel GPT creates:**
```txt
✅ "pixel art diamond sword" (2D texture)
✅ "minecraft style sword" (pixel art aesthetic)
✅ "16x16 sword texture" (correct format)
```

---

## ❌ Ambiguous Descriptions

### Problem Prompts

```txt
❌ "colorful sword"
Which colors? How arranged?

❌ "decorated helmet"
What decorations? Where?

❌ "patterned block"
What pattern?

❌ "special potion"
Special how? What does it look like?
```

### How to Fix

```txt
✅ "rainbow colored sword with gradient blade"
✅ "iron helmet with golden wing decorations"
✅ "stone block with diagonal crack pattern"
✅ "glowing blue potion with sparkle effect"
```

**Be explicit about specifics.**

---

## 📊 Quality Comparison Table

| Bad Prompt | Why Bad | Quality | Good Alternative | Quality |
|------------|---------|---------|------------------|---------|
| "sword" | Too vague | ⭐⭐ | "diamond sword" | ⭐⭐⭐⭐ |
| "épée" | Not English | ⭐ | "sword" | ⭐⭐⭐⭐ |
| "cool weapon" | Subjective | ⭐⭐ | "glowing blue sword" | ⭐⭐⭐⭐⭐ |
| "sword and axe" | Multiple items | ⭐ | "sword" (separate) | ⭐⭐⭐⭐ |
| "powerful sword" | Not visual | ⭐⭐⭐ | "large glowing sword" | ⭐⭐⭐⭐⭐ |

---

## 🔧 Fixing Bad Prompts

### Exercise: Identify Issues

<details>
<summary>Prompt: "nice weapon for my server"</summary>

**Issues:**
1. "nice" - subjective, not visual
2. "weapon" - too vague (sword? axe? bow?)
3. "for my server" - irrelevant context

**Fixed:**
```txt
"ornate diamond sword"
```

</details>

<details>
<summary>Prompt: "épée magique puissante"</summary>

**Issues:**
1. French language
2. "magique" (magical) - need visual equivalent
3. "puissante" (powerful) - not visual

**Fixed:**
```txt
"glowing magical sword with blue enchantment effect"
```

</details>

<details>
<summary>Prompt: "sword pickaxe helmet"</summary>

**Issues:**
1. Multiple items in one prompt
2. No adjectives/details

**Fixed:**
```txt
Generate three times separately:
1. "diamond sword"
2. "iron pickaxe"
3. "golden helmet"
```

</details>

---

## ✅ Bad Prompt Checklist

Avoid these mistakes:

- [ ] ❌ Vague terms ("item", "weapon", "thing")
- [ ] ❌ Non-English words
- [ ] ❌ Multiple items in one prompt
- [ ] ❌ Jargon or game-specific names
- [ ] ❌ Subjective adjectives ("nice", "cool")
- [ ] ❌ Functional descriptions ("powerful", "fast")
- [ ] ❌ Conversational text ("I want", "please")
- [ ] ❌ Code/data formats

:::success Mistakes Identified
[See item-specific examples →](item-prompts)
:::
