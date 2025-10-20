---
sidebar_position: 3
---

# Generate Your First GUI

Create a Minecraft GUI in 5 minutes.

:::warning Premium Feature
GUI generation requires a **premium subscription**. [See pricing](https://pixelgpt.io/pricing)
:::

:::info Prerequisites
- Premium account
- Basic understanding of [images](../fundamentals/images-and-pixels/what-is-an-image)
- [Photopea](https://photopea.com) (free image editor)
:::

## What You'll Create

A Minecraft shop GUI with:
- 4×4 item grid at top
- Navigation buttons (← Home →)
- Player inventory at bottom

[SCREENSHOT: Example completed GUI]

## Recommended Models

| Model | Best For | Quality | Speed |
|-------|----------|---------|-------|
| `ultimate extreme mc any gui v4` | Beginners | ⭐⭐⭐⭐⭐ | Medium |
| `orion pro ultra top hq gui v1` | Best quality | ⭐⭐⭐⭐⭐ | Slow |
| `elite mc any gui v2` | Speed | ⭐⭐⭐⭐ | Fast |

[See all GUI models →](../models/models-by-type/gui-models)

## Step-by-Step

### 1. Select Model

**Home** → **Expert** → **Ultimate** → **Pixel Art** → **256px** → Choose a GUI model

[SCREENSHOT: Expert tab navigation]

### 2. Prepare Base Image (Photopea)

#### Why?

GUIs are complex. AI needs a reference showing:
- Slot positions
- Panel layout
- Overall structure

We use **Style Selector** to guide it.

#### Create Base

1. [Photopea.com](https://photopea.com) → **File** → **New** → **256×256 px**
2. Draw simple layout:
   - Top rectangle (for 4×4 item grid)
   - Middle buttons area
   - Bottom rectangle (player inventory)

[SCREENSHOT: Simple base layout in Photopea]

3. Paint it a **brown/gray** color (GUI-like)
4. **File** → **Export as PNG** → Save as `base_image.png`

#### Create Shape Image

1. Duplicate your base image
2. **Filter** → **Noise** → **Add Noise** → **20%** → Gaussian
3. Save as `base_image_noise.png`

[SCREENSHOT: Image with noise added]

:::tip Why Add Noise?
Noise gives AI more creative freedom while keeping the structure.
:::

### 3. Upload Reference Images

**Account** (top-right) → **My Reference Images** → Upload both:
- `base_image.png`
- `base_image_noise.png`

[SCREENSHOT: My Reference Images page]

### 4. Configure Style Selector

Click **"Select Image References"** (green button)

[SCREENSHOT: Style Selector button]

**Settings:**

| Parameter | Value | Why |
|-----------|-------|-----|
| **Base Image** | `base_image_noise.png` | Color/style guide |
| **Shape Image** | `base_image.png` | Layout structure |
| **Image Strength** | 0-1 | Low = more creative |
| **Shape Strength** | 7 | Forces layout |
| **Shape Generation %** | 7 | Controls 70% of process |

[SCREENSHOT: Style Selector with settings]

<details>
<summary>📐 Parameter Guide</summary>

**Image Strength (0-10):**
- 0 = Ignore colors, max creativity
- 5 = Balance
- 10 = Copy colors exactly

**Shape Strength (0-10):**
- 0 = Ignore shape
- 7 = Follow shape closely (recommended)
- 10 = Exact shape copy (too rigid)

**Shape Generation % (0-10):**
- How many generation steps follow shape
- 7 = 70% of process uses shape, 30% is creative

</details>

### 5. Write Prompt

```txt
beautiful minecraft shop gui with 4x4 item grid and wooden frame decorations
```

<details>
<summary>💡 More GUI prompts</summary>

```txt
fantasy rpg shop gui with magical purple theme
medieval chest gui with iron decorations
modern tech gui with blue holographic style
cozy cottage shop with warm brown tones
```

</details>

### 6. Generate

Click **"Generate Image"** → Wait 2-4 minutes (GUIs are slower)

[SCREENSHOT: Generated GUI result]

### 7. Troubleshoot Results

<details>
<summary>Slots are wrong/missing</summary>

**Increase:**
- Shape Strength → 8-9
- Shape Generation % → 8-9

**Redraw base image** with clearer slot positions.

</details>

<details>
<summary>Too similar to base image</summary>

**Decrease:**
- Shape Strength → 5-6
- Image Strength → 0

**Add more noise** to base image.

</details>

<details>
<summary>Colors are flat/bad</summary>

**Change base image** to better colors.

Use a **different base image** with nice color scheme.

</details>

:::success Done!
You've generated your first GUI. [See complete GUI tutorial →](../tutorials/gui-creation/gui-complete-guide)
:::

## Next Steps

- [Complete GUI Tutorial](../tutorials/gui-creation/gui-complete-guide)
- [GUI Models Comparison](../models/recommended-models/best-for-guis)
- [Style Selector Deep Dive](../features/style-selector/style-selector-overview)
