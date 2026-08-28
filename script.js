const card = document.querySelector('#portraitCard');
const wrap = document.querySelector('.portrait-wrap');
if (card && wrap && matchMedia('(pointer:fine)').matches) {
  wrap.addEventListener('mousemove', (event) => {
    const box = wrap.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    card.style.transform = `rotateY(${x * 18 - 9}deg) rotateX(${-y * 13 + 2}deg) translateZ(12px)`;
  });
  wrap.addEventListener('mouseleave', () => card.style.transform = 'rotateY(-9deg) rotateX(2deg)');
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
