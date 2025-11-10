# ⚙️ Starter Plan – Simple Enhancement Setup

import Image from '@theme/IdealImage';
import { GUIReferenceSettings } from '@site/docs/shared/two_images.mdx';

The **Starter Plan** is designed to keep your GUI **simple, clean, and visually consistent**,  
while still improving its **color harmony** and **readability** with PixelGPT's core model.

This setup is perfect if you're just starting out or want to refine your base concept  
**without overcomplicating** the details.

---

## 🎯 What This Plan Does

Your base image already defines the **main layout and mood**,  
but it might still feel **flat** or **too uniform**.

The **Starter Plan** gently enhances it using the  
**MC ANY GUI 256 V4** model — adding slight texturing, color balance, and subtle depth.  
It's the perfect balance between *simplicity* and *clarity*.

> 🧡 Think of it as:  
> "Your base GUI — lightly polished for clean presentation."

---

## 🔄 Advanced Workflows – Progressive Enhancement

After completing your Starter Plan, you can take your GUI even further with **progressive enhancement workflows**. These techniques add richer textures, better lighting, and professional polish while preserving your original design.

---

## 🎯 Understanding the Two Workflows

Your base GUI image defines **the structure and theme** — but it may still lack **texture depth**, **lighting balance**, or **fine details**.

PixelGPT offers **two distinct workflows** to refine your concept, depending on your needs:

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '2rem', 
  margin: '2rem 0'
}}>
  <div style={{ 
    padding: '1.5rem', 
    border: '2px solid #ff9d4d', 
    borderRadius: '12px',
    backgroundColor: '#fff9f5'
  }}>
    <h3>🚀 Workflow A: Two-Pass Refinement</h3>
    <p><strong>Best for:</strong> Maximum control and progressive enhancement</p>
    <ol>
      <li>
        <strong>First Pass:</strong> MC ANY GUI 256 MINI<br/>
        <em>Enhances details while respecting your layout</em>
      </li>
      <li>
        <strong>Second Pass:</strong> 256px Medium Any GUI MQ v1<br/>
        <em>Adds rich textures and final polish</em>
      </li>
    </ol>
    <p>✅ <strong>Advantages:</strong></p>
    <ul>
      <li>Progressive refinement with checkpoints</li>
      <li>Better control over final result</li>
      <li>Easier to adjust if something goes wrong</li>
    </ul>
  </div>

  <div style={{ 
    padding: '1.5rem', 
    border: '2px solid #4d9dff', 
    borderRadius: '12px',
    backgroundColor: '#f5f9ff'
  }}>
    <h3>⚡ Workflow B: Direct High-Detail</h3>
    <p><strong>Best for:</strong> Speed and immediate high-quality results</p>
    <ol>
      <li>
        <strong>Single Pass:</strong> 256px Medium Any GUI MQ v1<br/>
        <em>Directly generates high-detail output</em>
      </li>
    </ol>
    <p>✅ <strong>Advantages:</strong></p>
    <ul>
      <li>Faster workflow (one generation only)</li>
      <li>Immediately rich textures</li>
      <li>Perfect when you know exactly what you want</li>
    </ul>
    <p>⚠️ <strong>Consideration:</strong></p>
    <ul>
      <li>Less room for intermediate adjustments</li>
      <li>May require more precise initial settings</li>
    </ul>
  </div>
</div>

> 💡 **Which workflow should you choose?**
> - **New to PixelGPT?** → Start with **Workflow A** for better learning and control
> - **Experienced user?** → Try **Workflow B** for faster iterations
> - **Complex theme?** → Use **Workflow A** to validate each step
> - **Simple refinement?** → **Workflow B** can save time

---

## 🚀 Workflow A: Two-Pass Refinement

This approach gives you **two checkpoints** to evaluate and adjust your GUI before reaching the final result.

### 📍 Step 1: First Pass — MC ANY GUI 256 MINI v1

> 🎯 **Goal:** Enhance your base concept with improved details while maintaining perfect structural fidelity.

#### 🧩 Model Selection

Select **MC ANY GUI 256 MINI** (Standard/Pixel art/256PX/MC ANY GUI 256 MINI).

