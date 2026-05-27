// Grayjay Guide — Main JavaScript
// Handles: theme toggle, smooth scroll, mobile sidebar, current page highlight, TOC generation

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-toggle__icon');

  const applyTheme = (theme) => {
    const html = document.documentElement;
    html.classList.remove('theme-dark', 'theme-light');
    html.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.classList.contains('theme-light') ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  const initialTheme = document.documentElement.classList.contains('theme-light') ? 'light' : 'dark';
  if (themeIcon) {
    themeIcon.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
  }

  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  if (hamburger && sidebar) {
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    const pageWrapper = document.querySelector('.page-wrapper');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('is-open');
      hamburger.classList.toggle('is-active');
      if (overlay) overlay.classList.toggle('is-visible');
      if (pageWrapper) pageWrapper.classList.toggle('is-sidebar-collapsed');
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        overlay.classList.remove('is-visible');
        if (pageWrapper) pageWrapper.classList.remove('is-sidebar-collapsed');
      });
    }

    sidebar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          sidebar.classList.remove('is-open');
          hamburger.classList.remove('is-active');
          if (overlay) overlay.classList.remove('is-visible');
          if (pageWrapper) pageWrapper.classList.remove('is-sidebar-collapsed');
        }
      });
    });
  }

  const currentPath = window.location.pathname;
  document.querySelectorAll('.sidebar__link').forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (linkPath === currentPath) {
      link.classList.add('sidebar__link--active');
    } else {
      link.classList.remove('sidebar__link--active');
    }
  });

  document.querySelectorAll('blockquote').forEach((bq) => {
    const firstP = bq.querySelector('p');
    if (firstP && firstP.textContent.trim().startsWith('[!NOTE]')) {
      firstP.innerHTML = firstP.innerHTML.replace(/\[!NOTE\]\s*/, '');
      bq.classList.add('alert', 'alert--info');
    }
  });

  const subsectionsContainer = document.getElementById('page-subsections');
  const contentArea = document.querySelector('.content');

  if (subsectionsContainer && contentArea) {
    const h2s = contentArea.querySelectorAll('h2');
    if (h2s.length > 0) {
      h2s.forEach((h2) => {
        if (!h2.id) {
          h2.id = h2.textContent
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
        }

        const li = document.createElement('li');
        li.className = 'sidebar__subitem';

        const a = document.createElement('a');
        a.href = `#${h2.id}`;
        a.className = 'sidebar__sublink';
        a.textContent = h2.textContent;
        a.addEventListener('click', (e) => {
          const target = document.getElementById(h2.id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });

        li.appendChild(a);
        subsectionsContainer.appendChild(li);
      });
    }
  }
});