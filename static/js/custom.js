/**
 * Custom JavaScript for Pixel GPT Documentation
 */

// Smooth scroll to anchors
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add copy button functionality to code blocks
  document.querySelectorAll('pre > code').forEach((codeBlock) => {
    const button = document.createElement('button');
    button.className = 'clean-btn';
    button.type = 'button';
    button.innerText = 'Copy';
    
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      });
    });

    const pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('theme-code-block')) {
      const wrapper = pre.parentNode;
      wrapper.appendChild(button);
    }
  });

  // Add external link icons
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.innerHTML += ' <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>';
    }
  });

  // Add reading time estimate
  const content = document.querySelector('.markdown');
  if (content) {
    const text = content.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    const timeElement = document.createElement('div');
    timeElement.className = 'reading-time';
    timeElement.innerHTML = `<small>📖 ${readingTime} min read</small>`;
    timeElement.style.cssText = 'color: var(--ifm-color-emphasis-600); margin-bottom: 1rem; font-size: 0.875rem;';
    
    const title = content.querySelector('h1');
    if (title && title.nextSibling) {
      title.parentNode.insertBefore(timeElement, title.nextSibling);
    }
  }

  // Add progress indicator
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--ifm-color-primary), var(--ifm-color-primary-light));
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = progress + '%';
  });
});

// Add table of contents highlighting
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const tocLink = document.querySelector(`.table-of-contents a[href="#${id}"]`);
    
    if (entry.isIntersecting) {
      document.querySelectorAll('.table-of-contents a').forEach((link) => {
        link.classList.remove('table-of-contents__link--active');
      });
      if (tocLink) {
        tocLink.classList.add('table-of-contents__link--active');
      }
    }
  });
}, {
  rootMargin: '-100px 0px -66%',
  threshold: 1.0
});

document.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
  observer.observe(heading);
});


