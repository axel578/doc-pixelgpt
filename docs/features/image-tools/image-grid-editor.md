---
sidebar_position: 1
---

# Image Grid Editor

Complete guide to extracting items from grids.

## 🎯 What is Grid Editor?

**Grid Editor** is the built-in tool for:
```
✅ Removing white backgrounds
✅ Separating grid items
✅ Extracting individual PNGs
✅ Adjusting pixel sizes
```

**Most essential tool** on Pixel GPT - you'll use it for every generation.

[SCREENSHOT: Grid Editor interface]

---

## 📊 Why Grid Editor Exists

### AI Generates Grids

**AI outputs multiple items at once:**

```
2×2 grid = 4 items
3×3 grid = 9 items
4×4 grid = 16 items
```

**One image contains many items.**

[SCREENSHOT: 2×2 grid of swords]

**You need individual items** for Minecraft (separate PNG files).

**Grid Editor separates them.**

---

## 🚀 Accessing Grid Editor

### After Generation

**Step 1:** Wait for generation to complete

**Step 2:** Check left sidebar for "NEW" badge

[SCREENSHOT: Left sidebar with NEW badge]

**Step 3:** Click the image

**Step 4:** Click **"Grid"** button

[SCREENSHOT: Grid button location]

**Grid Editor opens** in popup.

---

## 🎨 Grid Editor Interface

### Layout

```
┌─────────────────────────────────────┐
│  Tools        │      Canvas         │
│  ────────     │                     │
│  🔍 Zoom      │   [Generated Image] │
│  🪄 Wand      │                     │
│               │                     │
│  Settings     │                     │
│  ────────     │                     │
│  Pixel Size   │                     │
│  Grid Size    │                     │
│  Wand Settings│                     │
└─────────────────────────────────────┘
```

[SCREENSHOT: Grid Editor with labeled sections]

### Tools

**Top toolbar:**

| Tool | Icon | Purpose |
|------|------|---------|
| **Zoom/Pan** | 🔍 | Navigate image, preview |
| **Magic Wand** | 🪄 | Select/remove colors |

**Click tool to activate**, then use on canvas.

### Settings Panel

**Left panel:**

```
Pixel Size: [number]
Grid Size: [2×2, 3×3, 4×4...]
Wand Threshold: [1-10 slider]
Remove Color: [color picker]
```

---

## 🪄 Removing Background (Step-by-Step)

### Step 1: Select Wand Tool

**Click magic wand icon (🪄)**

Tool becomes active (highlighted).

[SCREENSHOT: Wand tool selected]

### Step 2: Adjust Threshold

**Wand Threshold slider:**

```
Low (1-3): Only exact color match
Medium (5-7): Similar colors (recommended)
High (8-10): All similar shades
```

**Recommended starting value: 5-7**

### Step 3: Select Color to Remove

**Usually white:**

```
Remove Color: [White] (default)
```

**If different background:**
- Click color picker
- Click on background color in image

### Step 4: Click White Areas

**Click on background:**

```
Click → Area selected (animated border)
Click again → Another area selected
Keep clicking → All white areas selected
```

[SCREENSHOT: Selected areas with animated border]

**Selected areas become transparent** (checkered pattern).

[SCREENSHOT: Transparent areas showing checkerboard]

### Step 5: Return to Zoom Tool

**Click zoom icon (🔍)**

**Always return to zoom tool** after using wand.

**Why:** Prevents accidental wand clicks.

---

## 📐 Calculating Pixel Size

### The Formula

```
Pixel Size = Canvas Size ÷ (Grid Width × Item Size)
```

### Step-by-Step Calculation

**1. Check canvas size**

Look at bottom-left:

```
"Select Canvas 512 × 512"
```

[SCREENSHOT: Canvas size indicator]

**2. Count grid items**

```
Count horizontally: 2 items across
Count vertically: 2 items down
Grid: 2×2
```

**3. Know item size**

```
16px model → Each item is 16×16
32px model → Each item is 32×32
```

**For 16px models: item size = 16**

**4. Calculate**

```
Canvas: 512×512
Grid: 2×2 (2 items across = 32 pixels width total)
Item size: 16×16

Calculation:
Pixel Size = 512 ÷ (2 × 16)
           = 512 ÷ 32
           = 16
```

**Set Pixel Size to 16**

---

## 📊 Common Pixel Size Values

### Quick Reference Chart

| Canvas Size | Grid | Item Size | Pixel Size |
|-------------|------|-----------|------------|
| 512×512 | 2×2 | 16×16 | **16** |
| 512×512 | 4×4 | 16×16 | **8** |
| 1024×1024 | 2×2 | 32×32 | **16** |
| 1024×1024 | 4×4 | 32×32 | **8** |
| 256×256 | 2×2 | 16×16 | **8** |
| 2048×2048 | 2×2 | 128×128 | **8** |

**Most common: Pixel Size = 8 or 16**

:::tip Remember This
For 16px models with 2×2 grid on 512×512 canvas: **Pixel Size = 16** (always)
:::

---

## 🎯 Setting Grid Size

### Counting Items

**Look at generated image:**

```
How many items across? → 2
How many items down? → 2
Grid Size → 2×2
```

[SCREENSHOT: Counting grid items]

**Set Grid Size dropdown:**

```
Select: 2×2 (or 3×3, 4×4, etc.)
```

### Grid Alignment

**After setting pixel size and grid size:**

**Items should align perfectly in grid cells.**

[SCREENSHOT: Properly aligned grid]

