---
sidebar_position: 6
---

# Troubleshooting FAQ

Common technical issues and fixes.

<details>
<summary><strong>Generation stuck, not appearing after 5+ minutes</strong></summary>

**Solution:** Click **"Delete" button 6 times** rapidly.

**Then:** Regenerate.

**Why this works:** Resets stuck queue.

</details>

<details>
<summary><strong>Can't login / Forgot password</strong></summary>

**Forgot password:**
1. Click "Forgot Password?" on login
2. Enter your email
3. Check email for reset code
4. Enter code + new password

**Can't login:**
- Check caps lock
- Verify email spelling
- Reset password if unsure

</details>

<details>
<summary><strong>Images disappeared</strong></summary>

**Check:**
1. Account → My pictures (all images here)
2. Not deleted accidentally?
3. Logged into correct account?

**If truly missing:** Contact support.

</details>

<details>
<summary><strong>Can't remove background properly</strong></summary>

**Solutions:**

**1. Adjust threshold:**
```
Too much selected? Lower to 4-5
Too little selected? Raise to 6-7
```

**2. Click multiple times:**
```
Don't expect one click to do everything
Click all white areas separately
```

**3. Zoom in:**
```
Scroll wheel to zoom
Click precisely
```

[Background removal guide →](../features/image-tools/background-removal)

</details>

<details>
<summary><strong>Items are wrong size when extracted</strong></summary>

**Cause:** Wrong Pixel Size calculation.

**Fix:**
```
Formula: Pixel Size = Canvas ÷ (Grid × Item Size)

Example:
Canvas: 512×512
Grid: 2×2
Item: 16×16
Pixel Size = 512 ÷ 32 = 16 ✓
```

[Grid Editor guide →](../features/image-tools/image-grid-editor)

</details>

<details>
<summary><strong>Texture has white box in Minecraft</strong></summary>

**Cause:** Didn't remove background.

**Fix:**
1. Reopen Grid Editor
2. Use magic wand on white areas
3. Make transparent
4. Re-extract item
5. Re-download

**Verify:** Background should be checkered (transparent) before downloading.

</details>

<details>
<summary><strong>Downloaded file is JPEG not PNG</strong></summary>

**Pixel GPT only exports PNG.**

**If you have JPEG:**
- You converted it after download
- Or browser changed it

**Always download from Grid Editor:** "Save as image (16×16)"

**Format:** Always PNG.

</details>

<details>
<summary><strong>Can't access premium models</strong></summary>

**Check:**
1. Do you have premium subscription?
2. Subscription active? (not expired)
3. Looking in right tab? (Expert tab shows all)

**Models greyed out = Need higher plan tier.**

</details>

<details>
<summary><strong>Batch generation not working</strong></summary>

**Check:**
1. Premium subscription? (required)
2. Minimum 4 prompts?
3. Model selected?
4. Daily batch quota not exceeded?

**Wait:** Batches take time (1-4 hours for large batches).

[Batch guide →](../features/batch-generation/batch-overview)

</details>

<details>
<summary><strong>Style Selector not working</strong></summary>

**Check:**
1. Reference images uploaded?
2. Images selected as [B], [SH], or [S]?
3. Clicked "Apply Selections" button?
4. Strength values > 0?
5. Model supports Style Selector?

**Most common:** Forgot "Apply Selections".

[Style Selector guide →](../features/style-selector/style-selector-overview)

</details>

:::success Issues Resolved
[See complete troubleshooting →](../quick-start/troubleshooting-quick)
:::
