---
sidebar_position: 3
---

# Block Textures

Understanding Minecraft block textures.

## 🧱 What are Block Textures?

**Blocks** = Placeable cubes in the world

**Examples:**
- Stone, dirt, grass, sand
- Ores (diamond, iron, gold)
- Wood planks, logs
- Decorative blocks

[SCREENSHOT: Various Minecraft blocks]

---

## 📏 Block Format

### Resolution

**Vanilla:**
```
16×16 pixels per face
```

**HD Packs:**
```
32×32 or 64×64 per face
```

### Cube Structure

**A full block has 6 faces:**
```
      ┌─────┐
     /  T  /|    T = Top
    /  O  / |    S = Side
   ┌─────┐  │    B = Bottom
   │  S  │ /
   │  I  │/
   │  D  │
   │  E  │
   └─────┘
```

**Can use:**
- Same texture for all faces
- Different texture per face

[SCREENSHOT: Block showing different textures on each face]

---

## 🎨 Block Types

### Simple Blocks (Same All Faces)

**Examples:** Stone, cobblestone, ores

**Structure:**
```
All 6 faces = same texture
Only need: stone.png (16×16)
```

[SCREENSHOT: Stone block texture applied to all faces]

**Pixel GPT prompt:**
```txt
stone block with cracks
cobblestone texture with moss
diamond ore block
```

### Directional Blocks (Different Faces)

**Examples:** Grass block, logs, furnace

**Structure:**
```
Top face = grass_block_top.png
Side faces = grass_block_side.png
Bottom face = dirt.png
```

[SCREENSHOT: Grass block showing different face textures]

**Pixel GPT approach:**
```txt
Generate separately:
1. "grass block top view with grass"
2. "grass block side view with dirt and grass"
3. Use dirt.png for bottom
```

### Decorative Blocks

**Examples:** Quartz, concrete, terracotta

**Structure:**
```
Can be same all faces or directional
Often have patterns or designs
```

[SCREENSHOT: Various decorative blocks]

---

## 🎯 Creating Block Textures with Pixel GPT

### Choose Correct Model

**For blocks specifically:**
```
Standard: only block 16 v1
Ultimate: ultimate extreme mc block 16 v1
Ultimate: ultimate extreme eff block 16 v1
```

**Or use item models with "block" prompt:**
```
Standard: ultra 16 basic v2
Ultimate: ultimate extreme mc item 16 v3
```

### Prompting for Blocks

**Good prompts:**
```txt
stone block with cracks and moss
wooden planks with dark grain pattern
ice block with frozen crystals inside
sand block with shell fossils
red brick block with mortar lines
```

**Formula:** `[material] block with [texture detail]`

### Getting All Faces

**If you need multiple faces:**

Generate separately:
```txt
1. "oak log top view with tree rings"
2. "oak log side view with bark texture"
```

**Or use same texture for all faces:**
```txt
"stone block texture seamless"
```

---

## 📂 Resource Pack Structure

### File Location

```
resource_pack/
└── assets/
    └── minecraft/
        └── textures/
            └── block/
                ├── stone.png
                ├── cobblestone.png
                ├── grass_block_top.png
                ├── grass_block_side.png
                └── oak_log.png
```

### File Naming

**Vanilla blocks:**
```
✅ stone.png
✅ cobblestone.png
✅ grass_block_top.png

❌ Stone.png
❌ stone_block.png (extra word)
```

**Custom blocks:**
```
✅ custom_ore.png
✅ magic_block.png
```

(Requires datapack/mod to define)

---

## 🎨 Block Design Tips

### Seamless Tiling

Blocks tile infinitely. Edges should connect smoothly.

**Good:**
```
Left edge connects to right edge
Top edge connects to bottom edge
No obvious seams when tiled
```

[SCREENSHOT: Seamless block texture tiled]

**Bad:**
```
Obvious line where edges meet
Pattern doesn't continue
Looks disconnected when placed together
```

[SCREENSHOT: Non-seamless texture showing seams]

:::tip Pixel GPT Limitation
AI doesn't guarantee seamless textures. You may need to:
- Generate multiple times
- Manually adjust edges in editor
- Use simpler patterns
:::

### Directional Consideration

**Some blocks have direction:**
```
Logs → vertical vs horizontal
Furnaces → front face vs sides
Stairs → many orientations
```

Plan which faces need unique textures.

---

## 🔧 Pixel GPT Block Workflow

### Single-Texture Blocks

**For blocks using same texture all sides:**

1. Generate with block model
2. Prompt: `[material] block texture`
3. Extract one texture
4. Use for all faces

**Example:**
```txt
Prompt: "smooth stone block texture"
Use for: stone.png
```

### Multi-Texture Blocks

**For blocks with different faces:**

1. Generate top separately: `[block] top view`
2. Generate side separately: `[block] side view`
3. Generate bottom (if needed)

**Example - Grass Block:**
```txt
Generation 1: "grass block top view with green grass"
→ Save as: grass_block_top.png

Generation 2: "grass block side view with grass on top and dirt"
→ Save as: grass_block_side.png

Use vanilla dirt.png for bottom
```

---

## 📊 Block vs Item Models

### Differences

| Aspect | Items | Blocks |
|--------|-------|--------|
| **Orientation** | Angled/vertical | Face-on view |
| **Perspective** | Slight 3D angle | Flat/direct |
| **Tiling** | Not relevant | Should tile seamlessly |
| **Faces** | Single texture | Can be 1-6 textures |

### Prompting Differences

**Items:**
```txt
diamond sword with blue blade
```
(Describes the held item appearance)

**Blocks:**
```txt
diamond ore block texture
```
(Describes flat face texture)

---

## ✅ Block Texture Checklist

Before integrating:

- [ ] 16×16 pixels (or consistent resolution)
- [ ] PNG format with transparency (if needed)
- [ ] Tiles seamlessly (edges connect)
- [ ] Correct file name
- [ ] Placed in `/block/` folder
- [ ] Tested in-game

:::success Blocks Mastered
[Learn about GUI textures →](gui-textures)
:::
