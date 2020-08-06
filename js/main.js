var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: "coverflow",
})


ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });

}


