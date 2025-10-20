---
sidebar_position: 5
---

# Image File Formats

Understanding PNG, JPEG, and why it matters.

## 📁 File Format Overview

| Format | Transparency | Compression | Minecraft | Use For |
|--------|--------------|-------------|-----------|---------|
| **PNG** | ✅ Yes | Lossless | ✅ Yes | Textures, items, GUIs |
| **JPEG** | ❌ No | Lossy | ❌ No | Photos (not pixel art) |

---

## ✅ PNG (Portable Network Graphics)

### Features

```
✅ Supports alpha channel (transparency)
✅ Lossless compression (no quality loss)
✅ Perfect for pixel art
✅ Perfect for Minecraft
✅ Small file sizes for pixel art
```

### File Extension

```
.png
```

### When to Use

```
✅ All Minecraft textures
✅ All Pixel GPT exports
✅ Items, blocks, GUIs
✅ Pixel art
✅ Logos, icons
```

[SCREENSHOT: PNG file properties]

---

## ❌ JPEG (Joint Photographic Experts Group)

### Features

```
❌ No transparency support
❌ Lossy compression (quality degrades)
❌ Not suitable for pixel art
❌ Creates artifacts around edges
```

### File Extensions

```
.jpg
.jpeg
```

### When to Use

```
✅ Photographs
✅ Realistic images
❌ Never for Minecraft textures
❌ Never for pixel art
```

[SCREENSHOT: JPEG artifacts on pixel art - looks bad]

---

## 🎮 Minecraft Requirements

### What Minecraft Needs

**Format:** PNG only
```
resource_pack/
  assets/
    minecraft/
      textures/
        item/
          diamond_sword.png ✅
          iron_pickaxe.png ✅
```

**Why PNG?**
```
Minecraft reads alpha channel for transparency
JPEG has no alpha channel
```

### What Happens with JPEG

```
❌ Background shows as solid color
❌ Item looks wrong
❌ Texture pack may fail to load
```

[SCREENSHOT: JPEG item in Minecraft showing black/white background]

---

## 💾 File Size Comparison

### Same 16×16 Image

| Format | File Size | Quality | Transparency |
|--------|-----------|---------|--------------|
| PNG | 500 bytes - 2KB | Perfect | ✅ |
| JPEG | 2-5KB | Degraded | ❌ |

:::tip PNG is Smaller
For pixel art, PNG is actually **smaller** than JPEG while maintaining perfect quality!
:::

### Why PNG is Smaller for Pixel Art

```
Pixel art has:
- Few colors
- Large areas of same color
- Sharp edges

PNG compression excels at this.
JPEG compression designed for photos, not pixel art.
```

---

## 🛠️ Pixel GPT Export

### Grid Editor Exports

**All exports are PNG:**
```
✅ "Save as image (16×16)" → PNG
✅ "Copy to clipboard" → PNG
✅ "Download all" → PNG files
```

**Cannot export as JPEG** (intentionally)

### Verify Your Downloads

**Check file extension:**
```
✅ diamond_sword.png
❌ diamond_sword.jpg
```

**Check file properties:**
```
Right-click → Properties → Details
File type: PNG image
Dimensions: 16 × 16 (or your target size)
```

[SCREENSHOT: File properties showing PNG]

---

## 🔧 Format Conversion (If Needed)

### PNG → JPEG (Not Recommended)

**Only if you really need JPEG:**
1. Open PNG in image editor
2. File → Export As → JPEG
3. Transparency becomes white/black background

:::danger Never for Minecraft
This destroys transparency. Never convert to JPEG for Minecraft use.
:::

### JPEG → PNG (Cannot Recover Transparency)

**If you have JPEG:**
1. Open in image editor
2. Manually remove background
3. Save as PNG

**But:** Lost quality cannot be recovered.

---

## 📊 Format Comparison

### Lossless vs Lossy

**Lossless (PNG):**
```
Original → Save → Open → Identical
Perfect pixel preservation
```

**Lossy (JPEG):**
```
Original → Save → Open → Slightly different
Quality degrades each save
```

[SCREENSHOT: Lossless vs lossy comparison]

### Compression Types

**PNG:**
- Reduces file size by finding patterns
- Doesn't change pixel colors
- Reversible

**JPEG:**
- Reduces file size by discarding information
- Changes pixel colors slightly
- Irreversible

---

## 🎯 Practical Guidelines

### For Pixel GPT Users

**Always:**
```
✅ Download/export as PNG
✅ Verify .png extension
✅ Check transparency preserved
✅ Use PNG in Minecraft
```

**Never:**
```
❌ Convert to JPEG
❌ Save as JPEG
❌ Use JPEG in resource packs
❌ Upload JPEG as reference (if avoidable)
```

### For Reference Images

**When uploading to "My Reference Images":**
```
✅ PNG preferred (transparency intact)
⚠️ JPEG acceptable (but transparency lost)
```

**Maximum sizes:**
- File size: 4MB max
- Dimensions: 2150×2150 max

---

## ✅ Format Checklist

Before using any image:

- [ ] File extension is `.png`
- [ ] Opened in image editor to verify
- [ ] Transparency shows as checkered pattern
- [ ] No JPEG artifacts visible
- [ ] File size is reasonable (under 10KB for items)

:::success Format Mastered
You understand file formats! → [Complete Images & Pixels](../images-and-pixels/)

Next: [Minecraft Textures](../minecraft-textures/how-minecraft-uses-textures)
:::
