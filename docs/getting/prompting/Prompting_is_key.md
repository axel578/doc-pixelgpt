---
sidebar_position: 3
---

import Image from '@theme/IdealImage';

# 🎨 Prompting Is Key

Prompting is the foundation of PixelGPT.  
It’s how you communicate with the AI — your words shape every pixel.  
A great prompt builds a clear mental image for the model; a bad one leaves it guessing.

:::tip Golden Rule
**AI is a mirror, not magic.**  
It draws what you describe — no more, no less.  
Clarity always beats complexity.
:::

---

## 🧩 What Is a Prompt?

A **prompt** is a **text instruction** that tells the AI what to create.  
It’s how you describe your vision — the clearer it is, the better the generation.

- A **short prompt** works best for **light models** such as *Baby* or *Standard*.  
  These models focus on simple shapes or classic Minecraft-style outputs.

- A **detailed prompt** is ideal for **advanced models** like *Pro*, *Ultimate*, *Elite*, or *Orion*.  
  They understand **complex structure, lighting, and artistic direction**, allowing for precise, creative results.

In every case, your prompt should remain **visual, descriptive, and structured**, guiding the AI step by step toward what you want to see.

### ✨ Example

- ✅ **Good Prompt:** `diamond sword sharp glowing blue`
- ❌ **Bad Prompt:** `I want a very nice blue sword with flowers for my Minecraft server`

> AI doesn’t understand sentences like humans do —  
> it needs clear visual keywords, not polite requests.

---

## 📏 Core Rules for Effective Prompts

### 1. **Use English**

:::warning Language Priority
Always write your prompts in **English**.  
Most image models (including PixelGPT’s) are trained mainly on English datasets.  
Other languages often break the syntax or produce unpredictable textures.
:::

- ✅ `red potion`
- ❌ `potion rouge`

---

### 2. **Be Concise and Specific**

The AI doesn’t think like a human — it doesn’t interpret intent, only **visual data**.  
That means every word should describe **what appears in the image**, not **what you want** or **how you feel**.

Use **clear, factual keywords**, not natural-language sentences.

| ❌ Bad Prompt |
|---------------|
| `I want a magical staff that glows with purple energy` |
| `A very detailed and realistic diamond pickaxe` |
| `Can you make me a sword?` |

---

#### ⚙️ Why “I want” Fails
The phrase *“I want”* or *“Can you make”* adds **no visual instruction**.  
The model doesn’t understand desire — it only processes **nouns (objects)** and **adjectives (appearance)**.  
Writing in human phrasing wastes tokens and weakens precision.

Instead of:
> “I want a beautiful sword glowing with light.”

Say:
> `glowing blue sword ornate gold hilt`

Each word now describes a **real, renderable attribute** — color, texture, material, and shape.

---

#### 🧠 Grounded Logic by Model Type

- 🪶 **Item or Block Models (16px–64px):**  
  Stay minimal — **1–8 words** describing the material and effect.  
  Example: `diamond sword glowing`  

- 🧩 **GUI or Scene Models (128px+):**  
  Require structure — describe **layout, zones, and grid logic**.  
  Example:  
  > `medieval shop gui, top: interior shelves, center: 4x4 item grid, bottom: 9-slot inventory, wooden frame`

- 🪞 **Advanced Models (Pro, Ultimate, Orion):**  
  Can interpret context — longer, **structured prompts** yield richer composition.  
  Example:  
  > `ancient crystal staff glowing purple, floating in dark cave, light rays and runes, cinematic pixel art style`

---

#### 💡 Tips

- Replace verbs like *“want”, “make”, “show”* with **visual attributes**.  
- Every word should **change what you see**, not how you feel.  
- Short for low-res items, detailed for complex scenes.  
- Always describe **color, material, shape, and layout** before style.  

---

✅ **In short:**  
> Be visual, not emotional.  
> Be descriptive, not narrative.  
> That’s what *Grounded* means.

---

### 3. **Avoid Jargon and References (Except Minecraft Models)**

AI models don’t think in terms of **game logic** — they think in **visual concepts**.  
If you use a name the model doesn’t recognize (like *Netherite* or *Hypixel*), it has to **guess** what it looks like.  
That leads to random or incoherent results.

However, **PixelGPT’s specialized Minecraft models** (*Item, Block, GUI, Armor*) include training data from Minecraft visuals.  
That means prompts like `elytra`, `diamond armor`, or `netherite pickaxe` **will work correctly** on those models — but **not** on general art or photo models.

---

| Concept | ❌ Bad Prompt | ✅ Grounded Prompt |
|----------|---------------|------------------|
| Minecraft Elytra | `elytra` | ✅ `elytra` *(works for Minecraft models only)* |
| Terraria Blade of Grass | `blade of grass` | `green glowing sword with leaves` |
| Anime Character | `Naruto Uzumaki` | `orange ninja outfit with headband` |
| Roblox Map | `roblox city` | `colorful blocky city low-poly style` |
| Hypixel Reference | `like Hypixel skyblock menu` | `fantasy shop gui, 4x4 grid center, coins and icons` |

