---
sidebar_position: 4
---

# Essential Prompting Tips

Master prompting in 3 minutes.

## 🎯 Top 10 Rules

### 1. ⚠️ Always Use English

```txt
❌ épée en diamant
❌ 다이아몬드 검
✅ diamond sword
```

**Why?** AI is trained primarily on English. Other languages = poor results.

### 2. Be Specific

```txt
❌ sword
✅ diamond sword
✅ blue diamond sword with golden handle
```

### 3. Use Adjectives

```txt
Basic: diamond sword
Better: sharp diamond sword
Best: enchanted glowing blue diamond sword
```

**Good adjectives:**
- Colors: `blue`, `red`, `golden`, `dark`, `bright`
- Materials: `wooden`, `iron`, `crystal`, `magical`
- Quality: `shiny`, `rusty`, `ancient`, `ornate`
- Style: `medieval`, `futuristic`, `fantasy`, `cartoon`

### 4. Avoid Jargon

```txt
❌ elytra (AI may not know this)
✅ black angel wings
✅ dragon wings item
```

:::tip When to Use Game Terms
Use Minecraft terms only if common:
- ✅ `diamond`, `pickaxe`, `sword`, `armor`
- ❌ `elytra`, `trident`, `netherite`

When unsure, describe visually.
:::

### 5. One Concept Per Prompt

```txt
❌ diamond sword and ruby pickaxe and golden armor
✅ diamond sword
```

**Why?** AI focuses better on single items.

### 6. Natural Language

```txt
❌ item:sword color:blue material:diamond
✅ blue diamond sword
```

### 7. Describe Visually

```txt
❌ powerful fire sword
✅ red glowing sword with flame pattern
```

### 8. Keep It Short (But Descriptive)

```txt
❌ sword
❌ I want a very beautiful blue diamond sword with golden handle and purple gems and shiny effect
✅ blue diamond sword with golden handle and purple gems
```

**Sweet spot:** 5-15 words

### 9. Avoid Ambiguous Words

```txt
❌ cool sword
❌ nice pickaxe
✅ ice blue sword
✅ ornate golden pickaxe
```

### 10. Iterate

Don't expect perfection first try:
1. Generate
2. Identify issues
3. Refine prompt
4. Regenerate

## 📝 Prompt Formula

```txt
[Item] + [Material/Color] + [Style/Details]
```

### Examples

| Formula Applied | Result |
|----------------|--------|
| `sword` + `diamond` + `with ruby gems` | `diamond sword with ruby gems` |
| `pickaxe` + `golden` + `ornate medieval` | `ornate medieval golden pickaxe` |
| `helmet` + `iron` + `with horns` | `iron helmet with horns` |

## ✅ Good vs ❌ Bad Prompts

### Items

| ❌ Bad | ✅ Good |
|--------|---------|
| `sword` | `diamond sword` |
| `nice weapon` | `ornate golden sword` |
| `épée magique` | `magical glowing sword` |
| `sword pickaxe armor` | `diamond sword` |

### Blocks

| ❌ Bad | ✅ Good |
|--------|---------|
| `block` | `stone block with cracks` |
| `red` | `red brick block` |
| `ground` | `grass block with flowers` |

### GUIs

| ❌ Bad | ✅ Good |
|--------|---------|
| `gui` | `shop gui with wooden frame` |
| `menu` | `fantasy rpg menu with purple theme` |
| `interface` | `medieval chest interface with iron decorations` |

## 🎨 Style Keywords

Add these for specific aesthetics:

**Minecraft Vanilla:**
```txt
minecraft style, blocky, pixelated
```

**RPG Fantasy:**
```txt
fantasy, magical, glowing, ornate, medieval
```

**Modern/Tech:**
```txt
futuristic, holographic, neon, tech, digital
```

**Cartoon:**
```txt
cartoon, colorful, cute, bright, playful
```

## 🔄 Iteration Example

**First attempt:**
```txt
sword
```
*Result: Generic sword*

**Second attempt:**
```txt
diamond sword
```
*Result: Better, but plain*

**Third attempt:**
```txt
blue diamond sword with golden handle
```
*Result: Good, has color and detail*

**Final attempt:**
```txt
enchanted blue diamond sword with ornate golden handle and purple gems
```
*Result: Perfect!*

## 📚 Prompt Templates

<details>
<summary>Weapons</summary>

```txt
[material] [weapon] with [detail]

Examples:
- diamond sword with ruby gems
- iron axe with leather grip
- golden bow with silver string
- crystal staff with glowing orb
```

</details>

<details>
<summary>Armor</summary>

```txt
[material] [armor piece] with [decoration]

Examples:
- iron helmet with horns
- diamond chestplate with blue gems
- golden boots with wing pattern
- leather tunic with brown trim
```

</details>

<details>
<summary>Food</summary>

```txt
[food item] with [appearance]

Examples:
- golden apple with sparkles
- red potion bottle with bubbles
- bread loaf with wheat decoration
- cooked meat with grill marks
```

</details>

<details>
<summary>Blocks</summary>

```txt
[material] block with [texture detail]

Examples:
- stone block with cracks and moss
- wooden planks with dark grain
- ice block with frozen bubbles
- sand block with shell pattern
```

</details>

## ⚡ Quick Reference

**Must-follow:**
1. ✅ English only
2. ✅ Be specific
3. ✅ 5-15 words
4. ✅ Visual descriptions

**Avoid:**
1. ❌ Other languages
2. ❌ Vague terms ("cool", "nice")
3. ❌ Multiple items in one prompt
4. ❌ Jargon/obscure terms

:::success Next Step
[See complete prompting guide →](../prompting/)
:::
