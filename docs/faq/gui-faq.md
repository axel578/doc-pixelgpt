---
sidebar_position: 4
---

# GUI FAQ

Questions about GUI generation.

<details>
<summary><strong>Which model is best for GUIs?</strong></summary>

**Recommendations by plan:**

**Ultimate plan ($49.99):**
```
ultimate extreme mc any gui v4
```

**Elite plan ($99.99):**
```
orion pro ultra top hq gui v1 (best overall)
elite mc any gui hq boosted v3 (also excellent)
```

[Complete GUI model comparison →](../models/models-by-type/gui-models)

</details>

<details>
<summary><strong>Can I make GUIs without premium?</strong></summary>

**No.** GUI generation requires:
- Premium subscription ($49.99+ recommended)
- Style Selector (premium feature)

**Free tier:** Cannot create GUIs.

</details>

<details>
<summary><strong>Why are GUI slots in wrong positions?</strong></summary>

**Solutions:**

**1. Increase Shape parameters:**
```
Shape Strength: 9
Shape Generation %: 9
Shape Affected By Details: 10
```

**2. Redraw base with clearer slots**

**3. Try different model version**

[GUI troubleshooting →](../tutorials/gui-creation/gui-troubleshooting)

</details>

<details>
<summary><strong>What size should GUI be?</strong></summary>

**Custom server GUIs:** 256×256 pixels (standard)

**Vanilla replacements:** 176×166 pixels (chest)

**Inventory-style:** 192×192 pixels

**Use 256×256** for most custom GUIs.

</details>

<details>
<summary><strong>Do I need Photopea for GUIs?</strong></summary>

**Yes** (or similar image editor).

**Why:** Must create base/shape images for Style Selector.

**Photopea is free:** https://photopea.com

[Photopea tutorial →](../tutorials/gui-creation/photopea-setup)

</details>

<details>
<summary><strong>How many tries before good GUI?</strong></summary>

**Typical:** 5-10 iterations for first good result

**Experienced users:** 2-5 iterations

**First GUI ever:** May take 10-15 tries (learning curve)

**This is normal** - GUIs are most complex feature.

</details>

<details>
<summary><strong>Can I skip Style Selector for GUIs?</strong></summary>

**No.** Style Selector is **mandatory** for GUIs.

**Without Style Selector:** Random, unusable layouts.

**With Style Selector:** Controlled, proper GUIs.

[Style Selector guide →](../features/style-selector/style-selector-overview)

</details>

<details>
<summary><strong>What is base vs shape image?</strong></summary>

**Base image:** Guides colors/style (with noise)

**Shape image:** Guides layout/structure (without noise)

**Both needed** for GUIs.

[Base image guide →](../features/style-selector/base-image)  
[Shape image guide →](../features/style-selector/shape-image)

</details>

<details>
<summary><strong>Why does my GUI look flat/boring?</strong></summary>

**Cause:** Too little noise in base image.

**Fix:**
```
Add more noise: 30-40% instead of 20%
Lower Shape Strength: 9 → 7
Let AI be more creative
```

</details>

<details>
<summary><strong>Can I use GUI in vanilla Minecraft?</strong></summary>

**For vanilla chest replacement:**
- Resize to 176×166
- Replace generic_54.png

**For custom GUIs:**
- Need server plugin (DeluxeMenus, ChestCommands, etc.)
- Or datapack support

**Custom GUIs don't work in vanilla** without mods/plugins.

</details>

:::success GUI Questions Answered
[See complete GUI tutorial →](../tutorials/gui-creation/gui-complete-guide)
:::
