function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function closeModal(modalSelector, modalTimer) {
  const modal = document.querySelector(modalSelector)
  modal.style.display = 'none'
  document.body.style.overflow = ''
  if (modalTimer) clearTimeout(modalTimer)
}

function modal(triggerSelector, modalSelector, modalTimer) {
  let modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector)

  modalTrigger.forEach((item) => {
    item.addEventListener('click', () => openModal(modalSelector))
  })

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute('data-close') == ''
    ) {
      closeModal(modalSelector, modalTimer)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block' && e.code === 'Escape') {
      closeModal(modalSelector, modalTimer)
    }
  })

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector)
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll)
}

export default modal
export { closeModal, openModal }