![MC ANY GUI 256 MINI](@site/static/img/gui_ref_mc_any_gui_256_mini_v1.png)

#### 🎛️ Reference Settings

Scroll down to the **"Select Image Reference"** section, then configure it as follows:

![Reference location](@site/static/img/gui_ref_Select_Image_References.png)

| Setting | Value | Why This Value? |
|----------|--------|-----------------|
| **Base Image** | your uploaded GUI (e.g. `Gui_Autumn_Base_256.png`) | The concept image you created earlier |
| **Image Strength** | `1` | Keeps the base layout fully recognized |
| **Shape Strength** | `8` | Strong focus on preserving slot and frame structure |
| **Shape Details** | `8` | Balanced texture refinement for clear definition |
| **Shape Gen %** | `10` | Generates minor adjustments for texture improvement |
| **Overall Style** | `10` | Enhances aesthetic while keeping the core look |
| **Blur Mask** | `0` | No blur applied — keeps slots sharp |

✅ **Check the box:** `Divide base image strength by two`  
Then click **Apply Selections**.

<GUIReferenceSettings 
  Image1={require('@site/static/img/gui_ref.png')}
  Image2={require('@site/static/img/gui_ref_settings_example.png')}
  label1="Reference image example"
  label2="First pass settings"
  alt1="Reference image"
  alt2="Settings for first pass"
  width1={20}
  width2={75}
/>

> 💡 **Adjustment Tips:**  
> - Result too different from your base? → Lower `Shape Strength` to `6` or increase `Image Strength` to `1.5`
> - Not enough detail? → Increase `Shape Details` to `9`

#### 🧠 Write Your Prompt

The **prompt** defines your **style, theme, and materials**.  
Your image gives the *shape* — the prompt gives the *soul*.

> 🪄 **Rule:** The more accurate your prompt, the better your GUI refinement will be. (150 words max)

🧭 Follow the official guide:  
👉 [Prompting Is Key → GUI Generation](/docs/getting/prompting/Prompting_is_key#-gui-generation-graphical-user-interfaces)

**Need help writing prompts?** Use an AI helper like ChatGPT:

> "Following this documentation, make me an image prompt for an "Inventory GUI" in an autumn style."

**Example Final Prompt:**

> inventory GUI in a warm autumn theme, inspired by cozy forest vibes. The interface features wooden textures, golden light, and scattered orange leaves and trees.
> 
> Top-left: 4 vertical armor slots (helmet, chestplate, leggings, boots) framed by carved wood with small leaf accents.
> 
> Top-center-left: player model preview on a wooden platform surrounded by falling leaves.
> 
> Below it (bottom-right of section): single off-hand slot.
> 
> Top-right: 2x2 crafting grid with one output slot on the right.
> 
> Bottom: standard player inventory (9x4 = 36 slots), outlined clearly with warm tones.
> 
> The background uses dark oak wood and soft sunbeams filtering through trees.
> 
> The frame is carved oak, decorated with acorns, vines, and mushrooms.
> 
> Lighting is gentle and amber-colored, evoking late autumn afternoon light.
> 
> Medieval style.

#### ✅ Generate First Pass

1. Choose the model → `MC ANY GUI 256 MINI v1`
2. Paste your prompt
3. Verify your reference settings
4. Click **Generate**

**Result Example:**

![First pass result](@site/static/img/Cozy_autumn_theme_mc-any-gui-256-mini-v1.png)  
*First Pass Result – Clean baseline with enhanced details*

#### 🧪 Experiment with Variations

Don't settle for your first result! Try adjusting one or two sliders at a time:

<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '2rem auto',
}}>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI_Experiment1.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI_Experiment2.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI_Experiment3.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
</div>

---

### 📍 Step 2: Second Pass — 256px Medium Any GUI MQ v1

> 🎯 **Goal:** Add rich textures, sharper edges, and subtle lighting depth while keeping the layout perfectly intact.

#### 🧩 Model Selection

Switch to **256px Medium Any GUI MQ v1** model:

![256px Medium Any GUI MQ v1](@site/static/img/gui_ref2_256px_medium_any_gui_mq_v1.png)

#### 🎛️ Reference Settings

**Use your First Pass result as the new reference image.**

