module.exports = {
  title: 'Pixel GPT Documentation',
  tagline: 'AI-Powered Minecraft Texture & Asset Generator',
  url: 'https://axel578.github.io',
  baseUrl: '/DocPixelGpt/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
    },
  },

  themeConfig: {
    navbar: {
      title: 'Pixel GPT Docs',
      logo: {
        alt: 'Pixel GPT Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'quick-start/index',
          position: 'left',
          label: 'Quick Start',
        },
        {
          type: 'doc',
          docId: 'getting-started/index',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'prompting/index',
          position: 'left',
          label: 'Prompting',
        },
        {
          type: 'doc',
          docId: 'tutorials/index',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://pixelgpt.io',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Quick Start', to: '/docs/quick-start'},
            {label: 'Tutorials', to: '/docs/tutorials'},
            {label: 'Models', to: '/docs/models'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/pixelgpt'},
            {label: 'Contact', href: 'https://pixelgpt.io/contact'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Pixel GPT', href: 'https://pixelgpt.io'},
            {label: 'Pricing', href: 'https://pixelgpt.io/pricing'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pixel GPT. Built with Docusaurus.`,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'pixelgpt',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/axel578/DocPixelGpt/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
};
