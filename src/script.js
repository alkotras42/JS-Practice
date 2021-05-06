import tabs from './modules/tabs'
import modal from './modules/modal'
import timer from './modules/timer'
import cards from './modules/cards'
import calc from './modules/calc'
import forms from './modules/forms'
import slider from './modules/slider'
import {closeModal} from './modules/modal'
import './css/style.css'

window.addEventListener('DOMContentLoaded', () => {

  let modalTimer = setTimeout(() => closeModal('.modal', modalTimer), 50000)

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
  modal('[data-modal]', '.modal', modalTimer)
  timer('.timer','2022-06-11')
  cards()
  calc()
  forms('form', modalTimer)
  slider({
    container: '.carousel-indicators',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prewArrow: '.offer__slider-prev',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  })
})
