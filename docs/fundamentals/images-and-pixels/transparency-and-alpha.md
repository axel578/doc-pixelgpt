---
sidebar_position: 3
---

# Transparency & Alpha Channel

Understanding transparency for Minecraft textures.

## 🎨 What is Transparency?

**Transparency** = Invisible pixels

In Minecraft items, transparent areas show **what's behind** the item.

[SCREENSHOT: Sword with transparent background in Minecraft]

---

## 🔬 Alpha Channel

### RGBA Color Model

Each pixel has **4 values:**

```
R = Red (0-255)
G = Green (0-255)
B = Blue (0-255)
A = Alpha/Transparency (0-255)
```

### Alpha Values

| Alpha | Visibility | Example |
|-------|-----------|---------|
| 0 | Fully transparent (invisible) | Empty space |
| 128 | Semi-transparent | Glass, water |
| 255 | Fully opaque (solid) | Solid item parts |

[SCREENSHOT: Gradient showing alpha 0 to 255]

---

## ⛏️ Why Minecraft Needs Transparency

### Without Transparency

[SCREENSHOT: Sword with white background in Minecraft - looks wrong]

```
❌ White box around item
❌ Looks unprofessional
❌ Doesn't fit game aesthetic
```

### With Transparency

[SCREENSHOT: Sword with transparent background in Minecraft - looks correct]

```
✅ Clean item silhouette
✅ No visible background
✅ Professional appearance
```

---

## 🎮 Pixel GPT & Transparency

### What Pixel GPT Generates

**Default output:**
```
Opaque white background (alpha = 255)
Item pixels (alpha = 255)
```

[SCREENSHOT: Generated image with white background]

:::warning Not Ready for Minecraft
Generated images have **white background**. You must remove it!
:::

### Your Job: Remove Background

**Use Grid Editor:**
1. Open Grid Editor
2. Click magic wand tool
3. Click white areas
4. White becomes transparent

[SCREENSHOT: Before/after background removal]

**Now it's ready:**
```
✅ Transparent background (alpha = 0)
✅ Item pixels (alpha = 255)
✅ Proper PNG with alpha channel
```

---

## 📁 File Format Requirements

### PNG - Supports Transparency ✅

```
✅ Alpha channel support
✅ Lossless compression
✅ Perfect for Minecraft
✅ .png extension
```

### JPEG - No Transparency ❌

```
❌ No alpha channel
❌ Lossy compression
❌ Not for Minecraft textures
❌ .jpg / .jpeg extension
```

:::danger Always Export as PNG
When saving from Grid Editor, always choose PNG format. JPEG will not work in Minecraft.
:::

---

## 🛠️ Removing Background

### Magic Wand Tool

**How it works:**
1. Selects pixels of similar color
2. You click white areas
3. Selected areas become transparent

[SCREENSHOT: Magic wand tool interface]

**Settings:**

| Setting | Purpose | Recommended |
|---------|---------|-------------|
| **Wand Threshold** | Color similarity tolerance | 5-7 |
| **Remove Color** | Color to remove | White |

### Step-by-Step

1. **Select wand tool** (🪄)
2. **Adjust threshold** to 5-7
3. **Click white areas** around item
4. **Verify** transparency (checkered pattern)
5. **Extract** item with transparency intact

[SCREENSHOT: Step-by-step visual guide]

<details>
<summary>🔧 Threshold too low</summary>

**Problem:** Only exact white selected, leaving white pixels

**Solution:** Increase threshold to 6-8

</details>

<details>
<summary>🔧 Threshold too high</summary>

**Problem:** Selects parts of item (light colors)

**Solution:** Decrease threshold to 3-5, click carefully

</details>

---

## 🎯 Transparency Best Practices

### Check Transparency

**In Grid Editor:**
- Transparent areas show **checkered pattern**
- Opaque areas show solid color

[SCREENSHOT: Checkered pattern indicating transparency]

**In image editor (Photopea, etc.):**
- Transparent areas show checkered background
- Can verify alpha channel exists

### Export Correctly

**Grid Editor options:**

```
✅ "Save as image (16×16)" → Includes transparency
✅ "Copy image to clipboard" → Includes transparency
❌ "Save without resize" → May need manual transparency check
```

### Verify in Minecraft

Test your texture:
1. Add to resource pack
2. Open Minecraft
3. Check item in inventory

**Should look clean with no white box**

[SCREENSHOT: Item in Minecraft inventory looking correct]

---

## 🔬 Technical Details

### Alpha Channel Storage

PNG files store alpha as:
```
4 bytes per pixel (RGBA)
1 byte for Red
1 byte for Green
1 byte for Blue
1 byte for Alpha
```

### Partial Transparency

Some pixels can be **semi-transparent:**
```
Alpha 255 = Solid
Alpha 200 = Slightly see-through
Alpha 128 = Half transparent
Alpha 50 = Very transparent
Alpha 0 = Invisible
```

**Used for:**
- Glass effects
- Water
- Smoke/fog effects
- Glowing auras

---

## ❌ Common Transparency Mistakes

### Mistake 1: Forgetting to Remove Background

```
❌ Downloads image with white background
❌ Adds to resource pack
❌ Item has white box in Minecraft
```

**Solution:** Always use magic wand before extracting

### Mistake 2: Saving as JPEG

```
❌ Saves as .jpg
❌ Transparency lost
❌ White background becomes black or white in Minecraft
```

**Solution:** Always save as PNG

### Mistake 3: Not Checking Transparency

```
❌ Assumes transparency is correct
❌ Doesn't verify in editor
❌ Discovers issue only in Minecraft
```

**Solution:** Always verify checkered pattern before downloading

---

## 🎨 Advanced: Semi-Transparency

### When to Use

**Full transparency (alpha 0):**
```
✅ Background
✅ Empty space
✅ Air around item
```

**Semi-transparency (alpha 50-200):**
```
✅ Glass items
✅ Potion liquids
✅ Magical effects
✅ Glowing auras
```

**Full opacity (alpha 255):**
```
✅ Solid item parts
✅ Main body
✅ Decorations
```

### Creating Semi-Transparency

Pixel GPT generates **full opacity only**. For semi-transparency:
1. Generate item
2. Edit in image editor (Photopea)
3. Manually adjust alpha of specific pixels

---

## ✅ Transparency Checklist

Before using in Minecraft:

- [ ] Opened Grid Editor
- [ ] Used magic wand on white areas
- [ ] See checkered pattern (transparency)
- [ ] Extracted as PNG format
- [ ] Verified file is PNG (not JPEG)
- [ ] Checked transparency in image editor

:::success Master Transparency
You now understand alpha channels! → [Learn about pixel density](pixel-density-and-mixels)
:::
