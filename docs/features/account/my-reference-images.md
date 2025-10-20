---
sidebar_position: 3
---

# My Reference Images

Upload and manage Style Selector references.

## 🖼️ What are Reference Images?

**Reference images** are images you upload to use with **Style Selector**.

**Used for:**
```
✅ Base images (color/style guidance)
✅ Shape images (layout guidance)
✅ Style images (aesthetic matching)
```

**Required for:** Style Selector feature, GUIs.

**Access:** Account → My Reference Images

[SCREENSHOT: My Reference Images page]

---

## 📤 Uploading References

### Upload Interface

**Large drop zone:**

```
┌─────────────────────────────┐
│  Drop images here           │
│  or click to browse         │
│                             │
│  Supports: PNG, JPEG        │
│  Max size: 2150×2150 px     │
│  Max file: 4MB              │
└─────────────────────────────┘
```

[SCREENSHOT: Upload area]

### Drag and Drop

**Steps:**

**1. Prepare images on computer**
```
base_image_noise.png
shape_image_clean.png
style_reference.png
```

**2. Drag to drop zone**

**3. Upload starts automatically**

**4. Images appear in gallery**

[SCREENSHOT: Uploaded images in gallery]

### Click to Browse

**Alternative to drag-drop:**

```
1. Click drop zone
2. File browser opens
3. Select images
4. Upload
```

---

## 🎨 Image Requirements

### Format

```
✅ PNG (recommended - transparency preserved)
⚠️ JPEG (acceptable - no transparency)
```

### Size Limits

```
Maximum dimensions: 2150 × 2150 pixels
Maximum file size: 4MB
```

### Resolution Matching

**Important:**
```
Reference size should match model resolution:

16px model → Upload 16×16 references
32px model → Upload 32×32 references
256px GUI model → Upload 256×256 references
```

**Mismatched sizes = poor results.**

---

## 🗂️ Managing References

### Reference Gallery

**Shows all uploaded images:**

```
Grid of thumbnails
Filename shown
Upload date
File size
```

[SCREENSHOT: Reference gallery]

### Actions

**Each reference has:**

```
[View] - See full size
[Delete] - Remove from library
```

**Delete removes reference** - cannot undo.

---

## 🎯 Organizing References

### Naming Strategy

**Use descriptive filenames:**

```
Good naming:
✅ gui_shop_base_noise.png
✅ gui_shop_shape_clean.png
✅ diamond_sword_style_ref.png
✅ medieval_palette.png

Poor naming:
❌ image1.png
❌ unnamed.png
❌ temp.png
```

**Helps identify references later.**

### Reference Types

**Organize by purpose:**

```
Base images:
├── base_gui_medieval_noise.png
├── base_gui_fantasy_noise.png
└── base_gui_tech_noise.png

Shape images:
├── shape_gui_4x4grid.png
├── shape_gui_3x3grid.png
└── shape_item_sword.png

Style images:
├── style_cartoon_items.png
└── style_realistic_items.png
```

---

## 🖼️ Preparing Reference Images

### For GUIs (Most Common)

**Base image (with noise):**

```
1. Create in Photopea (256×256)
2. Draw GUI layout with desired colors
3. Filter → Noise → Add Noise → 20% Gaussian
4. Export as PNG
5. Name: base_gui_shopname_noise.png
6. Upload to My Reference Images
```

**Shape image (without noise):**

```
1. Same GUI layout
2. No noise added
3. Export as PNG
4. Name: shape_gui_shopname_clean.png
5. Upload to My Reference Images
```

[See GUI preparation guide →](../../tutorials/gui-creation/preparing-base-image)

### For Items

**Use generated items as references:**

```
1. Generate good quality item
2. Download PNG
3. Upload to My Reference Images
4. Use for Style [S] or Base [B] in future generations
```

---

## 🔧 Reference Image Tips

:::tip Size Matters
Always match reference size to target model resolution. 16×16 for 16px models, 256×256 for GUI models.
:::

:::tip PNG for Transparency
Use PNG if your reference has transparency. JPEG removes transparency.
:::

:::tip Keep Successful References
Don't delete references that worked well. Build a library for future use.
:::

:::tip Test References
Before using in large batch, test reference with 1-2 generations to verify it works.
:::

:::tip Limit Upload Count
While no strict limit, having 100+ references makes selection difficult. Keep only useful ones.
:::

---

## 🔍 Using References

### In Style Selector

**After uploading:**

```
1. Select model with Style Selector
2. Click "Select Image References"
3. Your uploaded images appear
4. Select as [B], [SH], or [S]
5. Configure parameters
6. Generate
```

[Style Selector guide →](../style-selector/style-selector-overview)

### In Batch Generation

**Image Reference Batch:**

```
Upload ZIP of many references
Each reference processed
Generates based on references
```

[Image batch guide →](../batch-generation/image-batch)

---

## 📊 Reference Library Best Practices

### Organization

**Systematic naming:**
```
[purpose]_[project]_[type].png

Examples:
base_medieval_shop_noise.png
shape_fantasy_gui_clean.png
style_diamond_set_ref.png
```

### Quality Standards

**Only upload good references:**
```
✅ Clear, high quality
✅ Correct size
✅ Representative of goal
❌ Blurry, poor quality
❌ Wrong size
❌ Test/temporary images
```

**Quality references = quality results.**

### Cleanup

**Periodically delete:**
```
Old project references
Failed experiments
Outdated references
Duplicates
```

**Keep library manageable.**

---

## ✅ Reference Images Checklist

Effective reference management:

- [ ] Uploaded references in correct size
- [ ] Used PNG format (with transparency if needed)
- [ ] Descriptive filenames
- [ ] Tested references work before large projects
- [ ] Organized by project/purpose
- [ ] Deleted unused references periodically

:::success References Mastered
[Complete account features →](../account/)

[Use references in Style Selector →](../style-selector/style-selector-overview)
:::
