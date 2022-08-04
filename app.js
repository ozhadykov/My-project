const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let questions = document.querySelectorAll('.questions')

let counterVersionA = 0
let counterVersionB = 0


let currentActive = 1

next.addEventListener('click', () => {

  getTestResult()

  currentActive++
  /*if (currentActive > circles.length){
    currentActive = circles.length
  }*/

  update()

})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1){
    currentActive = 1
  }

  update()

})

function update() {

  if (currentActive === 1){
    prev.disabled = true
    prev.classList.add('disabled')
     counterVersionA = 0
     counterVersionB = 0
  }
  if (currentActive === circles.length + 1){
    next.disabled = true
    next.classList.add('disabled')
    console.log(currentActive, ' ', counterVersionA, ' ', counterVersionB)
    giveResult()
  }
  if (currentActive !== circles.length && currentActive !== 1) {
    next.disabled = false
    prev.disabled = false
    prev.classList.remove('disabled')
    next.classList.remove('disabled')
  }

  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    }
    else {
      circle.classList.remove('active')
    }
  })

   questions.forEach((question, idx, arr) => {
      if (idx < currentActive) {
        question.classList.remove('d-none')
        if (idx - 1 >= 0) {
          arr[idx - 1].classList.add('d-none')
        }
      }
      else {
        question.classList.add('d-none')
       /* if (idx + 1 <= questions.length) {
          arr[idx + 1].classList.remove('d-none')
        }*/
      }
    })


  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

}


function getTestResult() {
  const answers = document.getElementsByName(`jobQuestion${currentActive}`)

  answers.forEach(ver => {
    if (ver.checked) 
      if (ver.value === 'questionOneAnswer1') counterVersionA++
      else if (ver.value === 'questionOneAnswer2') counterVersionB++
  })
}


function giveResult() {
  
}
