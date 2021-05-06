function calc() {
    const result = document.querySelector('.calculating__result span')
  let sex = localStorage.getItem('Sex') || 'female',
    height,
    weight,
    age,
    ratio = localStorage.getItem('Ratio') || 1.375

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      element.classList.remove(activeClass)

      if (element.getAttribute('id') === localStorage.getItem('Sex')) {
        element.classList.add(activeClass)
      }
      if (
        element.getAttribute('data-ratio') === localStorage.getItem('Ratio')
      ) {
        element.classList.add(activeClass)
      }
    })
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active')
  initLocalSettings(
    '.calculating__choose_big div',
    'calculating__choose-item_active'
  )

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____'
      return 0
    }
    if (sex === 'female') {
      result.textContent = (
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) *
        ratio
      ).toFixed(0)
    } else if (sex === 'male') {
      result.textContent = (
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) *
        ratio
      ).toFixed(0)
    }
  }

  calcTotal()

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio')
          localStorage.setItem('Ratio', ratio)
        } else {
          sex = e.target.getAttribute('id')
          localStorage.setItem('Sex', sex)
        }

        elements.forEach((element) => {
          element.classList.remove(activeClass)
        })

        e.target.classList.add(activeClass)
        calcTotal()
      })
    })
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active')
  getStaticInformation(
    '.calculating__choose_big div',
    'calculating__choose-item_active'
  )

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector)

    if (input.value.match(/\D/g)) {
      input.style.border = '1px solid red'
    } else {
      input.style.border = ''
    }

    input.addEventListener('input', () => {
      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value
          localStorage.setItem('Height', height)
          break
        case 'weight':
          weight = +input.value
          localStorage.setItem('Weight', weight)
          break
        case 'age':
          age = +input.value
          localStorage.setItem('Age', age)
          break
      }

      calcTotal()
    })
  }

  getDynamicInformation('#height')
  getDynamicInformation('#weight')
  getDynamicInformation('#age')
}

export default calc