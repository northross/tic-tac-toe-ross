'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#note').text('You have signed-up successfully!')
  $('#note').removeClass()
  $('#note').addClass('Sign-up: success!')
  console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function (error) {
  $('#note').text('Sign-up was not successful')
  $('#note').removeClass()
  $('#note').addClass('Sign-up: incomplete!')
  console.log('signUpFailure error is: ', error)
}

const signInSuccess = function (data) {
  $('#note').text('You have signed-in successfully!')
  $('#note').removeClass()
  $('#note').addClass('Sign-in: success!')
  console.log('signInSuccess data is: ', data)
  store.user = data.user

  $('#change-password').show()
  $('#sign-out').show()
  $('.grid').show()

  $('#sign-in').hide()
  $('#sign-up').hide()
}

const signInFailure = function (error) {
  $('#note').text('Sign-in was not successful!')
  $('#note').removeClass()
  $('#note').addClass('Sign-in: unsuccessful!')
  console.log('signInFailure error is: ', error)
}

const changePasswordSuccess = function (data) {
  $('#note').text('Password Change was successful!')
  $('#note').removeClass()
  $('#note').addClass('Password Change: successful!')
  console.log('changePassword data is: ', data)
  console.log(store)
}

const changePasswordFailure = function (error) {
  $('#note').text('Password Change was unsuccessful!')
  $('#note').removeClass()
  $('#note').addClass('Password Change: unsuccessful!')
  console.log('changePassword data is: ', error)
}


const signOutSuccess = function (data) {
  $('#note').text('You have signed-out successfully!')
  $('#note').removeClass()
  $('#note').addClass('Sign-out: successful!')
  console.log('signOutSuccess data is: ', data)

  $('#change-password').hide()
  $('#sign-out').hide()
  $('.grid').hide()

  $('#sign-in').show()
  $('#sign-up').show()
}

const signOutFailure = function (error) {
  $('#note').text('Signed-out was not successful!')
  $('#note').removeClass()
  $('#note').addClass('Sign-out: unsuccessful!')
  console.log('signOutFailure data is: ', error)
}

 // const click = (function) ()
 // $('#grid').text(player + ' selected a square!')

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
