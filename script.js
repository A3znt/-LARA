(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -28px' });
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add('visible'));
  }

  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      const card = img.closest('.hero-card');
      if (card) {
        card.hidden = true;
        return;
      }
      img.classList.add('image-error');
      img.alt = 'ÉLARA';
    }, { once: true });
  });

  const whatsappBtn = document.getElementById('whatsappBtn');
  const toast = document.getElementById('toast');
  const orderText = 'مرحباً ÉLARA ✨ أريد الاستفسار عن الحقيبة السوداء بالتفاصيل الذهبية.';

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const url = `https://wa.me/?text=${encodeURIComponent(orderText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      if (toast) {
        toast.textContent = 'تم تجهيز رسالة الطلب على واتساب';
        toast.classList.add('show');
        window.setTimeout(() => toast.classList.remove('show'), 2400);
      }
    });
  }
})();
