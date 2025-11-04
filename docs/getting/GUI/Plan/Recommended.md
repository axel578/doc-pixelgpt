# ⚙️ Recommended Pre-Generation Setup

import Image from '@theme/IdealImage';
import { GUIReferenceSettings } from '@site/docs/shared/two_images.mdx';

Before moving to model-specific plans, this recommended setup ensures your GUI structure and style are properly balanced for best results.

---
## Setup

### 🎯 What This Step Does

Your base GUI image defines **the structure and theme** —  
but it may still lack **texture depth**, **lighting balance**, or **fine details**.

That’s exactly what this “Recommended” setup improves.  
It refines your concept using the correct work flow stating by :

`256px Minecraft GUI Any Mini v1` model — designed to **enhance details**  
while **respecting your original layout**.

> 🧡 Think of it as:  
> “Your hand-crafted concept — refined and textured by PixelGPT.”

---

### 🧩 Configure Your Reference in PixelGPT

> Now we’ll apply the recommended reference settings in PixelGPT.
> These values tell the model how closely to follow your image,
> and how much freedom it has to add visual polish.

Select **MC ANY GUI 256 MINI** (Standard/Pixel art/256PX/MC ANY GUI 256 MINI).
![MC ANY GUI 256 MINI](/img/gui_ref_mc_any_gui_256_mini_v1.png)
Scroll down to the **“Select Image Reference”** section, then configure it as follows:
![Ref](/img/gui_ref_Select_Image_References.png)

| Setting | Value | Description |
|----------|--------|-------------|
| **Base Image** | your uploaded GUI (e.g. `Gui_Autumn_Base_256.png`) | The image you created earlier |
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
  label2="Recommended settings"
  alt1="Reference image example"
  alt2="Recommended settings"
  width1={20}
  width2={75}
/>

> 💡 **Tip:**  
> If your final result looks *too different* from your base,  
> try lowering `Shape Strength` to `6` or increasing `Image Strength` to `1.5`.

---

### 🧠 Write a Strong Prompt

The **prompt** defines your **style, theme, and materials**.  
Your image gives the *shape* — the prompt gives the *soul*.

> 🪄 **Rule:**  
> The more accurate your prompt, the better your GUI refinement will be. (150 Words max)

🧭 Follow the official guide:  
👉 [Prompting Is Key → GUI Generation (Graphical User Interfaces)](/docs/getting/prompting/Prompting_is_key#-gui-generation-graphical-user-interfaces)

---

### 💬 Get Help Writing Prompts

If you’re unsure how to write a perfect prompt — **use an AI helper** like ChatGPT or another LLM.

Here’s how:

> “Following this documentation, make me an image prompt for an "Inventory GUI" in an autumn style. [GUI Generation (Graphical User Interfaces)]"

This ensures your prompt stays:
- Structured correctly  
- Compatible with GUI generation  
- Optimized for your current PixelGPT model  

#### Final Prompt :
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

---

### ✅ Generate

Once your reference and prompt are ready:
1. Choose the model → `256px minecraft gui any mini v1`
2. Paste your prompt
3. Verify your reference settings (see Step 2)
4. Click **Generate**

PixelGPT will combine:
- Your **base image**  
- Your **reference settings**  
- Your **text prompt**

To create a **final, detailed, polished GUI** — while preserving the core design you built earlier.


<Image
  img={require('@site/static/img/Cozy_autumn_theme_mc-any-gui-256-mini-v1.png')}
  alt="Autumn GUI result generated with MC Any GUI 256 Mini v1"
  style={{
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
  }}
/>
<p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
  Result – Refined Autumn GUI generated with the Recommended setup
</p>

---

### 🧪 Don’t Forget to Experiment!

PixelGPT works best when you **test multiple combinations** — even small adjustments can completely change the mood and texture balance of your GUI.  
Here are some example variations you can try using the same base reference:

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
  }}
>
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

> 💡 **Tip:**  
> Try adjusting just one or two sliders at a time — for example:  
> `Shape Strength: 6` and `Image Strength: 2` —  
> this helps you learn how each setting affects the result.

---

## ✨ High-Detail Pass (256px Medium Any GUI MQ v1)

