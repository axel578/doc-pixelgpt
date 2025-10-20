---
sidebar_position: 4
---

# What AI Doesn't Know

Understanding AI's knowledge gaps.

## ❌ Knowledge Limitations

AI has **fixed knowledge** from training. It cannot:

```
❌ Search the internet
❌ Learn new information
❌ Know things added after training
❌ Understand personal/custom concepts
```

---

## 🕐 Time Cutoff

### Training Cutoff Date

**AI knowledge stops at training time.**

**This means:**
```
✅ Knows: Items that existed during training
❌ Doesn't know: Items added after training
```

**Example:**
```
If AI was trained in 2023:
✅ Knows: 1.19 Minecraft items
❌ May not know: 1.20+ items
```

:::info Unknown Cutoff
Exact training cutoff varies per model. Generally 2023-2024 for most models.
:::

### Practical Impact

**Recent Minecraft updates:**
```
⚠️ AI may not recognize new item names
⚠️ AI may not know new blocks
⚠️ AI may not understand new mechanics
```

**Solution:** Describe visually instead of using new names.

---

## 🎮 Game-Specific Gaps

### Modded Minecraft

**Popular mods AI might know:**
```
⚠️ Tinkers' Construct (maybe)
⚠️ Thermal Expansion (maybe)
⚠️ BuildCraft (maybe)
```

**Mods AI probably doesn't know:**
```
❌ Small/niche mods
❌ New mods (post-training)
❌ Server-specific custom items
```

**Example issue:**

```txt
Prompt: "signalum sword from Thermal Foundation"
Result: AI confused (doesn't know "signalum")

Better: "orange metallic sword with copper accents"
Result: AI understands visual description
```

### Other Games

**Games AI might know:**
```
⚠️ Terraria (popular)
⚠️ Stardew Valley (popular)
⚠️ Pokémon (very popular)
```

**Games AI probably doesn't know:**
```
❌ Obscure indie games
❌ Very new games
❌ Regional games
❌ Unreleased games
```

---

## 🌐 Language Limitations

### English vs Other Languages

**Training data breakdown (approximate):**
```
English: 80-90% of data
Other languages: 10-20% of data
```

**Impact on quality:**

| Language | Understanding | Quality |
|----------|---------------|---------|
| English | Excellent | 95% |
| French | Moderate | 50% |
| Spanish | Moderate | 50% |
| German | Moderate | 45% |
| Korean | Poor | 30% |
| Japanese | Poor | 30% |
| Other | Very poor | 10-20% |

**Always use English** for best results.

---

## 🎨 Concept Gaps

### Very Specific References

**AI struggles with:**

```
❌ Specific anime characters
❌ Specific book/movie items
❌ Brand names/logos
❌ Real people
❌ Specific historical events
```

**Why?** Training focused on general concepts, not specific instances.

**Example:**

```txt
❌ "Harry Potter's wand"
✅ "wooden wand with phoenix feather"

❌ "Master Sword from Zelda"
✅ "blue and silver sword with triforce symbol"

❌ "Excalibur"
✅ "legendary ornate sword in stone"
```

### Custom/Personal Concepts

**AI doesn't know:**
```
❌ Your server's custom items
❌ Your OC (original character)
❌ Your made-up materials
❌ Your personal lore
```

**Solution:** Describe visually in detail.

---

## 🔧 Working Around Gaps

### Strategy 1: Visual Description

**Instead of names, describe appearance:**

```txt
Unknown term: "elytra"
Visual description: "black dragon wings with purple accents"

Unknown: "netherite"
Visual: "dark gray metallic material with purple glow"

Unknown: "amethyst shard"
Visual: "purple crystal spike"
```

### Strategy 2: Use Known Components

**Build from what AI knows:**

```txt
AI knows: "sword" + "crystal" + "magical" + "glowing"
Combine: "magical glowing crystal sword"
Result: AI understands all parts, generates combination
```

### Strategy 3: Reference Images

**Show AI what you mean:**

```
Upload reference image
Use in Style Selector
AI copies visual style/colors
```

**Don't need to describe** what AI doesn't know - show it instead.

---

## 🎯 Internet vs AI Knowledge

### AI Cannot

