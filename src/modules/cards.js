import {getContent} from '../services/services'

function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.classes = classes
      this.parent = document.querySelector(parentSelector)
      this.transfer = 27
      this.convertPrice()
    }

    convertPrice() {
      this.price *= this.transfer
    }

    render() {
      const element = document.createElement('div')

      if (this.classes.length === 0) {
        // this.classes.append('menu__item')
        element.classList.add('menu__item')
      } else {
        this.classes.forEach((className) => element.classList.add(className))
      }
      element.innerHTML = `
              <img src=${this.src} alt=${this.alt}/>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
            `
      this.parent.append(element)
    }
  }



  getContent('https://git.heroku.com/agile-waters-64645.git').then((data) => {
    data.forEach(({ img, alt, title, descr, price }) => {
      new MenuCard(img, alt, title, descr, price, '.menu .container').render()
    })
  })
}

export default cards