'use strict'

let apiUrl
const apiUrls = {
  production: 'https://cors-anywhere.herokuapp.com/https://stormy-beyond-54635.herokuapp.com',
  development: 'https://cors-anywhere.herokuapp.com/http://localhost:4741'
  // https://tic-tac-toe-wdi.herokuapp.com
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
