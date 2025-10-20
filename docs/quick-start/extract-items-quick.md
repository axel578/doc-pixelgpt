---
sidebar_position: 8
---

# Extract Items from Grid (Quick Guide)

Extract individual items in 4 steps.

## What is a Grid?

AI generates **multiple items at once** in a grid pattern:
- 2×2 = 4 items
- 3×3 = 9 items  
- 4×4 = 16 items

[SCREENSHOT: Example 2x2 grid of swords]

You need to **extract each item separately**.

## 4 Steps

### 1. Calculate Pixel Size

**Formula:**
```
Pixel Size = Canvas Size ÷ (Grid Width × Item Size)
```

**Example:**
- Canvas: 512×512 (shown bottom-left)
- Grid: 2×2
- Item size: 16×16
- Calculation: 512 ÷ (2 × 16) = 512 ÷ 32 = **16**

Set **"Pixel Size"** to **16**

[SCREENSHOT: Pixel size field]

### 2. Set Grid Size

Count items:
- 2 across, 2 down = **2×2**
- 3 across, 3 down = **3×3**
- 4 across, 4 down = **4×4**

Set **"Grid Size"** accordingly

[SCREENSHOT: Grid size dropdown]

### 3. Select Items

Click **zoom tool** (🔍) to preview

Items should now align perfectly in grid cells

[SCREENSHOT: Aligned grid]

### 4. Extract

**Right-click** on desired item → **"Save as image (16×16)"**

[SCREENSHOT: Right-click menu]

## Pixel Size Chart

Common configurations:

| Canvas | Grid | Item Size | Pixel Size |
|--------|------|-----------|------------|
| 512×512 | 2×2 | 16×16 | **16** |
| 512×512 | 4×4 | 16×16 | **8** |
| 1024×1024 | 2×2 | 32×32 | **16** |
| 1024×1024 | 4×4 | 32×32 | **8** |
| 256×256 | 2×2 | 16×16 | **8** |

## Troubleshooting

<details>
<summary>Items are too big/small</summary>

**Your pixel size is wrong.**

Recalculate:
1. Check canvas size (bottom-left)
2. Count grid items
3. Use formula above

</details>

<details>
<summary>Grid doesn't align</summary>

**Check:**
1. Correct grid size? (2×2, 3×3, etc.)
2. Correct pixel size?
3. Image fully loaded?

Try:
1. Refresh page
2. Reopen Grid Editor
3. Recalculate pixel size

</details>

<details>
<summary>Can't see all items</summary>

**Zoom out** using mouse wheel or use **magnifying glass** tool to pan around

</details>

## Advanced: Copy to Clipboard

Instead of saving:
1. **Right-click** item
2. **"Copy image to clipboard"**
3. Paste in image editor (Ctrl+V)

Useful for quick editing.

:::tip Pro Tip
Always **remove background first** before extracting items!
:::

:::success Next
[Common mistakes to avoid →](common-mistakes)
:::
