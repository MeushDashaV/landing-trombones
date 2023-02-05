(function () {
  const slides = [
    '<div class = "slide"><img src="img/BASS TROMBONE.png" alt = "BASS TROMBONE"></div>',
    '<div class = "slide"><img src="img/TENOR TROMBONE.jpg" alt = "TENOR TROMBONE"></div>',
    '<div class = "slide"><img src="img/VALVE TROMBONE.png" alt = "VALVE TROMBONE"></div>',
  ];
  let currentSlideIdx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(
      ".products-carousel__slide-container"
    );
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 900) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
  }
  function nextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }
  //  setInterval(nextSlide, 1000);
  renderSlide();
  const nextBtn = document.querySelector(".products-carousel__next");
  nextBtn.addEventListener("click", nextSlide);

  renderSlide();
  const prevBtn = document.querySelector(".products-carousel__prev");
  prevBtn.addEventListener("click", prevSlide);
})();
