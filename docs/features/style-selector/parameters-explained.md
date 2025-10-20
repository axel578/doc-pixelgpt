---
sidebar_position: 4
---

# Style Selector Parameters

Complete guide to all Style Selector settings.

## 🎛️ All Parameters

Style Selector has **10+ parameters** depending on model.

[SCREENSHOT: Style Selector interface with all parameters]

---

## 📊 Parameter Categories

### Image Selection

**Radio buttons and checkboxes:**

```
[S] Style (checkbox) - Multiple selections allowed
[B] Base (radio) - Only one selection
[SH] Shape (radio) - Only one selection
```

### Strength Controls

**Sliders affecting influence:**

```
Style Strength (1-10)
Image Strength (0-10)
Shape Strength (0-10)
```

### Detail Controls

**How much detail to capture:**

```
Shape Affected By Small/Transparent Details (0-10)
Shape Affects Percent of Generation (0-10)
```

### Special Options

**Toggles and modes:**

```
Overall Style Strength (0-10)
Blur Mask (slider)
Use Color Style (toggle)
```

---

## 🎨 Style Strength

**Controls influence of Style [S] images.**

**Range:** 0-10

```
Style Strength 0: Ignore style images
Style Strength 5: Moderate influence
Style Strength 10: Strong style matching
```

**When to use:**
```
Not using style images: Leave at 0 or ignore
Using style images: Set to 7-10
```

**Example:**
```
Style images: 3 cartoon-style references
Style Strength: 8
Result: AI generates in cartoon style
```

:::info Style Images vs Base/Shape
Style [S] is optional. Base and Shape are more commonly used. Use Style for artistic style matching across multiple references.
:::

---

## 🖼️ Image Strength

**Controls influence of Base [B] image.**

**Range:** 0-10

```
Image Strength 0:
- Maximum creativity
- Base colors barely used
- AI has full freedom

Image Strength 1-3: ⭐ RECOMMENDED
- Base guides colors loosely
- AI has creative freedom
- Good balance

Image Strength 5-7:
- Base colors closely matched
- Moderate creativity
- Good for exact palette matching

Image Strength 10:
- Base copied closely
- Minimal creativity
- Very literal
```

**Common settings:**

| Use Case | Image Strength |
|----------|---------------|
| GUI color guidance | 0-1 |
| Item palette matching | 1-3 |
| Exact color copy | 5-7 |

**Higher = stronger color influence from base.**

---

## 🎯 Shape Strength

**Controls influence of Shape [SH] image.**

**Range:** 0-10

```
Shape Strength 0: Ignore shape
Shape Strength 3-5: Loose interpretation
Shape Strength 7-8: ⭐ RECOMMENDED (close following)
Shape Strength 10: Exact match (too rigid)
```

**Use cases:**

| Goal | Shape Strength |
|------|---------------|
| Vague inspiration | 3-5 |
| GUI layout matching | 7-8 |
| Exact structure | 9-10 |

**For GUIs: Always 7-8**

**Why not 10?**
```
10 = Too rigid, flat result
7-8 = Structured but with creative details
```

---

## 🔬 Shape Affected By Small/Transparent Details

**How much small detail to capture from shape.**

**Range:** 0-10

```
Low (1-3):
- Only major shapes
- Ignores small elements
- Good for simple layouts

Medium (5-7):
- Moderate detail capture
- Balanced approach

High (8-10): ⭐ RECOMMENDED for GUIs
- Captures small details
- Includes tiny elements
- Precise for slot positions
```

**For GUIs:**
```
Set to: 8-10
Why: Need to capture exact slot positions
```

**For items:**
```
Set to: 5-7
Why: Don't need extreme precision
```

---

## 📐 Shape Affects Percent of Generation

**What percentage of generation process uses shape guidance.**

**Range:** 0-10 (represents 0% to 100%)

```
Value 0 (0%): No shape guidance at all
Value 5 (50%): First 50% uses shape, last 50% free
Value 7 (70%): ⭐ RECOMMENDED First 70% uses shape, last 30% creative
Value 10 (100%): Entire process uses shape
```

**How it works:**

```
AI generates in steps (usually 20-30 steps):
Step 1-14 (70%): Must follow shape
Step 15-20 (30%): Can add creative details
```

**Result:** Structure preserved, details creative.

**For GUIs: 7-8**

**Why 70% not 100%?**
```
100% = No room for details, flat result
70% = Structure solid, details polished
```

---

## 🎨 Overall Style Strength

**Global style influence across all reference types.**

**Range:** 0-10

```
Recommended: Leave at 10 (default)
```

**What it does:**
```
Affects overall stylistic consistency
Usually don't need to adjust
Lower if generation too stylized
```

**Most users: Never touch this** (10 is fine).

---

## 🌫️ Blur Mask

**Blurs boundaries when inpainting/filling.**

**Range:** 0-10

```
Blur Mask 0: Sharp boundaries
Blur Mask 5: Moderate blur
Blur Mask 10: Heavy blur
```

**When to use:**

