'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')

const signUp = function (credentials) {
  console.log('Sign up', credentials)
  console.log(config.apiUrl + '/sign-up')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: credentials
  })
}

const signIn = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (data) {
  console.log(data)
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (spot, player) {
  console.log('updateGame')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }, data: {
    "game": {
      "cell": {
        "index": spot,
        "value": player
      },
      "over": false
    }
  }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  updateGame
}
