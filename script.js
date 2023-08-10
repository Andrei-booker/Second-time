const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // slidesPerView: 1.25,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.25,
    },

    480: {
      slidesPerView: 1.4,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});

let buttonShowAll = document.querySelector(".button--show-all");
let buttonHidden = document.querySelector(".buttoun--hidden");
let tabletItems = document.querySelectorAll(".tablet-hidden");
let desktopItems = document.querySelectorAll(".desktop-hidden");

buttonShowAll.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (window.innerWidth < 1120) {
    for (let i = 0; i < tabletItems.length; i++) {
      tabletItems[i].classList.remove("tablet-hidden");
    }
  } else {
    for (let i = 0; i < desktopItems.length; i++) {
      desktopItems[i].classList.remove("desktop-hidden");
    }
  }
  buttonHidden.classList.remove("hidden");
  buttonShowAll.classList.add("hidden");
});

buttonHidden.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (window.innerWidth < 1120) {
    for (let i = 0; i < tabletItems.length; i++) {
      tabletItems[i].classList.add("tablet-hidden");
    }
  } else {
    for (let i = 0; i < desktopItems.length; i++) {
      desktopItems[i].classList.add("desktop-hidden");
    }
  }
  buttonHidden.classList.add("hidden");
  buttonShowAll.classList.remove("hidden");
});