![Reference location](@site/static/img/gui_ref2_Select_Image_References.png)

| Setting | Value | Why This Value? |
|----------|--------|-----------------|
| **Base Image** | First Pass result | Your refined GUI from Step 1 |
| **Image Strength** | `3` | Keeps your base layout stable |
| **Shape Strength** | `10` | Maximum slot and frame precision |
| **Shape Details** | `10` | High-detail texture enhancement |
| **Shape Gen %** | `8` | Adds light procedural variety |
| **Overall Style** | `10` | Balances realism and theme consistency |
| **Blur Mask** | `0` | Keeps slots and edges perfectly sharp |

✅ **Leave "Divide base image strength by two" UNCHECKED** for strong fidelity.

<GUIReferenceSettings 
  Image1={require('@site/static/img/gui_ref2.png')}
  Image2={require('@site/static/img/gui_ref2_settings_example.png')}
  label1="First pass result as reference"
  label2="Second pass settings"
  alt1="Using first pass"
  alt2="High-detail settings"
  width1={20}
  width2={75}
/>

> 💡 **Adjustment Tips:**
> - Result too rigid? → Enable "Divide base image strength by two"
> - Too chaotic? → Lower `Shape Details` to `8` or increase `Image Strength` to `4`
> - Lost some readability? → Increase `Image Strength` to `4`

#### 🧠 Prompt Strategy

You can either:
- **Use the same prompt** from Step 1 (for consistency)
- **Refine the prompt** to emphasize textures: add words like "detailed wood grain", "subtle shadows", "rich textures"

#### ✅ Generate Second Pass

1. Select model → `256px Medium Any GUI MQ v1`
2. Upload your **First Pass result** as reference
3. Apply the recommended settings
4. Use your prompt (same or refined)
5. Click **Generate**

**Result Comparison:**

<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '2rem auto',
}}>
  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/Cozy_autumn_theme_inventory_GUI,_symmetrical.png')}
      alt="First pass result"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
      Step 1: First Pass (clean baseline)
    </p>
  </div>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/A_coz.png')}
      alt="Second pass result"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
      Step 2: Second Pass (rich textures + depth)
    </p>
  </div>
</div>

#### 🧪 Experiment with High-Detail Variations

<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '2rem auto',
}}>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment1.png')}
      alt="High detail variation 1"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment2.png')}
      alt="High detail variation 2"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment3.png')}
      alt="High detail variation 3"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
</div>

---

## ⚡ Workflow B: Direct High-Detail Generation

This workflow **skips the first pass** and goes directly to high-detail generation using your original base image.

> 🎯 **Best for:** Experienced users who want faster results and know their settings well.

### 🧩 Model Selection

Select **256px Medium Any GUI MQ v1** directly:

![256px Medium Any GUI MQ v1](@site/static/img/gui_ref2_256px_medium_any_gui_mq_v1.png)

### 🎛️ Reference Settings

**Use your original base image** (the one you created in Photopea).

| Setting | Value | Why This Value? |
|----------|--------|-----------------|
| **Base Image** | Your base GUI (e.g. `Gui_Autumn_Base_256.png`) | Your original concept image |
| **Image Strength** | `2-3` | Strong enough to maintain structure |
| **Shape Strength** | `9-10` | Maximum precision for slots and frames |
| **Shape Details** | `9-10` | High detail from the start |
| **Shape Gen %** | `8-10` | Balanced generation freedom |
| **Overall Style** | `10` | Full style application |
| **Blur Mask** | `0` | Keep everything sharp |

✅ **Check the box:** `Divide base image strength by two` (recommended for direct workflow)

> 💡 **Key Difference from Two-Pass:**
> - Higher `Image Strength` (2-3 instead of 1) because you're working from a simpler base
> - May require more experimentation to find the perfect balance

### 🧠 Prompt Strategy

Use a **detailed, texture-rich prompt** since you're generating everything in one pass:

**Example Enhanced Prompt:**

