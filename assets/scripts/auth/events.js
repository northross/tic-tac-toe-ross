'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const scores = ["", "", "", "", "", "", "", "", "", ""]

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing Up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signed In')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign Out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Password Change')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const test = function () {
if ((scores[0]==='x'|| scores[0]==='o') && scores[0] === scores[1] && scores[0] === scores[2]) {
  console.log('winner from 1')
  return true
} else if ((scores[0]==='x'|| scores[0]==='o') && scores[0] === scores[3] && scores[0] === scores[6]) {
    console.log('winner')
    return true
  } else if((scores[0]==='x'|| scores[0]==='o') && scores[0] === scores[4] && scores[0] === scores[3]) {
    console.log('winner')
    return true
  } else if((scores[1]==='x'|| scores[1]==='o') && scores[1] === scores[4] && scores[1] === scores[7]) {
    console.log('winner')
    return true
  } else if((scores[2]==='x'|| scores[2]==='o') && scores[2] === scores[4] && scores[2] === scores[6]) {
    console.log('winner')
    return true
  } else if((scores[2]==='x'|| scores[2]==='o') && scores[2] === scores[5] && scores[2] === scores[8]) {
    console.log('winner')
    return true
  } else if((scores[3]==='x'|| scores[3]==='o') && scores[3] === scores[4] && scores[3] === scores[5]) {
    console.log('winner')
    return true
  } else if((scores[6]==='x'|| scores[6]==='o') && scores[6] === scores[7] && scores[6] === scores[8]) {
    console.log('winner')
    return true
  } else {
    return false
  }
}

let player = 'x'

const onClick0 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[0] === '' && test() === false) {
      $('#0').text('x')
      scores[0] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[0] === '' && test() === false) {
      $('#0').text('o')
      scores[0] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick1 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[1] === '' && test() === false) {
      $('#1').text('x')
      scores[1] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[1] === '' && test() === false) {
      $('#1').text('o')
      scores[1] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick2 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[2] === '' && test() === false) {
      $('#2').text('x')
      scores[2] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[2] === '' && test() === false) {
      $('#2').text('o')
      scores[2] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick3 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[3] === '' && test() === false) {
      $('#3').text('x')
      scores[3] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[3] === '' && test() === false) {
      $('#3').text('o')
      scores[3] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick4 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[4] === '' && test() === false) {
      $('#4').text('x')
      scores[4] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[4] === '' && test() === false) {
      $('#4').text('o')
      scores[4] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick5 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[5] === '' && test() === false) {
      $('#5').text('x')
      scores[5] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[5] === '' && test() === false) {
      $('#5').text('o')
      scores[5] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick6 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[6] === '' && test() === false) {
      $('#6').text('x')
      scores[6] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[6] === '' && test() === false) {
      $('#6').text('o')
      scores[6] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick7 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[7] === '' && test() === false) {
      $('#7').text('x')
      scores[7] = 'x'
      player = 'o'
      console.log(player)
      console.log(store)
      test()
    }
  } else {
    if (scores[7] === '' && test() === false) {
      $('#7').text('o')
      scores[7] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

const onClick8 = function (event) {
  event.preventDefault()
  if (player === 'x') {
    if (scores[8] === '' && test() === false) {
      $('#8').text('x')
      scores[8] = 'x'
      player = 'o'
      console.log(store)
      console.log(player)
      test()
    }
  } else {
    if (scores[8] === '' && test() === false) {
      $('#8').text('o')
      scores[8] = 'o'
      player = 'x'
      console.log(store)
      test()
    }
  }
}

// const onClick = function (event) {
//   event.preventDefault()
//   // if ()
//   $('#2').text('o')
// }
// const array = ["", "", "", "", "", "", "", "", ""]

// const onClick = function (event) {
//   event.preventDefault()
//   let i = 0
//     if (i % 2 = 0) {
//     // array[ID].splice([array[ID], 0, "x")
//     $('.box').text('x')
//   }
//   // } else if (i % 2 = 1) {
//   //   games.cell[].splice([array id], 0, "o")
//   // })
//     // } else if (i % 2 = 1) {
//     //
//     // }
//     // i += 1
//   console.log('onClick does something')
//   console.log(i)
//   // if ([element] !== 'o' || [element] !== 'x') {
//   // games.cells[0].getElementbyId
//   }

  // const board = store.game.cells.splice([boxID], 0, 'x')



//
// Add a click handler for when a space on the game board is clicked
// If the user clicks on a valid space then add their X or O
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
  onClick8
}


// $('#change-my-text').on('click', function (event) {
//     console.log()
//     $('#change-my-text').text('some text')
//   })
// document.getElementsByClass(.click).onClick = function (event) {
//   console.log('on click works')
// }
