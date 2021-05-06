function tabs(tabsSelector, tabsContentSelector, tabsParrentSelector, tabsActiveSelector) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParrent = document.querySelector(tabsParrentSelector)

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((tab) => {
      tab.classList.remove(tabsActiveSelector)
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add(tabsActiveSelector)
  }

  hideTabContent()
  showTabContent()

  tabsParrent.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
  })
}

export default tabs