> Detailed inventory GUI in a warm autumn theme with rich wooden textures and intricate details. The interface features deep oak wood grain, golden ambient lighting, and scattered orange maple leaves with realistic shadows.
> 
> Top-left: 4 vertical armor slots with carved wooden frames, leaf vine decorations, and subtle depth.
> 
> Top-center: player model preview on weathered wood platform, surrounded by gently falling leaves with motion blur.
> 
> Bottom-right of player area: detailed off-hand slot with consistent frame style.
> 
> Top-right: 2x2 crafting grid with refined borders and one output slot, all matching the autumn aesthetic.
> 
> Bottom section: standard 9x4 player inventory with clear slot definition and warm ambient shadows.
> 
> Background: textured dark oak panels with natural wood grain, soft sunbeam highlights filtering through autumn trees.
> 
> Decorative elements: acorns, twisted vines, small mushrooms, and carved leaf patterns in the frame borders.
> 
> Lighting: warm amber glow suggesting late afternoon autumn light, with subtle shadows for depth.
> 
> Style: Medieval fantasy with attention to wood texture detail and natural material realism.

### ✅ Generate

1. Select model → `256px Medium Any GUI MQ v1`
2. Upload your **original base image**
3. Apply settings (higher Image Strength for direct method)
4. Use your enhanced, detailed prompt
5. Click **Generate**

### 📸 Expected Results

**Result Example – Direct High-Detail Generation:**

![Workflow B result](@site/static/img/A_coz.png)  
*Workflow B Result – High-detail GUI in a single generation*

#### 🧪 Workflow B Variations

Try different settings to achieve various levels of detail and atmosphere:

<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '2rem auto'
}}>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment1.png')}
      alt="Workflow B variation 1"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
    <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.3rem' }}>
      Image Strength: 2.5
    </p>
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment2.png')}
      alt="Workflow B variation 2"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
    <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.3rem' }}>
      Image Strength: 3
    </p>
  </div>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment3.png')}
      alt="Workflow B variation 3"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
    <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.3rem' }}>
      Shape Gen %: 10
    </p>
  </div>
</div>

### ⚖️ Pros and Cons

**Advantages:**
- ✅ Faster (one generation instead of two)
- ✅ Immediately high-quality textures
- ✅ Less steps to manage

**Considerations:**
- ⚠️ Harder to troubleshoot if result isn't perfect
- ⚠️ May require more trial-and-error with settings
- ⚠️ Less control over intermediate refinement

---

## 🔎 Quality Checklist (Both Workflows)

Before finalizing your GUI, verify these points at **100% zoom**:

| Check | What to Look For | How to Fix |
|-------|------------------|------------|
| **Slot Clarity** | All slots visible and well-defined | Increase `Shape Strength` or `Image Strength` |
| **Border Sharpness** | Clean edges, no blur | Keep `Blur Mask` at 0, check `Shape Details` |
| **Background Balance** | Not too dark, not too noisy | Lower `Shape Details` or adjust prompt |
| **Contrast** | Good readability between slots and background | Adjust `Overall Style` or refine color in prompt |
| **Theme Consistency** | Visual style matches your concept | Refine prompt, check `Overall Style` value |
| **Texture Depth** | Rich details without chaos | Balance `Shape Details` and `Image Strength` |

---

## 📊 Workflow Comparison Summary

| Aspect | Workflow A (Two-Pass) | Workflow B (Direct) |
|--------|----------------------|---------------------|
| **Speed** | Slower (2 generations) | Faster (1 generation) |
| **Control** | High (checkpoint after each step) | Medium (one-shot result) |
| **Learning Curve** | Easier for beginners | Requires more experience |
| **Best For** | Complex themes, learning process | Quick iterations, experienced users |
| **Adjustment Flexibility** | Excellent | Good but requires regeneration |
| **Final Quality** | Consistently high | High if settings are correct |

---

## 🎓 Tips for Success

### For Workflow A (Two-Pass):
1. **Don't skip evaluation** between passes — check if Step 1 result is satisfactory before moving to Step 2
2. **Save your First Pass** results — you might want to try different Step 2 settings
3. **Use consistent prompts** unless you specifically want to emphasize different aspects in Step 2

### For Workflow B (Direct):
1. **Start with conservative settings** then increase detail if needed
2. **Write more detailed prompts** to compensate for the single pass
3. **Test with a simple theme first** before attempting complex styles
4. **Keep Image Strength between 2-3** for good balance