**If items don't align:**
- Pixel size wrong (recalculate)
- Grid size wrong (recount)
- Canvas size different than expected

---

## 💾 Extracting Items

### Method 1: Save Individual Item

**Right-click on item** in grid cell:

```
Menu appears:
┌─────────────────────────────┐
│ Save as image (16×16)       │ ← Choose this
│ Copy image to clipboard     │
│ Save without resize         │
└─────────────────────────────┘
```

[SCREENSHOT: Right-click menu]

**Select "Save as image (16×16)"**

**Downloads:** PNG file at native resolution (16×16)

### Method 2: Copy to Clipboard

**Right-click → "Copy image to clipboard"**

**Then:**
```
Paste (Ctrl+V) in image editor
Edit/save manually
```

**Best for:** Quick editing in external editor.

### Method 3: Save Without Resize

**Right-click → "Save without resize"**

**Downloads:** Larger version (e.g., 256×256)

:::warning Usually Wrong Choice
For Minecraft, always use "Save as image (16×16)" to get correct native resolution.
:::

### Method 4: Download All

**Click "Download" button** (if available)

**Downloads:** All items as separate files

**Best for:** Saving entire grid quickly.

---

## 🔧 Grid Editor Troubleshooting

<details>
<summary>Items are too big/small</summary>

**Problem:** Items don't fit cells or are tiny

**Cause:** Wrong Pixel Size

**Fix:**
```
1. Verify canvas size (bottom-left)
2. Count grid items carefully
3. Recalculate: Canvas ÷ (Grid × Item Size)
4. Set correct Pixel Size
```

**Example:**
```
Canvas: 512×512
Grid: 2×2
Item: 16×16
Pixel Size = 512 ÷ 32 = 16 ✓
```

</details>

<details>
<summary>Grid doesn't align</summary>

**Problem:** Items not in grid cells

**Causes:**
- Wrong pixel size
- Wrong grid size
- Image not fully loaded

**Fixes:**
1. Recalculate pixel size
2. Recount grid (2×2, 3×3?)
3. Refresh Grid Editor
4. Wait for full image load

</details>

<details>
<summary>Can't remove background</summary>

**Problem:** Magic wand not working

**Fixes:**
1. Make sure wand tool selected (🪄)
2. Adjust threshold (try 5-7)
3. Click multiple white areas
4. Zoom in for precision clicks

</details>

<details>
<summary>Some white pixels remain</summary>

**Problem:** Background not fully transparent

**Fixes:**
1. Zoom in (scroll wheel)
2. Click remaining white pixels individually
3. Raise threshold slightly (6 → 7)
4. Click around item edges carefully

</details>

<details>
<summary>Wand selects part of item</summary>

**Problem:** Item pixels being selected

**Cause:** Threshold too high

**Fix:**
1. Lower threshold (7 → 4)
2. Click more carefully
3. Avoid clicking near item edges

</details>

<details>
<summary>Can't see all items</summary>

**Problem:** Grid larger than visible area

**Solution:**
- Zoom out (scroll wheel out)
- Use zoom tool to pan around
- Or extract visible items, scroll, extract rest

</details>

---

## 🎯 Grid Editor Best Practices

### Workflow Checklist

**Before extracting:**

- [ ] Removed all white background (magic wand)
- [ ] Verified transparency (checkered pattern visible)
- [ ] Calculated pixel size correctly
- [ ] Set grid size correctly
- [ ] Items align in grid cells
- [ ] Returned to zoom tool (🔍)

**When extracting:**

- [ ] Right-click desired item
- [ ] Choose "Save as image (16×16)" NOT "without resize"
- [ ] Verify downloaded file is correct size
- [ ] Check transparency in file

### Quality Checks

**After extraction:**

```
1. Open PNG in image editor
2. Verify: Transparent background (checkered)
3. Verify: Correct size (16×16)
4. Verify: Item looks clean
5. Verify: No white pixels remaining
```

---

## 💡 Advanced Grid Editor Tips

:::tip Tip #1: Zoom for Precision
Scroll wheel to zoom in/out. Essential for precise wand clicking around item edges.
:::

:::tip Tip #2: Click Multiple Times
Don't expect one wand click to select everything. Click all white areas separately.
:::

:::tip Tip #3: Lower Threshold for Complex Items
Items with light colors? Lower threshold to 3-4 to avoid selecting item pixels.
:::

:::tip Tip #4: Always Verify Transparency
Before downloading, confirm checkered pattern visible in all background areas.
:::

:::tip Tip #5: Save Best Items Only
Grid has 4 items? You don't need all 4. Save only the best 1-2 variations.
:::

---

## 📊 Grid Editor Shortcuts

| Action | Method |
|--------|--------|
| Zoom in | Scroll wheel up |
| Zoom out | Scroll wheel down |
| Pan around | Click and drag (zoom tool) |
| Select wand | Click 🪄 icon |
| Select zoom | Click 🔍 icon |
| Remove selection | Click selected area again |

---

## ✅ Grid Editor Mastery Checklist

You've mastered Grid Editor if you can:

- [ ] Open Grid Editor after generation
- [ ] Use magic wand to remove background
- [ ] Calculate pixel size correctly
- [ ] Set grid size correctly
- [ ] Extract items as correct resolution
- [ ] Verify transparency before downloading
- [ ] Troubleshoot alignment issues

:::success Grid Editor Mastered
This is the most-used tool on Pixel GPT. You'll use it for EVERY generation.

[Learn background removal details →](background-removal)

[Complete image tools →](../image-tools/)
:::
