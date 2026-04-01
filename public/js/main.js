// MakOS — Client JS

document.addEventListener('DOMContentLoaded', () => {

  // Window entrance animation
  const win = document.querySelector('.macos-window');
  if (win) {
    win.style.opacity = '0';
    win.style.transform = 'translateY(16px) scale(0.98)';
    win.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        win.style.opacity = '1';
        win.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Smooth scroll for anchor nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Work card staggered entrance
  const cards = document.querySelectorAll('.work-card');
  if (cards.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      card.style.transition = 'opacity 0.35s ease, transform 0.35s ease, box-shadow 0.2s ease';
      observer.observe(card);
    });
  }

  // Carousel drag-to-scroll
  const carousel = document.querySelector('.works-carousel');
  if (carousel) {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', e => {
      isDown = true;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => { isDown = false; carousel.style.cursor = ''; });
    carousel.addEventListener('mouseup', () => { isDown = false; carousel.style.cursor = ''; });
    carousel.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
  }

  // Traffic light dot hover labels
  const dots = [
    { el: document.querySelector('.dot-red'), label: 'Close' },
    { el: document.querySelector('.dot-yellow'), label: 'Minimize' },
    { el: document.querySelector('.dot-green'), label: 'Fullscreen' },
  ];
  dots.forEach(({ el, label }) => {
    if (!el) return;
    el.setAttribute('title', label);
  });

});
