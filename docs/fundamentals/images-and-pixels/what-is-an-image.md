---
sidebar_position: 1
---

# What is an Image?

Understanding the fundamental unit of Pixel GPT.

## 🎨 Simple Definition

An **image** is a **2D grid of colored pixels**.

[SCREENSHOT: Zoomed image showing individual pixel grid]

---

## 🔬 Breaking It Down

### Pixels

**Pixel** = Picture Element = The smallest unit of an image

```
One pixel = One colored square
```

[SCREENSHOT: Single pixel zoomed 100x]

**Properties of a pixel:**
- Has one color
- Has a position (x, y)
- Can have transparency (alpha)

### 2D Grid

Pixels are arranged in rows and columns:

```
Row 1: ▓▓▓▓▓▓▓▓
Row 2: ▓▓▓▓▓▓▓▓
Row 3: ▓▓▓▓▓▓▓▓
```

[SCREENSHOT: 8×8 grid showing rows and columns]

### Dimensions

**Width × Height** in pixels

```
16×16 image = 16 pixels wide, 16 pixels tall
32×32 image = 32 pixels wide, 32 pixels tall
```

---

## 🎮 Minecraft Item Example

### 16×16 Diamond Sword

[SCREENSHOT: Diamond sword texture]
![diamond_sword_nine](/img/diamond_sword_nine.png)

**Zoomed in:**

[SCREENSHOT: Same sword zoomed showing all 256 pixels]

This image contains:
- **256 total pixels** (16 × 16)
- Each pixel has a color
- Some pixels are transparent
- Arranged in 16 rows, 16 columns

---

## 🌈 Color Information

### RGB Colors

Each pixel stores color as:
- **R** = Red (0-255)
- **G** = Green (0-255)
- **B** = Blue (0-255)

**Example:**
```
Pure red = RGB(255, 0, 0)
Pure blue = RGB(0, 0, 255)
White = RGB(255, 255, 255)
Black = RGB(0, 0, 0)
```

### RGBA (With Transparency)

**A** = Alpha (transparency)
- 0 = Fully transparent (invisible)
- 255 = Fully opaque (solid)

```
Transparent = RGBA(0, 0, 0, 0)
Semi-transparent blue = RGBA(0, 0, 255, 128)
Solid red = RGBA(255, 0, 0, 255)
```

---

## 📐 Resolution

**Resolution** = Width × Height in pixels

### Common Resolutions

| Resolution | Total Pixels | Used For |
|------------|-------------|----------|
| 16×16 | 256 | Minecraft items/blocks |
| 32×32 | 1,024 | HD texture packs |
| 64×64 | 4,096 | Armor, detailed items |
| 128×128 | 16,384 | Pixel art, scenes |
| 256×256 | 65,536 | GUIs, large artwork |

[SCREENSHOT: Size comparison of 16×16 vs 32×32 vs 64×64]

### Why Size Matters

**Different models generate different sizes:**
```
16px models → 16×16 images only
32px models → 32×32 images only
Cannot mix without resizing
```

**Minecraft standards:**
```
Items/Blocks = 16×16 (vanilla)
HD packs = 32×32 or 64×64
GUIs = 256×256 (common)
```

---

## 💾 File Formats

### PNG (Preferred)

```
✅ Supports transparency
✅ Lossless (no quality loss)
✅ Perfect for pixel art
✅ Required for Minecraft
```

**Extension:** `.png`

### JPEG (Not Recommended)

```
❌ No transparency support
❌ Lossy compression
❌ Not suitable for pixel art
❌ Won't work in Minecraft properly
```

:::danger Always Use PNG
Minecraft requires PNG format with transparency. Never use JPEG for textures.
:::

---

## 🎯 Practical Understanding

### When You Generate with Pixel GPT

**AI creates:**
```
A grid of pixels (e.g., 512×512)
Containing multiple items (e.g., 2×2 = 4 items)
Each item is 16×16 pixels
```

**You must:**
```
1. Calculate: 512 ÷ 32 = 16 (pixel size)
2. Set grid: 2×2
3. Extract: Each item as 16×16 PNG
```

### Why Transparent Background Matters

**Pixel GPT generates:**
```
White background (opaque)
```

[SCREENSHOT: Item with white background]

**Minecraft needs:**
```
Transparent background (alpha channel)
```

[SCREENSHOT: Same item with transparent background]

**Solution:**
```
Use magic wand tool to remove white
```

---

## 📊 Image Anatomy

```
┌─────────────────┐
│ Width (pixels)  │
│ ┌─────────────┐ │
│ │ ▓▓▓▓▓▓▓▓▓▓▓ │ │ Height
│ │ ▓▓▓▓▓▓▓▓▓▓▓ │ │ (pixels)
│ │ ▓▓▓▓▓▓▓▓▓▓▓ │ │
│ └─────────────┘ │
└─────────────────┘

Each ▓ = one pixel
Total pixels = Width × Height
```

---

## 🔢 Math You Need

### Total Pixels

```
Total Pixels = Width × Height

Example: 16×16 image
Total = 16 × 16 = 256 pixels
```

### Grid Extraction

```
Pixel Size = Canvas Size ÷ (Grid Count × Item Size)

Example: 512×512 canvas, 2×2 grid, 16×16 items
Pixel Size = 512 ÷ (2 × 16) = 512 ÷ 32 = 16
```

### File Size

Larger images = larger files:
```
16×16 PNG ≈ 500 bytes - 2KB
32×32 PNG ≈ 1-4KB
256×256 PNG ≈ 10-50KB
```

:::tip Use Correct Resolution
Don't upscale 16×16 to 32×32. Use the native resolution. Smaller files, same visual quality in Minecraft.
:::

---

## 🎓 Key Takeaways

<div className="container">
  <div className="row">
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>Image = Pixel Grid</h3>
        </div>
        <div className="card__body">
          <p>Images are 2D arrays of colored pixels arranged in rows and columns.</p>
        </div>
      </div>
    </div>
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>Resolution Matters</h3>
        </div>
        <div className="card__body">
          <p>16×16 for Minecraft items. Use correct model for desired resolution.</p>
        </div>
      </div>
    </div>
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>PNG with Alpha</h3>
        </div>
        <div className="card__body">
          <p>Always use PNG format with transparent background for Minecraft.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## ✅ Self-Check

You understand images if you can answer:

- [ ] What is a pixel?
- [ ] What does 16×16 mean?
- [ ] Why does Minecraft need transparency?
- [ ] What is PNG vs JPEG?
- [ ] How many pixels in a 32×32 image? (Answer: 1,024)

:::success Ready to Continue
[Learn about resolution →](understanding-resolution)
:::