### Universal Tips:
- 🧪 **Always experiment** — even small slider changes create different results
- 💾 **Save your best results** before trying variations
- 📝 **Document your settings** for themes you like
- 🔄 **Iterate gradually** — adjust one parameter at a time to learn its effect

---

## 🧩 Configure Your Reference in PixelGPT

> Here's how to set your parameters to achieve a clean, readable result.

### Step 1: Select the Model

Select **MC ANY GUI 256 V4** (Standard/Pixel art/256PX/MC ANY GUI 256 V4).

![MC ANY GUI 256 V4 model selection](@site/static/img/gui_ref_mc_any_gui_256_v4.png)

### Step 2: Configure Reference Settings

Scroll down to the **"Select Image Reference"** section, then configure it as follows:

![Reference settings location](@site/static/img/gui_ref3_Select_Image_References.png)

| Setting | Value | Description |
|----------|--------|-------------|
| **Base Image** | your uploaded GUI (e.g. `Gui_Autumn_Base_256.png`) | The image you created earlier |
| **Image Strength** | `2` | Keeps your composition while allowing light flexibility |
| **Shape Strength** | `7` | Preserves the main structure without making it too rigid |
| **Shape Details** | `10` | Adds fine edges and slight pixel sharpness |
| **Shape Gen %** | `8` | Brings subtle texture and pattern variation |
| **Overall Style** | `10` | Balances visual harmony and theme consistency |
| **Blur Mask** | `0` | Keeps slots crisp and readable |

✅ **Check the box:** `Divide base image strength by two`  
Then click **Apply Selections**.

<GUIReferenceSettings 
  Image1={require('@site/static/img/gui_ref2.png')}
  Image2={require('@site/static/img/gui_ref2_settings_example.png')}
  label1="Base selection"
  label2="Select the image reference"
  alt1="Base selection"
  alt2="Image reference settings"
  width1={15}
  width2={70}
/>

> 💡 **Adjustment Tips:**  
> - Result too dull or washed out? → Increase **Image Strength** to `3`  
> - Too different from base? → Lower **Shape Strength** to `6` for smoother blending

---

## 🧠 Write Your Prompt

For the Starter Plan, keep your prompt **simple and descriptive**.

Focus on the **main theme**, **color palette**, and **basic atmosphere**.

### Example Starter Prompt:

> Inventory GUI in a warm autumn theme, inspired by cozy forest vibes. The interface features wooden textures, golden light, and scattered orange leaves and trees.  
> Top-left: 4 vertical slots framed by carved wood with small leaf accents.  
> To his right (Top-left): Preview surrounded by falling leaves.  
> Below it (bottom-right of section): single off-hand slot.  
> Top-right: 2x2 crafting grid with one output slot on the right.  
> Bottom: standard player inventory (9x4 = 36 slots), outlined clearly with warm tones.  
> The background uses dark oak wood and soft sunbeams filtering through trees.  
> The frame is carved oak, decorated with acorns, vines, and mushrooms.  
> Lighting is gentle and amber-colored, evoking late autumn afternoon light.  
> Medieval style.

