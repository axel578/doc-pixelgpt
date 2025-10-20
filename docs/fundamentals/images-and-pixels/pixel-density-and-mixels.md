---
sidebar_position: 4
---

# Pixel Density & Mixels

Understanding consistent pixel size across your pack.

## 🎯 What is Pixel Density?

**Pixel density** = The size of one pixel in the game world

In Minecraft, **one pixel should always be the same size** regardless of whether it's on:
- An item
- A block
- A mob
- A GUI element

[SCREENSHOT: Same pixel size across different objects in Minecraft]

---

## 🎮 Consistent Pixel Density

### Correct (Consistent)

**All 16×16:**
```
Sword = 16×16
Pickaxe = 16×16
Block = 16×16
Apple = 16×16
```

**Result:** All pixels are the same size in game

[SCREENSHOT: Consistent items in Minecraft]

### Incorrect (Mixels)

**Mixed resolutions:**
```
Sword = 16×16
Pickaxe = 32×32 (upscaled to same display size)
Block = 16×16
Apple = 64×64 (upscaled to same display size)
```

**Result:** Pixels are different sizes = **Mixels**

[SCREENSHOT: Mixels example showing inconsistent pixel sizes]

---

## ❌ What are Mixels?

**Mixels** = Mixed pixel sizes

Occurs when you combine different resolutions in one pack without maintaining scale.

### Visual Example

```
16×16 sword next to 32×32 pickaxe:

Sword pixels: ▓▓    (larger pixels)
Pickaxe pixels: ▓    (smaller pixels)
```

**Why it's bad:**
```
❌ Visually inconsistent
❌ Unprofessional appearance
❌ Breaks immersion
❌ Obvious to experienced players
```

[SCREENSHOT: Side-by-side comparison showing mixel issue]

---

## ✅ Maintaining Consistent Density

### Rule 1: Choose One Resolution

**For entire pack, pick ONE:**
- 16×16 (vanilla style)
- 32×32 (HD style)
- 64×64 (very HD style)

### Rule 2: Stick to It

**All items must be same resolution:**
```
✅ All swords = 16×16
✅ All pickaxes = 16×16
✅ All blocks = 16×16
✅ All food = 16×16
```

### Rule 3: Scale Properly

**If you MUST mix resolutions:**
```
Use exact multiples only:
16×16 base
32×32 = 2× scale (acceptable)
64×64 = 4× scale (acceptable)

Never use:
❌ 16×16 with 24×24
❌ 16×16 with 48×48
❌ Random sizes
```

---

## 🎯 Pixel GPT Best Practices

### For Texture Packs

**Step 1: Choose resolution**
```
Vanilla style → 16px models
HD style → 32px models
Very HD → 64px models
```

**Step 2: Use ONLY that model family**
```
✅ Generate all items with same model type
❌ Don't mix 16px and 32px generations
```

**Step 3: Verify consistency**
```
Check all exported items are same size:
- All 16×16, or
- All 32×32, or
- All 64×64
```

### For GUIs

GUIs are special case:
```
✅ GUI canvas = 256×256
✅ Slots/items inside = can be 16×16
✅ This is acceptable (different context)
```

---

## 🔍 How to Spot Mixels

### In Minecraft

**Look for:**
- Items with different pixel sizes
- Some items look "sharper" than others
- Some items look "blockier" than others

[SCREENSHOT: Mixel detection example]

### Before Integrating

**Check all your PNG files:**
```
Right-click → Properties → Details
Verify: Width × Height

All items should be:
✅ All 16×16, OR
✅ All 32×32, OR
✅ All 64×64
```

---

## ⚠️ Exceptions

### When Mixing is OK

**Different asset types can have different resolutions:**

```
✅ Items = 16×16
✅ GUI = 256×256 (different context)
✅ Paintings = 16×16, 32×32, etc. (vanilla does this)
✅ Entity textures = 64×64 (different context)
```

**Why?** Different contexts, not displayed together in same scene.

### Vanilla Minecraft Exceptions

Minecraft itself uses different resolutions for:
- Paintings (various sizes)
- Entity models (64×64)
- GUI elements (256×256)

**But for items/blocks:** Always consistent 16×16

---

## 🎨 Resolution Strategy

### Planning Your Pack

**Before generating anything:**

1. **Decide resolution:** 16px, 32px, or 64px?
2. **Write it down:** "This pack is 32×32"
3. **Use only 32px models** for all generations
4. **Verify each export** is 32×32
5. **Never mix** with other resolutions

### Tracking Consistency

Create a checklist:

```markdown
## My Texture Pack - 16×16

### Items Generated ✓
- [x] Diamond Sword (16×16) ✓
- [x] Iron Pickaxe (16×16) ✓
- [x] Golden Apple (16×16) ✓
- [ ] Ruby Gem (need to generate)

All items verified 16×16 ✓
```

---

## 🔧 Fixing Mixels

### If You Already Have Mixels

**Option 1: Regenerate**
```
✅ Regenerate all items at correct resolution
✅ Most consistent result
```

**Option 2: Upscale (Not Recommended)**
```
⚠️ Upscale smaller items to match larger
⚠️ Use "Nearest Neighbor" algorithm
⚠️ Results may look inconsistent
```

**Option 3: Downscale (Not Recommended)**
```
⚠️ Downscale larger items to match smaller
⚠️ Lose detail
⚠️ Not ideal
```

**Best solution:** Regenerate everything at target resolution.

---

## 📊 Quick Reference

### Resolution Consistency Rules

```
DO:
✅ Pick one resolution (16, 32, or 64)
✅ Use only models of that resolution
✅ Verify every exported item
✅ Stay consistent

DON'T:
❌ Mix 16px and 32px items
❌ Use random resolutions
❌ Upscale after generation
❌ Assume sizes are correct
```

### Pixel Density in Game

```
One 16×16 item pixel in game = X units
One 16×16 block pixel in game = X units
One 16×16 UI pixel in game = X units

All the same size = Good!
Different sizes = Mixels = Bad!
```

---

## ✅ Self-Check

Test your understanding:

<details>
<summary>What are mixels?</summary>

**Answer:** Mixed pixel sizes - when different textures in a pack have different pixel densities, making some appear sharper/blockier than others.

</details>

<details>
<summary>Can I use 16×16 items with a 32×32 block?</summary>

**Answer:** No! All items AND blocks should be same resolution (all 16×16 or all 32×32) to maintain consistent pixel density.

</details>

<details>
<summary>I want to make an HD pack. What should I do?</summary>

**Answer:** Choose 32×32 or 64×64 resolution, then generate ALL textures using only that resolution model. Never mix with 16×16.

</details>

---

## 🎯 Action Items

Before creating your pack:

1. **Decide:** 16×16, 32×32, or 64×64?
2. **Document:** Write down your choice
3. **Commit:** Only use that resolution's models
4. **Verify:** Check every export matches

:::success Consistency is Key
Pixel density consistency separates amateur from professional packs. → [Learn file formats](image-file-formats)
:::