---

#### ⚙️ Why Jargon Fails

When you use **franchise or system names**, the model doesn’t see visuals — it sees **text labels** without meaning.  
“Blade of Grass” could be *anything* if the model doesn’t have the reference.  
But when you say *“green glowing sword with leaves”*, every word describes a visible attribute:  
- “green” = color  
- “glowing” = light source  
- “leaves” = texture or material  

That’s what makes a **Grounded prompt** — it’s built from facts the AI can render.

---

#### 🧠 Model Awareness

- 🧱 **Minecraft Models** → Understand Minecraft terminology.  
  ✅ `elytra`, `diamond armor`, `netherite pickaxe`, `ender pearl`

- 🎨 **General Art Models** → Ignore game-specific words.  
  ⚠️ Use plain descriptions like `silver wings`, `purple sword`, `stone cube`.

- 🧩 **GUI or Scene Models** → Need functional detail, not brand names.  
  ✅ `trading shop gui`, not `Hypixel shop`

---

#### 💡 Tips

- Use **real attributes** — color, texture, material, shape.  
- Don’t assume the AI knows your game or universe.  
- If it’s a **Minecraft model**, you can use direct item names safely.  
- If it’s **any other model**, describe what the item *looks like*, not what it’s *called*.  

---

✅ **In short:**  
> Use names only if the model was built for them.  
> Otherwise, describe the **visual facts** — not the **game reference**.


---

### 4. **Use Adjectives Wisely**

Adjectives define **tone**, **lighting**, and **material** — they are what give your prompt its visual identity.  
But not all adjectives help. The AI only understands words that **change how something looks**.  

That’s what *Grounded* means here:  
➡️ Use adjectives that affect **color, texture, shape, or light**.  
❌ Avoid adjectives that describe **feelings, quality, or storytelling**.

---

| ❌ Weak / Narrative | ✅ Grounded / Visual |
|--------------------|----------------------|
| “beautiful sword” | `golden ornate sword` |
| “amazing potion” | `glowing blue potion` |
| “cool armor” | `dark steel armor spiky` |
| “magical sword of destiny” | `purple glowing sword with runes` |
| “realistic nice pickaxe” | `iron pickaxe shiny scratched` |

---

#### ⚙️ Why It Matters

Every adjective consumes **meaning space** in your prompt.  
If you use “beautiful” or “amazing,” the AI doesn’t know *what makes it beautiful*.  
If you say “ornate,” it understands: *detailed decorations, carved edges, gold patterns.*

**Grounded adjectives** give *visual intent*.  
They describe what can actually be drawn — color, light, surface, or geometry.

---

#### 🧠 Categories of Useful Adjectives

| Type | Examples | What They Control |
|------|-----------|------------------|
| 🎨 **Color & Light** | red, glowing, shiny, dark, bright | Defines tone and illumination |
| ⚒️ **Material & Texture** | wooden, metallic, stone, fabric, crystal | Affects surface and reflection |
| 🧱 **Condition & Wear** | rusty, cracked, polished, worn | Adds realism or age |
| 🪄 **Style & Mood** | ornate, mystical, fantasy, medieval | Sets artistic direction |
| 🌀 **Shape & Detail** | round, spiky, layered, symmetrical | Guides silhouette and form |

---

#### 💬 Grounded Examples

- `blue potion` → `glowing blue potion` *(adds light source)*  
- `sword` → `golden ornate sword` *(adds material + detail)*  
- `helmet` → `dark steel helmet with spikes` *(adds tone + shape)*  
- `book` → `ancient book with golden lock` *(adds age + focus point)*  
- `shield` → `wooden shield reinforced with iron rim` *(adds realism)*  

---

#### 💡 Tips

- Add **1–3 adjectives** max — enough for clarity, not clutter.  
- Always start with **color or material**, then style or mood.  
- Avoid words like *beautiful, awesome, epic, nice* — they have no shape or texture.  
- Think like a painter: adjectives are your **brushstrokes**.

---

✅ **In short:**  
> Adjectives don’t tell stories — they build visuals.  
> Use them to **sculpt** what the model can see.

---

### 5. **Structure Your Prompt**

A good prompt isn’t just words — it’s **a formula the model reads left to right**.  
The order defines **what’s drawn first**, **how it looks**, and **what style or lighting wraps it all**.

The *Grounded* approach to prompting is simple:
> **[Main Subject] → [Visual Descriptors] → [Optional Style or Context]**

---

#### ⚙️ Why Structure Matters

AI models interpret words like a **stack of layers**:  
1. **Subject** → the object being generated (sword, block, armor).  
2. **Descriptors** → colors, materials, light, and surface details.  
3. **Style / Context** → the artistic or thematic tone (pixel art, fantasy, medieval, GUI, etc.).  

If you mix the order, the model can mis-prioritize elements:  
> `glowing pixel art sword diamond` ⛔ (confused structure)  
> `diamond sword glowing pixel art style` ✅ (clean, logical structure)

---

#### 🧩 Grounded Prompt Formula

```
[Main Subject] + [Color / Material] + [Texture / Effect] + [Style or Context]
```

