import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Gallery Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          (card as HTMLElement).style.display = 'block';
          // Small animation delay for smooth reappearance
          setTimeout(() => {
            (card as HTMLElement).style.opacity = '1';
            (card as HTMLElement).style.transform = 'scale(1)';
          }, 50);
        } else {
          (card as HTMLElement).style.opacity = '0';
          (card as HTMLElement).style.transform = 'scale(0.8)';
          setTimeout(() => {
            (card as HTMLElement).style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Nav bar scroll effect
  const nav = document.querySelector('.glass-nav') as HTMLElement;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '1rem 5%';
      nav.style.boxShadow = 'var(--glass-shadow)';
    } else {
      nav.style.padding = '1.5rem 5%';
      nav.style.boxShadow = 'none';
    }
  });

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });
  }
});
