# 👑 Ultimate Plan – Maximum Fidelity

import Image from '@theme/IdealImage';
import { GUIReferenceSettings } from '@site/docs/shared/two_images.mdx';

The **Ultimate Plan** is the pinnacle of GUI quality in PixelGPT.  
This advanced workflow uses **multi-stage enhancement** with Elite models and manual refinement  
to achieve **photorealistic textures**, **extreme precision**, and **portfolio-grade results**.

---

## 🎯 What This Plan Does

The **Ultimate Plan** pushes your GUI to the **absolute highest quality** possible through a carefully designed three-step workflow combining AI generation and manual refinement. This isn't just enhancement—it's transformation into a professional showcase piece.

> 🏆 Think of it as:  
> "Museum-quality perfection—every pixel crafted for maximum impact."

---

## 🏆 Complete Workflow Overview

The Ultimate Plan uses a strategic three-step process:

**Step 1: Foundation Generation**  
Use **elite-mc-any-gui-boosted-v3** (non-HQ) to create a high-quality base with rich textures and professional structure.

**Step 2: Manual Refinement**  
Fix any issues in **Photopea** to ensure perfect base quality before final enhancement.

**Step 3: Depth & Detail Enhancement**  
Use **elite-mc-any-gui-hq-boosted-v3** to add extreme depth, detail layers, and photorealistic finish.

**Visual Pipeline:**
```
Base Image (Photopea)
    ↓
elite-mc-any-gui-boosted-v3 (Foundation)
    ↓
Photopea (Manual Fix)
    ↓
elite-mc-any-gui-hq-boosted-v3 (Depth & Detail)
    ↓
Final Showcase Quality
```

---

## 📊 When to Use Ultimate Plan

### ✅ Perfect For:
- Final production-ready GUIs for major servers or mods
- Maximum visual impact requirements
- Photorealistic texture quality with depth layers
- Professional presentations and marketing materials

### ⏱️ Time Investment:
- Step 1 (Foundation): ~5-10 minutes
- Step 2 (Photopea): ~5-10 minutes
- Step 3 (Depth & Detail): ~5-10 minutes
- **Total: 15-30 minutes** for absolute highest quality

### 🎓 Skill Level:
- **Recommended:** Intermediate to Advanced
- **Requires:** Strong prompt crafting + basic Photopea skills
- **Builds on:** Experience with Starter and Pro Plans

---

## 📍 Step 1: Foundation Generation

### 🧩 Model Selection

Select **elite-mc-any-gui-boosted-v3** (non-HQ version)

This model creates a premium-quality foundation with:
- Professional texture base and material clarity
- Strong structural definition
- Clean slot borders and layout
- Rich color and lighting foundation
- Solid base ready for manual refinement

> 💡 **Why non-HQ first?**  
> The non-HQ model creates a clean, structured foundation that's easier to fix manually.  
> Adding depth and detail comes after ensuring structural perfection.

---

### 🎛️ Step 1 Configuration

Elite models have a streamlined workflow with just three elements:

| Element | Specification | Purpose |
|---------|--------------|---------|
| **Base Image** | Your Photopea base (256x256px) | Foundation structure |
| **GUI Precision** | `6`, `7` or `8` (recommended: `7`) | Balance structure and detail |
| **Prompt** | 150-200 words, structure-focused | Clear layout and materials |

#### GUI Precision Guide for Step 1:

| Value | Effect | Best For |
|-------|--------|----------|
| **6** | More creative interpretation | Experimental styles, artistic freedom |
| **7** | ⭐ **RECOMMENDED** | Balanced structure and texture |
| **8** | Maximum structural precision | Technical accuracy, clean designs |

> 💡 **Step 1 Recommendation:**  
> Use **GUI Precision: 7** for the best foundation.  
> It creates strong structure while allowing rich texture development.

