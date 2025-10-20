---
sidebar_position: 7
---

# Remove Background (Quick Guide)

Remove white background in 3 steps.

## Why Remove Background?

AI generates images with **white background**. Minecraft needs **transparency** (alpha channel).

[SCREENSHOT: Before (white bg) vs After (transparent)]

## 3 Steps

### 1. Open Grid Editor

After generation completes:
1. Click image in left sidebar
2. Click **"Grid"** button

[SCREENSHOT: Grid button location]

### 2. Use Magic Wand

1. Click **magic wand tool** (🪄 icon top-left)
2. Click on **white areas**
3. They turn transparent (checkered pattern)

[SCREENSHOT: Magic wand tool and transparent result]

### 3. Adjust Threshold (If Needed)

**Too much selected?** Lower threshold  
**Too little selected?** Raise threshold

[SCREENSHOT: Threshold slider]

**Threshold values:**
- **Low (1-3):** Only exact white
- **Medium (4-7):** Similar whites
- **High (8-10):** All light colors

## Troubleshooting

<details>
<summary>Wand selects part of my item</summary>

**Solution:**
1. Lower threshold to 2-3
2. Click white areas multiple times
3. Avoid clicking near item edges

</details>

<details>
<summary>Some white pixels remain</summary>

**Solution:**
1. Zoom in (scroll wheel)
2. Click remaining white pixels individually
3. Or raise threshold slightly

</details>

<details>
<summary>Transparent areas look wrong in Minecraft</summary>

**Check:**
- Did you save as PNG? (not JPEG)
- Did you select "Save as image" not "Save without resize"?
- Is file actually 16×16 px?

</details>

## Video Tutorial

[SCREENSHOT: Video thumbnail with play button]
*Coming soon*

:::success Next
[Extract items from grid →](extract-items-quick)
:::
