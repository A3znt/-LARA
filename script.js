(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add('visible'));
  }

  const whatsappBtn = document.getElementById('whatsappBtn');
  const toast = document.getElementById('toast');
  const orderText = 'مرحباً ÉLARA ✨ أريد الاستفسار عن الحقيبة السوداء بالتفاصيل الذهبية.';

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const url = `https://wa.me/?text=${encodeURIComponent(orderText)}`;
      window.open(url, '_blank', 'noopener');
      if (toast) {
        toast.textContent = 'تم تجهيز رسالة الطلب على واتساب';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
      }
    });
  }
})();