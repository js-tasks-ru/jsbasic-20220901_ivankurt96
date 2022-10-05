import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.insertAdjacentHTML('afterbegin', this.createModalTemplate());
    this.closeWithClick();
    this.closeWithESC();
  }

  open() {
    document.body.insertAdjacentElement('afterbegin', this.modal);
    document.body.classList.add('is-modal-open');
  }

  createModalTemplate() {
    const modalTemplate = `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close"><img src="/assets/images/icons/cross-icon.svg" alt="close-icon" /></button>
        <h3 class="modal__title">Вот сюда нужно добавлять заголовок</h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>`;
    return modalTemplate;
  }

  setTitle(modalTitle) {
    this.modal.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.modal.querySelector('.modal__body').textContent = '';
    this.modal.querySelector('.modal__body').insertAdjacentElement('afterbegin', node);
  }

  close() {
    this.modal.remove();
    document.body.classList.remove('is-modal-open');
  }

  closeWithClick() {
    this.modal.querySelector('.modal__close').addEventListener ('click', () => {
      this.modal.remove();
      document.body.classList.remove('is-modal-open');
    })
  }

  closeWithESC() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.modal.remove();
        document.body.classList.remove('is-modal-open');
      }
    })
  }
}