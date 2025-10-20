---
sidebar_position: 9
---

# Quick Troubleshooting

Top 10 issues and instant fixes.

## 1. Generation Stuck / Not Appearing

**Symptoms:** Clicked generate, nothing happens after 5+ minutes

**Fix:**
```
Click "Delete" button 6 times → Retry generation
```

**Why:** Queue got stuck, this resets it

---

## 2. Bad Quality / Wrong Result

**Symptoms:** Generated image doesn't match prompt or looks bad

**Check:**
- ❌ Using English? (not French/Korean)
- ❌ Specific enough? (not just "sword")
- ❌ Right model? (Baby vs Ultimate)

**Fix:**
1. Use English prompts
2. Be more specific: `blue diamond sword with golden handle`
3. Try better model (Newbie Premium or Ultimate)

---

## 3. Can't Remove Background

**Symptoms:** Magic wand doesn't work or selects wrong areas

**Fix:**
1. Make sure wand tool is selected (🪄)
2. Adjust threshold slider (try 5-7)
3. Click white areas multiple times
4. Zoom in for precision

[See detailed guide →](remove-background-quick)

---

## 4. Items Too Big/Small in Grid

**Symptoms:** Items don't fit grid cells properly

**Fix:** Recalculate pixel size

```
Pixel Size = Canvas Size ÷ (Grid Count × 16)
```

Example: 512 ÷ 32 = **16**

[See grid guide →](extract-items-quick)

---

## 5. White Background in Minecraft

**Symptoms:** Item has white box around it in game

**Fix:** You forgot to remove background

1. Reopen image in Grid Editor
2. Use magic wand on white areas
3. Re-extract item
4. Make sure saved as PNG

---

## 6. Can't Find My Images

**Symptoms:** Generated but can't find images

**Solution:**
1. Top-right → **Account** → **My Images**
2. OR check left sidebar for recent generations

Free users: images are public  
Premium users: images are private

---

## 7. Generation Failed / Error

**Common errors:**

| Error | Fix |
|-------|-----|
| "Daily limit reached" | Wait 24h or upgrade plan |
| "Model doesn't support..." | Turn off incompatible parameter |
| "Invalid image size" | Check reference image is correct size |

---

## 8. Prompt Ignored / Wrong Interpretation

**Symptoms:** AI generates something completely different

**Causes:**
- Prompt not in English
- Too vague or ambiguous
- Contains jargon AI doesn't know

**Fix:**
```
❌ elytra
✅ black angel wings

❌ cool sword  
✅ glowing blue diamond sword
```

[Prompting tips →](essential-prompting-tips)

---

## 9. GUI Slots Wrong

**Symptoms:** GUI has wrong slot positions

**Fix:**
1. Increase **Shape Strength** to 8-9
2. Increase **Shape Generation %** to 8-9
3. Redraw base image with clearer slots

[Complete GUI guide →](generate-first-gui)

---

## 10. Can't Access Premium Models

**Symptoms:** Models greyed out or say "Premium"

**Solution:**
- You need a premium subscription
- [View pricing plans](https://pixelgpt.io/pricing)

Free users can only use **Newbie** (Baby) models

---

## Emergency Resets

### Clear Stuck Queue
```
Click "Delete" 6 times
```

### Reset Interface
```
Refresh page (F5 or Ctrl+R)
```

### Clear Browser Cache
```
Ctrl+Shift+Delete → Clear cache
```

---

## Still Having Issues?

1. Check [complete FAQ →](../faq/)
2. Join [Discord support](https://discord.gg/pixelgpt)
3. [Contact support](https://pixelgpt.io/contact)

:::tip Most Common Fix
90% of issues are solved by:
1. Using **English prompts**
2. Being more **specific**
3. **Waiting** (not expecting instant results)
4. Clicking **Delete 6 times** if stuck
:::
