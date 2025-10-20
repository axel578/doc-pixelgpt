---
sidebar_position: 2
---

# Wrong Interpretation

When AI understands but generates wrong item.

## ❌ The Problem

**You wrote:** `pickaxe`  
**AI generated:** Sword or axe

**AI misunderstood** what you wanted.

---

## 🔍 Common Misinterpretations

### Similar Items Confused

**Problem pairs:**

```txt
Pickaxe ↔ Axe
Sword ↔ Dagger  
Helmet ↔ Crown
Potion ↔ Bottle
```

**Why:** Similar visual characteristics.

**Fix:** Be more specific

```txt
❌ "axe" → Could be battle axe or pickaxe
✅ "iron battle axe with double blade"
✅ "mining pickaxe with pointed head"
```

---

## 🎯 Disambiguation Techniques

### Add Context Words

**Specify usage/type:**

```txt
Instead of: "axe"
Use: "mining pickaxe" or "battle axe"

Instead of: "helmet"  
Use: "iron helmet" or "golden crown"

Instead of: "bottle"
Use: "empty glass bottle" or "potion bottle with liquid"
```

### Describe Shape

**Unique shape characteristics:**

```txt
Pickaxe: "T-shaped mining tool with pointed metal head"
Dagger: "short blade with pointed tip and small handle"
Staff: "long wooden pole with orb on top"
```

**Shape description prevents confusion.**

---

## 🔧 Fixing Misinterpretations

### Method 1: More Specific Prompt

**Original:**
```txt
"weapon"
Result: Random weapon (sword, axe, bow?)
```

**Fixed:**
```txt
"diamond sword"
Result: Correct item ✓
```

### Method 2: Add Descriptive Details

**Original:**
```txt
"tool"
Result: Could be anything
```

**Fixed:**
```txt
"iron pickaxe with T-shaped head for mining"
Result: Correct tool ✓
```

### Method 3: Visual Characteristics

**Original:**
```txt
"crown"
Result: Generated helmet instead
```

**Fixed:**
```txt
"golden crown with pointed peaks and jewels"
Result: Crown, not helmet ✓
```

---

## 🎨 Item-Specific Disambiguation

### Weapons

**Swords vs Daggers:**
```txt
Sword: "long blade with handle"
Dagger: "short pointed blade with small grip"
```

**Axes vs Pickaxes:**
```txt
Axe: "wide blade for chopping wood"
Pickaxe: "pointed T-shaped head for mining"
```

### Tools

**Pickaxe vs Hoe:**
```txt
Pickaxe: "T-shaped mining tool with metal head"
Hoe: "L-shaped farming tool with flat blade"
```

**Shovel vs Spade:**
```txt
Shovel: "digging tool with curved blade"
Spade: "flat square-edged digging blade"
```

### Containers

**Bottle vs Potion:**
```txt
Bottle: "empty glass container"
Potion: "glass bottle filled with colored liquid"
```

**Bucket vs Barrel:**
```txt
Bucket: "metal container with handle"
Barrel: "large wooden storage container"
```

---

## 🔬 Understanding AI Confusion

### Why Misinterpretation Happens

**AI learned from patterns:**
```
If training data mixed "axe" and "pickaxe"
AI may not distinguish clearly
```

**Visual similarity:**
```
Helmet and crown both head items
Both can have metal, gems, decorations
AI may confuse without clear distinctions
```

**Ambiguous terms:**
```
"Staff" = walking stick? wizard staff? weapon?
Context not always clear to AI
```

---

## 🎯 Prevention Strategies

### Be Overly Clear

**Don't assume AI knows context:**

```txt
❌ "staff" (ambiguous)
✅ "magical wizard staff with orb"

❌ "crown" (could be confused with helmet)
✅ "royal golden crown with pointed peaks"
```

### Add Type Specifiers

```txt
"mining pickaxe" (not battle axe)
"wizard staff" (not walking stick)
"combat helmet" (not decorative crown)
"healing potion" (not poison)
```

### Use Unique Characteristics

**Describe what makes it unique:**

```txt
Pickaxe unique: "T-shaped with pointed head"
Crown unique: "worn on head with peaks pointing up"
Potion unique: "glass bottle with colored liquid inside"
```

---

## 📊 Misinterpretation Frequency

| Item Type | Confusion Rate | Fix Priority |
|-----------|---------------|--------------|
| Common items (sword, apple) | Low (5%) | Not urgent |
| Similar items (axe vs pickaxe) | Medium (20%) | Important |
| Ambiguous terms (staff, crown) | High (40%) | Critical |
| Jargon (elytra, netherite) | Very high (70%) | Critical |

---

## ✅ Disambiguation Checklist

Prevent misinterpretation:

- [ ] Item type is unambiguous
- [ ] Added context words (mining, battle, wizard)
- [ ] Described unique shape characteristics
- [ ] Specified type if term is ambiguous
- [ ] Avoided jargon that AI may not know
- [ ] Added enough detail to be clear

:::success Interpretation Issues Solved
[Fix inconsistent results →](inconsistent-results)
:::
