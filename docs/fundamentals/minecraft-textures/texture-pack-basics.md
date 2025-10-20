---
sidebar_position: 6
---

# Texture Pack Basics

Understanding Minecraft resource pack structure.

## 📦 What is a Texture Pack?

A **resource pack** (texture pack) is a folder containing:
- Custom textures (items, blocks, GUIs)
- Custom sounds (optional)
- Custom models (optional)
- Metadata files

**Purpose:** Replace vanilla Minecraft textures with custom ones.

[SCREENSHOT: Resource pack in Minecraft settings]

---

## 🗂️ Basic Structure

### Minimum Required Structure

```
my_texture_pack/
├── pack.mcmeta        (Required: Pack information)
├── pack.png           (Optional: Pack icon)
└── assets/
    └── minecraft/
        └── textures/
            ├── item/
            │   ├── diamond_sword.png
            │   └── iron_pickaxe.png
            ├── block/
            │   ├── stone.png
            │   └── dirt.png
            └── gui/
                └── container/
                    └── generic_54.png
```

### pack.mcmeta

**Required JSON file:**

```json
{
  "pack": {
    "pack_format": 15,
    "description": "My Custom Texture Pack"
  }
}
```

**pack_format versions:**
- Minecraft 1.20: 15
- Minecraft 1.19: 13
- Minecraft 1.18: 9
- [Check latest versions](https://minecraft.wiki/w/Pack_format)

### pack.png

**Pack icon** (shown in resource pack menu)

**Format:**
- 256×256 pixels recommended
- PNG format
- Shows as pack thumbnail

[SCREENSHOT: pack.png in resource pack menu]

---

## 📂 Folder Organization

### Items Folder

```
assets/minecraft/textures/item/
├── diamond_sword.png
├── iron_sword.png
├── golden_sword.png
├── diamond_pickaxe.png
├── iron_pickaxe.png
└── ... (all item replacements)
```

**Naming:** Must match vanilla names exactly (unless custom items).

### Blocks Folder

```
assets/minecraft/textures/block/
├── stone.png
├── cobblestone.png
├── dirt.png
├── grass_block_top.png
├── grass_block_side.png
└── ... (all block replacements)
```

### GUI Folder

```
assets/minecraft/textures/gui/
├── container/
│   ├── generic_54.png (chest)
│   ├── dispenser.png
│   └── furnace.png
└── ... (other GUI folders)
```

---

## 🎯 Creating a Pack with Pixel GPT

### Planning

**Step 1: Decide scope**
```
Full pack → 100+ textures
Themed pack → 20-50 textures
Minimal pack → 5-10 key textures
```

**Step 2: Choose resolution**
```
Vanilla → 16×16
HD → 32×32 or 64×64
```

**Step 3: Plan theme**
```
Examples:
- Medieval fantasy
- Futuristic tech
- Nature/organic
- Cartoon/colorful
```

### Generation Strategy

**Option 1: One-by-one**
```
Generate each item individually
Best for quality control
Time-consuming for large packs
```

**Option 2: Batch Generation**
```
Use Batch page
Generate 50-100 items at once
Faster for large packs
```

[Link to Batch tutorial →](../../tutorials/texture-packs/batch-generation-for-packs)

### Maintaining Consistency

**Use Style Selector:**
1. Generate first item
2. Use as style reference for others
3. Maintain color palette
4. Keep theme consistent

---

## 📦 Pack Assembly

### Step-by-Step

**1. Create folder structure**
```
my_pack/
├── pack.mcmeta
├── pack.png
└── assets/minecraft/textures/...
```

**2. Add pack.mcmeta**
```json
{
  "pack": {
    "pack_format": 15,
    "description": "§bMy Custom Pack\n§7By YourName"
  }
}
```

**3. Add textures**
- Place items in `/item/` folder
- Place blocks in `/block/` folder
- Name files correctly

**4. Create pack icon**
- Generate a 256×256 logo
- Save as `pack.png` in root

**5. Zip the folder**
- Right-click folder → Send to → Compressed folder
- OR use 7-Zip/WinRAR

---

## 🧪 Testing Your Pack

### In Minecraft

1. Place `.zip` in `resourcepacks/` folder
2. Open Minecraft
3. Options → Resource Packs
4. Select your pack
5. Click "Done"

[SCREENSHOT: Resource pack selection screen]

### Verification

**Check in-game:**
- [ ] Items show custom textures
- [ ] Blocks show custom textures
- [ ] GUIs display correctly
- [ ] No error messages in console

<details>
<summary>🔧 Pack not appearing</summary>

**Check:**
- pack.mcmeta exists and has correct format
- File is .zip (not .rar or folder)
- pack_format matches your Minecraft version

</details>

<details>
<summary>🔧 Some textures not working</summary>

**Check:**
- File names match exactly (case-sensitive)
- Files are PNG (not JPEG)
- Files are in correct folders
- Resolution is consistent

</details>

---

## 🎨 Pack Types

### Vanilla Override

**Replace vanilla textures:**
```
Requires: Exact vanilla file names
Changes: Existing items/blocks
Use case: Reskin Minecraft
```

### Custom Items (Datapack)

**Add new items:**
```
Requires: Datapack + resource pack
Custom names: Any
Use case: New items for servers/mods
```

### Themed Packs

**Cohesive aesthetic:**
```
Examples:
- Medieval fantasy
- Sci-fi futuristic
- Nature/organic
- Simplistic/clean
```

**All textures follow same style.**

---

## 📊 Pack Scope Examples

### Minimal Pack (10 textures)

```
Tools only:
- 5 swords (wood, stone, iron, diamond, gold)
- 5 pickaxes
Total: 10 textures
Time: 1-2 hours with Pixel GPT
```

### Medium Pack (50 textures)

```
All tools + some blocks:
- All tools (25 items)
- Key blocks (25 blocks)
Total: 50 textures
Time: 4-6 hours with Pixel GPT + Batch
```

### Full Pack (200+ textures)

```
Complete replacement:
- All items (150+)
- All blocks (100+)
- Some GUIs
Total: 250+ textures
Time: 20-40 hours with Pixel GPT + Batch
```

---

## ✅ Texture Pack Checklist

Before releasing:

- [ ] pack.mcmeta with correct format number
- [ ] pack.png icon (256×256)
- [ ] All textures are PNG
- [ ] All textures same resolution
- [ ] All files named correctly
- [ ] Folder structure matches Minecraft
- [ ] Tested in Minecraft
- [ ] No console errors

:::success Pack Basics Complete
[See complete texture pack tutorial →](../../tutorials/texture-packs/creating-texture-pack)
:::
