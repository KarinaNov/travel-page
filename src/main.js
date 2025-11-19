import "./assets/styles/main.scss";
import 'animate.css';

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!burger || !mobileMenu) return;

  const openMenu = () => {
    burger.classList.add("burger--active");
    burger.setAttribute("aria-expanded", "true");

    mobileMenu.hidden = false;
    mobileMenu.classList.add("mobile-menu--open");

    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    burger.classList.remove("burger--active");
    burger.setAttribute("aria-expanded", "false");

    mobileMenu.classList.remove("mobile-menu--open");
    document.body.classList.remove("no-scroll");

    // Ждём конец анимации и прячем физически
    setTimeout(() => {
      if (!mobileMenu.classList.contains("mobile-menu--open")) {
        mobileMenu.hidden = true;
      }
    }, 250);
  };

  burger.addEventListener("click", () => {
    const isOpen = burger.classList.contains("burger--active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Закрытие по клику на затемнение
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("mobile-menu__backdrop")) {
      closeMenu();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  if (!header) return;

  const TOGGLE_OFFSET = 10; // с какого количества пикселей считать "проскроллили"

  const onScroll = () => {
    if (window.scrollY > TOGGLE_OFFSET) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  // Один раз при загрузке (если зашли уже проскроленными)
  onScroll();

  // И дальше — на событие scroll
  window.addEventListener('scroll', onScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  // На всякий случай — если CSS/JS быстро, можно убрать класс body чуть раньше,
  // но основной момент — после полной загрузки
  window.addEventListener("load", () => {
    document.body.classList.remove("is-preloading");

    if (preloader) {
      preloader.classList.add("preloader--hidden");

      // Потом полностью удалим из DOM
      setTimeout(() => {
        preloader.remove();
      }, 400); // совпадает с переходом в CSS
    }
  });
});