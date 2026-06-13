const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav-wrap');
const whatsappSelect = document.getElementById('whatsappSelect');
const openWhatsAppBtn = document.getElementById('openWhatsAppBtn');

if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navWrap.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (whatsappSelect && openWhatsAppBtn) {
  openWhatsAppBtn.addEventListener('click', () => {
    const number = whatsappSelect.value;
    window.open(`https://wa.me/${number}`, '_blank', 'noopener,noreferrer');
  });
}
