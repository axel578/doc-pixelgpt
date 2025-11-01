# 🧩 PixelGPT Grid System

<p align="center">
  ![Video wand](/img/How_Wand_Work.gif)
  <em>Example — Wand tool + Save not resized</em>
</p>

## ⚙️ Core Principle

PixelGPT models often output several items in one image.  
A **grid** splits that image into smaller, structured parts (2×2, 3×3, 4×4).  
Each cell contains one object, texture, or UI element.

Without grid definition:
- Items blend or overlap  
- Layouts lose alignment  
- Extraction becomes inconsistent

---

## 🎯 Why Grid Matters

- Ensures **symmetry and structure**  
- Enables **individual item extraction**  
- Prevents overlapping textures or artifacts  

A grounded grid provides **visual order** — essential for UI, item, or block generation.

---

## 📐 Common Grid Sizes

| Canvas | Grid | Item Size | Pixel Size |
|--------:|------|------------|-------------|
| 256×256 | 1×1 | 16×16 | 16 |
| 512×512 | 2×2 | 16×16 | 16 |
| 512×512 | 1×1 | 32×32 | 16 |
| 512×512 | 4×4 | 16×16 | 8 |
| 768x768 | 3×3 | 16×16 | 16 |
| 1024×1024 | 2×2 | 32×32 | 16 |
| 1024×1024 | 4×4 | 32×32 | 8 |
| 2048x2048 | 2×2 | 32×32 | 32 |
| 2048x2048 | 4×4 | 32×32 | 16 |

Most outputs use **Pixel Size = 8 or 16**.  
Smaller grids → higher detail per cell.

---

## 🧱 Summary

| Concept | Description |
|----------|--------------|
| **Grid** | Spatial logic (defines layout zones) |
| **Prompt** | Visual logic (defines what appears) |
| **Together** | Structured, predictable generations |

> Grounded Grid = predictable layout → consistent results → easier extraction

# 🧩 Grid Example — 3×3 Layout

## 📐 Configuration

| Property | Value |
|-----------|--------|
| **Canvas Size** | 768×768 px |
| **Grid Size** | 3×3 |
| **Item Count** | 9 total |
| **Pixel Size** | 16 px |

Each cell represents one generated item — here, nine pixel-art swords.  
This grid follows a **uniform subdivision logic**:

768 ÷ 3 = 256 px per cell
256 ÷ 16 = 16 pixels per unit

→ Each sword occupies a **256×256 zone**, rendered in **16-pixel resolution** units.

---

## 🧠 Practical Use

This configuration (`3×3`, `768×768`, `16px`) is ideal for:
- Previewing item variations (e.g. weapon textures).  
- Comparing prompt iterations.  
- Batch-generating pixel-art elements for Minecraft or 2D UIs.

---

## 🖼️ Example

<p align="center">
  ![Grid_full](/img/Grid_full.png)
  <em>Example — 3×3 grid, 768×768px canvas, 16px pixel size</em>
</p>

---

## 📸 Additional Visuals (Temporary Placeholders)

You can later replace these with real screenshots of your Grid Editor in use:

<p align="center">
  ![Grid_4](/img/Grid_fore.png)
  <em>Grid Editor — showing 2×2 layout with diamond swords</em>
</p>

<p align="center">
  ![Grid_1](/img/Grid_one.png)
  <em>Zoom view — single sword cell in 16px definition</em>
</p>

---

## 🧱 Summary

| Concept | Description |
|----------|--------------|
| **Grid** | Defines layout zones |
| **Prompt** | Defines visual content |
| **Together** | Produce predictable, aligned outputs |

> Grounded Grid = predictable layout → consistent results → easier extraction

## 🧩 Grid Utils

The **Grid Utils** panel controls how users interact with the generated grid image —  
it provides **editing, color, and export utilities** for pixel-accurate item extraction.

Each tool modifies a **visible, measurable aspect** of the grid — no randomness, only pixel logic.

---

### ⚙️ Grid Structure Tools

#### **Grid Size**

Defines the horizontal × vertical division of the image (e.g., 2×2, 3×3, 4×4).  
Determines how many elements the grid contains.  
Affects item count, alignment, and extraction pattern.

<p align="center">
  ![Grid Size option](/img/Grid_Size.png)
</p>

---

#### **Pixel Size**

Specifies the number of pixels representing one logical unit inside each cell.  
Smaller pixel size = higher detail density.  
Used to match model resolution (e.g., 16px for item models, 32px for GUI).

<p align="center">
  ![Pixel Size setting](/img/Grid_Pixel_Size.png)
</p>

---

#### **Canvas Size**

Represents the total render surface in pixels (e.g., 512×512, 768×768).  
Combined with Grid Size, it determines **cell size** via the formula:

<p align="center">
  `Canvas ÷ Grid = Cell Size`

  ![Canvas Size value](/img/Grid_Canvas_Size.png)
</p>


---

#### **Alignment Guides**
Displays visual separators between cells.  
Used to verify spacing and proportion accuracy before slicing.

<p align="center">
  ![Grid Alignment guides](/img/Grid_Guide.png)
</p>

---

### 🛠️ Tools

#### **Select Tool**
Used to select one or multiple cells within the grid.  
Selected cells become active for actions such as export or color editing.



<p align="center">
  ![Select Tool](/img/Grid_Tool_Select.png) ![Selected](/img/Grid_Tool_Selected.png) 
</p>

---

#### **Brush Tool**
Draws directly on the selected cell using the current primary color.  
Useful for small touch-ups or border corrections.

<p align="center">

  ![Brush Tool](/img/Grid_Tool_brush.png)

  ![Brush Example 1](/img/Grid_Tool_Brush_example1.png)
  ![Brush Example 2](/img/Grid_Tool_Brush_example2.png)
