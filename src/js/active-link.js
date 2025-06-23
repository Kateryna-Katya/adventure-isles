document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navigation-item');

  // 1️⃣ Перевіряємо збережене активне посилання
  const activeHref = localStorage.getItem('activeHref');

  // 2️⃣ Якщо щось є — шукаємо відповідне посилання і додаємо йому .active
  if (activeHref) {
    navItems.forEach(item => {
      const aTag = item.querySelector('a');
      if (aTag?.getAttribute('href') === activeHref) {
        item.classList.add('active');
      }
    });
  } else {
    // 3️⃣ Якщо нічого не збережено — показуємо зірочку тільки на Home
    navItems.forEach(item => {
      const aTag = item.querySelector('a');
      if (aTag?.getAttribute('href') === 'index.html#Home') {
        item.classList.add('active');
      }
    });
  }

  // 4️⃣ Обробка кліків — міняємо активний пункт і зберігаємо
  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const aTag = this.querySelector('a');
      const href = aTag?.getAttribute('href') || '';

      localStorage.setItem('activeHref', href);

      // Зняти активність з усіх
      navItems.forEach(el => el.classList.remove('active'));

      // Додати активність до клікнутого
      this.classList.add('active');
    });
  });
});