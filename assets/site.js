(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const groups = Array.from(document.querySelectorAll('.nav-group'));
  function setGroup(group, open) {
    group.classList.toggle('is-open', open);
    group.querySelector('.submenu-toggle').setAttribute('aria-expanded', String(open));
  }
  function closeGroups(except) { groups.forEach(group => { if (group !== except) setGroup(group, false); }); }
  groups.forEach(group => {
    const toggle = group.querySelector('.submenu-toggle');
    group.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { closeGroups(group); setGroup(group, true); } });
    group.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse' && !group.contains(document.activeElement)) setGroup(group, false); });
    group.addEventListener('focusin', event => { if (event.target !== toggle) { closeGroups(group); setGroup(group, true); } });
    group.addEventListener('focusout', () => { queueMicrotask(() => { if (!group.contains(document.activeElement)) setGroup(group, false); }); });
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; closeGroups(group); setGroup(group, open); });
    group.addEventListener('keydown', event => {
      if (event.key === 'Escape' && group.classList.contains('is-open')) { event.preventDefault(); event.stopPropagation(); setGroup(group, false); toggle.focus(); }
    });
  });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-group')) closeGroups(); });
  function closeMenu() { nav?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); closeGroups(); }
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
    if (!target) {
      // Preserve bookmarks to setup sections moved out of the old guides.
      const oldHash = location.hash.slice(1);
      const filename = location.pathname.split('/').pop();
      const moved = filename === 'gameplay.html' ? {
        'customization-and-launch': 'choose-your-included-options',
        'choosing-your-customizations': 'choose-your-included-options',
        'choosing-your-difficulty': 'choose-your-difficulty',
        'launching-the-game': 'launch-the-game'
      } : filename === 'installation.html' ? {
        'post-installation-steps': 'open-mod-organizer-2',
        '1-open-mo2': 'open-mod-organizer-2',
        '2-configure-authoria---requiem-reforged-to-your-preferences': 'choose-your-included-options',
        'performance-tuning-optional': 'performance-tuning-optional',
        'controller-support-optional': 'controller-support-optional',
        'ultrawide-support-optional': 'ultrawide-support-optional',
        '3-set-the-executable-and-launch-the-game': 'launch-the-game'
      } : {};
      if (moved[oldHash]) location.replace('post-installation.html#' + moved[oldHash]);
      else if (filename === 'installation.html' && oldHash === 'rule-11--modlist-modification-disclaimer') location.replace('safe-customization.html#' + oldHash);
      return;
    }
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
