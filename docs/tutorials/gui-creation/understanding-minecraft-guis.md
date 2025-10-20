---
sidebar_position: 2
---

# Understanding Minecraft GUIs

Essential GUI knowledge before creating.

## 🖼️ What is a Minecraft GUI?

**GUI** = Graphical User Interface

**In Minecraft:**
```
Visual menus/interfaces players interact with
Examples: Chests, furnaces, shops, custom menus
```

[SCREENSHOT: Various Minecraft GUIs]

---

## 🎯 GUI Components

### Panels

**Background areas containing elements:**

```
┌─────────────────────┐
│  Top Panel          │ ← Container area
│  Content here       │
└─────────────────────┘
```

**Purpose:**
- Visual organization
- Separate sections
- Contain slots

### Slots

**Spaces where items appear:**

```
□ = Empty slot
⚒️ = Slot with item
```

**Slot size:** 18×18 pixels (16×16 item + 1px border each side)

**Critical:** Slots must align to 18-pixel grid.

[SCREENSHOT: Slot detail showing 18×18 area]

### Decorations

**Visual elements:**
```
Frames, borders, corners
Icons, buttons
Title areas
Theme elements (shelves for shop, flames for furnace)
```

**Add visual interest** but shouldn't obscure slots.

---

## 📐 GUI Dimensions

### Common Sizes

**Vanilla GUIs:**
```
Chest: 176×166 pixels
Double chest: 176×222 pixels
Dispenser: 176×166 pixels
```

**Custom server GUIs:**
```
256×256 pixels (most common)
192×192 pixels (inventory-style)
Custom sizes
```

**Pixel GPT standard:** 256×256 for custom GUIs.

---

## 🎨 Slot Layout

### Standard Slot Grid

**Chest layout (vanilla):**

```
Top area: 9 slots × 3 rows = 27 slots
Bottom area: 9 slots × 4 rows = 36 slots (player inventory)
Total: 54 slots
```

**Custom layouts:**
```
Shop: 4×4 = 16 item slots
Small menu: 3×3 = 9 slots
Large shop: 5×5 = 25 slots
```

### Slot Spacing

**18-pixel alignment:**

```
Slot 1: Position 0
Slot 2: Position 18
Slot 3: Position 36
...
```

**Each slot exactly 18 pixels** from previous.

**Why 18?**
```
16 pixels for item
+ 1 pixel border left
+ 1 pixel border right
= 18 total
```

---

## 🎯 GUI Types

### Container GUIs

**Storage interfaces:**
```
Chests, barrels, shulkers
Hoppers, dispensers, droppers
```

**Features:**
- Full slot grid
- Player inventory at bottom
- Simple, functional

### Custom Server GUIs

**Plugin-powered:**
```
Shops (item purchases)
Menus (server navigation)
Skill trees, quests, stats
Custom interactions
```

**Features:**
- Custom layouts
- Buttons and icons
- Themed decorations
- Interactive elements

---

## 🔧 GUI Design Principles

### Slot Clarity

**Slots must be obvious:**

```
✅ Clear boundaries
✅ Distinct from background
✅ Properly spaced
✅ Aligned to grid
```

**Bad slot design:**
```
❌ Unclear where slots are
❌ Blend into background
❌ Inconsistent sizing
❌ Misaligned
```

[SCREENSHOT: Good vs bad slot design]

### Visual Hierarchy

**Priority order:**

```
1. Slots (most important - where items go)
2. Navigation/buttons (user interaction)
3. Decorations (visual appeal)
```

**Slots should never be obscured** by decorations.

### Theme Consistency

**All elements match theme:**

```
Medieval shop:
✅ Wood, stone, iron
✅ Rustic, aged textures
✅ Torches, shelves
❌ Neon lights
❌ Holographic panels
```

**Every element supports theme.**

---

## 🎨 GUI vs Items

### Key Differences

| Aspect | Items | GUIs |
|--------|-------|------|
| **Size** | 16×16 typical | 256×256 typical |
| **Layout** | Single object | Multiple panels/slots |
| **Complexity** | Simple | Very complex |
| **Generation** | Text prompt usually enough | Requires Style Selector |
| **Iteration** | 1-3 tries | 5-10 tries |
| **Difficulty** | Easy | Hard |

**GUIs are significantly more complex.**

---

## ✅ GUI Understanding Checklist

Before creating GUIs, understand:

- [ ] What is a panel
- [ ] What is a slot (18×18 pixel area)
- [ ] Why slot alignment matters
- [ ] Difference between container and custom GUIs
- [ ] Visual hierarchy (slots > buttons > decorations)
- [ ] GUI dimensions (256×256 for custom)

:::success GUI Concepts Clear
Ready to create GUI → [Complete GUI guide](gui-complete-guide)

Or learn Photopea first → [Photopea setup](photopea-setup)
:::
