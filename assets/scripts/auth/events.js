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
  winningPlayer = ''
  $('.grid').show(()=>{$('.grid').css('display', 'grid')})
  scores = ["", "", "", "", "", "", "", "", ""]
  const data = getFormFields(event.target)
  api.newGame()
    .then(ui.newGameSelectSuccess)
    .catch(ui.newGameSelectFailure)
  player = 'X'
}

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing Up')
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signed In')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign Out')
  $('.grid').hide()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Password Change')
  // const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const test = function () {
  // top row
  if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[1] && scores[0] === scores[2]) {
    // console.log('winner top row')
    winningPlayer = scores[0]
    // left column
    // return true
  } else if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[3] && scores[0] === scores[6]) {
    // console.log('winner')
    winningPlayer = scores[0]
    //left diagonal
    // return true
  } else if ((scores[0]==='X'|| scores[0]==='O') && scores[0] === scores[4] && scores[0] === scores[8]) {
    // console.log('winner')
    winningPlayer = scores[0]
    // middle column
    // return true
  } else if ((scores[1]==='X'|| scores[1]==='O') && scores[1] === scores[4] && scores[1] === scores[7]) {
    // console.log('winner')
    winningPlayer = scores[1]
    // right diagonal
    // return true
  } else if ((scores[2]==='X'|| scores[2]==='O') && scores[2] === scores[4] && scores[2] === scores[6]) {
    // console.log('winner')
    winningPlayer = scores[2]
    // // right column
    // return true
  } else if ((scores[2]==='X'|| scores[2]==='O') && scores[2] === scores[5] && scores[2] === scores[8]) {
    // console.log('winner pl')
    winningPlayer = scores[2]
    // middle row
      // return true
  } else if ((scores[3]==='X'|| scores[3]==='O') && scores[3] === scores[4] && scores[3] === scores[5]) {
    // console.log('winner')
    winningPlayer = scores[3]
    // Bottom row
    // return true
  } else if ((scores[6]==='X'|| scores[6]==='O') && scores[6] === scores[7] && scores[6] === scores[8]) {
    // console.log('winner')
    winningPlayer = scores[6]
    // return true
  }

  if (winningPlayer === '') {
    return false
  } else if (winningPlayer === 'O' || winningPlayer === 'X') {
    // console.log('winner determined')
    $('#note').text('Player ' + winningPlayer + ' has won!')
    return true
  // } else if (scores.every(num => num === 'X' || num === 'O') && winningPlayer === '') {
  //   $('#note').text("It's a Tie!")
  //   console.log('Tie')
  //   return true
  // }
}

// for (let i=0; i <= scores.length; i++) {
//   scores[i] !== ''
}


const onClickN = function (cellNum) {
  event.preventDefault()
  if (winningPlayer !== '') return
  if (player === 'X') {
    if (scores[cellNum] === '' && test() === false) {
      scores[cellNum] = 'X'
      $('#' + cellNum).text('X')
      api.updateGame(cellNum, player)
      player = 'O'
      ui.boardPosession(player)
      test()
    }
  } else {
    if (player === 'O') {
    if (scores[cellNum] === '' && test() === false) {
      scores[cellNum] = 'O'
      $('#'+ cellNum).text('O')
      api.updateGame(cellNum, player)
      player = 'X'
      ui.boardPosession(player)
      test()
      }
    }
  }
}

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

  // const board = scores.splice([boxID], 0, 'X')

// Do not allow users to add an X or O to an invalid space

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
  test
}
