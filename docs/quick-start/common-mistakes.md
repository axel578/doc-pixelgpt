---
sidebar_position: 5
---

# Common Mistakes

Avoid these top mistakes beginners make.

## ❌ Mistake #1: Not Using English

**Problem:**
```txt
❌ épée en diamant (French)
❌ 다이아몬드 검 (Korean)
❌ espada de diamante (Spanish)
```

**Solution:**
```txt
✅ diamond sword
```

**Why?** AI training data is primarily English. Other languages produce significantly worse results.

---

## ❌ Mistake #2: Expecting Instant Results

**Problem:**  
User generates → refreshes page after 10 seconds → "Where's my image?"

**Reality:**
- Free users: **1-3 minutes**
- Premium users: **30s-1 minute**
- GUIs: **2-4 minutes**

**Solution:**  
Be patient. Check left sidebar for "new" badge.

[SCREENSHOT: Left sidebar with "new" badge]

:::tip Generation Stuck?
Wait 5 minutes → Click **Delete** 6 times → Retry
:::

---

## ❌ Mistake #3: Not Removing Background

**Problem:**  
Downloads image with white background → doesn't work in Minecraft

[SCREENSHOT: Item with white background]

**Solution:**
1. Click **Grid** button
2. Use **magic wand** tool
3. Click white areas
4. Extract item with transparency

[SCREENSHOT: Item with transparent background]

---

## ❌ Mistake #4: Vague Prompts

**Problem:**
```txt
❌ sword
❌ item
❌ cool weapon
```

**Solution:**
```txt
✅ diamond sword
✅ blue diamond sword with golden handle
✅ enchanted glowing sword with purple gems
```

**Rule:** Minimum 3 words, describe material + item + detail

---

## ❌ Mistake #5: Wrong Pixel Size

**Problem:**  
Extracts items → they're huge or tiny

[SCREENSHOT: Wrong pixel size result]

**Solution:**  
Calculate properly:

```
Pixel Size = Canvas Size ÷ (Grid Count × Item Size)
```

**Example:**
- Canvas: 512×512
- Grid: 2×2
- Item: 16×16
- Pixel Size: 512 ÷ 32 = **16**

[Common sizes reference →](extract-items-quick#pixel-size-chart)

---

## ❌ Mistake #6: Using Wrong Model

**Problem:**  
Wants high-quality item → uses Baby model → bad result

**Solution:**

| Goal | Use This Model |
|------|---------------|
| Free/test | Newbie → Baby 16px |
| Good quality | Newbie Premium → Ultimate 16px |
| Best quality | Expert → Ultimate Extreme 16px |
| GUI | Expert → Ultimate → 256px GUI models |

[Model selection guide →](which-model-to-use)

---

## ❌ Mistake #7: Multiple Items in One Prompt

**Problem:**
```txt
❌ diamond sword and ruby pickaxe and golden armor
```

**Result:** AI gets confused, generates nonsense

**Solution:**  
One item per prompt:
```txt
✅ diamond sword
```

Then generate separately:
```txt
✅ ruby pickaxe
✅ golden armor chestplate
```

---

## ❌ Mistake #8: Not Reading Error Messages

**Problem:**  
Generation fails → user immediately retries without reading error

**Common errors:**
- "Model doesn't support this parameter" → Turn off incompatible settings
- "Daily limit reached" → Wait 24h or upgrade plan
- "Invalid image size" → Check reference image dimensions

**Solution:**  
Read the error message, it tells you exactly what's wrong.

---

## ❌ Mistake #9: Forgetting Grid Settings

**Problem:**  
Opens Grid Editor → doesn't set grid size or pixel size → can't extract

[SCREENSHOT: Grid editor with no settings]

**Solution:**  
Always set:
1. **Pixel Size** (calculate using formula)
2. **Grid Size** (count items: 2×2, 3×3, etc.)

[Complete grid guide →](extract-items-quick)

---

## ❌ Mistake #10: Not Experimenting

**Problem:**  
First generation is bad → gives up

**Solution:**  
Try again with:
- Different prompt words
- Different model
- Different parameters
- Different reference images (for Style Selector)

**Example iteration:**
1. `sword` → too generic
2. `diamond sword` → better
3. `blue diamond sword` → good
4. `glowing blue diamond sword with golden handle` → perfect!

---

## ✅ Success Checklist

Before generating, check:

- [ ] Prompt is in **English**
- [ ] Prompt is **specific** (not just "sword")
- [ ] Using **correct model** for my goal
- [ ] Understand generation takes **time**
- [ ] Know how to **remove background**
- [ ] Know how to **calculate pixel size**
- [ ] Ready to **iterate** if needed

:::success Quick Fix Guide
- Bad quality → [Better prompting](essential-prompting-tips)
- Stuck generation → [Troubleshooting](troubleshooting-quick)
- Wrong model → [Model selection](which-model-to-use)
- Can't extract → [Grid guide](extract-items-quick)
:::