```
Filling holes in images:
- Check "Only fill base image mask"
- Adjust Blur Mask for smooth transitions

Regular generation:
- Leave at 0 or ignore
```

**Most common use:** Inpainting mode (advanced).

:::info Advanced Feature
Blur Mask is for inpainting (filling image holes). Most users won't need this. Leave at 0 for normal generation.
:::

---

## 🎨 Use Color Style

**Force AI to use color palette from Style [S] images.**

**Toggle:** On/Off

```
Off (default): Style images guide artistic approach
On: Style images also guide color palette
```

**When to enable:**

```
✅ Want exact color palette from multiple style images
✅ Matching established aesthetic precisely
```

**When to leave off:**

```
✅ Normal generation (default)
✅ Using Base for colors already
```

**Mostly used in Standard tier models** (less common in Ultimate).

---

## 📊 Parameter Combinations

### For GUIs (Recommended)

```yaml
Base Image [B]: GUI with colors + noise
  Image Strength: 0-1

Shape Image [SH]: Same GUI without noise
  Shape Strength: 7-8
  Shape Affected By Details: 8-10
  Shape Generation %: 7-8

Overall Style Strength: 10
Use Color Style: Off
```

**This is the proven formula for GUIs.**

### For Matching Item Colors

```yaml
Base Image [B]: Item with desired colors
  Image Strength: 1-3

Shape Image [SH]: None
Style Images [S]: None
```

**For color matching only.**

### For Matching Item Structure

```yaml
Base Image [B]: None

Shape Image [SH]: Item with desired structure
  Shape Strength: 7-8
  Shape Generation %: 7

Style Images [S]: None
```

**For shape matching only.**

### For Complete Control (Both)

```yaml
Base Image [B]: Item with colors + noise
  Image Strength: 1-2

Shape Image [SH]: Item without noise
  Shape Strength: 7
  Shape Generation %: 7
```

**Matches both colors and structure.**

---

## 🔧 Parameter Troubleshooting

<details>
<summary>Settings don't seem to work</summary>

**Check:**
1. Reference images selected with [B], [SH], or [S]?
2. Clicked "Apply Selections" button?
3. Strength values > 0?
4. Compatible model? (not all support all parameters)

**Common mistake:** Forgot to click "Apply Selections"

</details>

<details>
<summary>Result too similar to reference</summary>

**Cause:** Strengths too high

**Fix:**
```
Lower Image Strength: 5 → 1-2
Lower Shape Strength: 10 → 7
Lower Shape Generation %: 10 → 7
```

</details>

<details>
<summary>Result ignores reference</summary>

**Cause:** Strengths too low

**Fix:**
```
Raise Shape Strength: 5 → 8
Raise Shape Generation %: 5 → 8
Verify images selected
Verify clicked "Apply Selections"
```

</details>

<details>
<summary>GUI slots wrong position</summary>

**Fix:**
```
Increase Shape Strength: 7 → 9
Increase Shape Affected By Details: 7 → 10
Increase Shape Generation %: 7 → 9
```

Forces more precise slot matching.

</details>

<details>
<summary>Colors don't match base</summary>

**Fix:**
```
Increase Image Strength: 0 → 2-3
Verify base image selected as [B]
Ensure base image has clear colors
```

</details>

---

## 📊 Parameter Quick Reference

### Most Common Settings

**For GUIs:**
```
Image Strength: 0-1
Shape Strength: 7-8
Shape Details: 8-10
Shape Generation %: 7-8
```

**For item color matching:**
```
Image Strength: 1-3
Shape Strength: 0 (not used)
```

**For item shape matching:**
```
Image Strength: 0 (not used)
Shape Strength: 7-8
Shape Generation %: 7
```

---

## 🎯 Advanced Parameter Usage

### Fine-Tuning Process

**Start with recommended settings:**
```
Shape Strength: 7
Shape Generation %: 7
Image Strength: 1
```

**Generate and evaluate:**
```
Too similar to reference? → Lower strengths
Too different? → Raise strengths
Wrong layout? → Raise Shape Strength/Details
Wrong colors? → Adjust Image Strength
```

**Adjust incrementally:**
```
Don't jump 5 → 10
Try: 5 → 6 → 7 → Find sweet spot
```

### Model-Specific Variations

**Different models, different optimal settings:**

```
Ultimate GUI v4:
- Shape Strength: 7-8
- Works well with Force Flat Slot

Elite GUI boosted:
- Shape Strength: 8-9
- Needs slightly higher for precision

Orion GUI:
- Shape Strength: 7
- Understands better, needs less forcing
```

**Experimentation required** per model.

---

## ✅ Parameter Mastery Checklist

Understand all parameters:

- [ ] Know what each parameter does
- [ ] Understand strength ranges (0-10)
- [ ] Know recommended GUI settings
- [ ] Can adjust based on results
- [ ] Know when to use each reference type
- [ ] Understand parameter interactions

:::success Parameters Mastered
[See complete workflow →](style-selector-workflow)

[Try GUI tutorial →](../../tutorials/gui-creation/gui-complete-guide)
:::