Examples:
| Type | Grounded Example | Explanation |
|------|------------------|-------------|
| **Weapon** | `diamond sword sharp blue glow` | Clear order: material → shape → lighting |
| **Block** | `stone brick mossy cracked` | Defines texture and condition |
| **Potion** | `red bubbling potion bottle` | Adds motion and transparency |
| **Armor** | `iron chestplate rusty scratched` | Material + wear detail |
| **GUI** | `medieval shop menu wooden frame` | Layout + style |
| **Scene** | `forest clearing sunset pixel art` | Subject + environment + lighting |

---

#### 🧠 Common Mistakes

| ❌ Wrong | ✅ Fixed |
|----------|----------|
| `make a sword glowing blue diamond` | `diamond sword glowing blue` |
| `realistic pixel art stone block` | `stone block pixel art style realistic lighting` |
| `fancy medieval fantasy gui shop` | `medieval shop gui wooden frame fantasy style` |

---

#### 💡 Tips

- Always start with the **object**, never the style.  
- Group related words: color + texture + material together.  
- Keep styles at the **end**: `pixel art style`, `cartoon`, `realistic`.  
- Separate concepts with commas for clarity:  
  > `diamond sword glowing blue, pixel art style, centered composition`  

---

✅ **In short:**  
> A prompt is a sentence for the model — not for you.  
> The clearer the structure, the clearer the image.

---

## 🎮 Pixel Art Models

PixelGPT’s item models generate **Minecraft-style pixel textures**  
from simple, descriptive prompts. Each resolution supports a different level of complexity.

---

### 12px / 16px / 32px Items

Used for simple Minecraft-style items, blocks, and icons.

#### ✅ Good Prompts

- diamond sword  
- golden apple  
- iron pickaxe shiny  
- red potion bottle  
- emerald ore block  
- stone brick cracked  
- leather boots worn  
- ruby gem  
- enchanted book glowing  
- wooden shield  

#### ❌ Bad Prompts

- “I want a very detailed sword with engravings” → too complex for small pixels  
- “make me the best sword ever” → vague  
- “épée en diamant” → not English  
- “Excalibur legendary blade” → copyrighted reference  
- “netherite_sword_texture.png” → filenames don’t work  

| ✅ | ❌ |
|----|----|
| golden apple | A realist photo natural of a legendary ... |
|![diamond_sword16](/img/golden_apple_0_0.png) | ![diamond_sword16](/img/A_realist_photo_natural_of_a_legendary_diamond_sword_glowing_with_soft_purple_energy,_embedded_in_ancient_stone,_surrounded_by_mist_and_faint_light_rays,_detailed_blade_with_runes,_c.png)|

---

#### 💡 Tips
- **12px–16px:** use 1–3 words max (e.g. `golden sword`, `stone block`).  
- **32px:** add one visual detail (`ornate`, `glowing`, `rusty`).  
- Avoid complex compositions or realism — focus on shape clarity.

---

### 64px Items & Blocks

Higher resolution = more room for descriptive texture.

#### ✅ Good Prompts

- ornate golden sword with ruby  
- ancient stone brick mossy  
- glowing blue potion bubbling  
- iron chestplate scratched battle worn  
- enchanted diamond pickaxe purple glow  
- dark oak wood polished  
- silver crown with emerald gems  
- magical staff crystal top  
- leather book with metal clasp  
- bronze shield with lion emblem  

#### ❌ Bad Prompts

- “a sword forged in the fires of Mount Doom” → narrative, not descriptive  
- “realistic photographic sword” → wrong style  
- “rainbow unicorn sparkle sword with wings” → overloaded  

| ✅ | ❌ |
|----|----|
| glowing blue potion bubbling | realistic photographic sword |
|![potion](/img/glowing_blue_potion_bubbling.png) | ![sword](/img/realistic_photographic_sword.png)|

---

#### 💡 Tips

- Add **2–4 descriptors** for texture or condition (`rusty`, `cracked`, `shiny`).  
- Include **material keywords** — gold, steel, leather, wood, etc.  
- Avoid fantasy clutter — one core idea per object.

---

### 128px / 256px Pixel Art

Used for **landscapes, scenes, or GUI backgrounds.**

#### ✅ Good Prompts

- medieval castle ruins sunset  
- fantasy forest clearing mushrooms  
- desert oasis palm trees  
- underwater coral reef colorful  
- snow mountain peaks clouds  
- village marketplace stalls  
- pirate ship deck wooden  
- dungeon corridor torches  

#### ❌ Bad Prompts

- “make me a beautiful landscape” → vague  
- “scene from Lord of the Rings” → copyrighted  
- “photorealistic mountain photo” → wrong style  

| ✅ | ❌ |
|----|----|
| dungeon corridor torches | make me a beautiful landscape |
|![good](/img/dungeon_corridor_torches.png) | ![bad](/img/make_me_a_beautiful_landscape.png)|

---

#### 💡 Tips
- Focus on **environment + atmosphere** (`foggy forest`, `sunset field`).  
- Mention **mood and lighting** (sunset, torchlight, moonlight).  
- Avoid realism or references — these are still pixel scenes.

