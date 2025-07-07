function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
     document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navRight = document.querySelector(".navright");

    hamburger.addEventListener("click", function () {
      navRight.classList.toggle("mobile-visible");
    });
  });