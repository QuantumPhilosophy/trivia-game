'use strict'

let correctAnswers = 0
let incorrectAnswers = 0
let timerRunning = false
let timer = 120
let intervalId

function countDown () {
  timer--
  $('#timer').html(timer)
  if (timer === 0) {
    stopTimer()
    triggerGameOverModal()
  }
}

function startTimer () {
  if (!timerRunning) {
    timerRunning = true
    intervalId = setInterval(countDown, 1000)
  }
}

function stopTimer () {
  if (timerRunning) {
    timerRunning = false
    clearInterval(intervalId)
  }
}

function setupGame () {
  correctAnswers = 0
  incorrectAnswers = 0
  timer = 120
  $('.fa-check-circle').addClass('invisible').removeClass('correct').removeClass('incorrect')
  $('.custom-control-label').removeClass('correct').removeClass('incorrect')
  $('.custom-control-input').prop('checked', false)
  $('#timer').html(timer)
  startTimer()
}

function triggerGameOverModal () {
  $('#correctAnswers').html(correctAnswers)
  $('#incorrectAnswers').html(incorrectAnswers)
  $('#gameOverModal').modal('toggle')
}

function checkQuestionCount () {
  if (correctAnswers + incorrectAnswers === 5) {
    triggerGameOverModal()
  }
}

function setCorrect (questionAnswerId) {
  correctAnswers++
  const questionId = questionAnswerId.split('-')[0]
  $(`#${questionId}-checkmark`).removeClass('invisible')
  $(`#${questionId}-checkmark`).addClass('correct')
  $(`#${questionAnswerId}-label`).addClass('correct')
  checkQuestionCount()
}

function setIncorrect (questionAnswerId, correctAnswerId) {
  incorrectAnswers++
  const questionId = questionAnswerId.split('-')[0]
  $(`#${questionId}-checkmark`).removeClass('invisible')
  $(`#${questionId}-checkmark`).addClass('incorrect')
  $(`#${questionAnswerId}-label`).addClass('incorrect')
  $(`#${correctAnswerId}-label`).addClass('correct')
  checkQuestionCount()
}

$('.question1-answers').on('click', function (event) {
  const questionAnswerId = event.target.id
  const correctAnswerId = 'question1-answer1'
  if (event.target.id === correctAnswerId) {
    setCorrect(questionAnswerId)
  } else {
    setIncorrect(questionAnswerId, correctAnswerId)
  }
})

$('.question2-answers').on('click', function (event) {
  const questionAnswerId = event.target.id
  const correctAnswerId = 'question2-answer2'
  if (event.target.id === correctAnswerId) {
    setCorrect(questionAnswerId)
  } else {
    setIncorrect(questionAnswerId, correctAnswerId)
  }
})

$('.question3-answers').on('click', function (event) {
  const questionAnswerId = event.target.id
  const correctAnswerId = 'question3-answer3'
  if (event.target.id === correctAnswerId) {
    setCorrect(questionAnswerId)
  } else {
    setIncorrect(questionAnswerId, correctAnswerId)
  }
})

$('.question4-answers').on('click', function (event) {
  const questionAnswerId = event.target.id
  const correctAnswerId = 'question4-answer2'
  if (event.target.id === correctAnswerId) {
    setCorrect(questionAnswerId)
  } else {
    setIncorrect(questionAnswerId, correctAnswerId)
  }
})

$('.question5-answers').on('click', function (event) {
  const questionAnswerId = event.target.id
  const correctAnswerId = 'question5-answer3'
  if (event.target.id === correctAnswerId) {
    setCorrect(questionAnswerId)
  } else {
    setIncorrect(questionAnswerId, correctAnswerId)
  }
})

$('#gameOverModal').on('hidden.bs.modal', function () {
  setupGame()
})

setupGame()
