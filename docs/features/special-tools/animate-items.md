---
sidebar_position: 3
---

# Animate Items

Generate item animation frames.

## 🎬 What is Animate Items?

**Creates animation frames** for items.

**Use for:**
```
✅ Optifine CIT animations
✅ Animated textures
✅ Dynamic items
```

**Access:** Presets → Animate Items

[SCREENSHOT: Animate Items interface]

---

## 🎯 What It Generates

**Input:** One static item (16×16)

**Output:** Multiple frames (animation sequence)

```
Frame 1: [Item state 1]
Frame 2: [Item state 2]
Frame 3: [Item state 3]
Frame 4: [Item state 4]
...
```

**Used in:** Optifine Custom Item Textures (CIT) for animated items.

---

## 🚀 Step-by-Step Usage

### Step 1: Prepare Base Item

**Generate static item first:**

```
Use any 16px model
Generate good quality item
Download as 16×16 PNG
```

**Recommendation:**
```
✅ Use white background version
✅ Don't remove background yet
```

**Why white background?**
```
Animate Items tool works better with opaque backgrounds
Remove background from final frames
```

### Step 2: Access Tool

**Presets → Animate Items**

### Step 3: Upload Item

**Drag and drop:**
```
Your 16×16 item PNG
With white background
```

### Step 4: Configure Animation

**Settings:**

```
Animation Type:
- Glowing (pulsing glow)
- Rotating (rotation frames)
- Custom (AI decides)

Frame Count:
- 4 frames (minimal)
- 8 frames (smooth)
- 16 frames (very smooth)
```

### Step 5: Generate

**Click generate button**

**AI creates:**
```
Multiple animation frames
Same item, different states
Sequence for animation
```

**Time:** 2-5 minutes depending on frame count.

### Step 6: Download Frames

**Downloads as:**
```
ZIP file containing:
├── frame_1.png
├── frame_2.png
├── frame_3.png
└── frame_4.png
```

### Step 7: Remove Backgrounds

**For each frame:**
```
1. Open in Grid Editor (or image editor)
2. Remove white background
3. Save as transparent PNG
```

**Now ready for Optifine CIT.**

---

## 🎮 Using Animated Items

### Optifine CIT Setup

**File structure:**

```
resourcepack/
└── assets/
    └── minecraft/
        └── optifine/
            └── cit/
                └── animated_sword/
                    ├── frame_1.png
                    ├── frame_2.png
                    ├── frame_3.png
                    ├── frame_4.png
                    └── animated_sword.properties
```

**Properties file:**

```properties
type=item
items=diamond_sword
texture.frame_1=frame_1
texture.frame_2=frame_2
texture.frame_3=frame_3
texture.frame_4=frame_4
duration=2 2 2 2
```

**Requires:** Optifine installed in Minecraft.

---

## 🎨 Animation Examples

### Glowing Animation

**Effect:** Item pulses with glow

**Frames:**
```
Frame 1: Normal brightness
Frame 2: Slightly brighter
Frame 3: Brightest
Frame 4: Slightly brighter
(Loop back to 1)
```

[SCREENSHOT: Glowing animation frames]

### Rotating Animation

**Effect:** Item rotates slightly

**Frames:**
```
Frame 1: 0° rotation
Frame 2: 90° rotation
Frame 3: 180° rotation
Frame 4: 270° rotation
```

**Note:** Works better for symmetrical items.

---

## ⚠️ Limitations

### Quality Variance

```
Not all frames equally good
Some frames may need regeneration
Manual editing may be needed
```

### Background Issue

```
Frames have white background
Must remove manually from each frame
Time-consuming for many frames
```

### Consistency

```
AI may vary style between frames
Frames may not flow smoothly
May need manual touch-ups
```

:::warning Experimental Feature
Animate Items is advanced and experimental. Results may need refinement. Consider manual animation in image editor for critical projects.
:::

---

## ✅ Animate Items Checklist

Create animations:

- [ ] Generated good quality base item
- [ ] Item has white background
- [ ] Uploaded to Animate Items tool
- [ ] Configured frame count and type
- [ ] Generated frames
- [ ] Downloaded frame ZIP
- [ ] Removed backgrounds from all frames
- [ ] Set up Optifine CIT (if using)

:::success Animation Basics Understood
[Learn Items to Armor Set →](items-to-armor-set)
:::
