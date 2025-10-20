---
sidebar_position: 5
---

# Avoid Jargon

Why simple terms work better than specialized vocabulary.

## 🎯 What is Jargon?

**Jargon** = Specialized terminology from specific domains.

**Examples:**
```
Game-specific: "netherite", "elytra", "trident"
Mod-specific: "signalum", "enderium", "manyullyn"
Server-specific: Your custom item names
Technical: Programming terms, file formats
```

**Problem:** AI may not know these terms.

---

## ❌ Why Jargon Fails

### Limited Training Data

**AI training data:**
```
"sword" → Thousands of examples
"netherite" → Few or zero examples
```

**Result:** AI doesn't understand "netherite".

### Example Failures

<details>
<summary>Minecraft jargon: "elytra"</summary>

**Prompt:**
```txt
"elytra"
```

**AI understanding:**
```
⚠️ May not recognize term
⚠️ May generate random wings
⚠️ May ignore entirely
```

**Result:** Inconsistent, poor quality

[SCREENSHOT: Failed elytra generation]

**Better approach:**
```txt
✅ "black dragon wings"
✅ "dark purple wing membranes"
```

**Result:** AI understands visual description.

</details>

<details>
<summary>Mod jargon: "signalum"</summary>

**Prompt:**
```txt
"signalum sword from Thermal Foundation"
```

**AI understanding:**
```
❌ No idea what "signalum" is
❌ Doesn't know "Thermal Foundation"
```

**Result:** Generic sword or confused output

**Better approach:**
```txt
✅ "orange metallic sword with copper-like appearance"
```

**Result:** Visually accurate representation.

</details>

<details>
<summary>Anime jargon: Character-specific items</summary>

**Prompt:**
```txt
"Kirito's Dark Repulser sword from SAO"
```

**AI understanding:**
```
❌ Doesn't know specific anime items
❌ May not know character names
```

**Result:** Generic sword

**Better approach:**
```txt
✅ "black and blue dual-tone sword with futuristic design"
```

**Result:** Visually similar.

</details>

---

## ✅ Replacing Jargon

### Strategy: Visual Description

**Instead of game term → Describe what it looks like**

| Jargon Term | Visual Description |
|-------------|-------------------|
| "netherite" | "dark purple metallic material with glowing accents" |
| "elytra" | "black dragon wings with purple highlights" |
| "trident" | "three-pronged spear with blue prongs" |
| "shulker" | "purple cubic shell creature" |
| "totem of undying" | "golden idol statue with green eyes" |

### Strategy: Known Components

**Build from what AI knows:**

```txt
Instead of: "Tinkers' Construct broadsword"
Use: AI knows "sword" + "broad" + "decorated"
Combine: "broad decorated sword with colored handle"
```

---

## 🎮 Game-Specific Terms

### Minecraft Vanilla

**These usually work:**
```txt
✅ diamond, iron, gold, stone, wood (materials)
✅ sword, pickaxe, axe, shovel, hoe (tools)
✅ apple, bread, meat, carrot (food)
✅ helmet, chestplate, leggings, boots (armor)
```

**These may not work:**
```txt
⚠️ netherite (too recent)
⚠️ amethyst (recent addition)
⚠️ echo shard (very recent)
⚠️ specific mob names
```

**When in doubt:** Describe visually.

### Modded Minecraft

**Rarely works well:**
```txt
❌ Most mod-specific item names
❌ Mod material names
❌ Modpack-specific terms
```

**Alternative approach:**
```txt
✅ Describe the visual style
✅ Use vanilla equivalents
✅ Describe materials visually
```

**Example - Tinkers' Construct:**
```txt
Instead of: "manyullyn pickaxe"
Use: "purple metallic pickaxe with dark finish"
```

---

## 🎯 Technical Jargon to Avoid

### Programming/File Terms

**Don't use:**
```txt
❌ ".png sword"
❌ "16x16 resolution pickaxe"
❌ "RGBA diamond with alpha channel"
❌ "JSON formatted item"
```

