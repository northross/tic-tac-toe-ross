'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')

const signUp = function (credentials) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://northross.github.io'
    },
    data: credentials
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': 'https://northross.github.io'
    },
    data: data
  })
}

const changePassword = function (data) {
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
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (cellNum, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }, data: {
    "game": {
      "cell": {
        "index": cellNum,
        "value": player
      },
      "over": false
    }
  }
  })
}
//
// const getTotal = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'GET',
//     headers: {
//        Authorization: 'Token token=${TOKEN}'
//     }, data: {
//     "game": {
//       "id": 3,
//       "cells": ["","","","","","","","",""],
//       "over": false,
//       "player_x": {
//         "id": 1,
//         "email": "and@and.com"
//       },
//       "player_o": null
//     }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  updateGame
  // getTotal
}
