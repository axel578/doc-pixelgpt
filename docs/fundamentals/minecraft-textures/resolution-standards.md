---
sidebar_position: 7
---

# Resolution Standards

Minecraft texture resolution guidelines.

## 📏 Vanilla Standards

### Items & Blocks

**Standard resolution:**
```
16×16 pixels
```

**Why?**
- Minecraft default since 2009
- Lightweight
- Universal compatibility
- Classic aesthetic

**All vanilla items/blocks:**
```
✅ Diamond sword = 16×16
✅ Stone block = 16×16
✅ Golden apple = 16×16
✅ Iron pickaxe = 16×16
```

### GUIs

**Common sizes:**
```
176×166 (vanilla chest)
176×222 (double chest)
256×256 (custom server GUIs)
```

### Armor

```
64×32 (layer 1)
64×32 (layer 2)
```

---

## 🎨 HD Pack Standards

### 2× Resolution (32×32)

```
Items/Blocks: 32×32
Armor: 128×64
GUIs: 512×512 (approx)
```

**Considerations:**
- 4× more pixels than vanilla
- Larger file sizes
- More detail possible

### 4× Resolution (64×64)

```
Items/Blocks: 64×64
Armor: 256×128
GUIs: 1024×1024
```

**Considerations:**
- 16× more pixels than vanilla
- Significant file size increase
- Lots of detail possible
- Requires powerful hardware

---

## 🎯 Choosing Resolution for Your Pack

### Decision Matrix

| Resolution | File Size | Detail | Performance | Compatibility |
|------------|-----------|--------|-------------|---------------|
| 16×16 | Smallest | Low | Best | Universal |
| 32×32 | Medium | Good | Good | Very good |
| 64×64 | Large | High | Medium | Good |
| 128×128+ | Very large | Very high | Poor | Limited |

### Recommendation

**For most packs:** **32×32**
```
✅ Good balance of detail and performance
✅ Noticeable improvement over vanilla
✅ Manageable file sizes
✅ Good compatibility
```

**For vanilla-style:** **16×16**
```
✅ Authentic Minecraft feel
✅ Tiny file sizes
✅ Works everywhere
```

---

## 🔢 Resolution Math

### Scaling Factors

```
16×16 = 1× (vanilla)
32×32 = 2× (double resolution)
64×64 = 4× (quad resolution)
128×128 = 8× (octo resolution)
```

### Total Pixels

```
16×16 = 256 pixels
32×32 = 1,024 pixels (4× more)
64×64 = 4,096 pixels (16× more)
128×128 = 16,384 pixels (64× more)
```

### File Size Impact

**Approximate PNG sizes:**

| Resolution | Item File Size | 100-item Pack Size |
|------------|----------------|-------------------|
| 16×16 | 500B - 2KB | 50-200KB |
| 32×32 | 1-4KB | 100KB - 400KB |
| 64×64 | 3-10KB | 300KB - 1MB |
| 128×128 | 10-30KB | 1-3MB |

---

## 🎯 Pixel GPT Resolution Models

### Available Resolutions

**Pixel art models:**
```
12×12 → 12px models
16×16 → 16px models
24×24 → 24px models
32×32 → 32px models
42×42 → 42px models
48×48 → 48px models
52×52 → 52px models
64×64 → 64px models
96×96 → 96px models
128×128 → 128px models
256×256 → 256px models
Custom → custom size models
```

[Complete model list →](../../models/models-by-resolution/)

### Matching Model to Goal

**Creating 16×16 pack:**
```
Use only: 16px models
✅ baby 16px v1
✅ ultra 16 basic v2
✅ ultimate extreme mc item 16 v3
```

**Creating 32×32 pack:**
```
Use only: 32px models
✅ vhq 32px v3
✅ ultimate extreme mc item 32 v2
```

---

## ✅ Resolution Best Practices

### Rule 1: Stay Consistent

```
✅ All items same resolution
✅ All blocks same resolution
✅ Throughout entire pack
```

### Rule 2: Match Source

```
If replacing vanilla (16×16):
✅ Use 16×16 or exact multiples (32, 64)
❌ Don't use 24×24 or 48×48
```

### Rule 3: Consider Target

```
For Minecraft servers → 16×16 or 32×32
For personal/showcase → Any resolution
For publication → 16×16 or 32×32 (standard)
```

---

## 📊 Quick Reference

### Standard Resolutions

```
Items/Blocks:
├── 16×16 (vanilla)
├── 32×32 (HD)
├── 64×64 (Very HD)
└── 128×128+ (Ultra HD)

GUIs:
├── 256×256 (custom)
├── 176×166 (vanilla chest)
└── 192×192 (inventory-style)

Armor:
├── 64×32 (vanilla layers)
├── 128×64 (2× HD)
└── 256×128 (4× HD)
```

:::success Resolution Standards Clear
[Complete Minecraft Textures →](../minecraft-textures/) 

Next section: [Pixel Art Basics](../pixel-art/what-is-pixel-art)
:::
