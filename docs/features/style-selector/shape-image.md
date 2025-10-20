---
sidebar_position: 3
---

# Shape Image

Understanding the Shape [SH] reference type.

## 🎯 What is Shape Image?

**Shape Image** guides **composition and layout**.

**AI follows structure/silhouette** from shape image (but can't see colors).

```
Think of it as:
"Silhouette at sunset" - You see the shape, not colors
```

**Result:** Generation matches shape image's composition.

---

## 🔬 How Shape Works

### Colorblind Guidance

**AI processing:**
```
Shape image colors → Converted to grayscale → Only edges/shapes detected
```

**AI sees:**
```
✅ Object positions
✅ Silhouettes
✅ Composition
✅ Layout
✅ Element sizes

❌ Colors (ignored)
❌ Textures (ignored)
❌ Fine details (depends on settings)
```

[SCREENSHOT: Original image → How AI sees it (edge detection)]

### Shape Strength

**Controls how closely to follow:**

```
Shape Strength 0: Ignores shape completely
Shape Strength 5: Loosely follows shape
Shape Strength 7-8: Closely follows shape (recommended)
Shape Strength 10: Exactly matches shape (too rigid)
```

---

## 🎨 What Shape Image Controls

### Layout/Composition

**Position of elements:**

```
Shape: Sword blade pointing up, handle down
Result: AI generates with same orientation

Shape: GUI slots in 4×4 grid
Result: AI places slots in 4×4 grid
```

**Spatial arrangement preserved.**

### Silhouettes

**Overall forms:**

```
Shape: Thin blade, thick handle
Result: AI matches proportions

Shape: Round apple with small stem
Result: AI makes round apple with small stem
```

### Structure

**Component organization:**

```
Shape: GUI with top panel, middle grid, bottom inventory
Result: AI generates that panel structure
```

---

## 🛠️ Preparing Shape Images

### For GUIs (Critical Use Case)

**Recommended workflow:**

**1. Create base layout in Photopea:**
```
Size: 256×256
Draw: GUI structure with panels and slots
Colors: Can be simple (gray, brown)
```

**2. Do NOT add noise:**
```
Shape image = Clean version without noise
Base image = Same image WITH noise
```

**3. Export:**
```
Save as: shape_image.png
```

[SCREENSHOT: Clean shape image for GUI]

**Why no noise on shape?**
```
Shape needs clear edges
Noise would confuse edge detection
Keep shape clean and clear
```

### For Items

**Use existing item for shape:**

```
Example: Want all swords same shape, different colors

1. Generate first sword
2. Download it
3. Use as shape for next generations
4. All swords same shape, different details/colors
```

---

## ⚙️ Shape Parameters

### Shape Strength

**How much to follow shape:**

```
Low (3-5):
✅ Loose interpretation
✅ More creative freedom
✅ Different from shape but inspired by it

Medium (6-7):
✅ Balanced
✅ Follows shape mostly
✅ Some creative deviation

High (8-9):
✅ Very close following
✅ Accurate to shape
✅ Little deviation

Too High (10):
❌ Exact copy of shape
❌ Flat, no creativity
❌ Boring results
```

**Recommended for GUIs: 7-8**

### Shape Affected By Small Details

**Capture detail level:**

```
Low (1-3):
- Only major shapes
- Ignores small elements
- Good for simple layouts

High (8-10):
- Captures small details
- Includes tiny elements
- Good for complex layouts
```

**Recommended for GUIs: 8-10** (capture slots precisely)

### Shape Generation Percent

**How much of generation process uses shape:**

```
Percent 5 (50%):
- First 50% follows shape
- Last 50% creative freedom

Percent 7 (70%):
- First 70% follows shape
- Last 30% creative freedom (adds details)

Percent 10 (100%):
- Entire process follows shape
- No creative freedom
```

**Recommended for GUIs: 7-8**

**Why not 10?**
```
AI needs some freedom to add nice details
100% shape = flat, boring result
70-80% = structured but with creative polish
```

---

## 🎯 Shape Image Examples

### Example 1: GUI Layout

**Shape image:**
```
Simple drawn GUI:
- Top rectangle (item grid)
- Middle buttons
- Bottom rectangle (inventory)
```

[SCREENSHOT: Simple GUI shape]

**Generated with shape:**
```
Same layout:
- Items in top rectangle
- Buttons in middle  
- Inventory in bottom
But with colors, decorations, theme
```

[SCREENSHOT: Generated GUI following shape]

### Example 2: Item Structure

**Shape image:**
```
Sword with:
- Long blade
- Small crossguard
- Wrapped handle
```

**Generated with shape:**
```
Different sword but:
- Same blade length
- Same crossguard size
- Same handle wrap structure
```

---

## 🔧 Shape Image Best Practices

### Image Requirements

**Format:**
```
✅ PNG preferred
✅ Same size as model resolution
✅ Clean edges (no noise)
✅ Clear structure
```

### For Best Results

**GUI shape images:**
```
✅ Draw clear slot positions
✅ Define panel boundaries
✅ Mark button locations
✅ Keep it simple (not overly detailed)
```

**Item shape images:**
```
✅ Use successful generations
✅ Clear item structure
✅ Well-defined parts
```

---

## 🔬 Shape vs Base

### Key Differences

| Aspect | Base Image | Shape Image |
|--------|-----------|-------------|
| **Sees colors?** | Yes | No (only edges) |
| **Guides** | Colors, style | Layout, composition |
| **Typical use** | Color matching | Structure matching |
| **For GUIs** | With noise | Without noise |
| **Strength range** | 0-10 | 0-10 |
| **Best setting** | 0-3 | 7-8 |

### Using Both Together

**For GUIs (most common):**

```
Base [B]: GUI with colors + noise (style/color)
Shape [SH]: Same GUI without noise (structure)

Result: Matches BOTH colors and layout
```

**Most powerful combination.**

---

## 📊 Shape Strength Effects

### Comparison

```
Shape Strength 3:
- Vague similarity to shape
- Lots of creative freedom
- May deviate significantly

Shape Strength 7:
- Clear structural match
- Balanced creativity
- Follows shape with polished details

Shape Strength 10:
- Exact shape match
- No creativity
- Flat, rigid result
```

[SCREENSHOT: Shape Strength 3 vs 7 vs 10]

**Sweet spot: 7-8** for most uses.

---

## 🔧 Shape Image Troubleshooting

<details>
<summary>AI ignores shape completely</summary>

**Problem:** Result doesn't match shape layout

**Checks:**
1. Shape image selected as [SH]? (not [B])
2. Shape Strength > 0?
3. Shape Generation % > 0?
4. Clicked "Apply Selections"?

**Fix:**
- Verify all settings
- Increase Shape Strength to 8
- Increase Shape Generation % to 8

</details>

<details>
<summary>Result too similar to shape (flat/boring)</summary>

**Problem:** Exact copy of shape, no creativity

**Cause:** Shape Strength and/or Shape Generation % too high (10)

**Fix:**
```
Lower Shape Strength: 10 → 7-8
Lower Shape Generation %: 10 → 7
```

Gives AI room for creative details.

</details>

<details>
<summary>Slots misaligned in GUI</summary>

**Problem:** GUI slots not in right positions

**Solutions:**
1. Increase Shape Strength: 7 → 9
2. Increase Shape Affected By Small Details: 5 → 9
3. Redraw shape image with clearer slots
4. Try different generation

</details>

---

## ✅ Shape Image Checklist

Effective shape image usage:

- [ ] Image is clean (no noise)
- [ ] Image size matches model resolution
- [ ] Structure is clearly drawn
- [ ] Selected as [SH] in Style Selector
- [ ] Shape Strength set to 7-8
- [ ] Shape Generation % set to 7-8
- [ ] Shape Affected By Details set appropriately

:::success Shape Images Mastered
[Learn all parameters →](parameters-explained)

[See Style Selector workflow →](style-selector-workflow)
:::
