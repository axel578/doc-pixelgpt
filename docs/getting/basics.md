---
sidebar_position: 1
---

import Image from '@theme/IdealImage';

# PixelGPT — Interface Overview 📘

---

## 🖼️ 1. Model Selection, Prompt Input & Generate Image Button

<div style={{ border: '4px solid red', borderRadius: '10px', padding: '14px', margin: '25px 0' }}>
  <Image
    img={require('@site/static/img/base_model_selection_prompt_generateimagebutton.png')}
    alt="Model selection and prompt input interface"
    style={{ maxWidth: '100%', borderRadius: '8px' }}
  />
</div>

### 🔎 Explanation  

**1. Expert tab**  
Switches to the **Expert** interface, unlocking full control over models and settings.

**2. Prompt input zone**  
Main text box where you type your image prompt.

**3. Text accuracy slider / setting**  
Controls how strictly the AI follows your prompt vs. allowing more creativity.

**4. Collection selection**  
Choose which **collection** the generated image will be saved into.

**5. Generate Image button**  
Starts the image generation using your prompt, model, and settings.

**6. Plan selection**  
Choose between plan tiers:  
**Baby / Standard / Pro / Ultimate / Elite / Orion**  
This filters available models based on your subscription.

**7. Model type selection**  
Select the **category of model**, such as:  
- Pixel Art  
- Illustration  
- Realistic / Photography  
- Thumbnail  
- GUI  
- 3D Render  

**8. Models sub-types selection**   
Models sub-types selection

**9. Model list**  
Shows all models available for the selected Plan

**10. Model version selection**  
Some models have multiple versions (v1, v2, v3…).  
You can pick the one that fits your style or performance needs.

**11. Model name**  
Displays the full name of the model currently selected (e.g. `ultimate-extreme-mc-item-32-v3`).

**12. “Select this AI Model” button**  
Confirms your model choice and makes it the active generator.

**13. Favorite toggle**  
Marks a model as **favorite**, so you can find it faster later.


---

## 🖼️ 2. Generation Preview & My Pictures Button

<div style={{ border: '4px solid red', borderRadius: '10px', padding: '14px', margin: '25px 0' }}>
  <Image
    img={require('@site/static/img/base_generatedpreview_generationinprogress_mypicturesbutton.png')}
    alt="Preview, generation in progress, and My Pictures button"
    style={{ maxWidth: '100%', borderRadius: '8px' }}
  />
</div>

### 🔎 Explanation  

**1. “Account” → “My Pictures” button**  
Opens your personal image gallery, where all your generated images are stored.

**2. Generation in progress**  
Displays the progress bar while PixelGPT is generating your image.

**3. Image preview**  
Shows a preview of the lasts generated images.

---

## 🖼️ 3. My Images Page — Buttons & Features

<div style={{ border: '4px solid red', borderRadius: '10px', padding: '14px', margin: '25px 0' }}>
  <Image
    img={require('@site/static/img/base_myimages_buttons.png')}
    alt="My Images interface with buttons and features"
    style={{ maxWidth: '100%', borderRadius: '8px' }}
  />
</div>

### 🔎 Explanation  

**1. Search bar**  
Search generated images by any word used in the prompt.

**2. Filter / Favorite / Collection selector**  
Filter images by favorites, specific collections.

**3. Apply**  
Apply all filters.

**3. Image preview**  
Shows a preview of the generated image.

**5. Prompt preview**  
Shows a shortened version of the original prompt used for the image.

**6. Model used**  
Displays the name of the AI model used to generate that specific image.

**7. Action buttons**  
For each image, you can access quick tools such as:  
- 👁️ **View prompt** — See the full prompt used  
- 📋 **Copy prompt** — Copy the prompt  
- 🧼 **Clean background** — Remove white or flat backgrounds 
- ⬇️ **Download image** — Save the PNG file locally  
- 🧠 **View text accuracy** — See how well the model followed your prompt  
- 🧩 **Create Grid** — Build a grid from the image  
- 🗑️ **Delete image** — Remove it from your library  
- 🗂️ **Add to collection** — Organize it into one of your collections  

---
