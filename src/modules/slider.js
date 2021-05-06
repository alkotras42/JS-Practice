function slider({container, slide, nextArrow, prewArrow, currentCounter, wrapper, field}) {
    const sliderImages = document.querySelectorAll(slide),
    carousel = document.querySelector(container),
    nextSlider = document.querySelector(nextArrow),
    prevSlider = document.querySelector(prewArrow),
    currentSlider = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width

  let index = parseInt(currentSlider.innerHTML) - 1
  let offset = 0

  slidesField.style.width = 100 * sliderImages.length + '%'
  slidesField.style.display = 'flex'
  slidesField.style.transition = '0.5s all'

  slidesWrapper.style.overflow = 'hidden'

  sliderImages.forEach((item) => {
    item.style.width = width
  })

  for (let i = 0; i < sliderImages.length; i++) {
    const dot = document.createElement('li')
    dot.classList.add('dot')
    dot.setAttribute('data-slide-to', i)
    carousel.append(dot)
  }

  const dots = document.querySelectorAll('.dot')

  function changeSlide(index) {
    const activeDot = document.querySelector('li.active')
    activeDot.classList.remove('active')
    dots[index].classList.add('active')
    currentSlider.textContent = (index + 1).toString().padStart(2, '0')
    slidesField.style.transform = `translateX(-${offset}px)`
  }

dots[index].classList.add('active')

  dots.forEach((item) => {
    item.addEventListener('click', () => {
      offset = +width.replace(/\D/g, '') * +item.getAttribute('data-slide-to')
      index = +item.getAttribute('data-slide-to')
      changeSlide(index)
    })
  })

  nextSlider.addEventListener('click', () => {
    if (offset == +width.replace(/\D/g, '') * (sliderImages.length - 1)) {
      offset = 0
      index = 0
    } else {
      offset += +width.replace(/\D/g, '')
      index += 1
    }
    changeSlide(index)
  })

  prevSlider.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.replace(/\D/g, '') * (sliderImages.length - 1)
      index = 3
    } else {
      offset -= +width.replace(/\D/g, '')
      index -= 1
    }
    changeSlide(index)
  })
}

export default slider