(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  function closeMenu() { nav?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); }
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  const mobile = window.matchMedia('(max-width: 800px)');
  const toc = document.querySelector('.toc-disclosure');
  function adapt() { closeMenu(); if (toc) toc.open = !mobile.matches; }
  adapt();
  mobile.addEventListener('change', adapt);
  const viewer = document.querySelector('.image-viewer');
  document.querySelectorAll('.image-zoom').forEach(link => {
    link.addEventListener('click', event => {
      if (!viewer?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = link.querySelector('img');
      viewer.querySelector('img').src = link.href;
      viewer.querySelector('img').alt = image?.alt || 'Screenshot';
      viewer.querySelector('p').textContent = image?.alt || 'Screenshot';
      viewer.showModal();
    });
  });
  viewer?.addEventListener('click', event => { if (event.target === viewer) { const box = viewer.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close(); } });
  // Reveal a linked heading even when it sits inside a collapsed reference.
  function revealHash() {
    if (!location.hash) return;
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
    if (!target) return;
    let parent = target.parentElement;
    let revealed = false;
    while (parent) { if (parent.tagName === 'DETAILS' && !parent.open) { parent.open = true; revealed = true; } parent = parent.parentElement; }
    if (revealed) target.scrollIntoView();
  }
  revealHash();
  window.addEventListener('hashchange', revealHash);
  const links = Array.from(document.querySelectorAll('.toc a'));
  const headings = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (headings.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.filter(item => item.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!entry) return;
      links.forEach(link => { if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    }, { rootMargin: '-115px 0px -65% 0px' });
    headings.forEach(heading => observer.observe(heading));
  }
})();
