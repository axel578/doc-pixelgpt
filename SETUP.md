# Pixel GPT Documentation Setup

Complete setup guide for the Pixel GPT documentation with multi-language support.

## 🌍 Multi-Language Support

The documentation supports **3 languages**:
- 🇬🇧 **English** (default) - Complete documentation
- 🇫🇷 **French** - Partial translations (Quick Start available)
- 🇰🇷 **Korean** - Partial translations (Quick Start available)

## 🚀 Quick Setup

### 1. Prerequisites
- Node.js 16.14+ 
- npm or yarn
- Git

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```
Opens at: http://localhost:3000

### 4. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
DocPixelGpt/
├── docs/                    # English documentation (default)
│   ├── quick-start/
│   ├── getting-started/
│   ├── fundamentals/
│   ├── understanding-ai/
│   ├── prompting/
│   ├── models/
│   ├── features/
│   ├── tutorials/
│   ├── advanced/
│   ├── reference/
│   └── faq/
├── i18n/                    # Internationalization
│   ├── en/                  # English translations
│   ├── fr/                  # French translations
│   └── ko/                  # Korean translations
├── src/
│   └── css/
│       └── custom.css       # Custom styles
├── static/
│   └── img/                 # Images and assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── docusaurus.config.js     # Docusaurus configuration
├── sidebars.js              # Navigation structure
└── package.json             # Dependencies
```

## 🌐 Deployment

### GitHub Pages (Automatic)
1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at: `https://axel578.github.io/DocPixelGpt/`

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🔧 Configuration

### Language Settings
Edit `docusaurus.config.js`:
```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'ko'],
  localeConfigs: {
    en: { label: 'English', direction: 'ltr' },
    fr: { label: 'Français', direction: 'ltr' },
    ko: { label: '한국어', direction: 'ltr' },
  },
}
```

### GitHub Pages Settings
- Repository: `axel578/DocPixelGpt`
- Branch: `main`
- Source: GitHub Actions
- URL: `https://axel578.github.io/DocPixelGpt/`

## 📝 Adding Translations

### 1. Create Translation Files
```bash
# For French
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/[section]

# For Korean  
mkdir -p i18n/ko/docusaurus-plugin-content-docs/current/[section]
```

### 2. Translate Content
Copy English files to translation directories and translate:
```bash
# Example: Translate quick-start
cp docs/quick-start/index.md i18n/fr/docusaurus-plugin-content-docs/current/quick-start/
# Edit the French version
```

### 3. Update Navigation
Edit sidebar translations in:
- `i18n/[lang]/docusaurus-plugin-content-docs/current.json`
- `i18n/[lang]/docusaurus-theme-classic/navbar.json`

## 🎨 Customization

### Styling
Edit `src/css/custom.css` for custom styles.

### Navigation
Edit `sidebars.js` to modify navigation structure.

### Configuration
Edit `docusaurus.config.js` for site-wide settings.

## 🔍 Testing

### Local Development
```bash
npm start
# Test all languages
# http://localhost:3000/en/
# http://localhost:3000/fr/
# http://localhost:3000/ko/
```

### Production Build
```bash
npm run build
npm run serve
```

## 📚 Documentation Features

- ✅ **Multi-language support** (EN, FR, KO)
- ✅ **Responsive design** (mobile-friendly)
- ✅ **Search functionality** (Algolia ready)
- ✅ **Dark/Light theme**
- ✅ **Collapsible sections**
- ✅ **Code syntax highlighting**
- ✅ **Mermaid diagrams**
- ✅ **Bootstrap components**
- ✅ **GitHub Pages deployment**
- ✅ **GitHub Actions CI/CD**

## 🆘 Troubleshooting

### Common Issues

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Translations not showing:**
- Check `i18n/` directory structure
- Verify `docusaurus.config.js` locales
- Clear cache: `npm run clear`

**GitHub Pages not updating:**
- Check GitHub Actions workflow
- Verify repository settings
- Check deployment logs

## 📞 Support

- **GitHub Issues:** Create issue in repository
- **Documentation:** This documentation
- **Community:** Pixel GPT Discord

---

**Last updated:** 2025-01  
**Version:** 1.0  
**Maintained by:** Axel578
