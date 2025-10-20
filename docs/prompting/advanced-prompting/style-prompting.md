---
sidebar_position: 2
---

# Style Prompting

Controlling aesthetic and artistic style through prompts.

## 🎨 What is Style?

**Style** = The overall aesthetic, art direction, and visual approach.

**Examples:**
```
Minecraft vanilla style
Medieval fantasy style
Futuristic tech style
Cartoon colorful style
Dark gothic style
```

[SCREENSHOT: Same sword in different styles]

---

## 🎯 Style Keywords

### Minecraft Styles

**Vanilla style:**
```txt
"minecraft style diamond sword"
"minecraft vanilla texture grass block"
"blocky minecraft pickaxe"
```

**Result:** Simple, clean, vanilla-like

**Modded/Custom style:**
```txt
"RPG minecraft sword"
"detailed minecraft item"
"high quality minecraft texture"
```

### Fantasy Styles

**Medieval fantasy:**
```txt
"medieval iron sword with heraldic design"
"fantasy enchanted staff with magical elements"
"ancient legendary blade with runes"
```

**Dark fantasy:**
```txt
"dark corrupted sword with evil aura"
"cursed black blade with red glow"
"demonic weapon with skull motif"
```

**High fantasy:**
```txt
"elven silver sword with nature engravings"
"celestial holy blade with angelic wings"
"magical crystal staff with arcane symbols"
```

### Tech Styles

**Futuristic:**
```txt
"futuristic laser sword with neon glow"
"tech advanced pickaxe with digital display"
"cyberpunk weapon with holographic effects"
```

**Steampunk:**
```txt
"steampunk mechanical sword with gears and brass"
"victorian era tool with copper and leather"
"industrial weapon with rivets and pipes"
```

### Art Styles

**Cartoon:**
```txt
"cartoon colorful sword with big eyes"
"playful cute pickaxe with smiley face"
"bubbly bright apple with sparkles"
```

**Realistic:**
```txt
"realistic metallic sword with detailed reflections"
"photorealistic apple with natural imperfections"
```

**Pixel art specific:**
```txt
"retro 8-bit sword"
"clean modern pixel art"
"detailed pixel art with smooth shading"
```

---

## 🎨 Style Combination

### Primary Style + Details

**Formula:** `[Primary Style] [Item] with [Details]`

```txt
"medieval diamond sword with ornate decorations"
"futuristic laser pickaxe with neon accents"
"cartoon golden apple with sparkle effect"
```

### Blending Styles

**Carefully mix compatible styles:**

```txt
Good combinations:
✅ "medieval fantasy sword" (both compatible)
✅ "futuristic tech weapon" (both compatible)
✅ "cartoon magical staff" (both compatible)

Bad combinations:
❌ "photorealistic pixel art" (contradictory)
❌ "medieval futuristic" (conflicting)
❌ "cartoon realistic" (opposite styles)
```

**Stick to compatible styles.**

---

## 🔧 Style Implementation Techniques

### Method 1: Style Prefix

**Add style at beginning:**

```txt
"medieval iron sword"
"futuristic laser gun"
"cartoon red apple"
"fantasy crystal staff"
```

### Method 2: Style Suffix

**Add style at end:**

```txt
"diamond sword in medieval style"
"laser weapon with futuristic design"
"apple with cartoon appearance"
```

### Method 3: Style Descriptors

**Use style-specific adjectives:**

```txt
Medieval: ornate, heraldic, knightly, armored
Futuristic: holographic, neon, chrome, tech
Fantasy: enchanted, magical, mystical, arcane
Cartoon: bubbly, colorful, playful, cute
```

---

## 🎯 Matching Existing Styles

### Vanilla Minecraft Matching

**Study vanilla textures first.**

**Key characteristics:**
```
Simple shading (2-3 colors per material)
Clear outlines
Recognizable shapes
Blocky aesthetic
Limited detail
```

**Prompt example:**
```txt
"minecraft style simple diamond sword with blue and white shading and black outline"
```

