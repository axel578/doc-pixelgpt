---
sidebar_position: 2
---

# Text Batch Submitter

Bulk generation from prompt lists.

## 📝 What is Text Batch?

Generate multiple items from a **list of text prompts**.

**One prompt per line:**
```txt
diamond sword
iron pickaxe
golden axe
emerald shovel
ruby hoe
```

**AI generates all of them** in one batch job.

---

## 🚀 Step-by-Step Usage

### Step 1: Access Batch Page

**Features → Batch**

**Click "Batch Submitter" tab** (first tab)

[SCREENSHOT: Batch Submitter tab]

### Step 2: Select Model

**Choose category, subcategory, and model:**

```
Category: Pixel Art
Subcategory: 16px
Model: [Pick from horizontal scroll list]
```

[SCREENSHOT: Model selection interface]

**Click model card** to select.

**Recommended models for batch:**
```
ultra 16 basic v2 (good quality, balanced)
ultra 16 speed (faster, still good)
ultimate extreme mc item 16 v3 (best quality)
```

### Step 3: Enter Prompts

**Large text box appears:**

**Enter one prompt per line:**

```txt
diamond sword
iron pickaxe
golden axe
stone shovel
wooden hoe
blue diamond helmet
red ruby chestplate
green emerald leggings
```

**Minimum:** 4 prompts

**Maximum:** Typically 100-200 (depends on plan)

[SCREENSHOT: Prompt list entered]

### Step 4: Validate and Submit

**Click "Validate" button**

**System checks:**
```
✓ Minimum 4 prompts?
✓ Model selected?
✓ Daily quota available?
```

**If all OK:**
```
Batch job created
Starts processing
```

**If error:**
```
Error message shown
Fix issue and retry
```

### Step 5: Monitor Progress

**Switch to "Batch List" tab**

**Find your batch** (latest at top)

[SCREENSHOT: Batch List with active batch]

**Shows:**
```
Batch name/ID
Status: Processing/Complete
Progress: 3/10 items done
Created: Timestamp
```

**Click batch row** to see details.

### Step 6: View Results

**When batch completes:**

**Click batch → Batch Details modal opens**

[SCREENSHOT: Batch details modal]

**Shows grid:**
```
Each cell = one prompt
Inside cell = generated images for that prompt
```

**Click images to view full size.**

### Step 7: Download

**Download options:**

```
Download Selected: Choose specific cells
Download All: Get everything
Download Processed: With backgrounds removed
```

**Downloads as ZIP file** containing all PNGs.

---

## 🎯 Batch List Format

### Prompt Format

**One prompt per line (basic):**

```txt
diamond sword
iron pickaxe
golden axe
```

**Can include details:**

```txt
blue diamond sword with golden handle
iron pickaxe with wooden handle
ornate golden axe with engravings
```

**Each line = separate generation.**

### Line Requirements

**Valid:**
```txt
✅ diamond sword (simple)
✅ blue diamond sword with golden handle (detailed)
✅ enchanted glowing crystal staff (multiple words)
```

**Invalid:**
```
❌ [Empty line] (will error)
❌ diamond sword; iron pickaxe (multiple items per line)
```

**One item description per line.**

---

## 🎨 Batch Optimization

### Grouping Strategy

**Organize related items:**

```txt
Batch 1: Diamond Tool Set
diamond sword
diamond pickaxe
diamond axe
diamond shovel
diamond hoe

Batch 2: Iron Tool Set
iron sword
iron pickaxe
iron axe
iron shovel
iron hoe
```

**Benefits:**
- Same model/settings
- Download as complete sets
- Organized results

### Prompt Consistency

**For matching sets, use consistent prompt structure:**

```txt
Good (consistent):
blue diamond sword
blue diamond pickaxe
blue diamond axe

Less consistent:
blue diamond sword with handle
iron pickaxe
golden decorated axe
```

**Consistent prompts = more cohesive results.**

---

## 📊 Batch Size Recommendations

| Batch Size | Time | Best For |
|------------|------|----------|
| 5-10 prompts | 10-20 min | Tool sets, small collections |
| 20-30 prompts | 40-60 min | Medium packs, themed sets |
| 50-100 prompts | 2-4 hours | Texture packs, large projects |

**Start small** (10-20) to test workflow.

---

## 🔧 Text Batch Troubleshooting

<details>
<summary>Batch won't submit</summary>

**Check:**
- At least 4 prompts?
- Each prompt on separate line?
- No empty lines?
- Model selected?
- Daily quota available?

**Common cause:** Less than 4 prompts (minimum requirement).

</details>

<details>
<summary>Some prompts failed in batch</summary>

**Normal:**
- Some failures expected in large batches
- Difficult prompts may fail
- Server issues can cause failures

**Solution:**
- Check which prompts failed
- Regenerate failed ones individually
- Refine difficult prompts

</details>

<details>
<summary>Batch taking too long</summary>

**Expected times:**
```
10 prompts: 20-40 minutes
50 prompts: 2-3 hours
100 prompts: 4-6 hours
```

**If significantly longer:**
- Check server status
- Server may be under heavy load
- Be patient (will complete eventually)

</details>

---

## 💡 Batch Tips

:::tip Tip #1: Test First
Generate 1-2 prompts normally before batching to verify prompt format works.
:::

:::tip Tip #2: Consistent Prompts
Use same structure for all prompts in batch for cohesive results.
:::

:::tip Tip #3: Realistic Batch Sizes
Start with 10-20 prompts. Scale up as you get comfortable.
:::

:::tip Tip #4: Run Overnight
Submit large batches before bed, results ready in morning.
:::

:::tip Tip #5: Document Prompts
Keep copy of your prompt list - helps identify which result is which.
:::

---

## ✅ Text Batch Checklist

Before submitting:

- [ ] Have premium subscription
- [ ] Prepared prompt list (4+ prompts)
- [ ] One prompt per line
- [ ] No empty lines
- [ ] Selected model
- [ ] Tested 1-2 prompts individually first
- [ ] Have time to wait for completion
- [ ] Batch quota available today

:::success Text Batch Mastered
[Learn image reference batch →](image-batch)

[See batch list management →](batch-list)
:::
