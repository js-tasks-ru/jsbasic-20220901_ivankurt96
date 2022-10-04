export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = this.steps - 1;
    this.value = value;
    
    this.changeValue = this.changeValue.bind(this);

    this.initStepSlider();
  }

  initStepSlider() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.insertAdjacentHTML('beforeend', this.createStepSliderTemplate());
    const sliderSteps = this.elem.querySelector('.slider__steps');
    sliderSteps.children[this.value].classList.add('slider__step-active');
    this.addHandler();
  }

  createStepSliderTemplate() {
    const StepSliderTemplate = `
    <div class="slider__thumb" style="left: ${this.calculatePosition()}%">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress" style="width: ${this.calculatePosition()}%"></div>
    <div class="slider__steps">
      ${'<span></span>'.repeat(this.steps)}
    </div>`
    return StepSliderTemplate;
  }

  calculatePosition() {
    const segmentWidth = 100 / this.segments;
    return segmentWidth * this.value;
  };

  changeValue(event) {
    const left = event.clientX - this.elem.getBoundingClientRect().left; 
    const leftRelative = left / this.elem.offsetWidth; 
    const currentValue = Math.round(leftRelative * this.segments); 
    this.value = currentValue;
    
    const sliderValueElement = document.querySelector('.slider__value');
    sliderValueElement.textContent = currentValue;

    const sliderSteps = document.querySelector('.slider__steps').children;

    for (let i = 0; i < sliderSteps.length; i++) {
      sliderSteps[i].classList.remove('slider__step-active');
    }
    sliderSteps[currentValue].classList.add('slider__step-active');

    const progress = document.querySelector('.slider__progress');
    const thumb = document.querySelector('.slider__thumb');

    progress.setAttribute('style', `width: ${this.calculatePosition()}%`);
    thumb.setAttribute('style', `left: ${this.calculatePosition()}%`);

    this.elem.dispatchEvent(new CustomEvent("slider-change", {
      detail: this.value,
      bubbles: true,
    }))
  }

  addHandler() {
    this.elem.addEventListener('click', this.changeValue);
  }
}