---

## ⚔️ Minecraft Armor Sets (64px / 128px)

Used for generating **complete armor sets** (helmet, chestplate, leggings, boots).  
Each piece follows Minecraft’s standard proportions and shading logic.

---

#### ✅ Good Prompts

- diamond armor set shiny  
- iron armor battle worn rusty  
- golden royal armor ornate  
- dark steel armor spiky  
- emerald armor glowing green  
- leather armor brown simple  
- obsidian armor black sharp  
- ruby armor red gemstone  
- silver knight armor polished  

#### ❌ Bad Prompts

- “armor” → too vague  
- “netherite armor with enchantments” → too specific to mechanics  
- “armor like in Game of Thrones” → copyrighted reference  

| ✅ | ❌ |
|----|----|
| diamond armor set shiny | armor |
|![diamond_armor](/img/diamond_armor_set_shiny.png) | ![armor_bad](/img/armor_7_0.png)|

---

#### 💡 Tips
- Always specify **material** (diamond, iron, gold…).  
- Add one **style keyword** (rusty, shiny, ornate…).  
- Avoid referencing franchises or enchantments — describe the visual only.

---

## 🧭 GUI Generation (Graphical User Interfaces)

PixelGPT supports **custom pixel-art interfaces** for Minecraft or fantasy-style UIs.  
GUI prompts require **extreme clarity** — the model must know exactly what to place, and where.

---

### 🧠 Understanding GUI Prompts

To generate a good interface, describe **layout, zones, and counts**.  
For instance:
- What is displayed (slots, buttons, icons)  
- Where each section is positioned (top, middle, bottom)  
- How many slots, buttons, or decorations  
- What theme or material (wood, stone, magical)

:::warning Critical Rule
“Shop GUI” is **not** a valid prompt.  
The AI cannot infer layout. You must **define every section explicitly**.
:::

---

## 🏪 Example 1: Shop Menu GUI

### 📍 Spatial Breakdown

| Element | Position | Description |
|----------|-----------|-------------|
| **Shop Interior Background** | Top | Wooden shelves, hanging banners, warm lighting |
| **Item Grid (4x4)** | Center | 16 item slots arranged symmetrically |
| **Player Inventory (9x4)** | Bottom | Standard Minecraft layout (36 slots) |
| **Frame** | Outer border | Carved wood frame with coins and ropes |
| **Decorations** | Around frame | Banners, lamps, gems, coins for atmosphere |

---

### 🎯 Why This Works

- ✅ Defines clear **zones** (top / center / bottom).  
- ✅ Specifies **exact grid count** (4x4, 9x4).  
- ✅ Describes **materials** (wood, gold, cloth).  
- ✅ Sets **atmosphere** (cozy medieval tone).  
- ✅ Balanced visual logic — easy for AI to follow.

---

### 💬 Example Prompt

> A **pixel art shop GUI**, cozy medieval fantasy style.  
> At the **top**, display a **shop interior background**: wooden shelves, hanging banners, small glowing lamps, and a “SHOP” sign.  
>  
> In the **center**, show a **4x4 grid of item slots** (16 total), clearly outlined and centered.  
>  
> At the **bottom**, display a **player inventory section** (9x4 = 36 slots).  
>  
> Surround the interface with a **carved wooden frame** decorated with coins, ropes, and purple curtains.  
>  
> Use a **black background** behind the GUI for strong contrast.  
> Lighting is **warm and soft**, creating a cozy shop atmosphere.

---

### 📸 Visual Comparison

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '2rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '2rem auto',
  }}>

  <div
    style={{
      flex: '1 1 550px',
      minWidth: '40%',
      maxWidth: '40%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h4>✅ Detailed Prompt</h4>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.5', flex: '1' }}>
      a detailed pixel art shop GUI, symmetrical and colorful, drawn in a cozy medieval fantasy style.
      at the top, display a warm shop interior background: wooden shelves, hanging banners, stacked crates, and small glowing lamps.
      a “SHOP” sign hangs above the counter, surrounded by gold coins and purple curtains.
      in the center, show a 4x4 grid of item slots (16 total) arranged neatly in a square formation.
      at the bottom, include the player inventory section with 9 columns x 4 rows = 36 slots.
      surround the interface with a carved wooden frame and small decorative coins and banners.
      use a black background for strong contrast and warm, soft lighting for atmosphere.
    </p>

    <div style={{ textAlign: 'center', marginTop: 'auto' }}>
      <Image
        img={require('@site/static/img/a_detailed_pixel_art_shop_GUI,_symmetrical_and_colorful,_drawn_in_a_cozy_medieval_fantasy_style_0_0.png')}
        alt="Detailed Shop GUI example"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </div>
  </div>

  <div
    style={{
      flex: '1 1 550px',
      minWidth: '40%',
      maxWidth: '40%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h4>❌ Vague Prompt</h4>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.5', flex: '1' }}>
      shop GUI
    </p>

    <div style={{ textAlign: 'center', marginTop: 'auto' }}>
      <Image
        img={require('@site/static/img/shop_GUI_0_0.png')}
        alt="Vague shop GUI example"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </div>
  </div>
