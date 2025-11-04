---
sidebar_position: 1
---

import Image from '@theme/IdealImage';

# 🍂 Creating the Base GUI Image

Before generating a perfect interface with PixelGPT, it’s important to **start with a clear base image**.  
This image acts as a **concept sketch** — a simplified version of your final GUI idea.

---

## 🎨 Step 1: Choose a Reference GUI

Start from an **existing Minecraft GUI** (for example, the default player inventory).  
This ensures your proportions and slot placement remain consistent with the original layout.

> 📏 The base reference image should be **256×256 pixels** — this keeps proportions accurate and compatible with Minecraft scaling.

<p align="center">
  ![Inventory](/img/inventory_512.png)
</p>

> 💡 Tip: Always keep the Minecraft grid (slot size and spacing) visible and aligned correctly.
> [**Default Minecraft GUI**](http://bit.ly/4f2j4rq)

---

## 🍁 Step 2: Define Your Theme

Decide on a **visual theme** — in this example, we’ll use an **Autumn Theme**:
- Warm tones (orange, brown, red)
- Wood and leaves patterns
- Cozy, seasonal atmosphere  

Your base image doesn’t need to be beautiful — it’s meant to **show intent**, not perfection.

> 💡 Tip:  
> Use [**Photopea**](https://www.photopea.com/) — a free online Photoshop-like editor.  
> You can open PNGs directly, draw over them, change colors, or add details.  
>  
> ✅ Keep your **item or GUI centered** in the canvas for perfect alignment.  
> ✅ Ensure the **background stays white**, not transparent, for clear AI interpretation.  
> ✅ Save your image in `.PNG` format once done.

---

## ✏️ Step 3: Draw or Edit the Base Sketch

The goal of this step is to **modify the reference GUI** to fit your chosen theme.  
You’ll change **colors, borders, and decorative areas** to give your interface a clear identity before sending it to PixelGPT.

---

### 🧰 Recommended Tool: Photopea

> 💡 **Why Photopea?**  
> Unlike simpler editors, **Photopea** works with **layer-based objects** — just like Photoshop.  
> That means every element (slots, frames, decorations, etc.) stays **independent**, so you can easily move, color, or remove parts without affecting the rest of your image.  
>  
> This “object principle” makes Photopea perfect for GUI editing because:
> - You can **lock or hide layers** (e.g., keep the slot grid visible but uneditable).  
> - It preserves **transparency and white backgrounds** correctly.  
> - You can **recolor** or **tint areas** using overlays instead of painting over them.  
> - It exports **clean PNGs** ready for PixelGPT generation.  
>
> 🔗 Try it here: [**photopea.com**](https://www.photopea.com)

---

### 🍂 Autumn GUI — Base Creation Guide

In this tutorial, you’ll learn how to create a **base autumn-themed GUI** using [**Photopea**](https://www.photopea.com).  
This guide helps you understand *how to plan and visualize* your GUI before generating it with PixelGPT.

> 🧠 **Note:**  
> This method can be adapted for any theme (winter, crystal, dark mode, etc.).  
> The goal isn’t perfection — it’s about creating a clear **concept base**.

---

#### 🧭 Step 1: Open Photopea

1. Go to [**photopea.com**](https://www.photopea.com).  
   *(You can switch Photopea to English in the top menu: **More → Language → English**)*
2. Click **File → New**.  
3. Create a new document sized **256×256 pixels** with a **white background**.

> 💡 **Tip:**  
> Always keep a **white background**.  
> Transparent canvases confuse the AI during structure detection.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/gui_autumn_step1_photopea.png')}
    alt="Creating a new 256x256 document in Photopea"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 1 – Creating a new white 256×256 canvas in Photopea
  </p>
</div>

---

#### 🪟 Step 2: Import the Minecraft GUI

1. Drag and drop the **default Minecraft inventory GUI (256×256)** into your Photopea project.  
2. It will usually appear in the **top-left corner**.  
3. Use the **Move Tool (V)** and **guides** to **center it perfectly** in your canvas.  
   - Enable guides via **View → Snap → Snap to Guides**  
   - You can also press **Ctrl + R** to show rulers and drag guides manually.

import { GUIReferenceSettings } from '@site/docs/shared/two_images.mdx';

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/gui_autumn_step2_import.png')}
    alt="Importing and centering the Minecraft GUI in Photopea"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <Image
    img={require('@site/static/img/gui_autumn_step2_center.png')}
    alt="Centering the Minecraft GUI with guides"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 2 – Importing and centering the reference GUI
  </p>
</div>

---

#### 📋 Step 3: Prepare Layers

1. **Duplicate the GUI layer** (`Right-click → Duplicate Layer`)  
2. **Rasterize** the new copy (`Right-click → Rasterize Layer`) — this lets you paint on it.  
3. Hide the copy layer for now (you’ll use it later to restore the slot grid).

> 🧠 **Why Rasterize?**  
> Photopea uses **object-based layers**.  
> Rasterizing converts the imported image into editable pixels, so you can recolor or erase parts freely.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/gui_autumn_step3_layers.png')}
    alt="Duplicating and rasterizing layers in Photopea"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <Image
    img={require('@site/static/img/gui_autumn_step3_layers_Razterise.png')}
    alt="Rasterizing layers in Photopea"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <Image
    img={require('@site/static/img/gui_autumn_step3_layers_selected.png')}
    alt="Selected rasterized layer in Photopea"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0 0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 3 – Preparing and rasterizing the layers
  </p>
</div>

---

#### 🎨 Step 4: Select and Recolor the Base

1. Use the **Magic Wand Tool (W)** to select the gray background areas.  
2. **Uncheck “Contiguous”** so it selects *all* gray zones, even if they’re separate.  
3. Adjust the **Tolerance** (around 70 works well).  
4. Choose colors that match your theme — here, the **Autumn palette**:  
   - 🍃 Pale green for soft highlights  
   - 🌰 Brown for wood and borders  
   - 🍂 Orange for leaves and accents  

> 🎨 **Goal:**  
> The idea is not to make it perfect, but to **express your theme** — think of this as your visual concept sketch.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image img={require('@site/static/img/gui_autumn_step4_recolor_nothing.png')} alt="Starting recolor" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />
  <Image img={require('@site/static/img/gui_autumn_step4_recolor_wand.png')} alt="Using magic wand tool" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />
  <Image img={require('@site/static/img/gui_autumn_step4_recolor_contiguse.png')} alt="Contiguous disabled" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />
  <Image img={require('@site/static/img/gui_autumn_step4_recolor.png')} alt="Base recolored in autumn tones" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />

  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', margin: '2rem auto' }}>
    <GUIReferenceSettings 
      Image1={require('@site/static/img/gui_autumn_step4_recolor_color_picker.png')}
      Image2={require('@site/static/img/gui_autumn_step4_recolor_brush.png')}
      label1="Color picker"
      label2="Brush tool"
      alt1="Color picker"
      alt2="Brush"
    />
  </div>

  <Image
    img={require('@site/static/img/gui_autumn_step4_recolor_finish.png')}
    alt="Finished autumn recolor"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />

  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 4 – Recoloring with Magic Wand using autumn colors
  </p>
</div>

---

#### 🖤 Step 5: Restore Slot Visibility

1. Reveal the **original GUI layer** you hid earlier.  
2. Select all **inventory slots** (you can use the rectangle selection tool).  
3. Copy them into a **new layer** above your autumn-colored one.  
4. Fill them with **pure black** (`Edit → Fill → #000000`).  
5. Reduce the opacity of this “slots” layer to around **30%** — this gives depth and makes the grid readable again.

> ✨ Tips:   
> The goal is to make the layout clear while keeping the new color tone consistent.

<div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', margin: '2rem auto' }}>
  <Image img={require('@site/static/img/gui_autumn_step5_slots.png')} alt="Slot overlay creation" style={{ maxWidth: '40%', borderRadius: '8px' }} />
  <Image img={require('@site/static/img/gui_autumn_step5_border.png')} alt="Slot borders restored" style={{ maxWidth: '40%', borderRadius: '8px' }} />
</div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', margin: '2rem auto' }}>
  <Image img={require('@site/static/img/gui_autumn_step5_slot_view.png')} alt="Slot visibility result" style={{ maxWidth: '40%', borderRadius: '8px' }} />
  <Image img={require('@site/static/img/gui_autumn_step5_border_view.png')} alt="Border view" style={{ maxWidth: '40%', borderRadius: '8px' }} />
</div>

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image img={require('@site/static/img/Blacked.png')} alt="Black overlay" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />
  <Image img={require('@site/static/img/gui_autumn_step5_border_slot.png')} alt="Slot layer finished" style={{ maxWidth: '320px', margin: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }} />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 5 – Restoring visibility for the inventory slots
  </p>
</div>

---

#### 🎉 Step 6: Final Touches

✅ Center the GUI perfectly.  
✅ Make sure the **background is white**.  
✅ The overall image should feel **balanced, thematic, and readable**.  

> 🧡 Congratulations!  
> You’ve just created your own **autumn-themed base GUI** — ready to use for PixelGPT generation.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/whatever.png')}
    alt="Final autumn-themed GUI concept 256x256 white background"
    style={{ maxWidth: '320px', borderRadius: '8px', margin: '0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 6 – Final autumn GUI ready for PixelGPT generation (256×256, white background)
  </p>
</div>

---

#### ✅ Check Before Exporting

> 🔍 **Checklist:**
> - The background is **pure white (#FFFFFF)**  
> - The GUI is centered and aligned  
> - No cropped or missing slots  
> - All details are clear at 100% zoom  
> - Export as **PNG (no transparency)**  
> - Recommended name: `Gui_Autumn_Base_256.png`

---

## 🧩 Step 4: Import into PixelGPT

Now that your **Autumn GUI base image** is ready, it’s time to import it into **PixelGPT** to use it as a **reference** for generation.

This step allows the AI to understand your design’s structure, proportions, and theme before creating the final GUI.

---

### 🍁 Step 4.1: Open the Reference Image Manager

1. Go to **PixelGPT home**.  
2. In the top-right menu, click **Account → My Reference Images**.  
3. A panel opens showing your personal image library, called **Your Reference Images**.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/pixelgpt_ref_menu.png')}
    alt="PixelGPT Account menu showing My Reference Images option"
    style={{ maxWidth: '420px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 4.1 – Accessing “My Reference Images” from your account dropdown
  </p>
</div>

---

### 🖼️ Step 4.2: Upload Your GUI Base

1. Click the **Upload Image** button.  
2. Select **“Choose File”** (or **“Select Image”**) and browse to your saved GUI base. 
3. Wait a few seconds for the upload to finish.

> 💡 **Tip:**  
> Use clear, descriptive file names (like `Gui_Autumn_Base_256.png`) — this helps you find your files later easily.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/pixelgpt_upload_image.png')}
    alt="Uploading a reference image in PixelGPT"
    style={{ maxWidth: '420px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 4.2 – Uploade button
  </p>
</div>

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/pixelgpt_upload_watever.png')}
    alt="Uploading a reference image in PixelGPT"
    style={{ maxWidth: '420px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 4.2 – Uploading your base GUI image to PixelGPT
  </p>
</div>

---

### 🧠 Step 4.3: Confirm Upload

Once uploaded, your GUI will appear in the **Your Reference Images** list.

✅ Make sure:
- The image thumbnail is visible (preview loads correctly)  

You can now use this image as a **reference** in any generation.

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <Image
    img={require('@site/static/img/pixelgpt_ref_list.png')}
    alt="Your Reference Images section showing uploaded GUI"
    style={{ maxWidth: '420px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
  />
  <p style={{ fontSize: '0.9rem', color: '#666' }}>
    Step 4.3 – Your base GUI is now visible in “Your Reference Images”
  </p>
</div>

---

## ✅ Summary

| Step | Action                 | Goal                                     |
| ---- | ---------------------- | ---------------------------------------- |
| 1    | Choose a reference GUI | Preserve Minecraft’s original proportions |
| 2    | Pick a theme           | Define the visual tone (Autumn, Magic, etc.) |
| 3    | Draw or edit the base  | Create a clear concept sketch            |
| 4    | Simplify and export    | Make it readable for AI generation       |

---

> 🧠 You’re now ready to move from **concept** to **generation**.
>
> 👉 Continue to → [**Recommended Plan – Reference & Generation**](/docs/getting/GUI/Plan/Recommended)