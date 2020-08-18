var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  //переключение стрелками клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: "coverflow",
});
// для того чтобы существовало 2 разных слайдера на странице = их необходимо инициализировать ОТДЕЛЬНО !!!
// СЕЙЧАС - ОНИ иницализируются по предустановленному классу .swiper-container в строке new Swiper('.swiper-container', {
// это надо исправить!
// дублируем, меняем названия переменных, и имя в параметрах.
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  //переключение стрелками клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке меню");

  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
});