</div>

---

## ✨ Example 2: Enchanting Table Interface

### 📍 Spatial Breakdown

| Element | Position | Description |
|----------|-----------|-------------|
| **Book Pedestal** | Top-left | Floating magical book above pedestal |
| **Item Slot** | Top-center | Input for item to enchant |
| **Lapis Slot** | Bottom-center | Slot for payment (lapis lazuli) |
| **Enchant Buttons (x3)** | Right side | Runes + cost, vertical alignment |
| **Inventory Grid** | Bottom | Player’s 9x4 layout (36 slots) |
| **Frame** | Outer border | Silver ornate metal with runes |
| **Background** | Whole image | Dark purple with magical particles |

---

### 💬 Example Prompt

> A **mystical pixel art enchanting table GUI**, inspired by Minecraft.  
>  
> **Top-left:** floating magical book pedestal, purple aura and sparks.  
> **Top-center:** one item slot for the tool or weapon.  
> **Bottom-center:** lapis lazuli slot (small square).  
> **Right side:** three vertical enchantment buttons, engraved with glowing runes and small level numbers (“??? - 3 levels”).  
> **Bottom:** player inventory grid (9 columns x 4 rows = 36 slots).  
> **Background:** dark purple gradients, floating runes, soft glow.  
> **Frame:** ornate silver metal with arcane engravings in each corner.  
>  
> The layout is symmetrical and illuminated by soft, mystical light.

---

### 🎯 Why This Works

- ✅ All **positions and counts** are defined  
- ✅ Visual hierarchy follows game logic  
- ✅ Consistent **theme and color palette**  
- ✅ Function + decoration balance  
- ✅ Works perfectly for GUI rendering models  

---

## 🤝 Example 3: Villager Trading GUI

### 📍 Spatial Breakdown

| Element | Position | Description |
|----------|-----------|-------------|
| **Villager Portrait** | Top-left | Character face + profession icon |
| **Trade Slot Group 1–3** | Center-left | Two input slots → arrow → one output slot |
| **Highlight Box** | Around trade row | Indicates selected trade |
| **Emerald Counter** | Top-right | Icon + numeric counter |
| **Player Inventory** | Bottom | Standard 9x4 slots |
| **Frame & Background** | Whole interface | Wooden planks + oak borders |
| **Decorations** | Corners | Potted plant (bottom-left), lantern (top-right) |

---

### 💬 Example Prompt

> A **pixel art villager trading GUI**, warm medieval wooden style.  
>  
> **Top-left:** villager portrait with profession badge.  
> **Center-left:** three trade rows (each = 2 inputs → arrow → 1 output).  
> **Highlight:** yellow glowing border on selected trade.  
> **Top-right:** emerald counter icon and number.  
> **Bottom:** player inventory 9x4 slots.  
>  
> Add wooden frame, lantern, small potted plant, soft warm lighting, symmetrical layout.

---

### 🎯 Why This Works

- ✅ Defines **all functional elements** (slots, arrows, counters).  
- ✅ Logical top → center → bottom flow.  
- ✅ Uses thematic **cozy color palette**.  
- ✅ Keeps spatial proportions readable for AI.  

---

## 🧩 GUI Prompt Formula

A structured template for consistent results:

> a [theme/style] [GUI type], clean pixel art, symmetrical layout

> [top-left]: [element + purpose]
> [top-center]: [element + purpose]
> [top-right]: [element + purpose]

> [center-left]: [element, grid XxY]
> [center]: [element, alignment, purpose]
> [center-right]: [buttons, counters, etc.]

> [bottom-full]: player inventory grid (9x4 = 36 slots)

> [background]: [texture / mood]
> [frame]: [material + decoration]
> [extras]: [particles, coins, glow, etc.]


---

### 🎨 Essential Position Keywords

> **Vertical**
>
> - top area, upper section, bottom area, lower section  
>
> **Horizontal**
>
> - left side, center, right side  
> - top-left, bottom-right, etc.  
>
> **Grid & Inventory**
>
> - 4x4 grid = 16 slots  
> - 9x4 = 36 slots (player inventory standard)  

---

### 🚫 Common GUI Prompt Mistakes

| ❌ Bad Prompt | Why It Fails | ✅ Fixed Version |
|---------------|---------------|----------------|
| `gui` | No structure or type | “Shop GUI with top interior, 4x4 grid, and 9x4 inventory” |
| `shop interface` | Missing spatial info | Add “top: shelves / center: item grid / bottom: inventory” |
| `inventory menu` | Too vague | Define grid counts and positions |
| `menu with slots` | Missing layout details | Include “center 3x3 grid, bottom 9-slot row” |
| `like Hypixel` | Unclear reference | Describe it visually instead |

---

:::tip Key Takeaway
A **good GUI prompt** is like an architectural plan.  
If you can visualize it clearly from your words, the AI will too.
:::

---

## 🎨 Illustration Models

