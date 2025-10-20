---
sidebar_position: 5
---

# Creating a Tool Set

Generate matching set of 5 tools.

:::info What You'll Create
**Complete matching tool set:** Sword, Pickaxe, Axe, Shovel, Hoe

**Time:** 40 minutes  
**Difficulty:** ⭐⭐ Easy  
**Requires:** Understanding of basic generation
:::

## 🎯 Tutorial Goals

Create a **cohesive 5-tool set** with:
- Consistent color scheme
- Matching style
- Professional appearance
- Ready for Minecraft

---

## 🎨 Part 1: Planning Your Set

### Choose Theme

**Decide on aesthetic:**

```
Material theme: "All diamond tools"
Color theme: "All blue and gold tools"
Style theme: "Medieval fantasy tools"
Element theme: "Fire-themed tools"
```

**For this tutorial:** Blue diamond tools with golden handles

### Define Color Scheme

**Core colors:**
```
Primary: Blue (blade/head)
Secondary: Golden (handle/grip)
Accent: Optional (gems, effects)
```

**Consistency is key.**

---

## 🚀 Part 2: Generating the Set

### Method 1: Consistent Prompts (Simple)

**Write prompts with same structure:**

```txt
Sword: "blue diamond sword with golden handle"
Pickaxe: "blue diamond pickaxe with golden handle"
Axe: "blue diamond axe with golden handle"
Shovel: "blue diamond shovel with golden handle"
Hoe: "blue diamond hoe with golden handle"
```

**Generate each separately:**

```
1. Generate sword → Extract best → Download
2. Generate pickaxe → Extract best → Download
3. Generate axe → Extract best → Download
4. Generate shovel → Extract best → Download
5. Generate hoe → Extract best → Download
```

**Time:** 20-30 minutes total

**Consistency:** 70-80% (good, not perfect)

---

### Method 2: Style Selector (Advanced)

**Better consistency through references:**

#### Step 1: Generate Reference Item

**Generate sword first:**

```txt
Prompt: "blue diamond sword with golden handle"
Model: ultimate extreme mc item 16 v3 (if premium)
```

**Generate 2-3 times, pick absolute best.**

**This sword sets style for entire set.**

#### Step 2: Upload as Reference

**Download sword**

**Account → My Reference Images**

**Upload sword PNG**

[SCREENSHOT: Sword uploaded to references]

#### Step 3: Generate Other Tools with Style Selector

**For each remaining tool:**

**Select model** (same as sword)

**Click "Select Image References"**

**In Style Selector:**
```
Style [S]: Check sword image
Style Strength: 7-8
```

**Click "Apply Selections"**

**Prompt:**
```txt
"diamond pickaxe"
"diamond axe"
"diamond shovel"
"diamond hoe"
```

**Generate each**

**Results:** All match sword's blue/gold style ✓

**Time:** 25-35 minutes total

**Consistency:** 90-95% (excellent)

[SCREENSHOT: Matching tool set with Style Selector]

---

## 🎯 Part 3: Quality Control

### Evaluate Each Tool

**Check each generated tool:**

```
✅ Colors match set?
✅ Style consistent?
✅ Quality acceptable?
✅ Recognizable as that tool type?
```

**If any fail quality check:**
- Regenerate that tool
- Try different variation from grid
- Adjust prompt

### Side-by-Side Comparison

**Place all 5 tools together:**

[SCREENSHOT: All 5 tools side by side]

**Check:**
```
✅ Blue shades match across all
✅ Golden handles consistent
✅ Overall aesthetic cohesive
✅ Could belong to same set
```

**If inconsistencies found:**
- Identify which tool looks different
- Regenerate using Style Selector
- Or manually adjust colors in editor

---

## 💾 Part 4: Export and Integrate

### Extract All Tools

**For each tool:**

```
1. Open Grid Editor
2. Remove background
3. Set pixel size (usually 16)
4. Set grid size (usually 2×2)
5. Extract best variation
6. Download as 16×16 PNG
```

**Repeat 5 times** (one per tool).

### Rename Files

**Minecraft naming convention:**

