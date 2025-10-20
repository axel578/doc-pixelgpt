---
sidebar_position: 2
---

# Generate Your First Item

Create a 16x16 Minecraft item in 3 minutes.

:::info Prerequisites
- Pixel GPT account (free or premium)
- Logged in
:::

## Step-by-Step

### 1. Navigate to Generator

**Home** → **Newbie** → **"Text to Minecraft Item Texture 16 by 16 pixels"**

[SCREENSHOT: Newbie tab with model highlighted]

### 2. Write Your Prompt

```txt
diamond sword
```

<details>
<summary>💡 Better prompts</summary>

**Basic:**
```
diamond sword
```

**Better:**
```
blue diamond sword with golden handle
```

**Best:**
```
enchanted glowing diamond sword with ornate golden handle and blue gems
```

</details>

### 3. Generate

1. Click **"Generate Image"**
2. Wait 1-3 minutes (free) or 30s-1min (premium)
3. Image appears in left sidebar with **"new"** badge

[SCREENSHOT: Left sidebar showing new generation]

:::caution Stuck Generation?
Wait 5 minutes → Click **Delete** 6 times → Retry
:::

### 4. Open Grid Editor

Click **"Grid"** button

[SCREENSHOT: Grid button location]

### 5. Remove White Background

1. Click **magic wand** tool (🪄)
2. Click white areas
3. They become transparent (checkered pattern)

[SCREENSHOT: Before/after background removal]

:::tip Wand Threshold
Adjust slider if wand selects too much/little:
- Higher = more permissive
- Lower = exact color only
:::

### 6. Calculate Pixel Size

Check bottom-left: **"Select Canvas 512 x 512"**

**Formula:** `Canvas Size ÷ (Grid Width × 16)`

**Example:**
- Canvas: 512×512
- Grid: 2×2 (32 pixels total width)
- Pixel Size: 512 ÷ 32 = **16**

Set **Pixel Size** to **16**

### 7. Set Grid Size

Count items: 2 across, 2 down → **2 × 2**

### 8. Extract Item

**Right-click** item → **"Save as image (16x16)"**

[SCREENSHOT: Right-click menu]

:::success Done! 🎉
You now have a 16×16 PNG with transparency, ready for Minecraft.
:::

## Troubleshooting

<details>
<summary>Generation stuck/not appearing</summary>

1. Wait 5 minutes
2. Click **Delete** 6 times
3. Retry generation

</details>

<details>
<summary>Bad quality results</summary>

**Check:**
- ❌ Using English? (not French/Korean)
- ❌ Specific enough? (not just "sword")
- ❌ Right model? (try Newbie Premium)

</details>

<details>
<summary>Can't remove background</summary>

1. Click wand tool first
2. Adjust threshold slider
3. Click all white areas multiple times

</details>

## Next Steps

- [Generate a GUI](generate-first-gui)
- [Essential Prompting Tips](essential-prompting-tips)
- [Complete Item Tutorial](../tutorials/minecraft-items/your-first-item)