### 🐰 **Cartoon / 2D Art**

Used for **stylized, expressive, and colorful 2D illustrations** —  
ideal for fantasy characters, creatures, or storybook-like art.

---

#### ✅ Good Prompts

- a cute baby dragon sitting on a pile of gold coins, smiling happily, cartoon style, bright colors, clean white background  
- a brave knight standing proudly with his silver sword raised, wearing shiny armor, in a castle courtyard at sunrise, cartoon 2D art  
- a magical wizard casting glowing spells with a golden staff, surrounded by floating books and potions, inside a cozy library, stylized illustration  
- a cheerful pirate captain wearing a red coat and tricorn hat, standing on a wooden ship deck with blue ocean behind, cartoon illustration style  
- a fantasy elf archer aiming an arrow in a lush green forest, sunlight filtering through trees, soft painterly 2D style  
- a friendly monster waving with a big smile, round body, pastel colors, minimal background, children’s cartoon look  
- a treasure chest opening with golden light and flying coins, simple clean lines, cartoon fantasy art  
- a floating island with a tiny castle and waterfalls, bright sky, cute fantasy aesthetic  

---

#### ❌ Bad Prompts

- `cute dragon` → too vague, lacks context  
- `brave knight` → missing environment and emotion  
- `cartoon monster` → not enough descriptors  
- `floating island` → unclear perspective and style  
- `Goku fighting Freezer` → copyrighted  

---

#### 💡 Tips

- Use **action and emotion** → “waving”, “sitting happily”, “casting a spell”.  
- Add **environment or setting** → “in a forest”, “on a ship deck”.  
- Mention **style** → “cartoon”, “storybook”, “2D art”, “flat color style”.  
- Avoid realism — focus on **expressive shapes and bright tones**.  

---

#### 🧠 Why These Work

- ✅ Each prompt defines **character, action, and mood**.  
- ✅ Adds **environmental storytelling**.  
- ✅ Uses **clean color cues** (bright, soft, or warm).  
- ✅ Keeps backgrounds simple — ideal for 2D renders.  

---

#### 💬 Prompt Template

```
a [mood adjective] [character/creature] [performing an action], wearing [clothing/accessories], in [setting/environment], with [lighting/mood], drawn in [cartoon / 2D art / stylized] style
```
##### Example Using Template
```
a curious wizard mixing glowing potions at a wooden table, surrounded by books and candles, in a cozy tower room, warm lighting, cartoon 2D art style
```


![wizard](/img/a_curious_wizard_mixing_glowing_potions_at_a_wooden_table,_surrounded_by_books_and_candles,_in_a_cozy_tower_room,_warm_lighting,_cartoon_2D_art_style_0_0.png)

---

### 🐦‍🔥 **Logos & Icons**

Used for creating **clean, symbolic icons, badges, and emblems**.  
Logos should be **simple, centered, and high contrast**, focusing on one idea.

---

#### ✅ Good Prompts

- a sword and shield emblem, symmetrical, metallic texture, glowing blue outline, centered on dark background, fantasy logo style  
- a phoenix rising from flames, wings spread wide, orange and gold tones, circular badge design, glowing aura behind  
- a dragon head profile logo, sharp horns and scales, red and black contrast, centered minimalist background  
- a golden crown with gemstones, ornate design, bright reflections, dark gradient background  
- a wolf howling at a full moon, silhouette style, circular frame, silver and blue palette  
- a tree with twisting roots and glowing green leaves, ancient symbol, circular logo composition  
- a skull with roses intertwined, gothic emblem, red petals, metallic bones, black background  
- a lightning bolt badge, simple angular design, yellow glow, on dark background  
- a compass star navigation symbol, gold and navy color palette, clean geometric symmetry  

---

#### ❌ Bad Prompts

- `logo` → too generic  
- `Nike swoosh` → copyrighted  
- `make it cool` → meaningless  

---

#### 💡 Tips

- Keep **one clear subject** (no clutter).  
- Add **composition cues** like “circular”, “centered”, or “emblem style”.  
- Mention **materials and lighting** — “metallic”, “glowing”, “engraved”.  
- Always describe **background** — usually dark, simple, or gradient.  

---

#### 🧠 Why These Work

- ✅ Clear silhouette and balance.  
- ✅ Color and light contrast for readability.  
- ✅ Focus on **symbolic shapes** (no scenes).  
- ✅ Perfect for game UI icons or server emblems.  

---

#### 💬 Prompt Template

```
a [symbol or object], [composition/shape], [materials/colors], [lighting or glow], [background or mood], logo style
```


##### Example Using Template


```
a golden dragon coiled around a sword, circular emblem, glowing red aura, centered on black background, fantasy logo style
```


![dragon](/img/a_golden_dragon_coiled_around_a_sword,_circular_emblem,_glowing_red_aura,_centered_on_black_background,_fantasy_logo_style_0_0.png)

---

### 🖼️ **Thumbnail Models**

Used for **YouTube thumbnails** and **cinematic Minecraft scenes**.  
These prompts should have **drama, energy, and clear focal points**.

---

