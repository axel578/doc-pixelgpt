---
sidebar_position: 1
---

# Style Selector Overview

Advanced image-guided generation feature.

## 🎯 What is Style Selector?

**Style Selector** lets you guide AI using **reference images** instead of just text.

**Control:**
```
✅ Colors and style (Base Image)
✅ Composition and layout (Shape Image)
✅ Artistic style (Style Images)
```

**Result:** More precise control over generation.

[SCREENSHOT: Style Selector interface]

---

## 🆚 Text-Only vs Style Selector

### Text-Only Generation

**Standard workflow:**
```
Write prompt → AI generates → Random variation
```

**Control:** Prompt only (limited)

**Result:** AI's interpretation of text

### Style Selector Generation

**Advanced workflow:**
```
Write prompt + Upload reference images → AI generates → Guided by references
```

**Control:** Prompt + visual references (precise)

**Result:** Matches your visual examples

---

## 🎨 Three Reference Types

### Base Image [B]

**Purpose:** Guide colors and style

**What it does:**
```
AI copies color palette from base image
AI matches overall aesthetic
AI uses as creative starting point
```

**Example:**
```
Base: Blue and gold colored image
Result: AI uses blue and gold in generation
```

[SCREENSHOT: Base image example]

**Best for:**
- Matching color schemes
- Setting visual style
- Guiding artistic direction

### Shape Image [SH]

**Purpose:** Guide composition and layout

**What it does:**
```
AI follows shape/structure (not colors)
AI matches element positions
AI preserves composition
```

**Example:**
```
Shape: Sword with specific blade and handle shapes
Result: AI generates with that exact structure
```

[SCREENSHOT: Shape image example]

**Best for:**
- GUI layouts (slot positions)
- Specific item shapes
- Maintaining structure

:::info Shape is Colorblind
Shape image guides layout only. AI can't see colors in shape image - only silhouettes and composition.
:::

### Style Images [S] (Checkbox)

**Purpose:** Guide artistic style

**What it does:**
```
AI copies artistic approach
AI matches rendering style
Can use multiple images (up to 16)
```

**Example:**
```
Style: Cartoon-style images
Result: AI generates in cartoon style
```

**Best for:**
- Matching art styles
- Consistent aesthetics across sets

---

## 🔍 When to Use Style Selector

### Essential For

**GUIs (Critical):**
```
GUIs require Style Selector
Base + Shape images mandatory
Otherwise results are random/wrong
```

[GUI tutorial →](../../tutorials/gui-creation/gui-complete-guide)

**Matching Existing Sets:**
```
Have 5 items, want 6th to match
Use existing item as style reference
New item matches style
```

**Complex Requirements:**
```
Specific layout needed
Exact color scheme required
Precise composition wanted
```

### Optional For

**Standard items:**
```
Text prompts usually sufficient
Style Selector adds consistency
```

**Exploring variations:**
```
Can help test different references
See which styles work best
```

---

## 🚀 Accessing Style Selector

### Model Compatibility

**Not all models support Style Selector.**

**Check for green button:**

```
┌─────────────────────────────┐
│  Select Image References    │ ← This button
└─────────────────────────────┘
```

**If button exists** → Model supports Style Selector

[SCREENSHOT: Style Selector button on compatible model]

**Models with support:**
```
✅ Most Standard tier models
✅ All Ultimate tier models
✅ All Elite tier models
✅ All Orion tier models

❌ Most Baby tier models (limited)
```

### Opening Style Selector

**Click "Select Image References" button**

**Popup opens:**

[SCREENSHOT: Style Selector popup interface]

**Interface shows:**
- Your uploaded reference images
- Checkboxes for Style [S]
- Radio buttons for Base [B] and Shape [SH]
- Parameter sliders
- Apply button

---

## 🎛️ Basic Usage

### Quick Start

**1. Upload reference images**
```
Account → My Reference Images
Upload your reference PNGs
```

