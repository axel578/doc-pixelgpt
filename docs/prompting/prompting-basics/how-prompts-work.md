---
sidebar_position: 2
---

# How Prompts Work

Understanding how AI interprets your text.

## 🧠 AI Reading Process

### What You Write

```txt
"blue diamond sword with golden handle"
```

### How AI Processes It

**AI breaks down into concepts:**

```
"blue" → Color information
├── Hue: Blue spectrum
├── Apply to: Primary subject
└── Intensity: Standard blue

"diamond" → Material concept
├── Texture: Crystalline, faceted
├── Sheen: Shiny, reflective
└── Style: Geometric patterns

"sword" → Object type
├── Shape: Blade + handle structure
├── Proportions: Long blade, short handle
├── Orientation: Vertical (blade up)
└── Context: Weapon, held item

"golden" → Secondary material
├── Color: Yellow-gold
├── Apply to: Handle (specified)
└── Finish: Metallic sheen

"handle" → Specific part
└── Location: Bottom portion of sword
```

**AI combines all concepts** to generate image.

---

## 🎨 Word Weight

### All Words Matter

**Each word influences generation:**

```txt
"sword" → Generates sword shape
"blue sword" → Generates sword shape + blue color
"blue diamond sword" → + diamond texture/style
"blue diamond sword with gems" → + gem decorations
```

**More words = more guidance** (to a point).

### Word Importance

**AI prioritizes:**
```
1. Primary subject (main item)
2. Material/color descriptors
3. Style keywords
4. Details and decorations
```

**Example:**
```txt
"enchanted blue diamond sword with golden handle"

Priority:
1. "sword" (what to make)
2. "diamond", "blue" (main material/color)
3. "enchanted" (style)
4. "golden handle" (detail)
```

---

## 🔤 Word Choice Impact

### Specific vs Vague

**Vague words:**
```txt
"nice sword" → AI doesn't know what "nice" looks like
"good pickaxe" → "good" is subjective
"cool helmet" → "cool" is not visual
```

**Specific words:**
```txt
"ornate sword" → Decorative, detailed
"sturdy pickaxe" → Thick, solid-looking
"spiked helmet" → Has spikes
```

**Use visual descriptors**, not subjective opinions.

### Material Words

**Good material words:**
```txt
diamond, iron, gold, wood, stone, crystal, glass,
metal, silver, bronze, copper, steel, platinum,
ruby, emerald, sapphire, obsidian, ice, bone
```

**AI understands these well.**

### Color Words

**Basic colors (best):**
```txt
red, blue, green, yellow, orange, purple, pink,
black, white, gray, brown
```

**Descriptive colors (good):**
```txt
crimson, azure, emerald, golden, ruby, sapphire,
dark red, light blue, bright green
```

**Avoid:**
```txt
❌ "nice color", "pretty color"
```

---

## 🎯 Prompt Patterns

### Pattern 1: Material + Item

```
[Material] [Item]

diamond sword
golden pickaxe
iron helmet
wooden shield
```

**Success rate:** 80-90%

### Pattern 2: Color + Item

```
[Color] [Item]

blue sword
red apple
green potion
```

**Success rate:** 75-85%

### Pattern 3: Material + Item + Detail

```
[Material] [Item] with [Detail]

diamond sword with ruby gems
iron pickaxe with wooden handle
golden helmet with wings
```

**Success rate:** 85-95%

### Pattern 4: Style + Detailed Description

```
[Style] [Material] [Item] with [Detail1] and [Detail2]

medieval diamond sword with blue blade and golden handle
fantasy crystal staff with purple orb and silver base
cartoon golden apple with sparkles and leaf
```

**Success rate:** 90-95%

---

## 🔬 How AI Understands Concepts

### Learned Associations

**During training, AI learned:**

```
"sword" appears with:
├── Long blade shape
├── Handle grip
├── Metallic appearance
├── Vertical orientation
└── Weapon context

"diamond" appears with:
├── Blue-ish tint
├── Crystalline texture
├── Shiny surface
├── Geometric facets
└── Valuable context
```

**AI combines these** when you say "diamond sword".

### Concept Combination

**You write:** `glowing crystal sword`

**AI combines:**
```
"glowing" concept (light, bright, aura)
+ "crystal" concept (transparent, faceted, magical)
+ "sword" concept (blade, handle, weapon)
= Glowing magical crystal sword
```

[SCREENSHOT: Concept combination result]

---

## 💬 Natural Language

### Write Naturally

**AI understands conversational English:**

```txt
✅ "blue diamond sword with golden handle"
✅ "red apple with green leaf"
✅ "wooden shield with iron studs"
```

**Don't use code-like syntax:**
```txt
❌ item:sword color:blue material:diamond handle:golden
❌ {type:"sword", color:"blue", material:"diamond"}
❌ <sword color="blue" material="diamond"/>
```

**Just write like you're describing to a person.**

### But Keep It Visual

**Natural BUT visual:**
```txt
✅ "enchanted sword with glowing runes"
❌ "I want a very powerful magical sword that is really strong"
```

**Describe appearance**, not function/story.

---

## 🎯 Context Matters

### Item Context

**AI infers from context:**

```txt
"diamond sword" → Minecraft-style weapon
"fantasy sword" → Fantasy game aesthetic
"pixel art sword" → Retro game style
"cartoon sword" → Colorful, simplified
```

**Style keywords influence everything.**

### Detail Context

**AI understands parts:**

```txt
"sword with blue blade"
└── Blue applies to blade only

"blue sword with golden handle"
├── Blue applies to blade
└── Golden applies to handle
```

**Specify which part** gets which attribute.

---

## 🔄 Prompt Refinement

### Based on Results

**If result is:**

```
Too generic → Add specific details
Wrong colors → Specify colors explicitly
Wrong style → Add style keywords
Missing elements → Mention them clearly
```

### Refinement Example

**Original:** `sword`  
**Result:** Generic brown sword  
**Refined:** `diamond sword`

**Result:** Better, but plain  
**Refined:** `blue diamond sword`

**Result:** Good colors, plain design  
**Refined:** `blue diamond sword with golden handle`

**Result:** Perfect! ✓

---

## ✅ Key Takeaways

1. **Prompts are text descriptions** AI uses to generate
2. **Every word influences** the output
3. **AI breaks down concepts** and combines them
4. **Specific prompts = better results**
5. **Natural language works best**
6. **Iteration refines prompts**

:::success Prompt Mechanics Clear
[Learn prompt structure →](prompt-structure)
:::
