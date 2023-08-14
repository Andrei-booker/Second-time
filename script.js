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

let button = document.querySelector(".button--show-all");
let tabletItems = document.querySelectorAll(".tablet-hidden");
let desktopItems = document.querySelectorAll(".desktop-hidden");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (window.innerWidth < 1120) {
    for (let i = 0; i < tabletItems.length; i++) {
      tabletItems[i].classList.toggle("tablet-hidden");
    }
  } else {
    for (let i = 0; i < desktopItems.length; i++) {
      desktopItems[i].classList.toggle("desktop-hidden");
    }
  }
  if (button.textContent === "Показать все") {
    button.textContent = "Скрыть";
    button.classList.toggle("button--read-more");
    button.classList.toggle("button--hidden");
  } else {
    button.textContent = "Показать все";
    button.classList.toggle("button--read-more");
    button.classList.toggle("button--hidden");
  }
});

let descriptionButton = document.querySelector(".description-button");
let descriptionHidden = document.querySelector(".description-hidden");

descriptionButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  descriptionHidden.classList.toggle("description-hidden");
  if (descriptionButton.textContent === "Читать далее") {
    descriptionButton.textContent = "Скрыть";
    descriptionButton.classList.toggle("button--read-more");
    descriptionButton.classList.toggle("button--hidden");
  } else {
    descriptionButton.textContent = "Читать далее";
    descriptionButton.classList.toggle("button--read-more");
    descriptionButton.classList.toggle("button--hidden");
  }
});