</p>

---

#### **Erase Tool**
Removes pixels, restoring transparency in the selected cell area.  
Opacity and precision depend on the current brush size.

<p align="center">
  ![Erase Tool](/img/Grid_Tool_Erase.png)

  ![Erase Example 1](/img/Grid_Tool_Erase_example1.png)
  ![Erase Example 2](/img/Grid_Tool_Erase_example2.png)
</p>

---

#### **Fill Tool (Eill)**
Fills connected pixel regions with the chosen color.  
Affected area depends on the **fill threshold** value.
<p align="center">
  ![Fill Tool](/img/Grid_Tool_Fill.png)
  ![Erase Example 1](/img/Grid_Tool_Fill_example1.png)
  ![Erase Example 2](/img/Grid_Tool_Fill_example2.png)
</p>

---

#### **Wand Tool**

Used to **select and remove a color area** automatically, usually for background cleanup.  
The selection is based on color similarity and is influenced by the **Wand Threshold** slider.  
Ideal for deleting white backgrounds or isolating items with clean edges.

<p align="center">
  ![Wand Tool](/img/Grid_Tool_Wand.png) ![Erase Example 1](/img/Grid_Tool_Wand_example.png)
</p>


---

#### **Eyedropper Tool**
Samples a color from the image and sets it as the new **primary color**.  
Essential for matching tones and reusing palette colors.

<p align="center">
  ![Erase Example 1](/img/Grid_Tool_Eyedropper_example1.png) ![Eyedropper Tool](/img/Grid_Tool_Eyedropper.png) ![Erase Example 2](/img/Grid_Tool_Eyedropper_example2.png)
</p>

---

### 🎚️ Options

#### **Brush Size Slider**
Adjusts the pixel diameter of the brush and eraser tools.  
Higher values = thicker strokes.

<p align="center">
  ![Brush Size Slider](/img/Grid_Option_Brush_Size.png)
</p>

---

#### **Fill Threshold Slider**
Defines color tolerance for the fill tool.  
Low = only exact colors replaced.  
High = similar shades also filled.

<p align="center">
  ![Fill Threshold Slider](/img/Grid_Option_Fill_Threshold.png)
</p>

---

#### **Wand Threshold Slider**
Adjusts the tolerance of color selection when using background removal or mask functions.  
Higher values include more color range.

<p align="center">
  ![Wand Threshold Slider](/img/Grid_Option_Wand_Threshold.png)
</p>

---

### 🎨 Colors

<p align="center">
  ![Primary Color Selector](/img/Grid_Tool_Color_Selector.png)
</p>

#### **Primary Color Selector**
Sets the main color used for drawing and filling.  
Displayed in the left color box.

#### **Secondary Color Selector**
Defines the alternate color (used for right-click drawing or swaps).  
Displayed in the right color box.

#### **Swap Button**
Exchanges the primary and secondary colors instantly.  
Shortcut for quick palette adjustments.

#### **Predefined Color Set**
Displays multiple preset color swatches.  
Allows fast palette selection for consistent design.

---

### 👁️ View

<p align="center">
  ![View](/img/Grid_Tool_View.png)
</p>

#### **Zoom Slider**
Controls zoom level inside the grid canvas.  
Higher = closer view for pixel-level precision.

#### **Fit Button**
Adjusts zoom to fit the entire grid in the viewport.  
Useful for checking overall alignment.

#### **100% Button**
Displays the grid at its native pixel resolution.  
Perfect for checking texture sharpness.

#### **Zoom Preview**
Mini preview window that shows the visible portion of the zoomed canvas.  
Helps maintain spatial awareness during detailed edits.

---

### 💾 Export

<p align="center">
  ![Export](/img/Grid_Tool_Export.png)
</p>

#### **Selected Button**
Exports only the currently selected cells as individual image files.  
Maintains transparency and native size.

---

#### **All Cells Button**
Exports every grid cell as a separate image.  
Ideal for full batch extraction.

---

#### **Resized Button**
Exports the selected image(s) resized to model-specific resolutions (e.g., 16×16 or 32×32).  
Maintains consistent scaling across items.

---

#### **Sprite Button**
Exports all cells combined into a single **sprite sheet**.  
Useful for animation or game asset sheets.

---

#### **Format Combobox**
Defines the export file format:  
- PNG (default, transparency preserved)  
- JPEG (compressed, no alpha)  
- WEBP (compressed with transparency support)

---

### 🖱️ Right-Click Menu (Cell Actions)

When right-clicking a selected cell, a context menu appears:

<p align="center">
  ![Right Click](/img/Grid_Tool_Right.png)
</p>


#### **Copy as PNG (Not Resized)**
Copies the original-resolution cell image to clipboard.  
Used for quick editing in external tools.

---

#### **Copy as PNG (Resized)**
Copies the resized version of the cell image to clipboard.  
Adapts to chosen output size (e.g., 16px item textures).

---

#### **Save as PNG (Not Resized)**
Saves the selected cell in its original resolution as `.png`.  
Preserves transparency and unscaled detail.

---

#### **Save as PNG (Resized)**
Saves a scaled version of the cell in `.png` format.  
Useful for immediate use in Minecraft or other pixel-based projects.

---

### 📊 Grounded Summary

| Category | Function |
|-----------|-----------|
| **Tools** | Direct editing and drawing inside the grid |
| **Options** | Control brush, fill, and wand sensitivity |
| **Colors** | Manage and swap palette selections |
| **View** | Zoom and display controls for precision editing |
| **Export** | Output system for saving grid cells individually or in batch |
| **Right-Click Menu** | Quick-access actions for copying or saving a selected cell |

> Every element in **Grid Utils** affects the visual or structural integrity of your grid —  
> grounded in pixel precision and repeatable logic.
