'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

let scores = ["", "", "", "", "", "", "", "", ""]
let winningPlayer = ''
let player = 'X'

const onNewGame = function (event) {
  event.preventDefault()
  // $('.grid').show(()=>{$('.grid').css('display', 'grid')})
  winningPlayer = ''
  $('.grid').show(()=>{$('.grid').css('display', 'grid')})
  scores = ["", "", "", "", "", "", "", "", ""]
  const data = getFormFields(event.target)
  api.newGame()
    .then(ui.newGameSelectSuccess)
    .catch(ui.newGameSelectFailure)
  player = 'X'
}

const getGames = function (event) {
  const data = api.getFormFields(event.target)
  api.getTotal()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.rules').show(()=>{$('.rules').css('display', 'rules')})
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('.grid').hide()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Test guide: this block will test for each winning combination on the board
// Note: Test() function is called within the onClick() function
const test = function () {
  if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[1] && scores[0] === scores[2]) {
    winningPlayer = scores[0]
    // return data.game.over === true
// top row
    // return true
  } else if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[3] && scores[0] === scores[6]) {
    winningPlayer = scores[0]
// left column
    // return true
  } else if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[4] && scores[0] === scores[8]) {
    winningPlayer = scores[0]
//left diagonal
    // return true
  } else if ((scores[1]==='X'|| scores[1]==='O') && scores[1] === scores[4] && scores[1] === scores[7]) {
    winningPlayer = scores[1]
// middle column
    // return true
  } else if ((scores[2]==='X'|| scores[2]==='O') && scores[2] === scores[4] && scores[2] === scores[6]) {
    winningPlayer = scores[2]
// right diagonal
    // return true
  } else if ((scores[2]==='X'|| scores[2]==='O') && scores[2] === scores[5] && scores[2] === scores[8]) {
    winningPlayer = scores[2]
// right column
    // return true
  } else if ((scores[3]==='X'|| scores[3]==='O') && scores[3] === scores[4] && scores[3] === scores[5]) {
    winningPlayer = scores[3]
// middle row
    // return true
  } else if ((scores[6]==='X'|| scores[6]==='O') && scores[6] === scores[7] && scores[6] === scores[8]) {
    winningPlayer = scores[6]
    // return true
// bottom row
  }
// this whole block will:
 // 1. test for a tie
 // 2. confirm and report a winningPlayer
 // 3. also confirm that there is no winningPlayer
  if (scores.every(num => num !== '') && winningPlayer === '') {
    $('#note').text("It's a Tie! Play again!")
    return store.game.over === true
  } else if (winningPlayer === 'O' || winningPlayer === 'X') {
    $('#note').text('Player ' + winningPlayer + ' has won!')
    return store.game.over === true
  } else if (winningPlayer === '') {
    return false
  }
}

// onClick Guide
// 1. user clicks a square (cellnum)
// 2. if winningPlayer has been determined, refuse action
//
// If player X
// 1. ensure that the place on the board is empty and test for a winningPlayer
// 2. give value X to the array 'Scores'
// 3. put and 'X' on the game board
// 4. API should store the value for the games
// 5. reassign the value of player to 'O'
// 6. message on screen tells user which player has next turn

// Actions 1-6 above are repeated for player 'O'

const onClickN = function (cellNum) {
  event.preventDefault()
  console.log(store)
  if (winningPlayer !== '')
    // $('#note').text('Sorry, invalid move... try another!')
    return

  if (player === 'X') {
    if (scores[cellNum] === '' && test() === false) {
      scores[cellNum] = 'X'
      $('#' + cellNum).text('X')
      api.updateGame(cellNum, player)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
      player = 'O'
      ui.boardPosession(player)
      test()
      console.log(store)
    }
  } else {
    if (player === 'O') {
    if (scores[cellNum] === '' && test() === false) {
      scores[cellNum] = 'O'
      $('#'+ cellNum).text('O')
      api.updateGame(cellNum, player)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
      player = 'X'
      ui.boardPosession(player)
      test()
      console.log(store)
      }
    }
  }
}

// Each of these functions runs through the onClick function above,
// entering the board/array value as the cellNum value
const onClick0 = function (event) {
  onClickN(0)
}
const onClick1 = function (event) {
  onClickN(1)
}
const onClick2 = function (event) {
  onClickN(2)
}
const onClick3 = function (event) {
  onClickN(3)
}
const onClick4 = function (event) {
  onClickN(4)
}
const onClick5 = function (event) {
  onClickN(5)
}
const onClick6 = function (event) {
  onClickN(6)
}
const onClick7 = function (event) {
  onClickN(7)
}
const onClick8 = function (event) {
  onClickN(8)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onClick0,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onClick6,
  onClick7,
  onClick8,
  onNewGame,
  // getGames,
  test
}
