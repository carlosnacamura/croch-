const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});
