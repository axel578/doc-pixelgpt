---
sidebar_position: 5
---

# Armor Textures

Understanding Minecraft armor texture format.

## 🛡️ Armor Texture System

Minecraft armor uses a **special layered system**.

### Armor Layers

**Two layer files:**
```
layer_1.png → Helmet, Chestplate, Boots
layer_2.png → Leggings
```

[SCREENSHOT: Armor layer template]

---

## 📐 Armor Format

### Resolution

**Vanilla:**
```
64×32 pixels (layer 1)
64×32 pixels (layer 2)
```

**HD Packs:**
```
128×64 pixels (2× scale)
256×128 pixels (4× scale)
```

### Layer 1 Layout

```
┌────────┬────────┬────────┬────────┐
│ Head   │ Body   │ R.Arm  │ R.Leg  │
├────────┼────────┼────────┼────────┤
│ Head2  │ Body2  │ L.Arm  │ L.Leg  │
└────────┴────────┴────────┴────────┘
```

Each section maps to 3D model part.

[SCREENSHOT: Layer 1 template with labels]

### Layer 2 Layout

```
┌────────┬────────┐
│ R.Leg  │ L.Leg  │
├────────┼────────┤
│ R.Leg2 │ L.Leg2 │
└────────┴────────┘
```

Leggings only.

[SCREENSHOT: Layer 2 template with labels]

---

## 🎯 Pixel GPT Armor Workflow

### Method 1: Individual Pieces

**Generate each armor piece separately:**

```txt
Prompts:
1. "diamond helmet front view"
2. "diamond chestplate front view"
3. "diamond leggings front view"
4. "diamond boots front view"
```

Then manually arrange in layer template.

### Method 2: Armor Set Models

**Use specialized armor models:**
```
Model: elite mc armor pack 32 v1
Model: ultimate extreme mc item 32 v2 (with armor prompt)
```

**Generates:** Complete armor set in one go

[SCREENSHOT: Generated armor set]

### Method 3: Preset Tool

**Use Presets tab:**
```
Presets → "Items to Armor Set"
```

1. Generate chestplate item
2. Use preset to create full armor from it

[SCREENSHOT: Items to Armor Set tool]

---

## 📂 Resource Pack Integration

### File Location

```
resource_pack/
└── assets/
    └── minecraft/
        └── textures/
            └── models/
                └── armor/
                    ├── diamond_layer_1.png
                    ├── diamond_layer_2.png
                    ├── iron_layer_1.png
                    └── iron_layer_2.png
```

### File Naming

**Pattern:** `[material]_layer_[1 or 2].png`

```
✅ diamond_layer_1.png
✅ diamond_layer_2.png
✅ custom_ruby_layer_1.png

❌ diamond.png
❌ layer1.png
❌ Diamond_Layer_1.png
```

---

## 🎨 Armor Design Tips

### Consistency Across Pieces

```
✅ Same color palette
✅ Same material style
✅ Matching decorative elements
✅ Coherent theme
```

**Use Style Selector** to maintain consistency:
1. Generate chestplate
2. Use as reference for helmet
3. Use as reference for leggings
4. Use as reference for boots

[SCREENSHOT: Consistent armor set]

### Vanilla Style

**Mimic vanilla proportions:**
- Simple shapes
- Clear silhouette
- Recognizable material
- Not too detailed

### HD Style

**More detail possible:**
- Engravings
- Patterns
- Textures
- Decorations

---

## ⚙️ Advanced Armor

### Custom Armor Models

**For modded armor** (not vanilla structure):
- Generate item textures
- Apply to custom 3D model
- Different workflow entirely

### Animated Armor

**Using Optifine CIT:**
- Generate multiple variations
- Animate between them
- Requires Optifine/CIT support

---

## ✅ Armor Checklist

Before integrating:

- [ ] Layer 1 file (64×32)
- [ ] Layer 2 file (64×32)
- [ ] PNG format
- [ ] Correct file names
- [ ] Placed in `/models/armor/` folder
- [ ] All pieces use same color palette
- [ ] Tested on armor stand/player

:::success Armor Mastered
[Complete Minecraft textures section](../minecraft-textures/) or jump to [Pixel Art Basics](../pixel-art/what-is-pixel-art)
:::
