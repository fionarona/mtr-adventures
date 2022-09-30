const $benny = $('.benny')
const $sky = $('.sky')
const $window = $('.windows')
const $gameBoard = $('.grid')
const $squares = $('.squares')
const $mole = $('.mole')
const $sally = $('.sally')
const $bently = $('.bently')
const $intro = $('.intro')
const $gameOver = $('.gameOver')
const $title =$('.title')

const $score = $('#score')
let result = 0
let timerId = null
let hitPosition, sallyPosition, bentlyPosition

const randomSquare = () => {
  $squares.removeClass('mole')
  let randomSquare = $squares.eq(Math.floor(Math.random()*30))
  randomSquare.addClass('mole')

  hitPosition = randomSquare.attr('id')
  }

const randomSally = () => {
  $squares.removeClass('sally')
  let randomSquare = $squares.eq(Math.floor(Math.random()*30))
  randomSquare.addClass('sally')

  sallyPosition = randomSquare.attr('id')
  }

const randomBently = () => {
  $squares.removeClass('bently')
  let randomSquare = $squares.eq(Math.floor(Math.random()*30))
  randomSquare.addClass('bently')

  bentlyPosition = randomSquare.attr('id')
}

moveMole = () => {
  timerId = setInterval(randomSquare, 1000)
}
moveSally = () => {
  timerId = setInterval(randomSally, 1000)
}
moveBently = () => {
  timerId = setInterval(randomBently, 500)
}

$benny.on('click', function(e) {
  $intro.remove()
  $benny.hide()
  moveMole()
})

$squares.on('click', function(e) {
  if ($(e.currentTarget).attr('id') == hitPosition) {
    result ++
    $score.text(result)
    hitPosition = null}
    else clearInterval(timerId)
  if (result >= 5){
    moveSally()}
  if (result >= 10){
    moveBently()
  }})

$squares.on('click', function(e) {
  if ($(e.currentTarget).attr('id') == bentlyPosition) {
    $gameOver.show()
    $score.show()
    $sally.hide()
    $bently.hide()
    clearInterval(timerId)
    timerId = undefined
  }
})

$gameOver.on('click', function () {
  location.reload(true)
})

$squares.on('click', function(e) {
  if ($(e.currentTarget).attr('id') == sallyPosition) {
    $gameOver.show()
    $score.show()
    $sally.remove()
    $bently.remove()
    clearInterval(timerId)
    timerId = undefined}
})

$benny.on('click', function(e) {
  $intro.remove()
  $benny.hide()
  moveMole()
})