**These confuse AI** - describe the item, not file properties.

### Minecraft Technical Terms

**Avoid:**
```txt
❌ "NBT data sword"
❌ "CustomModelData pickaxe"
❌ "blockstate helmet"
```

**AI doesn't understand** technical Minecraft terms.

---

## 💡 Jargon Testing

### How to Tell if Term is Jargon

**Ask:**
```
1. Is this term common in everyday English? 
2. Would a non-gamer understand it?
3. Did this term exist 10+ years ago?
```

**If "no" to any:** Might be jargon. Test or use visual description.

### Testing Unknown Terms

**Process:**
```
1. Try the specific term
2. Generate
3. Check if result matches expectation
4. If not → Switch to visual description
5. Regenerate
```

**Learn through experimentation.**

---

## 🔧 Jargon Replacement Examples

### Minecraft Items

```txt
❌ "elytra"
✅ "black dragon wings" or "wing membranes"

❌ "trident"
✅ "three-pronged spear" or "fork spear"

❌ "netherite ingot"
✅ "dark purple metallic ingot"

❌ "totem of undying"
✅ "golden idol with green gems"
```

### Modded Items

```txt
❌ "flux-infused sword" (Thermal)
✅ "orange glowing technological sword"

❌ "signalum pickaxe" (Thermal)
✅ "orange-copper metallic pickaxe"

❌ "manasteel sword" (Botania)
✅ "magical blue metallic sword with nature theme"
```

### Other Games

```txt
❌ "Master Sword" (Zelda)
✅ "blue and silver holy sword with triforce symbol"

❌ "Keyblade" (Kingdom Hearts)
✅ "sword shaped like ornate key with decorative teeth"

❌ "Terraria Night's Edge"
✅ "purple glowing corrupted sword"
```

---

## 📊 Jargon vs Visual Comparison

| Prompt Type | Example | Success Rate |
|-------------|---------|--------------|
| Pure jargon | "netherite sword" | 20-40% |
| Mixed | "netherite diamond sword style" | 40-60% |
| Visual + context | "dark purple metallic sword like netherite" | 60-80% |
| Pure visual | "dark purple metallic sword with glowing accents" | 90-95% |

**Visual descriptions = highest success.**

---

## ✅ When Jargon is OK

### Commonly Known Terms

**These are fine:**
```txt
✅ "minecraft" (as style keyword)
✅ "diamond", "iron", "gold" (universal)
✅ "pixel art" (as style)
✅ "RPG" (as style)
```

**Why?** Extremely common in AI training data.

### Testing New Terms

**If you're unsure:**
```
1. Try jargon term first
2. Check quality
3. If poor → switch to visual description
4. Note for future reference
```

**Build your own knowledge** of what AI knows.

---

## 🎯 Practical Guidelines

### Before Using a Term

**Checklist:**
- [ ] Is it a common English word?
- [ ] Would a non-specialist understand it?
- [ ] Is it in vanilla Minecraft?
- [ ] Have I tested it successfully before?

**If answered "no" to any:** Consider visual description instead.

### Building Prompts Without Jargon

**Process:**
```
1. Think of item (may use jargon in your mind)
2. Describe how it LOOKS
3. Use simple English visual terms
4. Avoid specialized vocabulary
```

**Example:**
```
Thinking: "I want a Thermal Expansion resonant chestplate"
Visual: Glowing yellow armor with tech details
Prompt: "glowing yellow technological chestplate with energy core"
```

---

## ✅ Jargon Avoidance Checklist

Clean prompt has:

- [ ] No game-specific item names (unless vanilla)
- [ ] No mod names or mod items
- [ ] No technical Minecraft terms
- [ ] No programming/file terms
- [ ] No character-specific items
- [ ] All terms are common English or visual descriptions

:::success Jargon Eliminated
[Learn natural language prompting →](natural-language)
:::