```
❌ Browse websites
❌ Check Minecraft wiki
❌ Look up mod documentation
❌ Search for references
❌ Access current information
```

### AI Can Only Use

```
✅ Information from training
✅ Patterns learned previously
✅ Combinations of known concepts
```

**Think of AI as:**
```
Person who studied in 2023
Knows everything from before 2023
Cannot look things up
Cannot learn new things
```

---

## 📊 Knowledge Reliability

### Highly Reliable

**AI consistently understands:**
```
✅ Basic shapes (sword, circle, square)
✅ Primary colors (red, blue, green)
✅ Common materials (wood, stone, metal)
✅ Vanilla Minecraft items
```

**Use these confidently in prompts.**

### Moderately Reliable

**AI sometimes understands:**
```
⚠️ Popular mod items
⚠️ Fantasy terms
⚠️ Style descriptions
⚠️ Decorative terms
```

**Test and adjust if needed.**

### Unreliable

**AI rarely understands:**
```
❌ Very specific game items
❌ Recent additions
❌ Niche terminology
❌ Custom concepts
```

**Use visual descriptions instead.**

---

## 🔍 Identifying Knowledge Gaps

### Signs AI Doesn't Understand

**Generated image shows:**
```
⚠️ Generic/random result
⚠️ Wrong item entirely
⚠️ Confused mix of elements
⚠️ Ignores key prompt terms
```

**When this happens:**
1. AI didn't understand prompt
2. Switch to visual description
3. Use simpler, known terms

### Example Failures

**Prompt with unknown term:**
```txt
"chromatic sword" (AI may not know "chromatic")
Result: Generic sword, no special colors
```

**Fixed with known terms:**
```txt
"rainbow colored sword with shifting hues"
Result: Colorful sword matching description
```

---

## 💡 Expanding AI's Effective Knowledge

### Method 1: Teach with References

**Upload reference image:**
1. Create/find image of desired style
2. Upload to My Reference Images
3. Use in Style Selector
4. AI copies what it sees

**Now AI "knows"** what you want (visually).

### Method 2: Combine Known Elements

**Build complex from simple:**

```txt
AI knows "sword"
AI knows "ice"
AI knows "glowing"
AI knows "blue"

Combine: "glowing blue ice sword"
Result: AI understands all parts
```

### Method 3: Iterate and Refine

**Progressive refinement:**
```
Try 1: "special sword"
Result: Too generic

Try 2: "crystal sword"
Result: Better, but plain

Try 3: "glowing purple crystal sword with gold inlay"
Result: Excellent!
```

**Learn what AI responds to** through experimentation.

---

## 🎯 Practical Guidelines

### When Prompting

**Use terms AI knows:**
```
✅ Common Minecraft items
✅ Basic colors and materials
✅ Simple descriptive words
✅ Visual characteristics
```

**Avoid terms AI may not know:**
```
❌ Specific mod names
❌ Very recent items
❌ Niche game references
❌ Technical jargon
```

### Testing Knowledge

**Quick test:**
```
Generate with specific term
If result is wrong/generic → AI doesn't know it
Switch to visual description
```

---

## 📊 Knowledge Confidence Levels

| Concept Type | Confidence | Strategy |
|--------------|-----------|----------|
| Vanilla Minecraft items | High ✅ | Use directly |
| Common objects | High ✅ | Use directly |
| Colors/materials | High ✅ | Use directly |
| Popular mods | Medium ⚠️ | Test first |
| Other games | Medium ⚠️ | Describe visually |
| Recent items | Low ❌ | Describe visually |
| Niche terms | Low ❌ | Describe visually |

---

## ✅ Knowledge Checklist

Before using a term in prompt:

- [ ] Is it a vanilla Minecraft item? (Probably knows)
- [ ] Is it a common object? (Probably knows)
- [ ] Is it from a popular game? (Maybe knows)
- [ ] Is it recent/new? (Probably doesn't know)
- [ ] Is it very specific/niche? (Probably doesn't know)

**When unsure:** Use visual description instead.

:::success Knowledge Boundaries Clear
[Learn what AI doesn't know →](what-ai-doesnt-know)

Already there! → [Learn to work with AI →](working-with-ai)
:::
