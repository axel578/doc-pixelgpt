---
sidebar_position: 2
---

# Item Textures

Everything about Minecraft item textures.

## 📦 What are Item Textures?

**Items** = Objects players hold and store in inventory

**Examples:**
- Swords, pickaxes, axes, shovels, hoes
- Food (bread, apple, steak)
- Potions, buckets, maps
- Materials (diamonds, iron ingots)

[SCREENSHOT: Various Minecraft items]

---

## 📏 Standard Format

### Resolution

**Vanilla Minecraft:**
```
16×16 pixels (standard)
```

**HD Texture Packs:**
```
32×32 pixels
64×64 pixels
```

### File Format

```
Format: PNG
Transparency: Required (alpha channel)
Color depth: 32-bit RGBA
```

### File Size

```
Typical size: 500 bytes - 2KB per item
Maximum: ~10KB (for complex items)
```

---

## 🎨 Item Anatomy

### Typical Item Structure

```
┌────────────────┐
│ Transparent BG │ ← Must be transparent
│   ╔═══╗       │
│   ║ I ║       │ ← Item pixels (opaque)
│   ║ T ║       │
│   ║ E ║       │
│   ║ M ║       │
│   ╚═══╝       │
│                │
└────────────────┘
```

**Components:**
- Item body (opaque, colored pixels)
- Empty space (transparent, alpha = 0)
- No background (transparency shows through)

[SCREENSHOT: Item texture with transparency grid]

---

## ⚔️ Item Types

### Held Items (Tools/Weapons)

**Appearance:**
- Vertical orientation (blade/head up, handle down)
- Angled slightly for 3D effect
- Detail on main surfaces

[SCREENSHOT: Sword, pickaxe, axe textures]

**Pixel GPT prompt example:**
```txt
diamond sword with blue blade
iron pickaxe with wooden handle
golden axe with engravings
```

### Flat Items (Food/Materials)

**Appearance:**
- Centered in 16×16 space
- Top-down or isometric view
- Simpler shapes

[SCREENSHOT: Apple, diamond, bread textures]

**Pixel GPT prompt example:**
```txt
red apple with leaf
blue diamond gem
golden coin
```

### Container Items (Buckets/Bottles)

**Appearance:**
- 3D-looking containers
- Shading for depth
- Contents visible if filled

[SCREENSHOT: Bucket, potion bottle textures]

**Pixel GPT prompt example:**
```txt
wooden bucket
red potion in glass bottle
water bucket
```

---

## 🎯 Creating Item Textures with Pixel GPT

### Step 1: Choose Model

**For 16×16 vanilla items:**
```
Free: baby 16px v1
Premium: ultra 16 basic v2
Best: ultimate extreme mc item 16 v3
```

### Step 2: Write Prompt

**Formula:** `[material] [item] + [details]`

```txt
Examples:
diamond sword with ruby gem
iron pickaxe with leather grip
golden apple with sparkle effect
blue potion bottle
```

### Step 3: Generate & Extract

1. Generate (wait 1-3 min)
2. Open Grid Editor
3. Remove white background
4. Calculate pixel size (usually 16)
5. Set grid size (usually 2×2)
6. Extract as 16×16 PNG

---

## 📂 Resource Pack Integration

### File Location

```
resource_pack/
└── assets/
    └── minecraft/
        └── textures/
            └── item/
                ├── diamond_sword.png
                ├── iron_pickaxe.png
                └── golden_apple.png
```

### File Naming

**Vanilla items - use exact names:**
```
✅ diamond_sword.png
✅ iron_pickaxe.png
✅ golden_apple.png

❌ Diamond_Sword.png (wrong caps)
❌ diamondsword.png (missing underscore)
❌ blue_sword.png (not vanilla name)
```

**Custom items - any name:**
```
✅ ruby_sword.png
✅ magic_staff.png
✅ custom_item_01.png
```

(Requires datapack/plugin to reference)

---

## 🎨 Item Design Principles

### Readability at Small Size

Items are displayed **very small** in inventory.

**Design for:**
```
✅ Clear silhouette
✅ Recognizable shapes
✅ Not too many tiny details
✅ Good contrast
```

[SCREENSHOT: Good vs bad item design]

### Vanilla Style Consistency

**Match vanilla aesthetic:**
```
✅ Simple shapes
✅ Clear outlines
✅ Limited color palette
✅ Clean pixel placement
```

### Shading for Depth

**Items should look 3D:**
```
✅ Lighter colors on top/left (light source)
✅ Darker colors on bottom/right (shadow)
✅ Mid-tones in between
```

[SCREENSHOT: Sword showing proper shading]

---

## 🛠️ Pixel GPT Tips

### Getting Good Results

**Describe the 2D appearance:**
```txt
✅ "blue sword blade with golden handle"
✅ "red apple with brown stem and green leaf"

❌ "3D rotating sword with dynamic lighting"
❌ "photorealistic apple"
```

**Be specific about materials:**
```txt
✅ "diamond blade, golden handle, ruby gems"
❌ "magical powerful sword"
```

### Multiple Variations

**AI generates 4 items (2×2):**
- Pick the best one
- Or use multiple for variety
- Regenerate if none are good

**Don't settle for bad results!** Iterate.

---

## 📊 Item Specifications

### Vanilla Items

| Property | Value |
|----------|-------|
| Resolution | 16×16 pixels |
| Format | PNG |
| Transparency | Required |
| Color mode | RGBA |
| File size | 500B - 2KB |

### HD Pack Items

| Property | Value |
|----------|-------|
| Resolution | 32×32 or 64×64 |
| Format | PNG |
| Transparency | Required |
| Color mode | RGBA |
| File size | 1-10KB |

---

## ✅ Item Texture Checklist

Before using in Minecraft:

- [ ] Resolution is correct (16×16 for vanilla)
- [ ] Format is PNG (not JPEG)
- [ ] Background is transparent
- [ ] File name matches Minecraft name (if replacing vanilla)
- [ ] File is in correct folder
- [ ] Tested in-game

:::success Items Mastered
Understand item textures! → [Learn about blocks](block-textures)
:::
