'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')


// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
$('#sign-up').on('submit', authEvents.onSignUp)
$('#sign-in').on('submit', authEvents.onSignIn)
$('#change-password').on('submit', authEvents.onChangePassword)
$('#sign-out').on('submit', authEvents.onSignOut)
$('#change-password').hide()
$('#sign-out').hide()
$('#note').hide()
$('.grid').hide()
$('#pregame').show()
// $('#get-games').hide()
// $('#get-games').on('submit', authEvents.getGames)
$('#new-game').on('click', authEvents.onNewGame)
$('#new-game').hide()
$('#0').on('click', authEvents.onClick0)
$('#1').on('click', authEvents.onClick1)
$('#2').on('click', authEvents.onClick2)
$('#3').on('click', authEvents.onClick3)
$('#4').on('click', authEvents.onClick4)
$('#5').on('click', authEvents.onClick5)
$('#6').on('click', authEvents.onClick6)
$('#7').on('click', authEvents.onClick7)
$('#8').on('click', authEvents.onClick8)
})
