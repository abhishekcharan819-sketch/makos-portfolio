// MakOS — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // ── Floating thumbnails on home page ──────────────────────
  const container = document.getElementById('floatingProjects');
  if (container && window.PROJECTS) {
    window.PROJECTS.forEach((project, i) => {
      const a = document.createElement('a');
      a.href = `/works/${project.slug}`;
      a.className = 'float-item';
      a.style.left = project.posX + '%';
      a.style.top  = project.posY + '%';
      a.style.animationDelay = (i * 0.08) + 's';

      const img = document.createElement('img');
      img.src = project.thumb;
      img.alt = project.title;
      img.className = 'float-thumb';
      img.loading = 'lazy';

      const label = document.createElement('span');
      label.className = 'float-label';
      label.textContent = project.title;

      a.appendChild(img);
      a.appendChild(label);
      container.appendChild(a);
    });
  }

  // ── Dock magnification effect ──────────────────────────────
  const dockItems = document.querySelectorAll('.dock-item');
  dockItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const siblings = [...dockItems];
      const idx = siblings.indexOf(item);
      siblings.forEach((el, i) => {
        const dist = Math.abs(i - idx);
        const scale = dist === 0 ? 1.22 : dist === 1 ? 1.1 : 1;
        const lift  = dist === 0 ? -10  : dist === 1 ? -4  : 0;
        el.style.transform = `translateY(${lift}px) scale(${scale})`;
        el.style.transition = 'transform 0.18s ease';
      });
    });
  });

  document.querySelector('.dock-inner')?.addEventListener('mouseleave', () => {
    dockItems.forEach(el => {
      el.style.transform = '';
    });
  });

  // ── Window entrance on detail page ────────────────────────
  const win = document.getElementById('detailWindow');
  if (win) {
    win.style.opacity = '0';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      win.style.opacity = '1';
    }));
  }

  // ── Floating items subtle parallax on mouse move ──────────
  const floatItems = document.querySelectorAll('.float-item');
  if (floatItems.length) {
    document.addEventListener('mousemove', e => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      floatItems.forEach((el, i) => {
        const depth = 0.4 + (i % 3) * 0.2;
        const mx = dx * 10 * depth;
        const my = dy * 10 * depth;
        el.style.marginLeft = mx + 'px';
        el.style.marginTop  = my + 'px';
      });
    });
  }

});
