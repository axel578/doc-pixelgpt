module.exports = {
  title: 'Pixel GPT Documentation',
  tagline: 'AI-Powered Minecraft Texture & Asset Generator',
  url: 'https://axel578.github.io',
  baseUrl: '/DocPixelGpt/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // Enhanced i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
    },
  },

  // Enhanced theme configuration
  themeConfig: {
    // Color mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Navbar
    navbar: {
      title: 'Pixel GPT',
      logo: {
        alt: 'Pixel GPT Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 32,
        height: 32,
      },
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'quick-start/index',
          position: 'left',
          label: '⚡ Quick Start',
        },
        {
          type: 'doc',
          docId: 'getting-started/index',
          position: 'left',
          label: '📖 Getting Started',
        },
        {
          type: 'doc',
          docId: 'prompting/index',
          position: 'left',
          label: '✍️ Prompting',
        },
        {
          type: 'doc',
          docId: 'tutorials/index',
          position: 'left',
          label: '🎓 Tutorials',
        },
        {
          type: 'dropdown',
          label: 'More',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'models/index',
              label: '🤖 Models',
            },
            {
              type: 'doc',
              docId: 'features/index',
              label: '⚙️ Features',
            },
            {
              type: 'doc',
              docId: 'advanced/index',
              label: '🚀 Advanced',
            },
            {
              type: 'doc',
              docId: 'faq/index',
              label: '❓ FAQ',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://pixelgpt.io',
          label: '🌐 Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/axel578/DocPixelGpt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: '⚡ Quick Start', to: '/docs/quick-start' },
            { label: '📖 Getting Started', to: '/docs/getting-started' },
            { label: '✍️ Prompting Guide', to: '/docs/prompting' },
            { label: '🎓 Tutorials', to: '/docs/tutorials' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: '🤖 Models', to: '/docs/models' },
            { label: '⚙️ Features', to: '/docs/features' },
            { label: '📚 Reference', to: '/docs/reference' },
            { label: '❓ FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/pixelgpt' },
            { label: 'GitHub', href: 'https://github.com/axel578/DocPixelGpt' },
            { label: 'Contact', href: 'https://pixelgpt.io/contact' },
          ],
        },
        {
          title: 'Pixel GPT',
          items: [
            { label: 'Main Site', href: 'https://pixelgpt.io' },
            { label: 'Pricing', href: 'https://pixelgpt.io/pricing' },
            { label: 'Gallery', href: 'https://pixelgpt.io/gallery' },
            { label: 'Status', href: 'https://pixelgpt.io/status' },
          ],
        },
      ],
      copyright: `
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <p>Copyright © ${new Date().getFullYear()} Pixel GPT. Built with Docusaurus.</p>
          <p style="font-size: 0.875rem; opacity: 0.8;">
            AI-Powered Minecraft Texture & Asset Generator
          </p>
        </div>
      `,
    },

    // Algolia search (configure when ready)
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'pixelgpt',
      contextualSearch: true,
      searchParameters: {},
    },

    // Announcement bar
    announcementBar: {
      id: 'new_docs',
      content: '📚 New comprehensive documentation! <a href="/docs/quick-start">Start here →</a>',
      backgroundColor: '#6366f1',
      textColor: '#ffffff',
      isCloseable: true,
    },

    // Metadata
    metadata: [
      { name: 'keywords', content: 'minecraft, textures, ai, pixel art, resource pack, gui' },
      { name: 'og:image', content: 'img/og-image.png' },
    ],

    // Prism theme for code highlighting
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['json', 'yaml', 'bash', 'markdown'],
    },
  },

  // Presets
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/axel578/DocPixelGpt/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],

  // Plugins
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  // Markdown configuration
  markdown: {
    mermaid: true,
  },

  // Themes
  themes: ['@docusaurus/theme-mermaid'],

  // Scripts
  scripts: [
    {
      src: '/js/custom.js',
      async: true,
    },
  ],

  // Stylesheets
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],
};