**Use with:** Standard models (not over-detailed Ultimate models)

### Custom Pack Matching

**To match your existing pack:**

1. Generate first item normally
2. Use as reference in Style Selector
3. Prompt: `"[new item] matching previous style"`

**Example:**
```txt
First: "blue diamond sword with golden handle"
Reference: Use this sword image in Style Selector
Next: "blue diamond pickaxe with golden handle"
Result: Matches sword style perfectly
```

[See Style Selector guide →](../../features/style-selector/style-selector-overview)

---

## 🎨 Style-Specific Vocabulary

### Medieval/Fantasy

**Keywords:**
```txt
Appearance: ornate, heraldic, regal, noble, knightly
Materials: steel, silver, gold, iron, leather
Details: engravings, crests, emblems, runes, scrollwork
Effects: blessed, holy, cursed, enchanted
```

**Example prompt:**
```txt
"ornate medieval steel sword with heraldic crest engraving on blade and royal blue gem in pommel"
```

### Futuristic/Tech

**Keywords:**
```txt
Appearance: sleek, chrome, metallic, digital, holographic
Materials: alloy, carbon fiber, titanium, energy, plasma
Details: circuits, panels, displays, lights, cores
Effects: glowing, neon, electric, laser, powered
```

**Example prompt:**
```txt
"sleek futuristic plasma sword with neon blue energy blade, chrome handle with circuit pattern, and glowing power core"
```

### Nature/Organic

**Keywords:**
```txt
Appearance: natural, organic, grown, living, wild
Materials: wood, leaf, vine, stone, bone, crystal
Details: roots, branches, flowers, moss, bark
Effects: growing, blooming, flowing, earthy
```

**Example prompt:**
```txt
"natural wooden staff with living vine wrapping, green leaf sprouting from top, and moss-covered surface"
```

### Dark/Gothic

**Keywords:**
```txt
Appearance: dark, corrupted, cursed, evil, ominous
Materials: obsidian, bone, shadow, void, black metal
Details: skulls, spikes, chains, thorns, blood
Effects: glowing, dripping, smoking, cursed, dark aura
```

**Example prompt:**
```txt
"cursed dark obsidian sword with red glowing veins, skull pommel, and black smoky aura effect"
```

---

## 📊 Style Impact on Quality

| Style Clarity | Example | Quality |
|---------------|---------|---------|
| No style | "diamond sword" | 75% |
| Vague style | "cool modern sword" | 60% |
| Clear style | "medieval diamond sword" | 85% |
| Detailed style | "medieval iron sword with knightly ornate decorations" | 95% |

**Clear style specification = better results.**

---

## 🔧 Style Troubleshooting

<details>
<summary>Style doesn't match prompt</summary>

**Problem:** Asked for medieval, got futuristic

**Solutions:**
1. Be more explicit: "medieval style" → "medieval fantasy with stone and iron theme"
2. Add style-specific details: "with heraldic crests and ornate metalwork"
3. Use style keywords multiple times: "medieval knightly sword with medieval decorations"
4. Try different model (some models have style biases)

</details>

<details>
<summary>Style inconsistent across generations</summary>

**Problem:** Each generation different style

**Solutions:**
1. Use Style Selector with reference image
2. More specific style description in prompt
3. Lock style with Base Image in Style Selector
4. Use same model version consistently

</details>

<details>
<summary>Mixed styles in result</summary>

**Problem:** Medieval sword with futuristic elements

**Causes:**
- Conflicting keywords ("medieval futuristic")
- AI confusion from complex prompt

**Solutions:**
1. Choose one consistent style
2. Remove conflicting keywords
3. Simplify prompt

</details>

---

## ✅ Style Prompting Checklist

Effective style control:

- [ ] Style clearly specified
- [ ] Style-appropriate keywords used
- [ ] No conflicting style terms
- [ ] Details match chosen style
- [ ] Materials appropriate for style
- [ ] Effects match style aesthetic

:::success Style Control Mastered
[Learn material descriptions →](material-descriptions)
:::
