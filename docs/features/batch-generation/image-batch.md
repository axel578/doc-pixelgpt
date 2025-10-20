---
sidebar_position: 3
---

# Image Reference Batch

Batch generation using reference images.

## 🖼️ What is Image Reference Batch?

Generate images based on **uploaded reference images** in bulk.

**Each reference image:**
```
Can be used as base/shape
AI generates variation
Multiple images processed together
```

**Use for:**
- Batch recoloring
- Bulk style variations
- Processing many references

---

## 🚀 Step-by-Step Usage

### Step 1: Prepare Reference Images

**Create folder with images:**

```
references/
├── sword_01.png
├── sword_02.png
├── sword_03.png
├── pickaxe_01.png
└── ...
```

**Requirements:**
```
✅ All same size (16×16, 32×32, etc.)
✅ PNG format preferred
✅ Transparency OK
```

### Step 2: Create ZIP File

**Compress folder:**

```
Right-click folder → Send to → Compressed folder
Or use 7-Zip, WinRAR, etc.
```

**Result:** `references.zip`

**Maximum size:** Check platform limits (typically 50-100MB)

### Step 3: Access Image Batch Tab

**Features → Batch → Image Reference Batch**

[SCREENSHOT: Image Reference Batch tab]

### Step 4: Select Model

**Choose compatible model:**

```
Category: Pixel Art
Subcategory: 16px
Model: ultra 16 basic v2 (or your choice)
```

**Must support Style Selector** for full features.

### Step 5: Configure Options

**Generation options:**

```
┌────────────────────────────────┐
│ Prompts Suffix: [text]         │ ← Text appended to each
├────────────────────────────────┤
│ ☐ Use as Base Image            │
│   Base Image Strength: [0-10]  │
├────────────────────────────────┤
│ ☐ Use as Shape Image           │
│   Shape Image Strength: [0-10] │
│   Shape Image Percentage:[0-10]│
└────────────────────────────────┘
```

[SCREENSHOT: Image batch options]

#### Prompts Suffix

**Text added to every generation:**

```
Example suffix: "in medieval style"

Results:
sword_01.png → "in medieval style"
sword_02.png → "in medieval style"
pickaxe_01.png → "in medieval style"
```

**Use for:**
- Adding style to all
- Adding color to all
- Consistent modifications

#### Use as Base Image

**Check this to:**
```
Use each uploaded image as Base [B]
AI matches colors from each reference
```

**Base Image Strength:**
```
0-10 slider (same as regular Style Selector)
Recommended: 1-3
```

#### Use as Shape Image

**Check this to:**
```
Use each uploaded image as Shape [SH]
AI matches structure from each reference
```

**Shape Image Strength:**
```
0-10 slider
Recommended: 7-8
```

**Shape Image Percentage:**
```
0-10 slider  
Recommended: 7-8
```

### Step 6: Upload ZIP

**Drag and drop ZIP file** to upload area.

[SCREENSHOT: ZIP upload area]

**Upload starts** - may take time for large files.

**Progress shown** as upload completes.

### Step 7: Process Batch

**Click "Process Batch" button**

**Batch job created** - processes all images.

**Check progress in Batch List tab.**

---

## 🎯 Use Cases

### Use Case 1: Batch Recoloring

**Goal:** Recolor 20 items to blue theme

**Setup:**
```
Upload: 20 item PNGs in ZIP
Use as Base: ✓
Base Strength: 3
Prompts Suffix: "in blue and silver color scheme"
```

**Result:** All 20 items recolored.

### Use Case 2: Batch Style Matching

**Goal:** Convert 30 items to RPG style

**Setup:**
```
Upload: 30 item PNGs
Use as Base: ✓
Base Strength: 2
Prompts Suffix: "in fantasy RPG style with decorations"
```

**Result:** All items converted to RPG aesthetic.

### Use Case 3: Batch Variations

**Goal:** Create 5 variants of each item

**Setup:**
```
Upload: 10 items
Use as Shape: ✓
Shape Strength: 7
Prompts Suffix: "creative variation"
```

**Result:** Each item gets variations maintaining structure.

---

## 📦 Downloading Batch Results

### After Batch Completes

**Batch List → Click batch → Details modal**

**Shows grid of results:**
```
Each cell = one reference image's results
Click to view
```

[SCREENSHOT: Batch results grid]

### Download Options

**Select cells:**
```
Check boxes on cells you want
```

**Download buttons:**
```
Download Selected (Raw): Original size
Download Selected (Processed): Backgrounds removed
Download All: Everything
```

**Downloads as ZIP** containing all images.

---

## 🔧 Image Batch Troubleshooting

<details>
<summary>Upload fails</summary>

**Check:**
- ZIP file not corrupted?
- File size under limit?
- All images inside valid format?

**Try:**
- Smaller ZIP (fewer images)
- Re-create ZIP
- Check individual image sizes

</details>

<details>
<summary>Some images not processed</summary>

**Causes:**
- Invalid image format
- Image too large
- Corrupted file in ZIP

**Solution:**
- Check batch results for which failed
- Verify those specific images
- Re-batch failed ones

</details>

<details>
<summary>Results don't match references</summary>

**Check settings:**
- Use as Base/Shape checked?
- Strength values appropriate?
- Suffix helping or hurting?

**Adjust:**
- Increase strength values
- Refine suffix prompt
- Try different mode (Base vs Shape)

</details>

---

## ✅ Image Batch Checklist

Before submitting:

- [ ] Prepared ZIP of references (all same size)
- [ ] Selected compatible model
- [ ] Configured use as Base/Shape
- [ ] Set strength parameters
- [ ] Wrote effective suffix (if using)
- [ ] Verified ZIP uploaded successfully
- [ ] Ready to wait for processing

:::success Image Batch Mastered
[See batch list management →](batch-list)

[Complete batch guide →](batch-overview)
:::
