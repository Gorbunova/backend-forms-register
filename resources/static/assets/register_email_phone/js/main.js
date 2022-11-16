document.addEventListener('DOMContentLoaded', function(e) {
  const timerWrapper = document.getElementById('timer_wrapper')
  const timer = document.getElementById('timer')
  const link = document.getElementById('again_code_link')

  link?.addEventListener('click', () => {
    timerWrapper.style.display = 'flex'
    link.style.display = 'none'
    startTimer(timerWrapper, timer, link)
  })

  if (timer) startTimer(timerWrapper, timer, link)
})

const startTimer = (timerWrapper, timer, link) => {
  let counter = 60
  timer.textContent = '01:00'
  const timerCounter = setInterval(() => {
    counter -= 1
    timer.textContent = `${counter === 60 ? '01' : '00'}:${counter < 10 ? '0' + counter : counter}`
    if (counter === 0) {
      clearInterval(timerCounter)
      timerWrapper.style.display = 'none'
      link.style.display = 'inline'
    }
  }, 1000)
}

function handleChangePassword() {
  document.querySelectorAll('.element_wrapper').forEach(n => n.classList.remove('element_wrapper_error'));
}
