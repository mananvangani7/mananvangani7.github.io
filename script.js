// ─── TAB SWITCHING ───────────────────────────────────────
const tabBtns = document.querySelectorAll('.nav-btn');
const tabSections = document.querySelectorAll('.tab-section');

function switchTab(tabName) {
  tabBtns.forEach(b => b.classList.remove('active'));
  tabSections.forEach(s => s.classList.remove('active'));

  const btn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
  const section = document.getElementById(`tab-${tabName}`);

  if (btn) btn.classList.add('active');
  if (section) section.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // close mobile menu if open
  document.querySelector('.nav-links').classList.remove('open');
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ─── GHOST BUTTON (Resume link on portfolio) ─────────────
document.querySelectorAll('[data-tab]').forEach(el => {
  if (el.tagName === 'A' || el.classList.contains('btn-ghost')) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = el.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  }
});

// ─── MOBILE HAMBURGER ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
