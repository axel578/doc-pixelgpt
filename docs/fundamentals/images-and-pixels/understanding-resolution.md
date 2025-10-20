---
sidebar_position: 2
---

# Understanding Resolution

What resolution means and why it matters.

## 📐 Definition

**Resolution** = Width × Height in pixels

```
16×16 = 16 pixels wide, 16 pixels tall
32×32 = 32 pixels wide, 32 pixels tall
```

[SCREENSHOT: Same sword in 16×16 vs 32×32 vs 64×64]

---

## 🎮 Minecraft Standard Resolutions

### Vanilla Minecraft

**16×16 pixels** is the standard for:
- All items (swords, pickaxes, food, etc.)
- All blocks (stone, dirt, ores, etc.)
- Most textures

[SCREENSHOT: Various vanilla Minecraft items, all 16×16]

**Why 16×16?**
- Minecraft's default resolution since 2009
- Lightweight, fast rendering
- Classic pixel art aesthetic

### HD Texture Packs

**Higher resolutions:**
- 32×32 (2× vanilla)
- 64×64 (4× vanilla)
- 128×128 (8× vanilla)
- 256×256 (16× vanilla)

[SCREENSHOT: Same block at different resolutions]

:::info Higher ≠ Better
Higher resolution requires:
- More storage space
- More processing power
- Consistent style across all textures
- More time to create
:::

---

## 🔢 Resolution Math

### Total Pixel Count

```
Total Pixels = Width × Height

16×16 = 256 pixels
32×32 = 1,024 pixels (4× more)
64×64 = 4,096 pixels (16× more)
```

### Doubling Resolution

```
16×16 → 32×32 = 4× more pixels (not 2×!)
32×32 → 64×64 = 4× more pixels
```

**Why?** You double BOTH width and height.

---

## ⚙️ Resolution in Pixel GPT

### Model-Specific Resolutions

**Each model generates specific size:**

| Model Name | Output Size | Use For |
|------------|-------------|---------|
| `baby 16px v1` | 16×16 | Minecraft items |
| `vhq 32px v3` | 32×32 | HD items |
| `64px item ultimate` | 64×64 | Detailed items |
| `128px pixel art` | 128×128 | Pixel art scenes |
| `mc any gui 256 v4` | 256×256 | GUIs |

### Grid Outputs

AI generates **multiple items in one image:**

**512×512 canvas with 2×2 grid:**
```
┌────────┬────────┐
│  Item1 │  Item2 │  Each item = 256×256 pixels
├────────┼────────┤  (then scaled to 16×16)
│  Item3 │  Item4 │
└────────┴────────┘
```

**You extract each as 16×16 PNG**

---

## 🎯 Choosing Resolution

### For Minecraft Items/Blocks

**Use 16×16** (vanilla standard)
```
✅ Compatible with all versions
✅ Lightweight
✅ Standard expectation
✅ Works everywhere
```

**Use 32×32 or higher** only if:
```
⚠️ Making HD texture pack
⚠️ Need extra detail
⚠️ Consistent across entire pack
```

### For GUIs

**Use 256×256**
```
✅ Standard GUI canvas size
✅ Enough space for slots + decorations
✅ Compatible with most GUI models
```

### For Pixel Art

**Use 128×128 or 256×256**
```
✅ Good canvas for detailed artwork
✅ Balanced size for pixel art
```

---

## ❌ Common Resolution Mistakes

### Mistake 1: Mixing Resolutions

```
❌ Some items at 16×16, others at 32×32
```

**Result:** "Mixels" - inconsistent pixel sizes in game

[SCREENSHOT: Mixels example showing inconsistent sizes]

**Solution:**
```
✅ Choose one resolution for entire pack
✅ Stick to it consistently
```

### Mistake 2: Wrong Reference Image Size

```
❌ Uploading 128×128 reference to 16px model
❌ Uploading 16×16 reference to 256px GUI model
```

**Result:** Poor results, wrong aspect ratio

