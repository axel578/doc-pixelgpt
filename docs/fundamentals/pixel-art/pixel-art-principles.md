---
sidebar_position: 3
---

# Pixel Art Principles

Core techniques and principles.

## 🎨 Core Principles

### 1. Readability

**Pixel art must be clear at small sizes.**

**Good readability:**
```
✅ Clear silhouette
✅ Strong contrast
✅ Simple shapes
✅ Recognizable forms
```

[SCREENSHOT: Readable vs unreadable pixel art]

### 2. Economy of Detail

**Every pixel counts** - no wasted pixels.

```
✅ Each pixel serves a purpose
✅ Remove unnecessary details
✅ Simplify complex shapes
```

### 3. Consistent Pixel Density

**All elements same "pixel size".**

```
✅ Sword and pickaxe same resolution
❌ Sword 16×16, pickaxe 32×32 (mixels)
```

---

## 🖌️ Techniques

### Outlines

**Dark border around objects:**

**Purpose:**
- Defines shape
- Separates from background
- Increases clarity

**Types:**
```
Full outline: Complete border
Selective outline: Only key edges
No outline: Colored edges only
```

[SCREENSHOT: Different outline styles]

**In Minecraft:**
- Most items have outlines
- Usually black or very dark color

### Anti-Aliasing (Rarely Used)

**Softening jagged edges:**

**Not common in Minecraft style:**
```
Minecraft = Sharp, blocky edges
Anti-aliasing = Smooth, soft edges
```

**When to use:**
- High-resolution pixel art (128×128+)
- Curved shapes
- Organic forms

**When to avoid:**
- Minecraft textures (keep sharp)
- Low resolution (16×16)

---

## 💡 Shading Techniques

### Light Source

**Consistent light direction:**
```
Typically top-left:

▓ = highlight
▒ = mid-tone
░ = shadow

▓▓▓
▓▒▒
▒░░
```

**Apply to all items consistently.**

### Color Ramps

**Gradual shade transitions:**

```
Highlight → Base → Shadow

3-color ramp:
├── Light blue
├── Medium blue
└── Dark blue

5-color ramp:
├── Very light blue
├── Light blue
├── Medium blue
├── Dark blue
└── Very dark blue
```

**More colors = smoother shading**

### Dithering

**Creating illusion of intermediate colors:**

```
Checkerboard pattern:
▓░▓░
░▓░▓
▓░▓░

Result: Appears as blend between ▓ and ░
```

[SCREENSHOT: Dithering examples]

**Used for:**
- Gradients
- Textures
- Transitions

---

## 🎯 Minecraft Pixel Art Style

### Characteristics

```
✅ 16×16 resolution (items/blocks)
✅ Simple, clear shapes
✅ Limited colors per item (6-12)
✅ Strong outlines
✅ Readable when small
✅ Blocky aesthetic
```

### Vanilla Style Guide

**Study vanilla textures:**
- Simple shading (2-3 color ramps)
- Clear outlines
- Recognizable shapes
- Not overly detailed

[SCREENSHOT: Vanilla items breakdown]

**When generating:**
```txt
Add "minecraft style" to prompts for vanilla-like results
```

---

## 🖼️ Resolution vs Detail

### Low Resolution (16×16)

**Constraints:**
```
Limited detail possible
Simple shapes only
Focus on silhouette
Clear, bold design
```

**Best for:**
- Icons
- Game items
- UI elements

### Medium Resolution (32×32, 64×64)

**More freedom:**
```
Additional detail possible
Smoother curves
More shading
Complex textures
```

**Best for:**
- Detailed items
- Character sprites
- Small scenes

### High Resolution (128×128+)

**Maximum detail:**
```
Very detailed artwork
Complex scenes
Character portraits
Illustrations
```

**Best for:**
- Showcase art
- Promotional material
- Detailed scenes

---

## ✅ Applying Principles to Pixel GPT

### Prompting for Good Pixel Art

**Emphasize clarity:**
```txt
✅ "clear simple diamond sword"
✅ "bold red apple with strong outline"

❌ "ultra detailed realistic sword"
❌ "photorealistic apple"
```

### Choosing Models

**Different models, different styles:**
```
Vanilla-style: ultimate extreme mc item
RPG-style: ultimate extreme mc rpg item
Creative-style: ultimate extreme mc creative item
```

### Iteration for Quality

```
Generate → Evaluate → Refine prompt → Regenerate
```

**Look for:**
- Clear silhouette?
- Good color palette?
- Readable details?
- Matches desired style?

---

## 📚 Learning Resources

### Study Examples

**Learn from:**
- Vanilla Minecraft textures
- Popular texture packs
- Pixel art games
- Pixel art communities

### Practice

**Improve by:**
- Generating many items
- Comparing results
- Refining prompts
- Studying what works

---

## ✅ Pixel Art Checklist

Good pixel art should have:

- [ ] Clear, recognizable silhouette
- [ ] Limited, harmonious color palette
- [ ] Appropriate detail for resolution
- [ ] Consistent light source/shading
- [ ] Clean pixel placement
- [ ] Readable at intended display size

:::success Principles Mastered
[Complete Fundamentals section](../fundamentals/)

Ready for: [Understanding AI](../../understanding-ai/)
:::