#### ✅ Good Prompts

- an epic minecraft pvp battle between two armored players holding diamond swords, sparks flying, lava glow, cinematic lighting, dynamic camera angle  
- a massive castle siege at sunset, fireballs and catapults, knights storming walls, dark stormy sky, dramatic perspective  
- a miner discovering glowing diamond ore deep inside a cave, torchlight reflections, misty atmosphere, cinematic look  
- a mysterious nether portal glowing purple, lava rivers nearby, smoke and embers, dramatic composition  
- a creeper explosion mid-blast, dirt particles flying, player silhouette in front, high-contrast lighting  
- a player fighting a huge dragon in the sky, fire breath, golden sunset, wide-angle shot  
- a cozy survival base showcase with farms and torches, peaceful morning light, colorful layout  
- a redstone machine with glowing circuits and pistons moving, viewed from above, bright lighting  

---

#### ❌ Bad Prompts

- `thumbnail` → no subject  
- `clickbait` → meaningless  
- `MrBeast style` → vague reference  

---

#### 💡 Tips

- Use **action verbs** → “fighting”, “exploding”, “discovering”.  
- Add **lighting effects** → “sunset”, “lava glow”, “torchlight”.  
- Mention **camera angle or scale** → “wide shot”, “close-up”, “dynamic”.  
- Keep **one strong focal point** — avoid overcrowding the frame.  

---

#### 🧠 Why These Work

- ✅ Each prompt includes **subject + lighting + motion**.  
- ✅ Balanced between realism and Minecraft’s blocky charm.  
- ✅ Uses cinematic direction (contrast, focus, mood).  

---

#### 💬 Prompt Template

```
a [main subject] [performing action], [environment/setting], [lighting or atmosphere], [camera perspective], [mood or tone], thumbnail composition
```

##### Example Using Template

```
Featuring a white-armored astronaut character with golden goggles resting clearly on his forehead above the visor, not on his eyes. He has a dark, reflective visor covering his face and holds a small wooden wrench in his right hand. To his right stands a grey stone cannon on a wooden base, angled slightly upward. The scene takes place in a lush, blocky green landscape under a dark, starry night sky with softly glowing stars. Above the astronaut, a prominent red banner with the text "FuzeCorp" in white replaces his in-game name. In the top-right corner, a blue box displays "EPISODE 01" in white. On the right side, bold white text reads "NOUVEAU MOD" with a white curved arrow pointing toward the cannon. The overall composition is bright, dynamic, and game-like, with vibrant colors and clean framing.
```

<p align="center">
  ![Generated fuze](/img/Fuze_III.jpg)
  <em>Real Thumbnail</em>
</p>

<p align="center">
  ![Real fuze](/img/Fuze_thumbnail_generated.png)
  <em>Generated Thumbnail</em>
</p>

---

### 🎭 **Realistic / Photography Models**

Used for **high-detail renders** of **materials, weapons, or artifacts**.  
These models simulate realistic textures, lighting, and photography composition.

---

#### ✅ Good Prompts

- a medieval sword resting on a stone pedestal, realistic steel texture, sunlight reflecting on blade, moss and dust around, cinematic lighting  
- an ancient open book illuminated by candlelight, golden ink glowing softly, warm shadows on wooden desk  
- a crystal gemstone glowing purple under dim light, placed on black velvet fabric, macro photo style  
- a detailed leather armor chestplate hanging from a wooden stand, soft daylight shadows, rustic medieval room  
- a golden crown with rubies and emeralds, velvet background, studio lighting, shallow depth of field  
- a wooden chest with ornate metal corners, half-open with gold coins inside, natural morning light  

---

#### ❌ Bad Prompts

- `photo of a sword` → too generic  
- `8k ultra realistic` → useless buzzwords  
- `like a movie scene` → reference, not description  

---

#### 💡 Tips

- Mention **material**: steel, leather, wood, crystal.  
- Add **light source**: candlelight, daylight, studio.  
- Describe **background texture**: velvet, stone, table.  
- Avoid filler words — focus on **what’s visible**.

---

#### 🧠 Why These Work

- ✅ Physical realism — surface, light, reflection defined.  
- ✅ Simple compositions (1–2 main subjects).  
- ✅ Creates believable photography framing.  

---

#### 💬 Prompt Template

```
a [object or subject] placed on [surface/environment], [material details], [lighting type], [mood or tone], [realistic or photographic style]
```


##### Example Using Template

```
a crystal dagger resting on black velvet, silver hilt engraved with runes, illuminated by candlelight from the side, dark ambient background, cinematic realistic photo style
```


![dagger](/img/a_crystal_dagger_resting_on_black_velvet,_silver_hilt_engraved_with_runes,_illuminated_by_candlelight_from_the_side,_dark_ambient_background,_cinematic_realistic_photo_style_0_0.png)

---

## 📊 Prompt Templates by Model Category

Each model responds best to a **specific prompt structure**.  
Use these templates as blueprints for consistent results.

