---
sidebar_position: 5
---

# GUI Prompt Examples

Examples for Minecraft GUI generation.

:::warning Complex Feature
GUIs require Style Selector + proper base/shape images. See [complete GUI tutorial](../../tutorials/gui-creation/gui-complete-guide).
:::

## 🖼️ Shop GUIs

### Basic Shop

```txt
"minecraft shop gui with wooden frame"
"shop interface with item grid"
"merchant menu with display area"
```

**Use with:** 256px GUI model + Style Selector

### Themed Shops

```txt
"medieval marketplace shop gui with stone background and wooden frame"
"fantasy magical shop with purple mystical theme and glowing elements"
"modern tech shop with holographic blue panels and clean design"
"rustic village shop with brown wood and warm colors"
"treasure shop with golden decorations and gem accents"
```

[SCREENSHOT: Various themed shop GUIs]

### Detailed Shop Prompts

```txt
"beautiful minecraft shop gui with wooden frame, 4x4 item display grid in center, decorative corners, and warm brown theme"

"fantasy rpg shop interface with purple magical panels, glowing runes, 3x3 item grid, and mystical decorations"

"medieval merchant gui with stone brick background, iron decorations, item shelves at top, and navigation buttons"
```

---

## 📦 Container GUIs

### Chests

```txt
"wooden chest gui with iron lock"
"treasure chest interface with golden trim and decorations"
"magical storage gui with glowing runes and purple theme"
"medieval chest with iron bands and rivets"
```

### Specialized Containers

```txt
"furnace gui with fire theme and orange glow"
"brewing stand interface with potion theme"
"enchanting table gui with magical purple theme"
"anvil gui with metallic iron theme"
```

---

## 🎮 Custom Menus

### Player Menus

```txt
"player inventory gui with character theme"
"RPG stats menu with medieval parchment style"
"skill tree interface with fantasy decorations"
"quest log gui with book page theme"
```

### Server Menus

```txt
"server hub menu with modern clean design"
"game mode selector with colorful buttons"
"player settings gui with organized panels"
"minigame lobby interface with exciting theme"
```

---

## 🎨 GUI Themes

### Medieval Fantasy

```txt
"medieval stone gui with iron decorations and torch lighting"
"castle throne room interface with royal purple and gold"
"dungeon gui with dark stone and chains"
"knight's armory menu with weapon displays"
```

### Magical/Mystical

```txt
"wizard tower gui with purple magical theme and floating runes"
"alchemy lab interface with potion bottles and mystical effects"
"spell book menu with ancient pages and glowing text areas"
"enchanted library gui with magical shelves"
```

### Nature/Organic

```txt
"forest shop gui with wooden logs and green leaf decorations"
"garden menu with flower patterns and natural colors"
"treehouse interface with living wood and vines"
```

### Tech/Futuristic

```txt
"futuristic holographic gui with blue neon panels"
"space station interface with tech displays and screens"
"cyberpunk menu with neon purple and dark panels"
```

---

## 🎯 GUI Layout Descriptions

### Slot Arrangements

**Include in prompt:**

```txt
"gui with 3x3 item grid at center"
"gui with 4x4 shop display at top"
"gui with 9x3 chest layout"
"gui with single item display and large decorative area"
```

### Panel Descriptions

```txt
"gui with top panel for items and bottom panel for player inventory"
"gui with central focus area and side decoration panels"
"gui with header decoration, middle item grid, and footer buttons"
```

### Navigation Elements

```txt
"gui with left and right arrow buttons"
"gui with home button and page indicators"
"gui with back button at bottom"
```

---

## 🔧 GUI Prompting Best Practices

### What to Include

**Essential elements:**
```
1. GUI type (shop, chest, menu)
2. Theme (medieval, futuristic, magical)
3. Layout (slot arrangement)
4. Colors (main color scheme)
5. Decorations (specific elements)
```

**Example:**
```txt
"medieval shop gui with wooden theme, 4x4 item grid at center, iron corner decorations, and brown color scheme"
```

### What to Avoid

**Don't include:**
```
❌ Slot coordinates (GUI has slots at x:50 y:100)
❌ Technical details (256x256 resolution)
❌ Code references (inventory.yml config)
❌ Plugin names (DeluxeMenus gui)
```

**Only visual descriptions.**

---

## 📊 GUI Complexity Levels

### Simple GUI

```txt
"chest gui with wooden frame"
```

**Good for:** Basic containers

### Medium GUI

```txt
"shop gui with wooden frame, item grid, and decorative corners"
```

**Good for:** Server shops

### Complex GUI

```txt
"fantasy RPG shop gui with purple magical theme, glowing rune decorations, 4x4 item display grid at center, navigation arrows on sides, and mystical border patterns"
```

**Good for:** Detailed custom interfaces

**Recommended: Medium complexity** for best results.

---

## 🎨 Color Scheme Prompts

### Warm Colors

```txt
"gui with warm brown and orange tones"
"gui with golden and amber color scheme"
"gui with red and orange fire theme"
```

### Cool Colors

```txt
"gui with blue and purple magical theme"
"gui with ice blue and white frost colors"
"gui with green and teal nature theme"
```

### Neutral Colors

```txt
"gui with gray stone and white accents"
"gui with brown wood and tan colors"
"gui with black and silver modern theme"
```

---

## ✅ GUI Prompt Checklist

Effective GUI prompt has:

- [ ] GUI type specified (shop, chest, menu)
- [ ] Theme mentioned (medieval, magical, tech)
- [ ] Layout described (4x4 grid, panels)
- [ ] Color scheme indicated
- [ ] Decorative elements mentioned
- [ ] Slot arrangement mentioned
- [ ] NOT overly complex (under 25 words)

:::warning Remember
GUI prompts **must** be used with **Style Selector** and proper base/shape images for best results.

[See complete GUI tutorial →](../../tutorials/gui-creation/gui-complete-guide)
:::

:::success Examples Complete
[See advanced prompting techniques →](../advanced-prompting/)
:::
