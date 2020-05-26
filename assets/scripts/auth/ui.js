'use strict'

const store = require('../store')
const events = require('./events')

// const getGameSuccess = function (data) {
//   console.log('get games worked')
//   $('#note').text('Games Played: ${store.games.length}')
//   store.game = data.game
// }
//
// const getGameFailure = function (data) {
//   console.log('get games failed')
//   $('#note').text('Sorry, there was an error')
// }

const newGameSelectSuccess = function (data) {
  $('#pregame').hide()
  $('.grid').show()
  $('#note').text('Player X, Let the Games Begin!')
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }
  store.game = data.game
}

const newGameSelectFailure = function (data) {
  $('#note').text('There is something wrong!')
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }
  store.game = data.game
}

// const updateGameSuccess = function (data) {
//   store.game = data.game
//   console.log('update works')
// }
//
// const updateGameFailure = function (error) {
//   console.log('update doesnt work')
// }

const signUpSuccess = function (data) {
  $('#note').show()
  $('#note').text('You have Signed-Up Successfully!')
  $('#note').text("Please 'Sign-In' to Play!")
  $('#note').removeClass()
  $('#note').addClass('Sign-Up: Success!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signUpFailure = function (error) {
  $('#note').text('Sign-Up was Unsuccessful')
  $('#note').removeClass()
  $('#note').addClass('Sign-Up: incomplete!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#note').show()
  $('#note').text('You have Signed-In Successfully!')
  $('#note').removeClass()
  $('#note').addClass('Sign-In: success!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  store.user = data.user
  $('.grid').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // $('#get-games').show()
}

const signInFailure = function (error) {
  $('#note').text('Sign-In was Unsuccessful!')
  $('#note').removeClass()
  $('#note').addClass('Sign-In: Unsuccessful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordSuccess = function (data) {
  $('#note').text('Password Change was Successful!')
  $('#note').removeClass()
  $('#note').addClass('Password Change: Successful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordFailure = function (error) {
  $('#note').text('Password Change was Unsuccessful!')
  $('#note').removeClass()
  $('#note').addClass('Password Change: Unsuccessful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutSuccess = function (data) {
  $('#note').text('You have Signed-Out Successfully!')
  $('#note').removeClass()
  $('#note').addClass('Sign-Out: Successful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.grid').hide()
  $('#new-game').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#pregame').show()
}

const signOutFailure = function (error) {
  $('#note').text('Signed-out was Unsuccessful!')
  $('#note').removeClass()
  $('#note').addClass('Sign-Out: Unsuccessful!')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const boardPosession = function (turn) {
  $('#note').text('It is Player ' + turn + "'s turn!")
}

const onClickSuccess = function () {
  console.log('onclick works')
}

const onClickFailure = function () {
  console.log('onclick does not work')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  boardPosession,
  newGameSelectSuccess,
  newGameSelectFailure,
  // updateGameFailure,
  // updateGameSuccess,
  onClickSuccess,
  onClickFailure
  // getGameSuccess,
  // getGameFailure
}
