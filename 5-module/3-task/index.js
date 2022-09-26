function initCarousel() {
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let img = document.querySelector(".carousel__inner");
  let position = 0;

  function arrow(position, arrowRight, arrowLeft) {
    if (position === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }
    if (position === 3) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

  arrow(position, arrowRight, arrowLeft);

  arrowRight.addEventListener("click", () => {
    position++;
    img.style.transform = `translateX(-${position * img.offsetWidth}px)`;
    arrow(position, arrowRight, arrowLeft);
  });

  arrowLeft.addEventListener("click", () => {
    position--;
    img.style.transform = `translateX(-${position * img.offsetWidth}px)`;
    arrow(position, arrowRight, arrowLeft);
  });
}