const $circle = document.querySelector('.app__main-circle')
const $score = document.querySelector('.balance-value')
const $level = document.querySelector('.level-num')
const $hero = document.querySelector('.circle__hero')

function start() {
  setScore(getScore())
  setLevelFunc()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addNum() {
  setScore(getScore() + 100)
  setLevelFunc()
}

function setLevelFunc() {
  if(getScore() >= 1000) {
    $hero.setAttribute('src', 'iphone4.png')
  }
  if(getScore() >= 5000) {
    $hero.setAttribute('src', 'iphone5.png')
  }
  if(getScore() >= 10000) {
    $hero.setAttribute('src', 'iphonex.png')
  }
}
 
$circle.addEventListener('click', (event) => {
  const anim = document.createElement('div')
  anim.classList.add('animation')
  anim.textContent = '+100'
  anim.style.left = `${event.clientX - 30}px`
  anim.style.top = `${event.clientY - 200}px`

  addNum()

  $circle.parentElement.appendChild(anim)
  setTimeout(() => {
    anim.remove()
  }, 2000)
})

start()