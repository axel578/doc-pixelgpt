---
sidebar_position: 2
---

# Background Removal

Detailed guide to removing backgrounds.

## 🎯 Why Remove Backgrounds?

**Pixel GPT generates with white background:**

[SCREENSHOT: Generated item with white background]

**Minecraft needs transparent background:**

[SCREENSHOT: Same item with transparent background]

**White background in Minecraft = white box around item** ❌

**Transparent background = clean item** ✅

---

## 🪄 Magic Wand Tool

### What It Does

**Selects pixels of similar color** for removal.

**How it works:**
```
1. You click a white area
2. Tool selects all similar white pixels
3. Selected area becomes transparent
```

**Threshold controls "similar":**
- Low threshold: Only exact white
- High threshold: White and near-white colors

---

## 🔧 Step-by-Step Removal

### Step 1: Open Grid Editor

**After generation:**
1. Click image in sidebar
2. Click "Grid" button

Grid Editor opens.

### Step 2: Select Wand Tool

**Click magic wand icon (🪄)**

Tool activates (highlighted).

[SCREENSHOT: Wand tool selected]

### Step 3: Set Threshold

**Adjust "Wand Threshold" slider:**

```
Recommended starting value: 5-7
```

**What threshold means:**

```
1-3: Very precise (exact white only)
4-6: Balanced (recommended)
7-10: Permissive (all light colors)
```

### Step 4: Click White Areas

**Click on background:**

```
First click: Top-left area selected
Second click: Top-right area selected
Third click: Bottom area selected
Keep clicking: All white areas transparent
```

[SCREENSHOT: Progressive background removal]

**Selected areas show:**
- Animated border (while selected)
- Checkered pattern (when transparent)

### Step 5: Verify Transparency

**Check entire image:**

```
✅ All white areas should show checkered pattern
✅ Item edges should be clean
❌ No white pixels should remain
```

[SCREENSHOT: Fully transparent background]

### Step 6: Return to Zoom Tool

**Click zoom icon (🔍)**

**Important:** Switch back to prevent accidental wand clicks.

---

## ⚙️ Threshold Settings

### Choosing Right Threshold

**Start at 5-7**, adjust based on results:

### Threshold Too Low (1-3)

**Problem:**
```
❌ Doesn't select all white
❌ White pixels remain
❌ Requires many clicks
```

[SCREENSHOT: Incomplete selection]

**Solution:** Raise threshold to 5-6

### Threshold Perfect (5-7)

**Result:**
```
✅ Selects all background white
✅ Doesn't select item pixels
✅ Clean separation
```

**This is the goal.**

### Threshold Too High (8-10)

**Problem:**
```
❌ Selects item pixels (light colors)
❌ Item edges removed
❌ Item damaged
```

[SCREENSHOT: Over-selection removing item parts]

**Solution:** Lower threshold to 5-6

---

## 🎯 Advanced Techniques

### Multiple Colors to Remove

**If background isn't pure white:**

```
1. Click color picker
2. Click background color in image
3. Use wand to select
4. Repeat for each background color
```

### Zooming for Precision

**For detailed removal:**

```
1. Scroll wheel to zoom in
2. Click wand on small white areas
3. Get pixel-perfect edges
4. Zoom out to verify
```

**Use for:** Items with complex edges, small details.

### Partial Selection

**Don't need to select everything at once:**

```
1. Click one area
2. Check if selection looks good
3. Click another area
4. Build up selection gradually
```

**Safer for beginners.**

---

## 🔧 Troubleshooting Background Removal

<details>
<summary>Magic wand selects item pixels</summary>

**Problem:** Wand selects light parts of item

**Cause:** Threshold too high

**Solution:**
```
1. Lower threshold: 8 → 4
2. Undo selection (click selected area again)
3. Re-select background only
4. Avoid clicking near item edges
```

</details>

<details>
<summary>White pixels remain after removal</summary>

**Problem:** Some white pixels not selected

**Cause:** Threshold too low or didn't click everywhere

**Solution:**
```
1. Zoom in to see remaining pixels
2. Raise threshold slightly: 5 → 6
3. Click on remaining white areas
4. Or click individual pixels at high zoom
```

</details>

<details>
<summary>Background not actually transparent</summary>

**Problem:** Still looks white, no checkered pattern

**Cause:** Not removed yet, only selected

**Check:**
- Did selected areas turn to checkered pattern?
- If no, wand may not be working

**Try:**
- Refresh Grid Editor
- Try different browser
- Adjust threshold and retry

</details>

<details>
<summary>Item edges look rough/jagged</summary>

**Problem:** Anti-aliasing removed or over-removal

**Cause:** Threshold too high removed edge pixels

**Prevention:**
```
1. Use lower threshold (4-5)
2. Don't click too close to item
3. Zoom in for precision
```

**Fix:**
- Regenerate if too damaged
- Or manually fix in image editor

</details>

---

## 🎨 Background Removal for Different Items

### Simple Items (Solid Colors)

**Easy to remove:**
```
Clear color separation
High contrast with background
Recommended threshold: 5-7
```

**Examples:** Diamonds, solid-color items

### Complex Items (Many Colors)

**Harder to remove:**
```
Light colors may be close to white
Need lower threshold
More careful clicking
```

**Examples:** White/light blue items, transparent effects

**Recommended threshold: 4-5**

### Items with Glow Effects

**Special care needed:**
```
Glowing edges may be very light
Lower threshold to preserve glow
Click carefully
```

**Recommended threshold: 3-5**

---

## 📊 Removal Quality

| Threshold | Speed | Precision | Item Preservation |
|-----------|-------|-----------|-------------------|
| 1-3 | Slow | High | Excellent |
| 4-6 | Medium | Good | Good |
| 7-9 | Fast | Low | May damage item |
| 10 | Very fast | Very low | Likely damages item |

**Recommended: 5-6 for balance**

---

## ✅ Background Removal Checklist

Complete removal process:

- [ ] Opened Grid Editor
- [ ] Selected magic wand tool (🪄)
- [ ] Set threshold to 5-7
- [ ] Clicked all white areas
- [ ] Verified checkered pattern visible
- [ ] Checked item edges are clean
- [ ] No white pixels remaining
- [ ] Returned to zoom tool (🔍)

:::success Background Removal Mastered
[Learn complete Grid Editor →](image-grid-editor)

[Continue to download options →](download-options)
:::
