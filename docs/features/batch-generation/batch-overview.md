---
sidebar_position: 1
---

# Batch Generation Overview

Generate many images simultaneously.

## 🎯 What is Batch Generation?

**Batch** = Generate multiple images from a list of prompts in one job.

**Instead of:**
```
Generate "diamond sword" → Wait → Download
Generate "iron pickaxe" → Wait → Download
Generate "golden axe" → Wait → Download
(30 minutes for 10 items)
```

**With batch:**
```
Submit list of 10 prompts → Wait once → Download all
(10 minutes for 10 items)
```

**Much faster** for creating sets.

---

## 💰 Access & Limits

:::warning Premium Feature
Batch generation requires **premium subscription**.
:::

### Daily Quotas

**Batch jobs per day (not images):**

```
Free users: 0 batch jobs
Standard ($39.99): 5-10 batch jobs/day
Ultimate ($49.99): 20-30 batch jobs/day
Elite ($99.99): 50+ batch jobs/day
```

**One batch job can generate 100+ images.**

:::info Batch ≠ Generations
Batch quota is separate from unlimited generations. Batch is for bulk processing, not counted against regular generation limit.
:::

---

## 📊 Batch vs Regular Generation

| Aspect | Regular | Batch |
|--------|---------|-------|
| Interface | Home page | Batch page |
| Prompts | One at a time | Multiple at once |
| Wait time | 1-3 min per item | All at once |
| Queue usage | Uses your queue | Occupies queue until done |
| Best for | Single items | Sets of 10-100 items |

---

## 🎯 When to Use Batch

### Ideal Use Cases

**Texture pack creation:**
```
✅ Need 50-100 item textures
✅ All same style/resolution
✅ List of items prepared
```

**Item sets:**
```
✅ Complete tool set (5-10 items)
✅ Full armor variations (10-20 items)
✅ Food collection (20+ items)
```

**Testing many prompts:**
```
✅ Try 20 different sword styles
✅ Test color variations
✅ Explore options quickly
```

### Don't Use Batch For

```
❌ Single item
❌ Testing one prompt
❌ When you need results immediately (batch takes time)
❌ When iterations likely needed (batch is bulk, not refinement)
```

**Use regular generation** for small numbers or testing.

---

## 🗂️ Batch Page Tabs

**Access:** Features → Batch

**Three tabs:**

### 1. Batch Submitter

**Text-based bulk generation:**
```
Enter list of prompts (one per line)
Select model
Generate all at once
```

[See text batch guide →](text-batch)

### 2. Image Reference Batch

**Reference image-based generation:**
```
Upload zip of reference images
Configure settings
Generate based on images
```

[See image batch guide →](image-batch)

### 3. Batch List

**View your batch jobs:**
```
See all batch history
Track progress
Download completed batches
```

[See batch list guide →](batch-list)

---

## ⚡ Quick Start

### Fastest Path to Batch

**1. Access batch page**
```
Features → Batch
```

**2. Go to Batch Submitter tab**

**3. Select model**
```
Category: Pixel Art
Subcategory: 16px
Model: ultra 16 basic v2 (or your choice)
```

**4. Enter prompts (one per line)**
```
diamond sword
iron pickaxe
golden axe
emerald shovel
ruby hoe
```

**Minimum: 4 prompts**

**5. Click "Validate"**

**Batch job starts** - check progress in Batch List tab.

---

## 📊 Batch Processing

### How It Works

**After submitting batch:**

```
1. Batch job created
2. Enters queue
3. Processes prompts one-by-one or in groups
4. Each prompt generates 4 items (typical 2×2 grid)
5. All complete → Available for download
```

**Total time depends on:**
- Number of prompts
- Model speed
- Server load
- Your priority level

**Estimate:**
```
10 prompts × 2 min each = ~20 minutes
50 prompts = 1-2 hours
100 prompts = 2-4 hours
```

### Queue Impact

**While batch runs:**
```
⚠️ Occupies your generation queue
⚠️ Can't generate on Home page simultaneously
⚠️ Must wait for batch to complete
```

**Plan accordingly:**
```
✅ Submit batch when you have time to wait
✅ Or run overnight
❌ Don't submit if you need immediate generations
```

---

## 🎨 Batch Strategies

### Strategy 1: Theme-Based

**Batch by theme:**
```
Batch 1: All diamond tools
Batch 2: All iron tools
Batch 3: All golden tools
```

**Consistent model/settings** per batch.

### Strategy 2: Resolution-Based

**Batch by size:**
```
Batch 1: All 16×16 items (use 16px model)
Batch 2: All 32×32 items (use 32px model)
```

### Strategy 3: Type-Based

**Batch by asset type:**
```
Batch 1: All weapons
Batch 2: All tools
Batch 3: All food
```

---

## ⚠️ Batch Limitations

### Cannot Iterate

**Batch is bulk processing:**
```
❌ Can't adjust mid-batch
❌ Can't refine prompts during batch
❌ Committed to settings at start
```

**Test first:**
```
✅ Generate 1-2 items normally
✅ Verify prompt works
✅ Then batch the rest
```

### Quality Variance

**Some results will be better than others:**
```
10 prompts → 40 generated items
Maybe 30 are good, 10 need regeneration
```

**Expected:** Not all perfect.

**Solution:** Regenerate individually later.

### Daily Limits

**Batch jobs limited:**
```
5-50 batch jobs per day (plan dependent)
```

**Plan batches wisely:**
```
✅ Combine related prompts in one batch
✅ Don't waste batches on small jobs
```

---

## 🔧 Batch Troubleshooting

<details>
<summary>Batch not starting</summary>

**Check:**
- Premium subscription active?
- Minimum 4 prompts entered?
- Model selected?
- Daily batch quota not exceeded?

**Try:**
- Verify subscription
- Add more prompts (need 4 minimum)
- Check Batch List for quota usage

</details>

<details>
<summary>Batch stuck/not progressing</summary>

**Solutions:**
1. Wait - batches take time
2. Refresh Batch List tab
3. Check after 30-60 minutes
4. Contact support if stuck >6 hours

</details>

<details>
<summary>Some batch items failed</summary>

**Normal:**
- Some failures expected in large batches
- Server issues, prompt problems, etc.

**Solution:**
- Note which prompts failed
- Regenerate individually
- Or redo as small batch

</details>

---

## ✅ Batch Generation Checklist

Ready for batch:

- [ ] Have premium subscription
- [ ] Tested prompts work (1-2 test generations)
- [ ] Prepared prompt list (4+ items)
- [ ] Selected appropriate model
- [ ] Understand batch takes time (can't cancel mid-process)
- [ ] Have batch quota available today
- [ ] Ready to wait for completion

:::success Batch Basics Understood
[Learn text batch submission →](text-batch)

[Learn image reference batch →](image-batch)
:::
