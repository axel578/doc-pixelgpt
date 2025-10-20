---
sidebar_position: 4
---

# Color Descriptions

Advanced techniques for specifying colors.

## 🌈 Color Precision

### Basic Colors

**Primary colors:**
```txt
red, blue, yellow
```

**Secondary colors:**
```txt
green, orange, purple
```

**Neutrals:**
```txt
black, white, gray, brown
```

**These always work well.**

### Descriptive Colors

**More specific:**
```txt
crimson, scarlet, ruby (reds)
azure, cobalt, sapphire (blues)
emerald, jade, forest (greens)
golden, amber, honey (yellows)
violet, amethyst, lavender (purples)
```

**Use when you want specific shade.**

### Color Modifiers

**Adjust color intensity:**
```txt
dark, light, bright, pale, deep, vivid, dull,
neon, pastel, muted, saturated
```

**Examples:**
```txt
"dark red" vs "bright red" vs "pale red"
"deep blue" vs "light blue" vs "neon blue"
```

[SCREENSHOT: Color modifier comparisons]

---

## 🎨 Multi-Color Prompts

### Two-Color Items

**Different parts, different colors:**

```txt
"sword with blue blade and golden handle"
"staff with purple orb and silver shaft"
"helmet with red base and white plume"
```

**Clear separation** prevents color bleeding.

### Three+ Color Items

**Complex color schemes:**

```txt
"sword with bright blue blade, golden crossguard, brown leather handle, and red ruby pommel"

"staff with glowing cyan orb, silver metal bands, dark brown wood shaft, and purple magical aura"
```

**Specify which color goes where.**

### Color Gradients

**Transitioning colors:**

```txt
"blade with gradient from light blue at tip to dark blue at base"
"potion with color gradient from red at top to orange at bottom"
"crystal with rainbow gradient across surface"
```

---

## 💡 Color Harmony

### Complementary Colors

**Opposite on color wheel (high contrast):**

```txt
"blue and orange striped pattern"
"red blade with green gem accents"
"purple handle with yellow decorations"
```

**Use for:** Bold, vibrant looks

### Analogous Colors

**Adjacent on wheel (harmonious):**

```txt
"blue and purple magical staff"
"red and orange flame sword"
"green and yellow nature staff"
```

**Use for:** Cohesive, smooth looks

### Monochromatic

**Single color, multiple shades:**

```txt
"sword with light blue blade, medium blue crossguard, and dark blue handle"
"helmet with pale gold trim, golden base, and dark gold shadows"
```

**Use for:** Unified, elegant looks

---

## 🎯 Color for Different Items

### Weapons - Blade vs Handle

**Contrasting colors:**
```txt
"blue blade with golden handle"
"red blade with silver handle"
"green blade with wooden brown handle"
```

**Matching colors:**
```txt
"golden blade and golden handle with different shades"
"blue diamond entire sword in blue tones"
```

### Armor - Base vs Trim

**Accent colors:**
```txt
"iron chestplate with blue trim"
"golden helmet with red plume"
"diamond boots with purple accent lines"
```

### Food - Natural Colors

**Realistic:**
```txt
"red apple" (natural)
"brown bread" (natural)
"green lettuce" (natural)
```

**Magical/Special:**
```txt
"golden magical apple with sparkle"
"blue enchanted berry"
"purple healing bread"
```

---

## 🔬 Color Intensity

### Saturation Levels

**Low saturation (muted):**
```txt
"muted blue sword"
"desaturated red apple"
"pale golden helmet"
```

**High saturation (vibrant):**
```txt
"vivid blue sword"
"bright red apple"
"neon golden helmet"
```

### Brightness Levels

**Dark:**
```txt
"dark blue blade"
"deep crimson red"
"shadowy black armor"
```

**Light:**
```txt
"light blue blade"
"pale pink potion"
"bright white crystal"
```

---

## 🎨 Special Color Effects

### Glowing Colors

```txt
"glowing blue blade with neon effect"
"luminous purple crystal with inner light"
"radiant golden aura around item"
```

### Metallic Colors

```txt
"metallic blue with steel shine"
"metallic gold with reflective surface"
"metallic red with copper undertones"
```

### Iridescent Colors

```txt
"rainbow prismatic blade with shifting colors"
"opal-like surface with color changes"
"holographic effect with multiple hues"
```

---

## 📊 Color Specification Methods

### Method 1: Simple Color Name

```txt
"blue sword"
```

**Quality:** 80%  
**Use when:** Color not critical

### Method 2: Descriptive Color

```txt
"sapphire blue sword"
```

**Quality:** 88%  
**Use when:** Specific shade wanted

### Method 3: Modified Color

```txt
"bright sapphire blue sword"
```

**Quality:** 92%  
**Use when:** Exact shade critical

### Method 4: Multi-Color with Parts

```txt
"sword with bright blue blade and dark golden handle"
```

**Quality:** 96%  
**Use when:** Complex color scheme

---

## 🔧 Color Troubleshooting

<details>
<summary>Wrong colors in result</summary>

**Solutions:**
1. Be more explicit: "blue" → "bright blue"
2. Specify part: "with blue blade and golden handle"
3. Add modifiers: "bright", "dark", "vivid"
4. Use Style Selector with colored reference image

</details>

<details>
<summary>Colors too dull/vibrant</summary>

**Too dull:**
```txt
Add: "bright", "vivid", "saturated", "neon"
```

**Too vibrant:**
```txt
Add: "muted", "pale", "desaturated", "soft"
```

</details>

<details>
<summary>Colors bleeding between parts</summary>

**Problem:** Blue blade makes handle blue too

**Fix:**
```txt
"sword with blue blade AND golden handle"
(Emphasize separation with AND)

Or:
"sword with BLUE blade, GOLDEN handle"
(Repetition emphasizes distinction)
```

</details>

---

## 🎯 Color Palette Consistency

### Creating Matching Sets

**Use same color descriptors:**

```txt
Set 1 - Diamond Tools (Blue):
"bright blue diamond sword"
"bright blue diamond pickaxe"
"bright blue diamond axe"
"bright blue diamond shovel"
```

**Consistent color words** = matching results.

### Style Selector for Colors

**Better consistency:**

1. Generate first item with colors
2. Use as Style reference
3. AI copies color palette for next items

**Most reliable method** for matching colors.

---

## 📊 Color Reference Table

### Minecraft Material Colors

| Material | Natural Color | Alternative Colors |
|----------|--------------|-------------------|
| Diamond | Blue-cyan | Purple, green, red (custom) |
| Iron | Gray | Blue-gray, dark silver |
| Gold | Yellow-gold | Rose gold, white gold |
| Emerald | Green | Bright green, dark green |
| Ruby | Red | Dark red, crimson |

### Fantasy Color Schemes

| Theme | Primary Colors | Accent Colors |
|-------|---------------|---------------|
| Fire | Red, orange | Yellow, black |
| Ice | Light blue, cyan | White, dark blue |
| Nature | Green, brown | Yellow, tan |
| Arcane | Purple, blue | Pink, cyan |
| Holy | White, gold | Blue, yellow |
| Shadow | Black, purple | Dark red, gray |

---

## ✅ Color Description Checklist

Effective color specification:

- [ ] Color names are clear (not "nice color")
- [ ] Specific shades mentioned if important
- [ ] Modifiers used (dark, bright, pale)
- [ ] Different parts have different colors specified
- [ ] Colors match item theme/style
- [ ] Color harmony considered

:::success Colors Mastered
[Learn prompt iteration →](prompt-iteration)
:::
