---
sidebar_position: 6
---

# Natural Language

Write prompts as natural descriptions.

## 💬 What is Natural Language?

**Natural language** = How humans normally speak/write.

**For prompts:**
```txt
✅ "blue diamond sword with golden handle"
✅ "red apple with green leaf"
✅ "wooden shield with iron studs"
```

**Not programming syntax:**
```txt
❌ item:sword color:blue material:diamond
❌ {type:"sword", blade:"blue", handle:"gold"}
❌ <sword><blade color="blue"/><handle color="gold"/></sword>
```

---

## ✍️ Writing Naturally

### Conversational Style

**Write like you're describing to a friend:**

```txt
Good:
"I see a blue diamond sword with a golden handle"
→ Simplify to: "blue diamond sword with golden handle"

Not:
"sword.color = blue; sword.material = diamond"
```

### English Sentence Structure

**Subject + Descriptors + Details:**

```txt
✅ "enchanted blue diamond sword with ornate golden handle"
   [style] [color] [material] [item] with [detail]

✅ "red apple with brown stem"
   [color] [item] with [detail]
```

**Feels natural to read.**

---

## 🚫 What to Avoid

### Code-Like Syntax

**Don't use:**
```txt
❌ item:sword, color:blue, material:diamond, handle:gold
❌ sword{blade:blue, handle:gold, gems:ruby}
❌ [sword|blue|diamond|golden_handle]
❌ sword --color blue --material diamond
```

**AI expects natural language**, not programming syntax.

### Structured Data Formats

**Don't paste:**
```txt
❌ JSON: {"item":"sword","color":"blue"}
❌ YAML: item: sword\n  color: blue
❌ XML: <item type="sword" color="blue"/>
❌ CSV: sword,blue,diamond,golden
```

**Result:** AI gets confused, ignores structure.

### Blockbench Models

**Don't paste 3D model data:**
```txt
❌ (Pasting Blockbench JSON)
❌ (Pasting .bbmodel content)
❌ (Pasting model coordinates)
```

**AI generates images, not 3D models.** Describe visually instead.

:::warning Common Mistake
Many users paste JSON/YAML/Blockbench data expecting AI to understand. **It doesn't work.** Use natural language descriptions.
:::

---

## ✅ Natural Language Patterns

### Simple Descriptions

**Just describe it:**
```txt
✅ "a blue sword"
✅ "an iron pickaxe"
✅ "a red apple"
```

**Can drop "a/an" for brevity:**
```txt
✅ "blue sword"
✅ "iron pickaxe"
✅ "red apple"
```

### With Details

**Add details naturally:**
```txt
✅ "blue sword with gems"
✅ "iron pickaxe with wooden handle"
✅ "red apple with leaf"
```

### Complex Descriptions

**Natural sentences:**
```txt
✅ "enchanted blue diamond sword with ornate golden handle and purple gemstones"
✅ "medieval iron helmet with steel horns and leather straps"
✅ "magical wooden staff with glowing purple crystal orb and silver rune engravings"
```

**Reads like English sentence** (minus some grammar words).

---

## 🎨 Natural Flow

### Describing Parts

**Use "with" naturally:**

```txt
"sword with blue blade and golden handle"
"staff with purple orb and silver decorations"
"helmet with horns and face guard"
```

**Connects main subject to details.**

### Describing Attributes

**Adjectives before nouns (English grammar):**

```txt
✅ "blue blade" (adjective before noun)
✅ "golden handle" (adjective before noun)
✅ "purple gems" (adjective before noun)

Awkward:
⚠️ "blade blue" (works but unnatural)
```

---

## 🔧 Examples of Natural Prompts

### Weapons

```txt
✅ "diamond sword with blue glow"
✅ "iron axe with wooden handle and leather grip"
✅ "golden bow with silver string"
✅ "crystal dagger with purple blade"
✅ "wooden staff with magical green orb"
```

### Armor

```txt
✅ "iron helmet with steel horns"
✅ "diamond chestplate with blue trim"
✅ "leather boots with iron reinforcements"
✅ "golden crown with ruby gemstones"
```

### Food

```txt
✅ "red apple with brown stem and small leaf"
✅ "golden bread loaf with wheat grains"
✅ "cooked meat with grill marks"
✅ "blue potion bottle with bubbles"
```

### Blocks

```txt
✅ "stone block with cracks and moss"
✅ "wooden planks with dark grain pattern"
✅ "ice block with frozen bubbles inside"
✅ "brick block with weathered mortar"
```

---

## 💡 Naturalness vs Brevity

### Full Sentences (Too Much)

```txt
❌ "I would like a very beautiful blue diamond sword with a golden handle please"
❌ "Can you make me a red apple?"
❌ "Please generate an iron pickaxe for my server"
```

**Remove filler words:**
- "I would like"
- "Can you make"
- "Please generate"
- "for my server"

### Optimized Natural

```txt
✅ "blue diamond sword with golden handle"
✅ "red apple"
✅ "iron pickaxe"
```

**Natural word order, but concise.**

---

## 🎯 Natural Language Guidelines

### Do Use

```txt
✅ Descriptive adjectives: "blue", "ornate", "glowing"
✅ Connecting words: "with", "and"
✅ Part names: "blade", "handle", "pommel"
✅ Natural word order: "blue diamond sword"
```

### Don't Use

```txt
❌ Programming syntax: color:blue
❌ Data formats: {"color":"blue"}
❌ Commands: --color blue
❌ Tags: [blue] [diamond]
❌ Requests: "please make"
```

---

## 🔧 Converting Technical to Natural

### Example 1: Programming Background

**Technical thinking:**
```txt
sword.material = "diamond"
sword.blade.color = "blue"
sword.handle.color = "gold"
```

**Natural prompt:**
```txt
"diamond sword with blue blade and golden handle"
```

### Example 2: JSON Data

**Technical:**
```json
{
  "type": "sword",
  "material": "diamond",
  "enchanted": true,
  "color": {
    "blade": "blue",
    "handle": "gold"
  }
}
```

**Natural:**
```txt
"enchanted diamond sword with blue blade and golden handle"
```

### Example 3: Specification Document

**Technical:**
```txt
Item: Sword
Material: Diamond (primary)
Color: Blue (#0000FF) blade, Gold (#FFD700) handle
Enchantment: Yes
Decorations: Ruby gems (x3)
```

**Natural:**
```txt
"enchanted diamond sword with blue blade, golden handle, and ruby gems"
```

---

## ✅ Natural Language Checklist

Good natural prompt:

- [ ] Reads like English description
- [ ] No programming syntax (no colons, brackets, etc.)
- [ ] No data format structures
- [ ] No filler words ("please", "I want")
- [ ] Flows naturally when read aloud
- [ ] Uses "with" and "and" to connect ideas

:::success Natural Language Mastered
[See good prompt examples →](../prompt-examples/good-prompts)
:::
