  // swiper
  if (matchMedia("screen and (max-width: 767px)").matches) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 4,
      centeredSlides: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }else if (matchMedia("screen and (min-width: 768px)").matches) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 7,
      centeredSlides: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    }
  