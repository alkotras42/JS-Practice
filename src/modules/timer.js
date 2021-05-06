function timer(id, deadLine) {

  function getTimeRemaning(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60)

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  function setTime(selecor, endtime) {
    let timer = document.querySelector(selecor),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateTime, 1000)

    updateTime()

    function updateTime() {
      let t = getTimeRemaning(endtime)

      days.innerHTML = t.days.toString().padStart(2, '0')
      hours.innerHTML = t.hours.toString().padStart(2, '0')
      minutes.innerHTML = t.minutes.toString().padStart(2, '0')
      seconds.innerHTML = t.seconds.toString().padStart(2, '0')

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setTime(id, deadLine)
}

export default timer
