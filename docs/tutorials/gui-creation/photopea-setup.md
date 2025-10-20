---
sidebar_position: 3
---

# Photopea Setup for GUIs

Learn to use Photopea for GUI base image creation.

## 🎯 What is Photopea?

**Photopea** = Free online image editor (Photoshop alternative)

**Website:** [https://photopea.com](https://photopea.com)

**Why use it:**
```
✅ Free, no download
✅ Powerful editing tools
✅ Layer support
✅ Perfect for GUI bases
✅ PNG export with transparency
```

**No account needed** - works immediately.

---

## 🚀 Part 1: Basic Setup

### Step 1: Open Photopea

**Go to:** [photopea.com](https://photopea.com)

**Interface loads** - looks like Photoshop.

[SCREENSHOT: Photopea interface]

### Step 2: Create New Project

**File (top-left) → New**

[SCREENSHOT: File menu → New]

**New Project dialog appears:**

**Settings:**
```
Name: GUI_Shop_Base
Width: 256 pixels
Height: 256 pixels
DPI: 72 (default OK)
Fill: White
```

**Click "Create"**

[SCREENSHOT: New project dialog with settings]

**Blank 256×256 canvas appears.**

---

## 🎨 Part 2: Photopea Tools

### Essential Tools

**Left toolbar:**

| Tool | Shortcut | Purpose |
|------|----------|---------|
| **Move Tool** | V | Move layers/selections |
| **Rectangular Selection** | M | Select areas |
| **Rectangle Shape** | U | Draw rectangles |
| **Brush** | B | Paint/draw |
| **Paint Bucket** | G | Fill areas |
| **Eyedropper** | I | Pick colors |
| **Zoom** | Z | Zoom in/out |

[SCREENSHOT: Toolbar with tools labeled]

### Colors

**Bottom of toolbar:**

```
Foreground color: [Black square]
Background color: [White square]
```

**Click squares** to open color picker.

[SCREENSHOT: Color picker]

**Use for:** Choosing panel colors.

---

## 🖼️ Part 3: Drawing GUI Layout

### Step 3: Draw Background Panel

**Select Rectangle Tool (U)**

**Top toolbar:**
```
Fill: Solid color
Stroke: None (or thin if desired)
```

**Click color square:**
```
Choose: Warm brown (#A0876C) for wooden theme
```

**Draw rectangle:**
```
Click and drag on canvas
Cover full 256×256 area
```

[SCREENSHOT: Brown background rectangle]

**Creates new layer** automatically.

### Step 4: Draw Top Panel (Shop Area)

**Rectangle Tool (U) still selected**

**Choose color:** Lighter brown (#C9A87C)

**Draw rectangle:**
```
Top portion of GUI
Height: ~140 pixels
Full width
```

[SCREENSHOT: Top panel added]

**This will hold 4×4 item grid.**

### Step 5: Draw Navigation Area

**Choose color:** Medium brown (#8B6F47)

**Draw rectangle:**
```
Below shop panel
Height: ~40 pixels
For ← Home → buttons
```

[SCREENSHOT: Navigation area]

### Step 6: Draw Bottom Panel (Inventory)

**Choose color:** Dark brown (#6B5637)

**Draw rectangle:**
```
Bottom area
Height: ~76 pixels
For player inventory slots
```

[SCREENSHOT: Bottom panel]

**Now you have basic panel structure.**

---

## 🎯 Part 4: Drawing Slots

### Step 7: Create Slot Template

**Rectangle Tool (U)**

**Settings:**
```
Width: 18 pixels
Height: 18 pixels
Fill: Darker color than panel (slots should be visible)
```

**Draw first slot:**

```
Top-left of shop panel
18×18 square
```

[SCREENSHOT: First slot drawn]

### Step 8: Duplicate Slots

**Select Move Tool (V)**

**Click slot layer**

**Duplicate:**
```
Ctrl+J (Windows) or Cmd+J (Mac)
```

**Move duplicated slot:**
```
Click and drag 18 pixels to the right
```

**Repeat:**
```
Duplicate → Move 18px → Duplicate → Move 18px
4 slots across ✓
```

[SCREENSHOT: Row of 4 slots]

### Step 9: Create Full Grid

**Select all 4 slot layers:**
```
Click first slot layer
Shift+Click last slot layer
All 4 selected
```

**Duplicate row:**
```
Ctrl+J to duplicate
Move 18 pixels DOWN
```

**Repeat:**
```
4 rows down = 4×4 grid ✓
```

[SCREENSHOT: Complete 4×4 slot grid]

:::tip Merge Slot Layers
After creating grid, merge all slot layers: Layer → Merge Layers. Easier to manage.
:::

---

## 🎨 Part 5: Adding Decorations (Optional)

### Simple Decorations

**Don't overdo it** - AI adds details.

**Basic decoration ideas:**

**Corner brackets:**
```
Small rectangles in GUI corners
Iron gray color (#8C8C8C)
```

**Border frame:**
```
Thin rectangle around entire GUI
Dark brown outline
```

**Top awning (shop theme):**
```
Trapezoid shape at top
Represents shop canopy
Red or brown color
```

[SCREENSHOT: Simple decorations added]

**Keep decorations simple** - AI elaborates.

---

## 🌫️ Part 6: Adding Noise

### Step 10: Save Clean Version First

**File → Export As → PNG**

**Save as:** `gui_shop_base_clean.png`

**This is your Shape image** (no noise).

### Step 11: Add Gaussian Noise

**Filter → Noise → Add Noise**

[SCREENSHOT: Filter menu → Noise → Add Noise]

**Settings:**

```
Amount: 20%
Distribution: Gaussian
Monochrome: ✓ Checked
```

**Click OK**

[SCREENSHOT: Noise dialog]

**Image now grainy/noisy.**

[SCREENSHOT: Image with noise]

### Step 12: Export Noise Version

**File → Export As → PNG**

**Save as:** `gui_shop_base_noise.png`

**This is your Base image** (with noise).

---

## 💾 Part 7: Final Preparation

### What You Have Now

**Two files:**
```
✅ gui_shop_base_clean.png (Shape image)
✅ gui_shop_base_noise.png (Base image)
```

**Both:**
```
✅ 256×256 pixels
✅ PNG format
✅ Ready for upload
```

**Next step:** Upload to My Reference Images

[Continue to complete GUI guide →](gui-complete-guide)

---

## 🔧 Photopea Troubleshooting

<details>
<summary>Can't draw rectangles</summary>

**Check:**
- Rectangle Tool selected? (U)
- Fill color set? (not transparent)
- Clicking and dragging on canvas?

**Try:**
- Press U to ensure Rectangle Tool active
- Check fill color in top toolbar
- Click color square to choose color

</details>

<details>
<summary>Slots not aligning</summary>

**Solution:**
- Use Photopea grid: View → Show Grid
- Set grid to 18×18 pixels
- Align to grid when drawing

Or use rulers and guides for precision.

</details>

<details>
<summary>Layers confusing</summary>

**Tips:**
- Rename layers: Double-click layer name
- Organize: "Background", "Shop Panel", "Slots", etc.
- Merge related layers when done
- Delete unused layers

</details>

<details>
<summary>Noise looks wrong</summary>

**Check:**
- Amount: 20% (not 200%)
- Distribution: Gaussian (not Uniform)
- Monochrome: Checked (not colored noise)

**If too noisy:** Undo (Ctrl+Z) and redo at 15-20%

</details>

---

## 💡 Photopea Tips for GUIs

:::tip Use Layers
Keep panels, slots, decorations on separate layers. Easier to edit and adjust.
:::

:::tip Zoom In (Ctrl + Scroll)
Zoom to pixel level for precision. Important for 18×18 slot alignment.
:::

:::tip Use Guides
Drag guides from rulers (View → Rulers). Helps align elements.
:::

:::tip Save PSD Project
File → Save as PSD. Keeps layers for future editing. Then export PNGs.
:::

:::tip Simple is Better
Don't spend hours making base perfect. AI improves it. Focus on slot positions.
:::

---

## ✅ Photopea GUI Prep Checklist

Ready for GUI generation:

- [ ] Created 256×256 project
- [ ] Drew panel structure
- [ ] Created 4×4 slot grid (18×18 each)
- [ ] Added simple decorations (optional)
- [ ] Exported clean version (Shape)
- [ ] Added 20% Gaussian noise
- [ ] Exported noise version (Base)
- [ ] Both files ready to upload

:::success Photopea Mastered for GUIs
[Return to complete GUI guide →](gui-complete-guide)

[Continue to GUI troubleshooting →](gui-troubleshooting)
:::
