# ⚙️ Starter Plan – Simple Enhancement Setup

import Image from '@theme/IdealImage';
import { GUIReferenceSettings } from '@site/docs/shared/two_images.mdx';

The **Starter Plan** is designed to keep your GUI **simple, clean, and visually consistent**,  
while still improving its **color harmony** and **readability** with PixelGPT’s core model.

This setup is perfect if you’re just starting out or want to refine your base concept  
**without overcomplicating** the details.

---

## 🎯 What This Step Does

Your base image already defines the **main layout and mood**,  
but it might still feel **flat** or **too uniform**.

The **Starter Plan** gently enhances it using the  
`mc-any-gui-256-v4` model — adding slight texturing, color balance, and subtle depth.  
It’s the perfect balance between *simplicity* and *clarity*.

> 🧡 Think of it as:  
> “Your base GUI — lightly polished for clean presentation.”

---

## 🧩 Configure Your Reference in PixelGPT

> Here’s how to set your parameters to achieve a clean, readable result.

Select **MC ANY GUI 256 V4** (Standard/Pixel art/256PX/MC ANY GUI 256 V4).  
![MC ANY GUI 256 V4](/img/gui_ref_mc_any_gui_256_v4.png)

Scroll down to the **“Select Image Reference”** section, then configure it as follows:  
![Ref](/img/gui_ref3_Select_Image_References.png)

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
  Image1={require('@site/static/img/gui_ref_starter.png')}
  Image2={require('@site/static/img/gui_ref_starter_settings.png')}
  label1="Starter Plan base image example"
  label2="Starter Plan settings in PixelGPT"
  alt1="Starter base image example"
  alt2="Starter reference configuration"
  width1={20}
  width2={75}
/>

> 💡 **Tip:**  
> If the result looks too dull or washed out, try increasing **Image Strength** to `3`  
> or lowering **Shape Strength** to `6` for a smoother blending effect.

---

## ✅ Generate

Once your reference and prompt are ready:

1. Choose the model → `mc-any-gui-256-v4`  
2. Paste your prompt  
3. Check your **reference settings**  
4. Click **Generate**

PixelGPT will now take your simple concept and **refine it with balanced detail**,  
creating a GUI that’s **readable, coherent, and lightly textured**.

<Image
  img={require('@site/static/img/inventory_GUI_Standard.png')}
  alt="Starter Plan GUI result generated with MC Any GUI 256 V4"
  style={{
    maxWidth: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
  }}
/>
<p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
  Result – Clean, balanced Autumn GUI generated with Starter Plan
</p>

---

## ✏️ Optional: Edit After Generation (Photopea)

Once PixelGPT has generated your GUI, you may want to make **final touch-ups** before using it in-game.

This is where [**Photopea**](https://www.photopea.com) comes in handy — it lets you quickly fix or polish your GUI **without losing quality**.

### 🧰 When to Use This Step
- Some icons or slots look **too dark / too bright**.  
- The **background color** needs to be slightly adjusted.  
- You notice **blurred edges or uneven borders** after generation.  
- You simply want to personalize the final tone or contrast.

---

### 🪄 Quick Editing Workflow

1. Open your generated GUI PNG in [**Photopea**](https://www.photopea.com).  
2. Use **Hue/Saturation (Ctrl+U)** or **Brightness/Contrast (Ctrl+M)** to tweak color balance.  
3. Use the **Eraser Tool (E)** or **Brush Tool (B)** for small manual clean-ups.  
4. If the borders look fuzzy, lightly trace them using the **1px pencil** on a new layer.  
5. Always keep the **white background** visible and **don’t resize** the 256×256 canvas.  
6. Save as **PNG (no transparency)** once you’re satisfied.

<GUIReferenceSettings 
  Image1={require('@site/static/img/inventory_GUI_Standard_Photopea.png')}
  label1="Wrong grid placement"
  alt1="Wrong"
  width1={100}
/>

---

### 🧠 Why Post-Editing Matters

> Even with perfect settings, PixelGPT sometimes leaves tiny imperfections —  
> small pixel artifacts, soft edges, or uneven highlights.  
> A quick manual pass can turn a *good result* into a **polished, ready-to-use GUI**.

---

<GUIReferenceSettings 
  Image1={require('@site/static/img/inventory_GUI_Standard.png')}
  Image2={require('@site/static/img/inventory_GUI_Standard_Corected.png')}
  label1="Raw result"
  label2="Corected result"
  alt1="Raw result"
  alt2="Corected result"
  width1={40}
  width2={40}
/>

> 💡 **Tip:**  
> For subtle global fixes, use `Image → Adjustments → Color Balance`  
> to warm up or cool down your palette without repainting manually.

---

## 🧪 Don’t Forget to Experiment!

Small parameter changes can drastically affect your results.  
Here are a few **Starter Plan variations** generated from the same base:

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
      img={require('@site/static/img/starter_experiment1.png')}
      alt="Starter variation 1"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/starter_experiment2.png')}
      alt="Starter variation 2"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/starter_experiment3.png')}
      alt="Starter variation 3"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
</div>

> 💡 **Tip:**  
> Try editing your GUI again in **Photopea** between tests —  
> even small manual color changes can make your next PixelGPT generation pop.

---

> 🔶 **Next Step:**  
> Once your Starter Plan result looks clean and coherent,  
> move to **Advanced Plans**  
> to add more depth, dynamic lighting, and artistic style.
