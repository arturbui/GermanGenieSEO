// ── Copyright year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Level bar animation ──
const levelBar = document.getElementById('levelBar');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      levelBar.style.width = '33%'; 
      barObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const levelCard = document.querySelector('.level-card');
if (levelCard) barObserver.observe(levelCard);