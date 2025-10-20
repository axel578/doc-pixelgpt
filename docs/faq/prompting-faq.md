---
sidebar_position: 5
---

# Prompting FAQ

Questions about writing prompts.

<details>
<summary><strong>Why must prompts be in English?</strong></summary>

**AI trained primarily on English** (80-90% of training data).

**Other languages:**
- French/Spanish: 40-60% success
- Korean/Japanese: 25-35% success
- English: 90-95% success

**Quality difference is dramatic.**

[See language comparison →](../prompting/effective-prompting/use-english)

</details>

<details>
<summary><strong>Can I use translation tools?</strong></summary>

**Yes!** Highly recommended for non-English speakers.

**Workflow:**
1. Write in your language
2. Translate to English (Google Translate, DeepL)
3. Simplify translated English
4. Use in Pixel GPT

**DeepL often better** than Google for nuance.

</details>

<details>
<summary><strong>How long should prompts be?</strong></summary>

**Optimal:** 5-15 words

```
Too short: "sword" (vague)
Perfect: "blue diamond sword with golden handle" (10 words)
Too long: 20+ words (AI gets confused)
```

[Prompt structure guide →](../prompting/prompting-basics/prompt-structure)

</details>

<details>
<summary><strong>Can I generate multiple items in one prompt?</strong></summary>

**No.** AI generates one item type per prompt.

```
❌ "sword and pickaxe and helmet"
✅ "sword" (generate separately)
```

**For multiple items:** Use Batch generation.

</details>

<details>
<summary><strong>Why does AI ignore parts of my prompt?</strong></summary>

**Common causes:**

**1. Too many details** (AI overwhelmed)
```
Fix: Simplify to 10-15 words
```

**2. Contradictory terms**
```
"dark bright sword" - contradictory
```

**3. Unknown jargon**
```
"netherite" - AI may not know
Fix: Describe visually
```

**4. Text Accuracy too low**
```
Fix: Raise to 7-8
```

[Troubleshooting →](../prompting/prompt-troubleshooting/ai-ignores-prompt)

</details>

<details>
<summary><strong>What are good adjectives to use?</strong></summary>

**Effective adjectives:**

**Colors:** blue, red, golden, dark, bright  
**Materials:** diamond, iron, crystal, wooden  
**Effects:** glowing, shiny, rusty, enchanted  
**Quality:** ornate, simple, decorated, ancient

**Avoid:** nice, cool, awesome, good (subjective)

[Complete adjective guide →](../prompting/effective-prompting/use-adjectives)

</details>

<details>
<summary><strong>Should I describe function or appearance?</strong></summary>

**Always appearance** (what it looks like).

```
❌ "powerful sword" (function)
✅ "large glowing sword" (appearance)

❌ "fast boots" (function)
✅ "winged boots with feathers" (appearance)
```

**AI generates images** - describe visually.

</details>

<details>
<summary><strong>Can I use game-specific terms?</strong></summary>

**Vanilla Minecraft terms:** Usually OK
```
✅ diamond, iron, sword, pickaxe
```

**Mod terms:** Usually fail
```
❌ netherite, elytra
✅ Describe visually instead
```

**Test first** - if AI doesn't understand, describe visually.

[Jargon guide →](../prompting/effective-prompting/avoid-jargon)

</details>

<details>
<summary><strong>How do I prompt for specific styles?</strong></summary>

**Add style keywords:**

```
"medieval iron sword"
"fantasy magical staff"
"futuristic laser gun"
"cartoon colorful apple"
```

**Or use Style Selector** with style reference images for better control.

[Style prompting →](../prompting/advanced-prompting/style-prompting)

</details>

<details>
<summary><strong>Why do I get different results each time?</strong></summary>

**AI uses randomness** to provide variations.

**This is intentional** - gives you options.

**For consistency:**
- Use Style Selector with references
- Raise Text Accuracy to 8-9
- Use same model, same settings

</details>

:::success Prompting Questions Answered
[Complete prompting guide →](../prompting/)
:::