| Model Type | Template | Example |
|-------------|-----------|----------|
| **16px Item** | [material] [item] | `diamond sword` |
| **32px Item** | [material] [item] [style] | `golden sword ornate` |
| **64px Item** | [material] [item] [style] [detail] | `iron sword rusty battle worn` |
| **Armor Set** | [material] armor [style] | `diamond armor shiny` |
| **Block** | [material] [block] [texture] | `stone brick mossy cracked` |
| **GUI** | [theme] [interface type] | `medieval shop menu wooden` |
| **Pixel Art Scene** | [location] [lighting/mood] | `forest clearing sunset` |
| **Cartoon / 2D Art** | [character] [action] [mood] | `knight running brave` |
| **Logo / Icon** | [symbol] [style] [composition] | `dragon head profile centered glowing` |
| **Thumbnail** | [action] [subject] [lighting] | `epic battle castle dramatic` |
| **Realistic / Photo** | [object] [surface/material] [lighting/mood] | `medieval sword on stone candlelight` |

---

## ⚠️ Common Mistakes to Avoid

Even a small wording error can confuse the model.  
Here are the **most frequent prompt problems** and how to fix them 👇

---

### ❌ **Mistake 1: Full Sentences**

- "I want a very nice blue sword with flowers for my Minecraft server."


→ Too verbose. AI doesn’t understand long grammar structures.  
✅ Use: `blue sword with floral engravings`

---

### ❌ **Mistake 2: Overloading Details**

- "A sword made of diamond with golden hilt, red gems, green glow, purple aura, and rainbow flames."

→ Too many ideas = visual chaos.  
✅ Use: `diamond sword golden hilt glowing red gem`

---

### ❌ **Mistake 3: Vague Requests**

- "Make it look cool."

→ “Cool” means nothing visually.  
✅ Use: `glowing blue sword sharp detailed`

---

### ❌ **Mistake 4: Code / JSON Inputs if(unsure)**

``` json
{ "item": "sword", "color": "blue" }
```

→ AI ignores structured formats — only natural text works.
✅ Use: blue sword pixel art

### ❌ **Mistake 5: Copyrighted References**

- Master Sword from Zelda
- Lightsaber from Star Wars

→ IP-based terms confuse or restrict the model.
✅ Use: legendary glowing sword silver hilt

:::info 👉 Learn More
For a full breakdown of prompting errors and fixes,
see Prompt Troubleshooting → Common Mistakes

:::

## 🧪 Testing and Iterating

:::tip 💡 Experimentation Is Key
AI prompting is a creative process, not a one-shot command.
Each generation teaches you what the model “understood”.
Don’t aim for perfection — iterate until it clicks.
:::

## 🔁 Example Iteration Process

| Step                   | Prompt                                                        | Result                            |
| ---------------------- | ------------------------------------------------------------- | --------------------------------- |
| **1. First Attempt**   | `sword`                                                       | Too generic — no color, no style. |
| **2. Improved Prompt** | `diamond sword`                                               | Better subject, still plain.      |
| **3. Refined Prompt**  | `diamond sword sharp glowing blue`                            | ✅ Clear, energetic visual.        |
| **4. Final Polish**    | `diamond sword sharp glowing blue, pixel art style, centered` | 🎨 Production-ready output.       |

---

## ⚙️ Iteration Tips

🔍 Change one variable at a time (color, lighting, or material).

🧠 Focus on visual clarity, not story.

🧱 Test small variations rather than rewriting everything.

🪞 Avoid contradictions like “realistic pixel art”.

✨ Observe patterns — which words improve the outcome?

---

## 💬 Example Refinement Cycle

| Round | Change                | Effect                    |
| ----- | --------------------- | ------------------------- |
| 1     | Add “glowing”         | Adds lighting depth       |
| 2     | Add “sharp”           | Defines weapon silhouette |
| 3     | Add “pixel art style” | Forces stylization        |
| 4     | Remove “background”   | Simplifies focus          |

---

## ✅ Key Takeaway

Iteration = learning through generation.
A perfect prompt is not written — it’s discovered.

---

## ✅ Summary

| Rule                               | Example                                     |
| ---------------------------------- | ------------------------------------------- |
| ✅ Use English                      | `red potion`                                |
| ✅ Be concise                       | `golden sword`                              |
| ✅ Avoid jargon                     | “two black angel wings” instead of “elytra” |
| ✅ Add adjectives                   | `glowing blue sword`                        |
| ✅ Match detail to model resolution | 16px = simple, 64px = detailed              |
| ✅ Describe visually                | `green glowing sword`, not “Blade of Grass” |
| ❌ Don’t use full sentences         | ❌ “I want a nice sword”                     |
| ❌ Don’t overload details           | ❌ “red blue green purple glowing”           |
| ❌ Don’t use copyrighted names      | ❌ “Master Sword”                            |

---

🦊 Final Thoughts

Prompting is like painting with words —
each word adds color, light, or form.
The key isn’t writing long descriptions,
but guiding the model’s imagination with precision and tone.

:::tip Yugo’s Advice
Keep your prompts human, not mechanical.
Each generation should feel like a small conversation with your AI artist.
That’s where real magic happens. 🌙
:::