This step lets you **boost the level of detail** in your GUI — adding richer textures, sharper edges, and subtle lighting depth,  
while keeping the layout perfectly intact.

> 🧭 **When to use it**
> - Your previous result looks *too flat* or *too soft*
> - You want more **texture realism** or **fine pixel definition**

---

### ⚙️ Model

- **Model:** `256px medium any gui mq v1` 
![256px medium any gui mq v1](/img/gui_ref2_256px_medium_any_gui_mq_v1.png)
![Ref](/img/gui_ref2_Select_Image_References.png) 
- **Purpose:** Add detailed textures and sharper relief, without changing the overall composition

---

### 🧩 Recommended Reference Settings

| Setting | Value | Description |
|----------|--------|-------------|
| **Image Strength** | `3` | Keeps your base layout stable |
| **Shape Strength** | `10` | Maximum slot and frame precision |
| **Shape Details** | `10` | High-detail texture enhancement |
| **Shape Gen %** | `8` | Adds light procedural variety |
| **Overall Style** | `10` | Balances realism and theme consistency |
| **Blur Mask** | `0` | Keeps slots and edges perfectly sharp |

<GUIReferenceSettings 
  Image1={require('@site/static/img/gui_ref2.png')}
  Image2={require('@site/static/img/gui_ref2_settings_example.png')}
  label1="Reference image example"
  label2="High-Detail settings"
  alt1="Reference image example"
  alt2="Recommended settings"
  width1={20}
  width2={75}
/>

> ✅ **Tip:**  
> Leave “Divide base image strength by two” **unchecked** for strong fidelity.  
> If the result feels *too rigid*, you can enable it to soften the effect.

---

### 🧠 Workflow Advice
 
- use the **Recommended output** as your new reference to push details even further.  
  - ✅ Pros: richer and more artistic texture  
  - ⚠️ Cons: may slowly drift from your original shape — watch slot visibility

---

### 🔎 Quality Check Before Keeping the Result

✅ At 100% zoom, **slots and borders** should stay clean.  
✅ Avoid **overly dark** or **noisy** backgrounds.  
✅ Maintain strong contrast for readability.  
✅ If the result feels too chaotic:
- Lower **Shape Details → 8**
- Or raise **Image Strength → 4**
- Or drop **Overall Style → 9**

---

### 📸 Example Comparison

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
  }}
>
  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/Cozy_autumn_theme_inventory_GUI,_symmetrical.png')}
      alt="Recommended pass result (Mini v1)"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
      First pass (clean baseline)
    </p>
  </div>

  <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/A_coz.png')}
      alt="High-detail pass result (Medium MQ v1)"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
      High-detail pass (richer textures)
    </p>
  </div>
</div>

> 💡 **If readability drops** after this pass,  
> lower `Shape Details` to **8** or raise `Image Strength` slightly to **4** to stabilize your base.

### 🧪 Don’t Forget to Experiment!

PixelGPT truly shines when you **experiment with different combinations** —  
even small tweaks can **completely change** the texture depth, lighting, or color balance of your GUI.  

Here are a few **high-detail variations** generated from the same base image using different configurations:

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
  }}
>
  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment1.png')}
      alt="High detail variation 1"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment2.png')}
      alt="High detail variation 2"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/inventory_GUI2_Experiment3.png')}
      alt="High detail variation 3"
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
      }}
    />
  </div>
</div>

> 💡 **Tip:**  
> Adjust just one or two sliders at a time — for example:  
> `Shape Strength: 6` or `Image Strength: 2`  
> to better understand how each parameter shapes the final result. (learning is key)

---

> 🔶 **Next Step:**  
> Now that your base GUI is enhanced and refined,  
> move to your **specific plan** ([Starter](/docs/getting/Gui/Plan/Starter), [Pro](/docs/getting/Gui/Plan/Pro), [Enthusiast](/docs/getting/Gui/Plan/Enthusiast), [Advanced](/docs/getting/Gui/Plan/Advanced) or [Ultimate](/docs/getting/Gui/Plan/Ultimate))  
> to fine-tune realism, lighting, and style depth.