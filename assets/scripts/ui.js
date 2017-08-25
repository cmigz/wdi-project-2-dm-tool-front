'use strict'

const app = require('./app')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('SIGNED UP! HURRAY!')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('SIGNED IN! WOOOOO!')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('SIGNED OUT! YEEEEEEEEEAAAAA!')
}

const changePasswordSuccess = () => {
  console.log(app)
  console.log('Password Successfully Changed.')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure
}