<GUIReferenceSettings 
  Image1={require('@site/static/img/ultimate_stage1_ref.png')}
  Image2={require('@site/static/img/ultimate_stage1_settings.png')}
  label1="Step 1 Base Image"
  label2="GUI Precision: 7"
  alt1="Clean Photopea base for elite-boosted-v3"
  alt2="Foundation generation settings"
  width1={20}
  width2={75}
/>

---

### 🧠 Prompt Strategy for Step 1

For Foundation generation, focus on **structure, layout, and material base**:

**Essential elements:**
- **Clear slot layout:** Precise positioning and grid structure
- **Material foundation:** Base textures without excessive detail
- **Border emphasis:** CLEAR, DEFINED slot borders
- **Structural clarity:** Grid organization and spacing

**Example Step 1 Prompt (117 words):**

```
Inventory GUI in a warm autumn theme, inspired by cozy forest vibes. The interface features wooden textures, golden light, and scattered orange leaves and trees.

Top-left: 4 vertical slots framed by carved wood with small leaf accents.

To his right (Top-left): Preview surrounded by falling leaves.

Below it (bottom-right of section): single off-hand slot.

Top-right: 2x2 crafting grid with one output slot on the right.

Bottom: standard player inventory (9x4 = 36 clear slots), outlined clearly with warm tones.

The background uses dark oak wood and soft sunbeams filtering through trees.

The frame is carved oak, decorated with acorns, vines, and mushrooms.

Lighting is gentle and amber-colored, evoking late autumn afternoon light.

Medieval style.
```

> 💡 **Focus on:**  
> - Slot clarity and borders (CLEAR, DEFINED, SHARP)
> - Grid structure and spacing
> - Material names without excessive adjectives
> - Functional layout over artistic atmosphere

---

### ✅ Generate Step 1 Foundation

**Setup:**
1. Select model → **elite-mc-any-gui-boosted-v3** (non-HQ)
2. Upload your Photopea base image (256x256px)
3. Set **GUI Precision: 7**
4. Paste your structure-focused prompt
5. Click **Generate**

**Expected Step 1 Results:**
- Strong structural foundation with clear layout
- Well-defined slot borders and grid organization
- Clean base textures and colors
- Professional lighting and balance
- Solid foundation ready for manual correction

**Example Result:**