**Solution:**
```
✅ Match reference image size to model
✅ 16px model = 16×16 reference
✅ 256px GUI model = 256×256 reference
```

### Mistake 3: Upscaling After Generation

```
❌ Generate 16×16 → manually resize to 32×32
```

**Result:** Blurry, interpolated pixels

**Solution:**
```
✅ Use 32px model from the start
✅ Generate at target resolution
```

---

## 🔧 Practical Examples

### Example 1: Standard Item

**Goal:** Minecraft diamond sword

**Steps:**
1. Choose **16px model** (vanilla standard)
2. Generate at 16×16 resolution
3. Extract as 16×16 PNG
4. Use directly in Minecraft

### Example 2: HD Texture Pack

**Goal:** High-resolution texture pack

**Steps:**
1. Choose **32px model** or **64px model**
2. Generate ALL items at same resolution
3. Extract at native resolution
4. Package as HD resource pack

### Example 3: GUI

**Goal:** Custom shop GUI

**Steps:**
1. Choose **256px GUI model**
2. Prepare 256×256 base/shape images
3. Generate at 256×256
4. Use as full GUI (don't extract)

---

## 📊 Resolution Comparison

```
16×16 ▓▓▓▓▓▓▓▓

32×32 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

64×64 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

[SCREENSHOT: Visual comparison of resolutions]

---

## ✅ Key Takeaways

1. **Resolution = Dimensions in pixels**
2. **16×16 is Minecraft standard**
3. **Match model to desired resolution**
4. **Stay consistent across entire pack**
5. **Higher resolution = more detail BUT bigger files**

:::success Next Topic
Understand transparency → [Transparency & Alpha Channel](transparency-and-alpha)
:::

---

## 🔍 Resolution Comparison

### Visual Quality

| Resolution | Detail Level | File Size | Use Case |
|------------|-------------|-----------|----------|
| 16×16 | Basic | ~1KB | Vanilla Minecraft |
| 32×32 | Good | ~2-4KB | HD texture packs |
| 64×64 | High | ~8-16KB | Detailed packs |
| 128×128 | Very High | ~32-64KB | Artwork, scenes |
| 256×256 | Maximum | ~128-256KB | GUIs, large art |

[SCREENSHOT: Side-by-side comparison of same item at different resolutions]

### Performance Impact

**Higher resolution = slower performance:**

```
16×16: Fastest (vanilla speed)
32×32: Slightly slower
64×64: Noticeably slower
128×128: Much slower
256×256: Very slow
```

**Why?**
- More pixels to render
- More memory usage
- More GPU processing

---

## 🎯 Choosing Resolution

### For Minecraft Items

**Standard (16×16):**
```
✅ Fastest performance
✅ Smallest file size
✅ Vanilla compatibility
✅ Classic look
```

**HD (32×32 or 64×64):**
```
✅ More detail possible
✅ Modern appearance
⚠️ Requires HD resource pack
⚠️ Slower performance
```

### For GUIs

**256×256 (recommended):**
```
✅ Enough detail for complex layouts
✅ Standard GUI resolution
✅ Good balance of quality/size
```

**512×512 (high-end):**
```
✅ Maximum detail
⚠️ Very large files
⚠️ Slower loading
```

### For Artwork/Renders

**512×512 or 1024×1024:**
```
✅ High quality for thumbnails
✅ Good for promotional images
✅ Professional appearance
```

---

## 🔧 Pixel GPT Model Resolutions

### 16px Models

**Generate:** 16×16 pixel images

**Best for:**
- Minecraft items/blocks
- Vanilla texture packs
- Fast generation
- Small file sizes

**Models:**
- `baby 16px v1` (free)
- `ultra 16 basic v2` (premium)
- `ultimate extreme mc item 16 v3` (ultimate)

### 32px Models

**Generate:** 32×32 pixel images

**Best for:**
- HD texture packs
- More detailed items
- Modern appearance

**Models:**
- `vhq 32px v3` (premium)
- `ultimate extreme mc item 32 v2` (ultimate)

### 256px Models

**Generate:** 256×256 pixel images

**Best for:**
- GUIs
- Large artwork
- Complex layouts

**Models:**
- `elite mc any gui v2` (premium)
- `ultimate extreme mc any gui v4` (ultimate)

---

## ⚠️ Common Resolution Mistakes

### Mixing Resolutions

**❌ Wrong:**
```
Using 16×16 items with 32×32 blocks
Using 64×64 items with 16×16 GUIs
```

**✅ Correct:**
```
All items 16×16 (vanilla)
All items 32×32 (HD pack)
All items 64×64 (ultra HD)
```

### Upscaling Images

**❌ Wrong:**
```
Generate 16×16 → Upscale to 32×32
Result: Blurry, pixelated
```

**✅ Correct:**
```
Use 32×32 model → Generate 32×32
Result: Sharp, detailed
```

### Wrong Model Selection

**❌ Wrong:**
```
Want 32×32 items → Use 16px model
Result: Wrong resolution output
```

**✅ Correct:**
```
Want 32×32 items → Use 32px model
Result: Correct resolution
```

---

## 📊 Resolution Math

### Total Pixels

```
Total Pixels = Width × Height

16×16 = 256 pixels
32×32 = 1,024 pixels (4× more)
64×64 = 4,096 pixels (16× more)
```

### File Size Growth

```
16×16 PNG ≈ 1KB
32×32 PNG ≈ 4KB (4× larger)
64×64 PNG ≈ 16KB (16× larger)
```

### Grid Extraction

**For 16×16 items:**
```
512×512 canvas ÷ 32 = 16px pixel size
1024×1024 canvas ÷ 64 = 16px pixel size
```

**For 32×32 items:**
```
512×512 canvas ÷ 16 = 32px pixel size
1024×1024 canvas ÷ 32 = 32px pixel size
```

---

## 🎨 Resolution and Style

### Pixel Art Characteristics

**16×16:**
- Very limited detail
- Blocky appearance
- Classic Minecraft look
- Requires simplicity

**32×32:**
- More detail possible
- Still pixelated
- Modern pixel art
- Can show textures

**64×64+:**
- High detail
- Almost photorealistic
- Not really "pixel art"
- More like digital art

### Style Consistency

**Rule:** All textures in a pack must use the same resolution

**Why?**
- Consistent appearance
- Proper scaling
- No mixels (mixed pixel sizes)
- Professional look

---

## 🚀 Best Practices

### For Beginners

**Start with 16×16:**
```
✅ Learn basics
✅ Fast generation
✅ Small files
✅ Vanilla compatibility
```

### For Advanced Users

**Choose based on project:**
```
Vanilla pack → 16×16
HD pack → 32×32 or 64×64
GUI project → 256×256
Artwork → 512×512+
```

### For Performance

**Consider your audience:**
```
Low-end devices → 16×16
Mid-range devices → 32×32
High-end devices → 64×64+
```

---

## ✅ Resolution Checklist

Before generating, check:

- [ ] What resolution do I need?
- [ ] Which model generates that resolution?
- [ ] Will this match my other textures?
- [ ] Is this appropriate for my project?
- [ ] Do I understand the performance impact?

---

## 🎓 Key Takeaways

<div className="container">
  <div className="row">
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>Resolution = Size</h3>
        </div>
        <div className="card__body">
          <p>Resolution is width × height in pixels. Higher = more detail but larger files.</p>
        </div>
      </div>
    </div>
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>Choose Wisely</h3>
        </div>
        <div className="card__body">
          <p>Pick resolution based on your project needs, not just "higher is better."</p>
        </div>
      </div>
    </div>
    <div className="col col--4">
      <div className="card">
        <div className="card__header">
          <h3>Stay Consistent</h3>
        </div>
        <div className="card__body">
          <p>All textures in a project should use the same resolution for consistency.</p>
        </div>
      </div>
    </div>
  </div>
</div>

:::success Ready to Continue
[Learn about transparency →](transparency-and-alpha)
:::
