document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('change', function () {
      if (this.checked) {
        navLinks.classList.add('show');
      } else {
        navLinks.classList.remove('show');
      }
    });
  });
  