🧭 Follow the official guide for structure:  
👉 [Prompting Is Key → GUI Generation (Graphical User Interfaces)](/docs/getting/prompting/Prompting_is_key#-gui-generation-graphical-user-interfaces)

---

## ✅ Generate Your Starter Plan GUI

Once your reference and prompt are ready:

1. Choose the model → `MC ANY GUI 256 V4`  
2. Paste your prompt  
3. Verify your **reference settings**  
4. Click **Generate**

PixelGPT will now take your simple concept and **refine it with balanced detail**,  
creating a GUI that's **readable, coherent, and lightly textured**.

### Result Example:

![Starter Plan GUI result](@site/static/img/inventory_GUI_Standard.png)  
*Result – Clean, balanced Autumn GUI generated with Starter Plan*

---

## ✏️ Post-Generation Refinement (Optional)

Once PixelGPT has generated your GUI, you may want to make **final touch-ups** before using it in-game.

Use [**Photopea**](https://www.photopea.com) to quickly fix or polish your GUI **without losing quality**.

### 🧰 When to Use This Step

- Some icons or slots look **too dark / too bright**  
- The **background color** needs slight adjustment  
- You notice **blurred edges or uneven borders**  
- You want to personalize the final tone or contrast

### 🪄 Quick Editing Workflow

1. Open your generated GUI PNG in [**Photopea**](https://www.photopea.com)  
2. Use **Hue/Saturation (Ctrl+U)** or **Brightness/Contrast (Ctrl+M)** to tweak color balance  
3. Use **Eraser Tool (E)** or **Brush Tool (B)** for clean-ups  
4. If borders look fuzzy, lightly trace them using **1px pencil** on a new layer  
5. Keep the **white background visible** and **don't resize** the 256×256 canvas  
6. Save as **PNG (no transparency)** once done

![GUI in Photopea](@site/static/img/inventory_GUI_Standard_Photopea.png)

### 🧠 Why Post-Editing Matters

> Even with perfect settings, PixelGPT sometimes leaves tiny imperfections —  
> small pixel artifacts, soft edges, or uneven highlights.  
> A quick manual pass can turn a *good result* into a **polished GUI**.

### Before and After Comparison

<GUIReferenceSettings 
  Image1={require('@site/static/img/inventory_GUI_Standard.png')}
  Image2={require('@site/static/img/inventory_GUI_Standard_Corected.png')}
  label1="Before"
  label2="After"
  alt1="Raw result"
  alt2="Corrected result"
  width1={48}
  width2={48}
/>

> 💡 **Pro Tip:**  
> Use `Image → Adjustments → Color Balance` for global tone tweaks.

---

## 🧪 Experimentation Examples

Small parameter changes can drastically affect your results.

<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '2rem auto',
}}>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/starter_experiment1.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/starter_experiment2.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/starter_experiment3.png')}
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
</div>

> 💡 **Experimentation Tip:**  
> Try small manual color edits in Photopea between tests — they often improve the next generation.

---

## 📊 Starter Plan Summary

### ✅ What You've Achieved

Your GUI now has:
- 🎨 Clean, balanced colors  
- 📐 Clear slot definition  
- ✨ Light polish  
- 🚀 Ready for basic use  

### 🎯 Best Use Cases

- 🎓 Learning PixelGPT basics  
- ⚡ Quick mockups  
- 🎮 Simple server GUIs  
- 👶 First-time creators  

### 🛠️ Skills Developed

- Configuring references  
- Writing prompts  
- Post-generation editing  
- Parameter experimentation  

### ⏱️ Time Investment

- Generation: 3–5 min  
- Touch-ups: 5–10 min  
- Experimentation: 10–15 min  
- **Total:** 10–30 min

---

## 🚀 Ready to Go Further?

Congratulations on completing your Starter Plan GUI! You now have the foundation to explore more advanced enhancement techniques.

### 💎 Upgrade to Pro Plan

Jump directly to professional-grade results with Ultimate Extreme models for maximum quality and lighting polish.

👉 [Upgrade to Pro Plan](/docs/getting/GUI/Plan/Pro)

<GUIReferenceSettings 
  Image1={require('@site/static/img/inventory_GUI_Standard_Corected.png')}
  Image2={require('@site/static/img/Inventory_GUI_in_a_warm_autumn_theme_newworkdlow_ultimate-extreme-hq-top-mc-any-gui-v1.png')}
  label1="Starter plan"
  label2="Pro plan"
  alt1="Starter plan result"
  alt2="Pro plan result"
  width1={47}
  width2={47}
/>

---

## 💡 Key Takeaways

✨ **Starter Plan + Advanced Workflows:**
- Start simple with Starter Plan to learn the basics
- Progress to Workflows A or B for enhanced quality
- Experiment with both workflows to find your preferred style
- Master these techniques before moving to Pro Plan

🎯 **Remember:**
- Every GUI is a learning opportunity
- Small tweaks make big differences
- There's no single "correct" approach
- Practice builds mastery

---

> 🌟 **Congratulations!** You now have a complete understanding of GUI enhancement from basic Starter Plan through advanced progressive workflows. You're ready to create professional-quality GUIs or explore the Pro Plan for ultimate results!