// Lazy loading på mine billeder
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});

// Toggle på mine accordions 
document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.onclick = () => {
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
  };
});


function isInViewport(el, threshold = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
    rect.bottom > 0
  );
}

// Elementer der skal vises når der scrolles
const aboutBlocks = document.querySelectorAll('.about_block');
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const frontSection = document.querySelector('.front_page_section_one');

function revealOnScroll() {
  aboutBlocks.forEach(block => {
    if (isInViewport(block, 0.3)) {
      block.classList.add('visible');
    } else {
      block.classList.remove('visible');
    }
  });

  if (frontSection && isInViewport(frontSection, 0.1)) {
    frontSection.classList.add('visible');
  }

  scrollElements.forEach(el => {
    if (isInViewport(el, 0.1)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Active state på mine a'er i sticky navigation inde på mine cases
const navLinks = document.querySelectorAll('.research-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Åben og lukning af modalerne
document.querySelectorAll('.expand-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const modalId = icon.closest('.preview-active').dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  });
});

document.querySelectorAll('.buttonClose').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.picture_expand');
    if (modal) modal.classList.remove('active');
  });
});

document.querySelectorAll('.picture_expand').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
});
