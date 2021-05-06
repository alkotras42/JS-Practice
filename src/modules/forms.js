import {closeModal, openModal} from './modal'
import {postData} from '../services/services'

function forms(formSelector, modalTimer) {
    const forms = document.querySelectorAll(formSelector)

    const message = {
      loading: 'img/spinner.svg',
      success: 'Спасибо за обращение',
      failure: 'Что-то пошло не так',
    }
  
    forms.forEach((form) => {
      bindPostData(form)
    })
  

  
    function bindPostData(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
  
        const statusMessage = document.createElement('img')
        statusMessage.src = message.loading
        statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
        `
        // form.append(statusMessage)
        form.insertAdjacentElement('afterend', statusMessage)
  
        const formData = new FormData(form)
  
        const json = JSON.stringify(Object.fromEntries(formData.entries()))
  
        postData('https://git.heroku.com/agile-waters-64645.git', json)
          .then((data) => {
            console.log(data)
            showThanksModal(message.success)
            statusMessage.remove()
          })
          .catch(() => {
            showThanksModal(message.failure)
          })
          .finally(() => {
            form.reset()
          })
      })
    }
  
    function showThanksModal(message) {
      const prevModal = document.querySelector('.modal__dialog')
      prevModal.classList.add('hide')
      openModal('.modal')
  
      const thanksModal = document.createElement('div')
      thanksModal.classList.add('.modal__dialog')
      thanksModal.innerHTML = `
        <div class="modal__dialog">
          <div class="modal__content">
            <div data-close="" class="modal__close">×</div>
            <div class="modal__title">${message}</div>
          </div>
        </div>
      `
  
      document.querySelector('.modal').append(thanksModal)
      setTimeout(() => {
        thanksModal.remove()
        prevModal.classList.add('show')
        prevModal.classList.remove('hide')
        closeModal('.modal', modalTimer)
      }, 4000)
    }
  
    fetch('http://localhost:3000/menu').then((data) => data.json())
}

export default forms