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

const getCampaignsSuccess = (data) => {
  console.log(data)
  const campaigns = data.campaigns
  console.table(campaigns)
  $('#print-campaigns').html(campaigns)
}

const getEncountersSuccess = (data) => {
  console.log(data)
  const encounters = data.encounters
  console.table(encounters)
  $('#print-encounters').html(encounters)
}

const createCampaignSuccess = () => {
  console.log('Created a Campaign')
}

const createEncounterSuccess = () => {
  console.log('Created an Encounter')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getCampaignsSuccess,
  getEncountersSuccess,
  createCampaignSuccess,
  createEncounterSuccess,
  failure
}
