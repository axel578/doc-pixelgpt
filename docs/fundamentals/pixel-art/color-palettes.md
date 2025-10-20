---
sidebar_position: 2
---

# Color Palettes

Understanding color palettes in pixel art.

## 🎨 What is a Color Palette?

A **color palette** is a limited set of colors used consistently throughout artwork.

**Example palette:**
```
Minecraft Diamond:
├── #5AEBFF (bright blue - highlights)
├── #00AACC (blue - main)
├── #008899 (dark blue - shadows)
└── #FFFFFF (white - shiny spots)
```

[SCREENSHOT: Diamond item showing these 4 colors only]

---

## 🎯 Why Limit Colors?

### Cohesion

**Limited palette creates unity:**
```
5-color sword + 5-color pickaxe = Matching set
50-color sword + 30-color pickaxe = Doesn't match
```

### Readability

**At 16×16, fewer colors = clearer:**
```
Too many colors = Muddy, unclear
Limited colors = Clean, readable
```

[SCREENSHOT: Good vs bad color usage at 16×16]

### Performance

**Fewer unique colors:**
- Smaller file sizes
- Faster compression
- Better PNG optimization

---

## 🌈 Palette Sizes

### Very Limited (4-8 colors)

**Used for:**
- Retro 8-bit style
- Very small sprites
- High contrast needed

[SCREENSHOT: 4-color sprite example]

### Moderate (16-32 colors)

**Used for:**
- Minecraft textures
- Most game sprites
- Balanced detail

**Typical Minecraft item:**
```
Main color: 3-4 shades
Accent color: 2-3 shades
Outline: 1-2 shades
Total: 6-9 colors
```

[SCREENSHOT: Minecraft item showing color breakdown]

### Generous (64+ colors)

**Used for:**
- Detailed pixel art scenes
- Character portraits
- Complex illustrations

---

## 🎨 Color Harmony

### Complementary Colors

**Opposite on color wheel:**
```
Blue + Orange
Red + Green
Purple + Yellow
```

**Effect:** High contrast, vibrant

[SCREENSHOT: Complementary color examples]

### Analogous Colors

**Adjacent on color wheel:**
```
Blue + Blue-green + Green
Red + Orange + Yellow
```

**Effect:** Harmonious, cohesive

### Monochromatic

**Single hue, multiple shades:**
```
Light blue → Medium blue → Dark blue
```

**Effect:** Unified, simple

---

## ⛏️ Minecraft Color Palettes

### Material Palettes

**Diamond (Blues):**
```
#5AEBFF - Highlight
#00AACC - Main
#008899 - Shadow
```

**Gold (Yellows):**
```
#FFD700 - Highlight
#FFA500 - Main
#CC8400 - Shadow
```

**Iron (Grays):**
```
#FFFFFF - Highlight
#C0C0C0 - Main
#808080 - Shadow
```

[SCREENSHOT: Diamond, gold, iron items showing palettes]

### Natural Palettes

**Wood:**
```
Browns and tans
#8B4513, #A0522D, #D2691E
```

**Stone:**
```
Grays
#A9A9A9, #808080, #696969
```

**Grass:**
```
Greens
#7CFC00, #32CD32, #228B22
```

---

## 🎯 Using Palettes in Pixel GPT

### Describing Colors in Prompts

**Be specific:**
```txt
✅ "bright blue diamond sword"
✅ "golden sword with ruby red gems"
✅ "dark green emerald pickaxe"

❌ "cool colored sword"
❌ "nice looking pickaxe"
```

### Color Palette Matcher Tool

**Located:** Newbie Premium Tools

**Purpose:** Apply color palette from reference image

**Workflow:**
1. Generate items
2. Upload reference with desired palette
3. Tool recolors to match

[Link to tool guide →](../../features/special-tools/color-palette-matcher)

### Style Selector for Palettes

**Use base image with desired colors:**
1. Create image with target palette
2. Use as base in Style Selector
3. AI uses those colors

**Use "Color Style" mode:**
- Forces AI to use reference colors
- Maintains palette consistency

---

## 🎨 Creating Consistent Sets

### Method 1: Describe Palette

```txt
All prompts include same colors:

"diamond sword with bright blue blade"
"diamond pickaxe with bright blue head"
"diamond axe with bright blue blade"
```

### Method 2: Style Selector

```txt
1. Generate first item (diamond sword)
2. Use as style reference for others
3. AI maintains color palette
```

### Method 3: Batch with Suffix

```txt
Batch prompts:
sword
pickaxe
axe

Suffix: "in bright blue diamond style"

Results:
- sword in bright blue diamond style
- pickaxe in bright blue diamond style
- axe in bright blue diamond style
```

---

## 🔧 Palette Tools

### Extract Palette from Image

**In image editor:**
1. Open generated item
2. Use eyedropper tool
3. Note hex codes
4. Document palette

**In Pixel GPT:**
- Style Selector automatically uses reference colors
- Color Palette Matcher tool

### Apply Palette

**Manual (image editor):**
1. Replace colors manually
2. Use bucket fill tool
3. Maintain palette strictly

**Pixel GPT:**
- Color Palette Matcher
- Style Selector with color mode
- Generate with color-specific prompts

---

## ✅ Color Palette Checklist

For cohesive packs:

- [ ] Chose limited palette (8-32 colors)
- [ ] Documented hex codes
- [ ] Use same palette across all items
- [ ] Colors harmonize (complementary or analogous)
- [ ] Tested together in-game

:::success Palettes Mastered
[Learn pixel art principles →](pixel-art-principles)
:::
