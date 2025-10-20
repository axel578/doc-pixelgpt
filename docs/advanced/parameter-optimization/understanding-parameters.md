---
sidebar_position: 1
---

# Understanding Parameters

Complete guide to all generation parameters.

## 🎛️ Parameter Categories

### Universal Parameters

**Available on most models:**

```
Text Accuracy (1-10)
Generation Precision (1-4)
```

### Ultimate/Elite Parameters

**Advanced models only:**

```
Base Accuracy (0-30)
Max Creativity (0-100)
High Quality (toggle)
Improve Composition (toggle)
Improve Quality (toggle)
```

### Style Selector Parameters

**When using references:**

```
Image Strength (0-10)
Shape Strength (0-10)
Shape Affected By Details (0-10)
Shape Generation % (0-10)
```

---

## 📊 Text Accuracy Deep Dive

### What It Controls

**Prompt adherence vs creative freedom:**

```
Low (1-3): AI has freedom to add/interpret
Medium (5-7): Balanced following
High (8-10): Strict literal interpretation
```

### Visual Impact

**Prompt:** `blue diamond sword`

**Text Accuracy 3:**
```
Result: Blue sword with creative additions
- May add gems AI thinks fit
- May add glow effects
- Interesting but unpredictable
```

**Text Accuracy 7:**
```
Result: Blue diamond sword, faithful
- Follows prompt closely
- Some tasteful details
- Balanced
```

**Text Accuracy 10:**
```
Result: Exactly blue diamond sword
- No extras
- Very literal
- Plain but accurate
```

[SCREENSHOT: Text Accuracy 3 vs 7 vs 10 comparison]

### Optimal Settings

| Use Case | Text Accuracy | Why |
|----------|---------------|-----|
| Vanilla replacements | 8-9 | Need exact match |
| Custom items | 6-7 | Balance |
| Creative exploration | 4-5 | Want variation |
| Client specifications | 9-10 | Exact requirements |
| GUIs | 7-8 | Structure important |

---

## 🎨 Base Accuracy (Ultimate Models)

### What It Controls

**How strongly prompt guides generation:**

```
Base Accuracy 0: Minimum prompt influence
Base Accuracy 15: Balanced
Base Accuracy 30: Maximum prompt influence
```

### Relationship with Max Creativity

**These parameters work together:**

```
Base Accuracy (low) + Max Creativity (high) = Very creative
Base Accuracy (high) + Max Creativity (low) = Very accurate
```

**Balance both** for optimal results.

### Recommended Ranges

```yaml
Exploratory generation:
  Base Accuracy: 5-10
  Max Creativity: 70-90

Balanced quality:
  Base Accuracy: 15-20
  Max Creativity: 50-70

Exact specifications:
  Base Accuracy: 25-30
  Max Creativity: 20-40
```

---

## 🔬 Generation Precision

### What It Controls

**Quality vs speed trade-off:**

```
Precision 1: Fastest, lowest quality
Precision 2: Fast, good quality
Precision 3: Slower, better quality
Precision 4: Slowest, best quality
```

### Generation Time Impact

```
Precision 1: 30 seconds - 1 minute
Precision 2: 1-2 minutes
Precision 3: 2-3 minutes
Precision 4: 3-5 minutes
```

### Quality Difference

```
1→2: Noticeable improvement (+20%)
2→3: Moderate improvement (+15%)
3→4: Slight improvement (+10%)
```

**Diminishing returns** at higher precision.

**Recommended:**
```
Testing/iteration: 2
Final generation: 3-4
Time-critical: 1
```

---

## 💎 Max Creativity (Ultimate Models)

### What It Controls

**AI's creative freedom:**

```
Max Creativity 0: No additions, strict prompt
Max Creativity 50: Balanced additions
Max Creativity 100: Maximum creative interpretation
```

### Impact Examples

**Prompt:** `diamond sword`

**Max Creativity 20:**
```
Plain diamond sword
Minimal extras
Conservative
```

**Max Creativity 60:**
```
Diamond sword with tasteful decorations
Some creative elements
Balanced
```

**Max Creativity 90:**
```
Diamond sword with extensive decorations
Creative embellishments
Artistic interpretation
```

### Balancing with Base Accuracy

**Optimal combinations:**

```yaml
Conservative (exact prompts):
  Base Accuracy: 25
  Max Creativity: 30

Balanced (recommended):
  Base Accuracy: 15
  Max Creativity: 60

Creative (artistic):
  Base Accuracy: 10
  Max Creativity: 85
```

---

## 🎯 Quality Toggles

### High Quality

**Toggle:** On/Off

```
Off: Standard quality, faster
On: Enhanced quality, slower
```

**Impact:**
```
+10-15% quality
+30-50% generation time
```

**Use when:**
```
✅ Final generations
✅ Professional work
✅ Quality critical
```

### Improve Composition

**Toggle:** On/Off

```
On: Better element arrangement
Slightly slower
```

**Use when:**
```
✅ Complex items
✅ Multi-part items
✅ GUIs
```

### Improve Quality

**Toggle:** On/Off

```
On: Overall quality enhancement
Moderately slower
```

**Can combine with High Quality** for maximum enhancement.

---

## 📊 Parameter Interaction Matrix

### How Parameters Affect Each Other

**High Text Accuracy + High Max Creativity:**
```
⚠️ Contradictory
Text Accuracy restricts, Creativity expands
Result: Confused output
```

**Balanced:**
```
✅ Medium Text Accuracy (6-7)
✅ Medium Max Creativity (50-60)
Result: Good balance
```

**High Text Accuracy + Low Max Creativity:**
```
✅ Both align (strict adherence)
Result: Very exact, plain output
```

**Low Text Accuracy + High Max Creativity:**
```
✅ Both align (freedom)
Result: Very creative, may deviate from prompt
```

---

## 🔧 Parameter Optimization Process

### Systematic Testing

**1. Baseline generation:**
```yaml
Text Accuracy: 7
Generation Precision: 3
Base Accuracy: 15
Max Creativity: 60
```

**2. Test variations:**
```
Keep all same except Text Accuracy:
- Try 5, 7, 9
- Compare results
- Pick best
```

**3. Optimize others:**
```
Adjust Max Creativity based on Text Accuracy chosen
Test Generation Precision options
```

**4. Document winners:**
```
Save as preset: "My Optimal Item Settings"
```

---

## ✅ Parameter Mastery Checklist

Expert parameter control:

- [ ] Understand all parameter purposes
- [ ] Know optimal ranges for each
- [ ] Can balance contradictory parameters
- [ ] Tested parameter combinations systematically
- [ ] Saved successful presets
- [ ] Adjusted parameters based on results iteratively

:::success Parameters Optimized
[Advanced Style Selector techniques →](../style-selector-advanced/advanced-techniques)

[Professional workflows →](../professional-techniques/professional-workflows)
:::
