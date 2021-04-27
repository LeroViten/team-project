(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal2-open]'),
    closeModalBtn: document.querySelector('[data-modal2-close]'),
    modal: document.querySelector('[data-modal2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Close burger menu on Order button click
const orderBtn = document.querySelector(".burger-order-btn");
const burgerMenu = document.querySelector(".mobile-menu");
orderBtn.addEventListener("click", orderBtnClick);
function orderBtnClick() {
  burgerMenu.classList.toggle("is-open")
};