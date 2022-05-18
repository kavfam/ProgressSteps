// purpose: want to be able to click on Next and have progress bar move to the next step or click on prev and move to prev and when moving, change the color etc of the progress bar to show where we are.
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
next.addEventListener('click', () => {
  currentActive++
  //console.log(currentActive)
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--
  //console.log(currentActive)
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // handle progress bars want a % of the complete progress bar
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // if (currentActive === 1) {
  //   prev.disabled = true
  // } else if (currentActive === circles.length) {
  //   next.disabled = true
  // } else {
  //   prev.disabled = false
  //   next.disabled = false
  // }

  prev.disabled = currentActive === 1 ? true : false
  next.disabled = currentActive === circles.length ? true : false
}