<Image
  img={require('@site/static/img/Inventory_GUI_in_a_warm_autumn_theme_elite-mc-any-gui-boosted-v3.png')}
  alt="Step 1 foundation result"
  style={{ maxWidth: '400px', margin: '2rem auto', display: 'block', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
/>

---

## 📍 Step 2: Manual Refinement in Photopea

### 🎨 Why Manual Refinement?

Even with elite-mc-any-gui-boosted-v3's excellent foundation, small imperfections may occur:
- Slight border irregularities
- Minor slot misalignments  
- Small decoration overlaps
- Subtle color inconsistencies

**Fixing these now** ensures the HQ model in Step 3 enhances perfection, not imperfections.

---

### 🛠️ Photopea Refinement Process

**1. Open Your Step 1 Result**
- Go to [Photopea.com](https://www.photopea.com)
- Open your elite-boosted-v3 result
- Zoom to 200% for precision work

**2. Check These Elements:**

| Area | What to Check | How to Fix |
|------|--------------|------------|
| **Slot Borders** | Straight, unbroken lines | Use 1px pencil to redraw |
| **Slot Interiors** | Consistent dark color | Paint bucket with exact color |
| **Grid Alignment** | Perfect spacing | Nudge/redraw with guides |
| **Decoration Overlap** | Nothing over slots | Erase or reposition |
| **Background** | Pure white (#FFFFFF) | Paint bucket if needed |
| **Color Consistency** | Matching tones | Color adjustment tools |

**3. Common Fixes:**

**Fix 1: Slot Border Cleanup**
- Select **Pencil Tool** (1px size)
- Choose border color from existing good border
- Carefully redraw any broken or fuzzy borders
- Keep lines perfectly straight using Shift key

**Fix 2: Slot Interior Correction**
- Select **Paint Bucket Tool**
- Pick exact dark interior color from good slot
- Fill any inconsistent slot interiors
- Ensure all 36 inventory slots match

**Fix 3: Decoration Repositioning**
- If decorations overlap slots, use **Eraser Tool**
- Clean up any leaves, vines, or accents over functional areas
- Keep decorations only in frame/border areas

**Fix 4: Background Cleanup**
- Select **Paint Bucket Tool**
- Fill background with pure white (#FFFFFF)
- No transparency, no off-white variations

**4. Save Your Fixed Version:**
- `File → Export As → PNG`
- Name: `[original_name]_fixed.png`
- Example: `Inventory_GUI_in_a_warm_autumn_theme_elite-mc-any-gui-boosted-v3_fixed.png`

**Example Fixed Version:**

<Image
  img={require('@site/static/img/Inventory_GUI_in_a_warm_autumn_theme_elite-mc-any-gui-boosted-v3_fixed.png')}
  alt="Step 2 manually refined result"
  style={{ maxWidth: '400px', margin: '2rem auto', display: 'block', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
/>

> 💡 **Pro Tip:**  
> Spend 5-10 minutes on manual fixes. Perfecting the base now means Step 3 will enhance beauty, not errors.

---

## 📍 Step 3: Depth & Detail Enhancement

### 🧩 Model Selection

Select **elite-mc-any-gui-hq-boosted-v3** (HQ version)

This is the **depth and detail specialist**, designed to add:
- Extreme texture depth and layering
- Photorealistic material rendering
- Enhanced lighting and shadow complexity
- Rich atmospheric effects
- Three-dimensional depth perception
- Professional polish and finish

> 💡 **Why HQ last?**  
> The HQ model excels at adding depth layers and fine detail to an already-perfect structure.  
> It transforms your clean base into a photorealistic masterpiece.

---

### 🎛️ Step 3 Configuration

| Element | Specification | Purpose |
|---------|--------------|---------|
| **Base Image** | Your Step 2 fixed result | Perfect foundation |
| **GUI Precision** | `6-8` (recommended: `7`) | Balance depth and clarity |
| **Prompt** | Step 1 prompt + depth keywords | Add texture layers and depth |

#### GUI Precision Guide for Step 3:

| Value | Effect | Best For |
|-------|--------|----------|
| **6** | Maximum depth layers | Rich, painterly atmosphere |
| **7** | ⭐ **RECOMMENDED** | Balanced depth and clarity |
| **8** | Controlled depth, more precision | Clean depth without softness |

> 💡 **Step 3 Recommendation:**  
> Use **GUI Precision: 7** for beautiful depth layers while maintaining sharpness.  
> The HQ model will add texture richness and three-dimensional quality.

<GUIReferenceSettings 
  Image1={require('@site/static/img/ultimate_stage2_ref.png')}
  Image2={require('@site/static/img/ultimate_stage2_settings.png')}
  label1="Step 3 Base (Fixed Result)"
  label2="GUI Precision: 7"
  alt1="Manually refined base for elite-hq-boosted-v3"
  alt2="Depth & detail enhancement settings"
  width1={20}
  width2={75}
/>

---

### 🧠 Prompt Strategy for Step 3

Enhance your Step 1 prompt with **depth, layering, and detail keywords**:

**Add these depth elements:**
- "visible grain patterns", "texture depth"
- "layered lighting", "soft ambient occlusion"
- "three-dimensional relief", "depth perception"
- "photorealistic material rendering"
- "rich shadow gradients", "highlight layers"

**Example Step 3 Prompt (Enhanced from Step 1):**

```
[Your complete Step 1 prompt]

Enhanced with DEPTH LAYERS: visible wood grain patterns, three-dimensional carved relief on frames, photorealistic material rendering with texture depth. Soft ambient occlusion in corners creates depth perception. Layered lighting with subtle shadow gradients and natural highlight reflections. Rich atmospheric depth with gentle haze. Professional photorealistic finish with material complexity and natural imperfections for realism.
```

**Alternative: Keep Same Prompt**

The elite-mc-any-gui-hq-boosted-v3 model automatically adds depth. You can keep your Step 1 prompt identical and let the HQ model work its magic naturally.

---

### ✅ Generate Step 3 Final Result

**Setup:**
1. Select model → **elite-mc-any-gui-hq-boosted-v3** (HQ)
2. Upload your **Step 2 fixed result** (_fixed.png)
3. Set **GUI Precision: 7**
4. Use depth-enhanced prompt (or keep Step 1 prompt)
5. Click **Generate**

**Expected Final Results:**
- Extreme texture depth with visible grain and material layers
- Photorealistic three-dimensional quality
- Rich lighting complexity with layered shadows
- Professional atmospheric depth
- Museum-quality polish and presentation
- Portfolio-ready showcase piece

**Example Final Result:**

<Image
  img={require('@site/static/img/Inventory_GUI_in_a_warm_autumn_theme_elite-mc-any-gui-hq-boosted-v3.png')}
  alt="Step 3 final depth and detail result"
  style={{ maxWidth: '400px', margin: '2rem auto', display: 'block', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
/>

---

## 🔍 Three-Step Comparison

| Aspect | Step 1 (Foundation) | Step 2 (Manual Fix) | Step 3 (Depth & Detail) |
|--------|-------------------|-------------------|----------------------|
| **Model** | elite-mc-any-gui-boosted-v3 | Human (Photopea) | elite-mc-any-gui-hq-boosted-v3 |
| **Purpose** | Create structured base | Perfect the foundation | Add depth layers |
| **Focus** | Clean layout, borders | Fix imperfections | Texture depth, atmosphere |
| **Quality** | Professional foundation | Perfected structure | Photorealistic final |
| **Output** | Solid base | Error-free base | Museum-quality result |

---

## 🧪 Experimentation Examples

Here's how the same concept evolves through different GUI Precision approaches:

### Experimentation Set 1: Precision Variations

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
      img={require('@site/static/img/Ultimate_experiment1.png')}
      alt="Ultimate experiment variation 1"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/Ultimate_experiment2.png')}
      alt="Ultimate experiment variation 2"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>

  <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
    <Image
      img={require('@site/static/img/Ultimate_experiment3.png')}
      alt="Ultimate experiment variation 3"
      style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.15)' }}
    />
  </div>
</div>

> 💡 **Try different approaches:**  
> The same base can produce different final aesthetics based on GUI Precision choices.  
> Experiment to find your preferred balance of clarity and depth.

---

## 📊 GUI Precision Strategy Matrix

### Recommended Combinations:

| Step 1 | Step 3 | Result Character | Best For |
|--------|--------|-----------------|----------|
| 8 | 8 | Maximum precision, controlled depth | Technical GUIs, clean designs |
| 7 | 7 | ⭐ **Balanced clarity and depth** | **Most use cases** |
| 7 | 6 | Strong depth layers, rich atmosphere | Fantasy themes, artistic |
| 7 | 8 | Clean with subtle depth | Professional polish, versatile |
| 6 | 7 | Creative with balanced finish | Experimental styles |

> 💡 **Start with 7 → 6** for the most reliable, beautiful results.

---

## 🎯 Quality Verification Checklist

Before finalizing, verify at **200% zoom**:

### Step 1 Checks:
- [ ] All slot borders are present and defined
- [ ] Grid structure matches your concept
- [ ] Colors and base textures look good
- [ ] Layout is functionally clear
- [ ] Ready for manual refinement

### Step 2 Checks:
- [ ] All slot borders are perfectly straight
- [ ] All slot interiors are consistent color
- [ ] No decorations overlap functional areas
- [ ] Background is pure white (#FFFFFF)
- [ ] Grid alignment is perfect
- [ ] Ready for depth enhancement

### Step 3 Checks:
- [ ] Texture depth is visible and realistic
- [ ] Lighting has layered complexity
- [ ] Material rendering looks photorealistic
- [ ] Depth doesn't compromise slot clarity
- [ ] Overall polish is museum-quality
- [ ] Ready for showcase/delivery

---

## 📋 Complete Workflow Checklist

### Preparation:
- [ ] Create clean base in Photopea (256x256px)
- [ ] Write structure-focused prompt (150 words)
- [ ] Include slot visibility keywords
- [ ] Remove trigger words ("player" → "display area")

### Step 1 - Foundation:
- [ ] Select model: `elite-mc-any-gui-boosted-v3`
- [ ] Upload Photopea base image
- [ ] Set GUI Precision: `7`
- [ ] Paste structure-focused prompt
- [ ] Generate foundation
- [ ] Save result with clear name

### Step 2 - Manual Refinement:
- [ ] Open Step 1 result in Photopea
- [ ] Zoom to 200% for precision
- [ ] Fix slot borders with 1px pencil
- [ ] Correct slot interiors with paint bucket
- [ ] Clean up any decoration overlaps
- [ ] Ensure pure white background
- [ ] Export as `[name]_fixed.png`

### Step 3 - Depth & Detail:
- [ ] Select model: `elite-mc-any-gui-hq-boosted-v3`
- [ ] Upload Step 2 fixed result
- [ ] Set GUI Precision: `7`
- [ ] Use depth-enhanced prompt (or same)
- [ ] Generate final enhancement
- [ ] Verify quality at 200% zoom
- [ ] Save final showcase version

### Final Delivery:
- [ ] All quality checks passed
- [ ] Showcase-ready quality achieved
- [ ] Document successful settings
- [ ] Save workflow notes for future projects

---

## 💎 Why Three Steps Work Better

### The Power of the Pipeline:

**Step 1 (Foundation):** Creates clean structure
- Non-HQ model focuses on layout clarity
- Easier to fix issues before adding complexity
- Establishes solid base for enhancement

**Step 2 (Manual):** Ensures perfection
- Human eye catches what AI might miss
- Fixes are easy on clean foundation
- Prevents enhancing errors in Step 3

**Step 3 (Depth):** Adds photorealism
- HQ model excels at texture layers
- Works on perfect base = perfect result
- Adds depth without compromising structure

> 💡 **Each step has a purpose:**  
> Structure → Perfection → Depth = Maximum Quality

---

## 🌟 Final Thoughts

The Ultimate Plan's three-step workflow represents **the absolute peak** of what's achievable with PixelGPT. By combining:
- AI's structural generation power
- Human precision and quality control  
- AI's depth and detail enhancement

...you create results that transcend typical AI output and achieve true photorealistic quality.

**Key Success Factors:**
1. ✅ Strong structure-focused prompt for Step 1
2. ✅ Careful manual fixes in Step 2 (don't skip!)
3. ✅ Strategic GUI Precision values (7 → 7 recommended)
4. ✅ Trust the HQ model's depth enhancement
5. ✅ Verify quality at every step

**Remember:**
- Each step builds on the previous
- Don't skip manual refinement
- The HQ model needs a perfect base
- Results justify the time investment

---

> 👑 **You're Ready!** Master the three-step Ultimate Plan workflow and create museum-quality, photorealistic Minecraft GUIs that represent the absolute pinnacle of PixelGPT's capabilities!

---

## 📚 Related Resources

- [🌱 Starter Plan](/docs/getting/GUI/Plan/Starter) — Learn the basics
- [💎 Pro Plan](/docs/getting/GUI/Plan/Pro) — Master intermediate techniques  
- [🧠 Prompting Guide](/docs/getting/prompting/Prompting_is_key) — Perfect your prompts
- [🎨 Photopea Guide](/docs/getting/GUI/Base) — Manual refinement skills