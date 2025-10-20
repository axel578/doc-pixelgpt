---
sidebar_position: 4
---

# GUI Textures

Understanding Minecraft GUI (interface) textures.

## 🖼️ What are GUIs?

**GUI** = Graphical User Interface

The visual menus/interfaces players see when interacting with:
- Chests
- Furnaces
- Crafting tables
- Custom shops/menus (servers)
- Inventory screens

[SCREENSHOT: Various Minecraft GUIs]

---

## 📐 GUI Format

### Resolution

**Common sizes:**
```
256×256 pixels (most common)
192×192 pixels (inventory-style)
176×166 pixels (vanilla chest)
```

:::tip Pixel GPT Standard
Use **256×256** for all custom GUIs. It's the most flexible size.
:::

### File Format

```
Format: PNG
Transparency: Required
Structure: Slots defined by pixel position
```

---

## 🎨 GUI Components

### Panels

**Background areas** that contain slots/decorations

```
┌─────────────────────┐
│ Top Panel           │ ← Shop items area
│ ┌─┬─┬─┬─┐         │
│ └─┴─┴─┴─┘         │
│                     │
│ Bottom Panel        │ ← Player inventory
│ ┌─┬─┬─┬─┬─┬─┬─┬─┐│
│ └─┴─┴─┴─┴─┴─┴─┴─┘│
└─────────────────────┘
```

### Slots

**9×9 pixel squares** where items appear

**Standard slot size:**
```
16×16 pixels (for item)
+1 pixel border
= 18×18 total slot space
```

[SCREENSHOT: GUI slot detail showing 18×18 area]

**Slot positions are fixed** - must align perfectly.

### Decorations

**Visual elements:**
- Frames and borders
- Icons and buttons
- Title text areas
- Theme elements (shop shelves, chest locks, etc.)

---

## 🏗️ GUI Structure

### Vanilla Chest (generic_54.png)

**Dimensions:** 176×166 pixels

**Layout:**
```
Top area: 9×3 chest slots (27 slots)
Bottom area: 9×4 player inventory (36 slots)
Total: 54 slots
```

[SCREENSHOT: Vanilla chest GUI labeled]

### Custom Server GUI

**Dimensions:** 256×256 pixels

**Flexible layout:**
```
Can have:
- Any number of slots
- Custom decorations
- Navigation buttons
- Themed panels
```

[SCREENSHOT: Custom shop GUI example]

---

## 🎯 Creating GUIs with Pixel GPT

### Recommended Models

| Model | Quality | Difficulty | Best For |
|-------|---------|-----------|----------|
| `elite mc any gui v2` | ⭐⭐⭐⭐ | Medium | Good balance |
| `ultimate extreme mc any gui v4` | ⭐⭐⭐⭐⭐ | Medium | Best quality |
| `orion pro ultra top hq gui v1` | ⭐⭐⭐⭐⭐ | Hard | 2025 best |

[See complete GUI model list →](../../models/models-by-type/gui-models)

### GUI Generation Process

**Unlike items, GUIs require:**
1. **Base/Shape images** (prepared in Photopea)
2. **Style Selector** usage
3. **Iteration** (3-5 tries)
4. **Parameter tuning**

[SCREENSHOT: GUI generation workflow diagram]

:::warning Complex Feature
GUI generation is the most complex Pixel GPT feature. See [complete GUI tutorial](../../tutorials/gui-creation/gui-complete-guide).
:::

### Basic Prompting

```txt
Good GUI prompts:
- "minecraft shop gui with wooden frame and item grid"
- "fantasy rpg menu with purple magical theme"
- "medieval chest interface with iron decorations"
- "modern tech gui with blue holographic panels"
```

**Formula:** `[type] gui/menu with [theme] and [layout description]`

---

## 📦 GUI Integration

### File Location

```
resource_pack/
└── assets/
    └── minecraft/
        └── textures/
            └── gui/
                └── container/
                    ├── generic_54.png (chest)
                    ├── dispenser.png (dispenser)
                    └── custom_shop.png (custom)
```

### Server Plugin Integration

**For custom GUIs:**
1. Generate GUI with Pixel GPT
2. Save as PNG
3. Use in plugin configuration:

```yaml
# Example: DeluxeMenus plugin
menu_title: "My Shop"
size: 54
gui_texture: "custom_shop.png"
```

---

## 🎨 GUI Design Principles

### Slot Alignment

**Critical:** Slots must align to 18×18 grid

**Grid calculation:**
```
Standard: 9 slots wide = 162 pixels (9 × 18)
Custom: Varies, but must be multiples of 18
```

[SCREENSHOT: GUI showing 18×18 grid overlay]

### Visual Hierarchy

```
Primary: Main panel (item display)
Secondary: Navigation/buttons
Tertiary: Decorations
```

**Player's eye should go to items first.**

### Theme Consistency

**All elements should match theme:**
```
Medieval shop:
✅ Wooden frame
✅ Iron decorations
✅ Parchment-style panels
❌ Neon colors
❌ Tech elements
```

---

## 🔧 GUI Troubleshooting

<details>
<summary>Slots don't align correctly</summary>

**In Pixel GPT:**
- Increase Shape Strength to 8-9
- Redraw base image with clearer slots
- Use preset GUI option if available

**In image editor:**
- Manually adjust slot positions
- Use 18×18 grid guides
- Align to pixel grid

</details>

<details>
<summary>GUI looks flat/boring</summary>

**Solutions:**
- Use different base image with better colors
- Add more noise to base for variety
- Try different model version
- Improve prompt with more decorative details

</details>

<details>
<summary>Theme doesn't match prompt</summary>

**Check:**
- Base image colors (AI uses them heavily)
- Prompt specificity (be more descriptive)
- Try different model

**Improve:**
- Change base image to match desired theme
- Add style keywords: "wooden", "magical", "tech"
</details>

---

## ✅ GUI Texture Checklist

Before using:

- [ ] 256×256 pixels (or target size)
- [ ] PNG format
- [ ] Slots align to 18×18 grid
- [ ] Theme is consistent
- [ ] Decorations don't obscure slots
- [ ] Tested in-game or plugin

:::success GUIs Understood
[Learn about armor textures →](armor-textures) or jump to [GUI Tutorial](../../tutorials/gui-creation/gui-complete-guide)
:::