```
diamond_sword.png
diamond_pickaxe.png
diamond_axe.png
diamond_shovel.png
diamond_hoe.png
```

**Exact names required** for vanilla replacement.

### Resource Pack Structure

**Place in pack:**

```
my_tool_pack/
├── pack.mcmeta
└── assets/
    └── minecraft/
        └── textures/
            └── item/
                ├── diamond_sword.png
                ├── diamond_pickaxe.png
                ├── diamond_axe.png
                ├── diamond_shovel.png
                └── diamond_hoe.png
```

### Test in Minecraft

**Load resource pack:**

```
Check all 5 tools in inventory:
- Diamond sword ✓
- Diamond pickaxe ✓
- Diamond axe ✓
- Diamond shovel ✓
- Diamond hoe ✓
```

**All should show your custom textures.**

[SCREENSHOT: All 5 tools in Minecraft inventory]

---

## 🎨 Part 5: Variations (Bonus)

### Create Material Variants

**Same structure, different materials:**

**Diamond set (blue/gold):**
```txt
blue diamond sword with golden handle
blue diamond pickaxe with golden handle
...
```

**Iron set (gray/brown):**
```txt
gray iron sword with wooden handle
gray iron pickaxe with wooden handle
...
```

**Ruby set (red/silver):**
```txt
red ruby sword with silver handle
red ruby pickaxe with silver handle
...
```

**3 complete sets = 15 items!**

### Create Style Variants

**Same material, different themes:**

**Diamond set variations:**
```
1. Simple vanilla: "diamond sword"
2. Enchanted: "enchanted glowing diamond sword"
3. Medieval: "medieval diamond sword with engravings"
4. Fantasy: "fantasy diamond sword with magical runes"
```

---

## 📊 Tool Set Comparison

### Consistency Methods

| Method | Consistency | Time | Difficulty | Quality |
|--------|-------------|------|------------|---------|
| Same prompts | 70% | 20 min | Easy | Good |
| Style Selector | 95% | 30 min | Medium | Excellent |
| Manual editing | 100% | 2 hours | Hard | Perfect |

**Recommended:** Style Selector for best balance.

---

## 🔧 Tool Set Troubleshooting

<details>
<summary>Tools don't match each other</summary>

**Causes:**
- Different prompts structure
- Random variation between generations
- Different models used

**Solutions:**
1. Use Style Selector with first tool as reference
2. Ensure exact same prompt structure
3. Use same model for all tools
4. Regenerate inconsistent tools

</details>

<details>
<summary>Colors slightly different</summary>

**Causes:**
- AI variation
- Different lighting in generations

**Solutions:**
1. Style Selector for color consistency
2. Use Color Palette Matcher preset
3. Regenerate tools that don't match
4. Manual color correction in image editor (advanced)

</details>

<details>
<summary>One tool looks out of place</summary>

**Solutions:**
- Regenerate that specific tool
- Use Style Selector with other 4 as references
- Try multiple generations, pick best match
- Adjust colors manually if close

</details>

---

## 💡 Pro Tips

:::tip Generate Sword First
Sword has most detail, best for setting style. Use as reference for others.
:::

:::tip Generate 2-3 Options Per Tool
Generate each tool 2-3 times, pick best variation for set cohesion.
:::

:::tip Save Successful Prompts
Document prompts that worked. Reuse structure for other sets.
:::

:::tip Use Batch for Efficiency
If premium: Use batch generation with list of 5 prompts. Faster than individual.

[See batch guide →](../../features/batch-generation/text-batch)
:::

---

## ✅ Tool Set Checklist

Complete tool set:

- [ ] Generated all 5 tools
- [ ] Consistent color scheme across set
- [ ] Matching style/aesthetic
- [ ] All same resolution (16×16 or 32×32)
- [ ] All backgrounds removed
- [ ] All extracted properly
- [ ] All named correctly
- [ ] Tested in Minecraft
- [ ] All tools look cohesive together

:::success Tool Set Complete!
You now have a professional matching tool set.

**Next:** [Create armor →](../minecraft-armor/creating-armor-piece)

**Advanced:** [Create texture pack →](../texture-packs/creating-texture-pack)
:::
