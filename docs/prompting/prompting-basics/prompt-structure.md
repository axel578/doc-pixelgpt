---
sidebar_position: 3
---

# Prompt Structure

How to organize your prompts effectively.

## 🏗️ Basic Structure

### Three-Part Formula

```
[Subject] + [Descriptors] + [Details]
```

**Example:**
```txt
sword + blue diamond + with golden handle
│       │              │
Subject Descriptors    Details
```

---

## 📦 Subject (Required)

**The main item you want to generate.**

```
What is it?
├── sword
├── pickaxe
├── helmet
├── apple
└── potion bottle
```

**Must be clear and specific:**
```
✅ "sword" (clear)
✅ "pickaxe" (clear)
❌ "weapon" (too vague)
❌ "tool" (too vague)
❌ "item" (way too vague)
```

---

## 🎨 Descriptors (Recommended)

**Characteristics of the subject.**

### Material Descriptors

```
What is it made of?
├── diamond
├── iron
├── wood
├── crystal
└── gold
```

**Examples:**
```txt
diamond sword
wooden pickaxe
iron helmet
```

### Color Descriptors

```
What color is it?
├── blue
├── red
├── green
├── golden
└── purple
```

**Examples:**
```txt
blue sword
red apple
purple potion
```

### Style Descriptors

```
What aesthetic?
├── medieval
├── fantasy
├── futuristic
├── cartoon
└── minecraft style
```

**Examples:**
```txt
medieval iron sword
fantasy crystal staff
cartoon golden apple
```

---

## ✨ Details (Optional)

**Specific features and decorations.**

### Feature Details

```
Special characteristics:
├── with gems
├── with engravings
├── glowing
├── rusty
└── ornate
```

**Examples:**
```txt
sword with ruby gems
pickaxe with engravings
glowing crystal
```

### Part-Specific Details

```
Different parts, different attributes:
├── blade: color, material
├── handle: color, material, grip
├── decorations: gems, patterns
```

**Examples:**
```txt
sword with blue blade and golden handle
staff with purple orb and silver base
```

---

## 📝 Complete Structure Examples

### Minimal (Subject Only)

```txt
sword
pickaxe
apple
```

**Quality:** 40-60% - very random

### Basic (Subject + Descriptor)

```txt
diamond sword
iron pickaxe
red apple
```

**Quality:** 70-80% - good baseline

### Standard (Subject + Descriptors + Detail)

```txt
blue diamond sword with gems
iron pickaxe with wooden handle
red apple with green leaf
```

**Quality:** 85-95% - recommended

### Detailed (Full Description)

```txt
enchanted blue diamond sword with ornate golden handle and purple gemstones
medieval iron pickaxe with leather-wrapped wooden handle and metal studs
shiny red apple with brown stem and bright green leaf
```

**Quality:** 90-95% - best quality (if not too long)

---

## 🔧 Structure Variations

### Order Matters Less Than Clarity

**All equivalent:**
```txt
"blue diamond sword"
"diamond blue sword"
"diamond sword in blue"
```

**AI understands** regardless of order (mostly).

**But natural order is clearest:**
```
✅ "blue diamond sword" (most natural)
```

### Using "with" for Additions

**Separates main from additions:**

```txt
"diamond sword with golden handle"
├── Main: diamond sword
└── Addition: golden handle

Clear structure helps AI understand.
```

---

## 🎯 Prompt Organization Tips

### Group Related Concepts

**Good organization:**
```txt
"crystal sword with blue blade and silver handle"
├── Material: crystal
├── Blade: blue
└── Handle: silver
```

**Poor organization:**
```txt
"blue with crystal silver blade handle sword"
```

**Natural language order** works best.

### One Idea Per Phrase

**Clear separation:**
```txt
"diamond sword with ruby gems and golden handle"
├── Main: diamond sword
├── Detail 1: ruby gems
└── Detail 2: golden handle
```

**Confused mixing:**
```txt
"diamond ruby golden sword gems handle"
```

---

## 📊 Structure Effectiveness

| Structure | Example | Success Rate | Quality |
|-----------|---------|--------------|---------|
| Subject only | "sword" | 40% | Low |
| Subject + Material | "diamond sword" | 75% | Medium |
| Subject + Material + Color | "blue diamond sword" | 85% | Good |
| Full description | "blue diamond sword with golden handle" | 92% | Excellent |
| Over-detailed | 50-word prompt | 60% | Mixed |

---

## ✅ Structure Checklist

Well-structured prompt has:

- [ ] Clear subject (what item?)
- [ ] Material or color descriptor
- [ ] Logical word order
- [ ] One main idea (not multiple items)
- [ ] Details separated clearly (using "with")
- [ ] Natural language (not code-like)

:::success Structure Mastered
[Learn to be specific →](../effective-prompting/be-specific)
:::
