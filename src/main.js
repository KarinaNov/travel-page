import "./assets/styles/main.scss";
import "animate.css";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
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

      setTimeout(() => {
        if (!mobileMenu.classList.contains("mobile-menu--open")) {
          mobileMenu.hidden = true;
        }
      }, 250);
    };

    burger.addEventListener("click", () => {
      burger.classList.contains("burger--active") ? closeMenu() : openMenu();
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target.classList.contains("mobile-menu__backdrop")) {
        closeMenu();
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll);
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  document.body.classList.remove("is-preloading");

  if (preloader) {
    preloader.classList.add("preloader--hidden");
  }
});