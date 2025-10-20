---
sidebar_position: 4
---

# Batch List

Managing and downloading batch jobs.

## 📋 What is Batch List?

**Batch List** shows all your batch jobs:
```
✅ Current processing batches
✅ Completed batches
✅ Failed batches
✅ Historical batches
```

**Access:** Features → Batch → Batch List tab

[SCREENSHOT: Batch List interface]

---

## 🗂️ Batch List Interface

### Batch Rows

**Each batch shows:**

```
┌────────────────────────────────────┐
│ Batch #12345                       │ ← Batch ID
│ Status: Complete ✓                 │ ← Status
│ Items: 10                          │ ← Prompt count
│ Created: 2024-12-15 14:30          │ ← Timestamp
│ [View Details] [Download]          │ ← Actions
└────────────────────────────────────┘
```

**Color coding:**
```
Green: Complete
Yellow: Processing
Red: Failed/Error
Gray: Queued
```

[SCREENSHOT: Batch list with different statuses]

### Sorting

**Newest batches at top** (chronological order)

**Scroll down** to see older batches.

---

## 🔍 Batch Details

### Opening Details

**Click "View Details" button** or click batch row.

**Modal opens** showing batch contents.

[SCREENSHOT: Batch details modal]

### Details Grid

**Grid layout:**

```
┌────────┬────────┬────────┐
│ Sword  │ Pick   │ Axe    │ ← Each cell = one prompt
│ [imgs] │ [imgs] │ [imgs] │ ← Images generated
├────────┼────────┼────────┤
│ Shovel │ Hoe    │ Helmet │
│ [imgs] │ [imgs] │ [imgs] │
└────────┴────────┴────────┘
```

**Each cell contains:**
- Original prompt
- Generated images (4 items typical)
- Status (complete/processing/failed)

**Click images** to view full size.

### Cell Actions

**Each cell has options:**

```
[Redo] - Regenerate this specific prompt
[Download] - Download just this cell's images
```

**Use redo if:**
- Result unsatisfactory
- Generation failed
- Want different variation

---

## 💾 Downloading Batch Results

### Download Methods

**From batch details modal:**

#### Download Selected

**Steps:**
```
1. Check boxes on cells you want
2. Click "Download Selected"
3. Choose: Raw or Processed
4. ZIP file downloads
```

**Raw vs Processed:**
```
Raw: Original generated images (with white background)
Processed: Backgrounds removed automatically
```

**Recommended:** Processed (saves manual background removal)

#### Download All

**Click "Download All" button**

**Downloads:**
- All images from batch
- Organized by prompt
- As ZIP file

#### Download Processed

**Automatically removes backgrounds:**

```
✅ White backgrounds removed
✅ Transparency added
✅ Ready for Minecraft
```

**Saves time** - no manual Grid Editor work.

---

## 📊 Batch Status

### Status Types

**Processing:**
```
🟡 Batch currently running
⏳ Check back later
📊 Shows progress (3/10 complete)
```

**Complete:**
```
✅ All prompts finished
📥 Ready to download
🎉 View results
```

**Failed:**
```
❌ Batch encountered error
🔍 Check details for which prompts failed
🔄 Redo failed prompts
```

**Queued:**
```
⏸️ Waiting to start
⏳ Previous batches processing first
```

---

## 🔄 Managing Batches

### Redo Specific Items

**If some items in batch are bad:**

```
1. Open batch details
2. Find unsatisfactory cell
3. Click "Redo" on that cell
4. Only that prompt regenerates
5. New result replaces old
```

**Don't need to redo entire batch** - just failed/bad items.

### Deleting Batches

**Remove old batches:**

```
[Delete] button on batch row
```

**Deletes batch job** from list (images may still be in My Images).

---

## 🎯 Batch Organization

### Naming Batches

**Batches auto-named:**
```
Batch #[ID] - [Date]
```

**Identify by:**
- Creation date
- Number of items
- Model used (shown in details)

**Keep notes externally:**
```
Batch #12345 = Diamond Tool Set
Batch #12346 = Medieval Armor
```

### Tracking Progress

**For large batches:**

```
Check Batch List regularly:
- Every 30 minutes for 10-item batches
- Every 1-2 hours for 50-item batches
- Every 4-6 hours for 100-item batches
```

**Refresh page** to update status.

---

## 📈 Batch History

### Accessing Old Batches

**All batches remain in list:**

```
Scroll down to see older batches
No limit on history
Can re-download completed batches
```

**Use for:**
- Re-downloading if files lost
- Comparing different approaches
- Reference for future batches

---

## 🔧 Batch List Troubleshooting

<details>
<summary>Batch stuck at "Processing"</summary>

**If processing >6 hours:**

**Steps:**
1. Wait full 6 hours (large batches take time)
2. Refresh page
3. Check server status
4. Contact support if still stuck after 12 hours

**Usually:** Just needs more time, batches are slow.

</details>

<details>
<summary>Can't download batch results</summary>

**Check:**
- Batch status = Complete?
- Browser popup blocker enabled?
- Sufficient disk space?

**Try:**
- Allow popups from pixelgpt.io
- Download smaller selections
- Different browser

</details>

<details>
<summary>Downloaded ZIP is empty/corrupted</summary>

**Solutions:**
1. Try downloading again
2. Download selected cells individually
3. Use different unzip program
4. Contact support if persists

</details>

---

## ✅ Batch List Mastery Checklist

Effective batch management:

- [ ] Can find batches in Batch List
- [ ] Understand status indicators
- [ ] Can open batch details
- [ ] Can download results (selected or all)
- [ ] Know how to redo specific items
- [ ] Understand processed vs raw downloads

:::success Batch List Mastered
[Complete batch generation guide →](batch-overview)

[Continue to special tools →](../special-tools/)
:::