**2. Select model with Style Selector support**
```
Example: ultimate extreme mc item 16 v3
```

**3. Click "Select Image References"**

**4. Choose image type:**

**For matching colors:**
```
Select image as [B] Base
Set Image Strength: 1-3
```

**For matching shape:**
```
Select image as [SH] Shape
Set Shape Strength: 7-8
```

**5. Click "Apply Selections"**

**6. Generate as normal**

---

## 🔬 How It Works (Simplified)

### Without Style Selector

```
Prompt: "blue diamond sword"
AI starts: Random noise
AI refines: Based on prompt only
Result: AI's interpretation
```

### With Base Image

```
Prompt: "blue diamond sword"
Base Image: Image with desired colors
AI starts: From base image colors
AI refines: Keeping color scheme
Result: Matches color scheme
```

### With Shape Image

```
Prompt: "blue diamond sword"
Shape Image: Sword with specific structure
AI starts: Random noise
AI refines: Following shape constraints
Result: Matches composition/layout
```

### With Both

```
Prompt: "blue diamond sword"
Base: Colors/style reference
Shape: Structure reference
Result: Matches colors AND structure
```

**Most control.**

---

## 📊 Style Selector Impact

| Generation Type | Control | Consistency | Quality |
|----------------|---------|-------------|---------|
| Text only | Low | 60% | Good |
| Text + Base | Medium | 80% | Better |
| Text + Shape | Medium | 85% | Better |
| Text + Base + Shape | High | 95% | Best |

**Style Selector dramatically improves** consistency and control.

---

## 🎯 Common Use Cases

### Use Case 1: GUI Generation

**Requirements:**
```
Base image: GUI with desired colors/theme (with noise)
Shape image: GUI with slot layout (without noise)
```

**Settings:**
```
Base [B]: Image with noise
Shape [SH]: Image without noise
Image Strength: 0-1
Shape Strength: 7-8
```

**Result:** GUI matching layout and colors.

[Complete GUI guide →](../../tutorials/gui-creation/gui-complete-guide)

### Use Case 2: Matching Item Set

**Requirements:**
```
Reference: First item you generated
```

**Settings:**
```
Style [S]: Check the first item
Style Strength: 7-8
```

**Generate:** Second item matches first item's style.

### Use Case 3: Specific Colors

**Requirements:**
```
Base: Image with exact colors you want
```

**Settings:**
```
Base [B]: Select color reference
Image Strength: 3-5 (higher = stronger color match)
```

**Result:** AI uses those exact colors.

---

## ⚠️ Style Selector Prerequisites

### Knowledge Required

**Before using Style Selector:**

- [ ] Understand [what is Base image](base-image)
- [ ] Understand [what is Shape image](shape-image)
- [ ] Know [image editing basics](../../fundamentals/images-and-pixels/what-is-an-image)
- [ ] Can use [Photopea](https://photopea.com) or similar editor

**Not for complete beginners.**

### Images Required

**Must upload reference images:**

```
1. Account → My Reference Images
2. Upload PNG/JPEG (max 2150×2150, 4MB)
3. Images appear in Style Selector
```

**Can't use Style Selector without uploaded references.**

---

## 📚 Learning Path

**Recommended order:**

```
1. Read this overview
2. Learn what Base image does
3. Learn what Shape image does
4. Understand parameters
5. Follow GUI tutorial (practical example)
6. Experiment with items
```

---

## ✅ Style Selector Overview Checklist

Understand Style Selector if you know:

- [ ] What Style Selector does (image-guided generation)
- [ ] When to use it (GUIs, matching sets)
- [ ] Three reference types (Base, Shape, Style)
- [ ] Where to access it (model parameters)
- [ ] Requirement (uploaded reference images)
- [ ] Benefit (more control vs text-only)

:::success Style Selector Basics Clear
[Learn about Base images →](base-image)

[Learn about Shape images →](shape-image)

[See parameters explained →](parameters-explained)
:::
