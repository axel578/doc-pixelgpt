module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'quick-start/index',
      label: '⚡ Quick Start',
    },
    {
      type: 'doc',
      id: 'start/index',
      label: '🧸 Start',
    },
    {
      type: 'category',
      label: '🦊 Getting Started',
      items: [
        'getting/what_is_an_image',
        {
          type: 'category',
          label: 'Prompting',
          items: [
            'getting/prompting/Prompting_is_key',
            'getting/prompting/Prompt_troubleshooting'
          ],
        },
        {
          type: 'category',
          label: 'Grid',
          items: [
            'getting/grid/grid_system',
          ],
        },
        {
          type: 'category',
          label: 'GUI',
          items: [
            'getting/GUI/base_image',
            {
              type: 'category',
              label: 'Plans',
              items: [
                'getting/GUI/Plan/Starter',
                'getting/GUI/Plan/Pro',
                'getting/GUI/Plan/Ultimate',
              ],
            },
          ],
        },
        'getting/pricing',
        ],
        
    },
    {
      type: 'category',
      label: '📖 Getting Started',
      items: [
        'getting-started/index',
        'getting-started/what-is-pixelgpt',
        'getting-started/capabilities-and-limitations',
        'getting-started/account-setup',
        'getting-started/pricing-plans',
        'getting-started/your-first-generation',
        'getting-started/understanding-the-interface',
        'getting-started/next-steps',
      ],
    },
    {
      type: 'category',
      label: '🧠 Fundamentals',
      items: [
        'fundamentals/index',
        {
          type: 'category',
          label: 'Images & Pixels',
          items: [
            'fundamentals/images-and-pixels/what-is-an-image',
            'fundamentals/images-and-pixels/understanding-resolution',
            'fundamentals/images-and-pixels/transparency-and-alpha',
            'fundamentals/images-and-pixels/pixel-density-and-mixels',
            'fundamentals/images-and-pixels/image-file-formats',
          ],
        },
        {
          type: 'category',
          label: 'Minecraft Textures',
          items: [
            'fundamentals/minecraft-textures/how-minecraft-uses-textures',
            'fundamentals/minecraft-textures/item-textures',
            'fundamentals/minecraft-textures/block-textures',
            'fundamentals/minecraft-textures/gui-textures',
            'fundamentals/minecraft-textures/armor-textures',
            'fundamentals/minecraft-textures/texture-pack-basics',
            'fundamentals/minecraft-textures/resolution-standards',
          ],
        },
        {
          type: 'category',
          label: 'Pixel Art',
          items: [
            'fundamentals/pixel-art/what-is-pixel-art',
            'fundamentals/pixel-art/color-palettes',
            'fundamentals/pixel-art/pixel-art-principles',
          ],
        },
        'fundamentals/glossary',
      ],
    },
    {
      type: 'category',
      label: '🤖 Understanding AI',
      items: [
        'understanding-ai/index',
        'understanding-ai/what-is-ai-generation',
        'understanding-ai/how-ai-creates-images',
        'understanding-ai/what-ai-knows',
        'understanding-ai/what-ai-doesnt-know',
        'understanding-ai/ai-creativity-vs-accuracy',
        'understanding-ai/working-with-ai',
        'understanding-ai/ai-is-a-tool',
      ],
    },
    {
      type: 'category',
      label: '✍️ Prompting',
      items: [
        'prompting/index',
        {
          type: 'category',
          label: 'Prompting Basics',
          items: [
            'prompting/prompting-basics/what-is-a-prompt',
            'prompting/prompting-basics/how-prompts-work',
            'prompting/prompting-basics/prompt-structure',
          ],
        },
        {
          type: 'category',
          label: 'Effective Prompting',
          items: [
            'prompting/effective-prompting/use-english',
            'prompting/effective-prompting/be-specific',
            'prompting/effective-prompting/describe-visually',
            'prompting/effective-prompting/use-adjectives',
            'prompting/effective-prompting/avoid-jargon',
            'prompting/effective-prompting/natural-language',
          ],
        },
        {
          type: 'category',
          label: 'Prompt Examples',
          items: [
            'prompting/prompt-examples/good-prompts',
            'prompting/prompt-examples/bad-prompts',
            'prompting/prompt-examples/item-prompts',
            'prompting/prompt-examples/block-prompts',
            'prompting/prompt-examples/gui-prompts',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Prompting',
          items: [
            'prompting/advanced-prompting/index',
            'prompting/advanced-prompting/complex-descriptions',
            'prompting/advanced-prompting/style-prompting',
            'prompting/advanced-prompting/material-descriptions',
            'prompting/advanced-prompting/color-descriptions',
            'prompting/advanced-prompting/prompt-iteration',
            'prompting/advanced-prompting/combining-concepts',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'prompting/prompt-troubleshooting/index',
            'prompting/prompt-troubleshooting/ai-ignores-prompt',
            'prompting/prompt-troubleshooting/wrong-interpretation',
            'prompting/prompt-troubleshooting/inconsistent-results',
            'prompting/prompt-troubleshooting/too-creative',
            'prompting/prompt-troubleshooting/not-creative-enough',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🤖 Models',
      items: [
        'models/index',
        {
          type: 'category',
          label: 'Understanding Models',
          items: [
            'models/understanding-models/what-is-a-model',
            'models/understanding-models/why-multiple-models',
            'models/understanding-models/model-quality-levels',
            'models/understanding-models/choosing-a-model',
          ],
        },
        {
          type: 'category',
          label: 'Models by Resolution',
          items: [
            'models/models-by-resolution/16px-models',
            'models/models-by-resolution/32px-models',
            'models/models-by-resolution/256px-models',
          ],
        },
        {
          type: 'category',
          label: 'Models by Type',
          items: [
            'models/models-by-type/gui-models',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '⚙️ Features',
      items: [
        'features/index',
        {
          type: 'category',
          label: 'Interface',
          items: [
            'features/interface/home-page-overview',
            'features/interface/expert-tab',
            'features/interface/presets-tab',
          ],
        },
        {
          type: 'category',
          label: 'Image Tools',
          items: [
            'features/image-tools/image-grid-editor',
            'features/image-tools/background-removal',
            'features/image-tools/download-options',
            'features/image-tools/collections',
          ],
        },
        {
          type: 'category',
          label: 'Style Selector',
          items: [
            'features/style-selector/style-selector-overview',
            'features/style-selector/base-image',
            'features/style-selector/shape-image',
            'features/style-selector/parameters-explained',
            'features/style-selector/style-selector-workflow',
          ],
        },
        {
          type: 'category',
          label: 'Batch Generation',
          items: [
            'features/batch-generation/batch-overview',
            'features/batch-generation/text-batch',
            'features/batch-generation/image-batch',
            'features/batch-generation/batch-list',
          ],
        },
        {
          type: 'category',
          label: 'Special Tools',
          items: [
            'features/special-tools/mc-gui-editor',
            'features/special-tools/variant-recolorize',
            'features/special-tools/animate-items',
            'features/special-tools/items-to-armor-set',
            'features/special-tools/color-palette-matcher',
          ],
        },
        {
          type: 'category',
          label: 'Account',
          items: [
            'features/account/my-images',
            'features/account/my-collections',
            'features/account/my-reference-images',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎓 Tutorials',
      items: [
        'tutorials/index',
        {
          type: 'category',
          label: 'Minecraft Items',
          items: [
            'tutorials/minecraft-items/your-first-item',
            'tutorials/minecraft-items/creating-sword',
            'tutorials/minecraft-items/creating-tool-set',
          ],
        },
        {
          type: 'category',
          label: 'GUI Creation',
          items: [
            'tutorials/gui-creation/gui-complete-guide',
            'tutorials/gui-creation/understanding-minecraft-guis',
            'tutorials/gui-creation/photopea-setup',
            'tutorials/gui-creation/gui-troubleshooting',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 Advanced',
      items: [
        'advanced/index',
        {
          type: 'category',
          label: 'Parameter Optimization',
          items: [
            'advanced/parameter-optimization/understanding-parameters',
          ],
        },
        {
          type: 'category',
          label: 'Workflow Optimization',
          items: [
            'advanced/workflow-optimization/efficient-workflows',
          ],
        },
        {
          type: 'category',
          label: 'Professional Techniques',
          items: [
            'advanced/professional-techniques/professional-workflows',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      items: [
        'reference/index',
        {
          type: 'category',
          label: 'Quick Reference',
          items: [
            'reference/quick-reference/resolution-chart',
            'reference/quick-reference/pricing-table',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '❓ FAQ',
      items: [
        'faq/index',
        'faq/general-faq',
        'faq/generation-faq',
        'faq/gui-faq',
        'faq/prompting-faq',
        'faq/troubleshooting-faq',
        'faq/minecraft-faq',
      ],
    },
  ],
};
