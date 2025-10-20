---
sidebar_position: 7
---

# Minecraft Integration FAQ

Questions about using textures in Minecraft.

<details>
<summary><strong>How do I use textures in Minecraft?</strong></summary>

**Steps:**

**1. Create resource pack folder structure**
```
my_pack/
├── pack.mcmeta
└── assets/minecraft/textures/item/
```

**2. Add your textures**
```
Rename to vanilla names: diamond_sword.png
Place in /item/ folder
```

**3. Create pack.mcmeta**
```json
{
  "pack": {
    "pack_format": 15,
    "description": "My Pack"
  }
}
```

**4. Zip and install**

[Complete guide →](../tutorials/minecraft-items/your-first-item#part-8-using-in-minecraft)

</details>

<details>
<summary><strong>What is pack_format number?</strong></summary>

**pack_format** matches Minecraft version:

```
Minecraft 1.20: 15
Minecraft 1.19: 13
Minecraft 1.18: 9
```

[Check your version](https://minecraft.wiki/w/Pack_format)

**Wrong number = pack won't load.**

</details>

<details>
<summary><strong>Texture not showing in Minecraft</strong></summary>

**Check:**
1. File is PNG (not JPEG)
2. Correct filename (`diamond_sword.png` not `Diamond Sword.png`)
3. Correct folder (`/item/` for items, `/block/` for blocks)
4. pack.mcmeta exists and valid JSON
5. pack_format matches MC version
6. Resource pack loaded in settings

</details>

<details>
<summary><strong>Can I use different resolutions?</strong></summary>

**Yes, but stay consistent:**

```
✅ All 16×16 throughout pack
✅ All 32×32 throughout pack

❌ Mix 16×16 and 32×32 (creates mixels)
```

**Exception:** Different asset types can vary (items 16×16, GUI 256×256 OK).

[Resolution guide →](../fundamentals/images-and-pixels/pixel-density-and-mixels)

</details>

<details>
<summary><strong>How do I make armor?</strong></summary>

**Armor uses layer files:**

```
layer_1.png (64×32) - helmet, chestplate, boots
layer_2.png (64×32) - leggings
```

**Process:**
1. Generate individual pieces
2. Arrange in layer template
3. Save as layer_1.png and layer_2.png

[Armor guide →](../fundamentals/minecraft-textures/armor-textures)

**Or use:** Items to Armor Set preset for automatic matching.

</details>

<details>
<summary><strong>What about custom items (non-vanilla)?</strong></summary>

**For custom items:**

**Requires:**
- Datapack (for vanilla)
- Or plugin (for servers) like ItemsAdder, Oraxen

**File naming:**
```
Any name: custom_ruby_sword.png
Reference in datapack/plugin config
```

**Not restricted to vanilla names.**

</details>

<details>
<summary><strong>Can I use these in mod packs?</strong></summary>

**Yes!** Resource packs work with modded Minecraft.

**Can replace:**
- Vanilla textures
- Mod textures (if you know file names/locations)

**Note:** Each mod has different texture locations.

</details>

<details>
<summary><strong>Do textures work on servers?</strong></summary>

**Client-side resource packs:** Yes
```
Each player installs pack
Sees custom textures
```

**Server-side resource packs:** Possible
```
Server forces pack download
All players see same textures
Requires pack hosting
```

</details>

<details>
<summary><strong>Texture looks wrong in-game</strong></summary>

**Common issues:**

**White box around item:**
```
Cause: Background not transparent
Fix: Remove white background in Grid Editor
```

**Wrong colors:**
```
Cause: Wrong file or not loaded
Fix: Verify file name, reload resource pack
```

**Pixelated/blurry:**
```
Cause: Wrong resolution exported
Fix: Export at native size (16×16 not upscaled)
```

</details>

<details>
<summary><strong>Can I use in Bedrock Edition?</strong></summary>

**Bedrock uses different format** than Java.

**Conversion needed:**
- Different file structure
- Different pack format
- Some features incompatible

**Recommend:** Generate for Java, then convert with tools.

</details>

:::success Minecraft Integration Clear
[Complete FAQ →](../faq/)
:::
