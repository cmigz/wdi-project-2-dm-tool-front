'use strict'

const app = require('./app')
const logic = require('./logic')

const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
}

const signUpError = (error) => {
  console.error(error)
  $('#sign-up-error').removeClass('hidden')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
}

const signInError = (error) => {
  console.error(error)
  $('#sign-in-error').removeClass('hidden')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  hidePops()
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#create-campaign').addClass('hidden')
  $('#create-encounter').addClass('hidden')
  $('#get-campaigns').addClass('hidden')
  $('#get-encounters').addClass('hidden')
  $('#update-campaign').addClass('hidden')
  $('#update-encounter').addClass('hidden')
  $('#delete-campaign').addClass('hidden')
  $('#delete-encounter').addClass('hidden')
  $('#campaignTable').addClass('hidden')
  $('#encounterTable').addClass('hidden')
}

const changePasswordSuccess = () => {
  console.log(app)
  $('.pswd-change-message').removeClass('hidden')
  $('.changed').removeClass('hidden')
  $('#change-password-error').addClass('hidden')
  $('#change-password').addClass('hidden')
}

const changePasswordError = (error) => {
  console.error(error)
  $('#change-password-error').removeClass('hidden')
}

const getCampaignsSuccess = (data) => {
  console.log(data)
  const campaigns = data.campaigns
  console.table(campaigns)
  $('.campaignRow').remove()
  logic.printCampaigns(campaigns)
}

const getEncountersSuccess = (data) => {
  console.log(data)
  const encounters = data.encounters
  console.table(encounters)
  $('.encounterRow').remove()
  logic.printEncounters(encounters)
}

const createCampaignSuccess = (data) => {
  console.log('Created a Campaign')
  $('.camp-created-message').removeClass('hidden')
  $('.created').removeClass('hidden')
}

const createEncounterSuccess = (data) => {
  console.log('Created an Encounter')
  $('.encnt-created-message').removeClass('hidden')
  $('.created').removeClass('hidden')
}

const updateCampaignSuccess = (data) => {
  console.log('Updated Campaign')
  $('.camp-update-message').removeClass('hidden')
  $('.updated').removeClass('hidden')
}

const updateEncounterSuccess = (data) => {
  console.log('Updated Encounter')
  $('.encnt-update-message').removeClass('hidden')
  $('.updated').removeClass('hidden')
}

const deleteCampaignSuccess = () => {
  console.log('Deleted a Campaign')
  $('.camp-deleted-message').removeClass('hidden')
  $('.deleted').removeClass('hidden')
}

const deleteEncounterSuccess = () => {
  console.log('Deleted an Encounter')
  $('.encnt-deleted-message').removeClass('hidden')
  $('.deleted').removeClass('hidden')
}

const hideSignUp = () => {
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
}

const hideSignIn = () => {
  $('#sign-in').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
}

const showChngPwd = () => {
  $('#change-password').toggleClass('hidden')
}

const showCreates = () => {
  $('#create-campaign').toggleClass('hidden')
  $('#create-encounter').toggleClass('hidden')
  $('#get-campaigns').addClass('hidden')
  $('#get-encounters').addClass('hidden')
  $('#update-campaign').addClass('hidden')
  $('#update-encounter').addClass('hidden')
  $('#delete-campaign').addClass('hidden')
  $('#delete-encounter').addClass('hidden')
  $('#campaignTable').addClass('hidden')
  $('#encounterTable').addClass('hidden')
  $('.camp-update-message').addClass('hidden')
  $('.encnt-update-message').addClass('hidden')
  $('.updated').addClass('hidden')
  $('.camp-created-message').addClass('hidden')
  $('.encnt-created-message').addClass('hidden')
  $('.created').addClass('hidden')
  $('.camp-deleted-message').addClass('hidden')
  $('.encnt-deleted-message').addClass('hidden')
  $('.deleted').addClass('hidden')
  $('.pswd-change-message').addClass('hidden')
  $('.changed').addClass('hidden')
}

const showViews = () => {
  $('#get-campaigns').toggleClass('hidden')
  $('#get-encounters').toggleClass('hidden')
  $('#campaignTable').toggleClass('hidden')
  $('#encounterTable').toggleClass('hidden')
  $('#create-campaign').addClass('hidden')
  $('#create-encounter').addClass('hidden')
  $('#update-campaign').addClass('hidden')
  $('#update-encounter').addClass('hidden')
  $('#delete-campaign').addClass('hidden')
  $('#delete-encounter').addClass('hidden')
  $('.camp-update-message').addClass('hidden')
  $('.encnt-update-message').addClass('hidden')
  $('.updated').addClass('hidden')
  $('.camp-created-message').addClass('hidden')
  $('.encnt-created-message').addClass('hidden')
  $('.created').addClass('hidden')
  $('.camp-deleted-message').addClass('hidden')
  $('.encnt-deleted-message').addClass('hidden')
  $('.deleted').addClass('hidden')
  $('.pswd-change-message').addClass('hidden')
  $('.changed').addClass('hidden')
}

const showEdits = () => {
  $('#update-campaign').toggleClass('hidden')
  $('#update-encounter').toggleClass('hidden')
  $('#create-campaign').addClass('hidden')
  $('#create-encounter').addClass('hidden')
  $('#get-campaigns').addClass('hidden')
  $('#get-encounters').addClass('hidden')
  $('#delete-campaign').addClass('hidden')
  $('#delete-encounter').addClass('hidden')
  $('#campaignTable').addClass('hidden')
  $('#encounterTable').addClass('hidden')
  $('.camp-update-message').addClass('hidden')
  $('.encnt-update-message').addClass('hidden')
  $('.updated').addClass('hidden')
  $('.camp-created-message').addClass('hidden')
  $('.encnt-created-message').addClass('hidden')
  $('.created').addClass('hidden')
  $('.camp-deleted-message').addClass('hidden')
  $('.encnt-deleted-message').addClass('hidden')
  $('.deleted').addClass('hidden')
  $('.pswd-change-message').addClass('hidden')
  $('.changed').addClass('hidden')
}

const showDeletes = () => {
  $('#delete-campaign').toggleClass('hidden')
  $('#delete-encounter').toggleClass('hidden')
  $('#update-campaign').addClass('hidden')
  $('#update-encounter').addClass('hidden')
  $('#create-campaign').addClass('hidden')
  $('#create-encounter').addClass('hidden')
  $('#get-campaigns').addClass('hidden')
  $('#get-encounters').addClass('hidden')
  $('#campaignTable').addClass('hidden')
  $('#encounterTable').addClass('hidden')
  $('.camp-update-message').addClass('hidden')
  $('.encnt-update-message').addClass('hidden')
  $('.updated').addClass('hidden')
  $('.camp-created-message').addClass('hidden')
  $('.encnt-created-message').addClass('hidden')
  $('.created').addClass('hidden')
  $('.camp-deleted-message').addClass('hidden')
  $('.encnt-deleted-message').addClass('hidden')
  $('.deleted').addClass('hidden')
  $('.pswd-change-message').addClass('hidden')
  $('.changed').addClass('hidden')
}

const hidePops = () => {
  $('.camp-update-message').addClass('hidden')
  $('.encnt-update-message').addClass('hidden')
  $('.updated').addClass('hidden')
  $('.camp-created-message').addClass('hidden')
  $('.encnt-created-message').addClass('hidden')
  $('.created').addClass('hidden')
  $('.camp-deleted-message').addClass('hidden')
  $('.encnt-deleted-message').addClass('hidden')
  $('.deleted').addClass('hidden')
  $('.pswd-change-message').addClass('hidden')
  $('.changed').addClass('hidden')
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
  updateCampaignSuccess,
  updateEncounterSuccess,
  deleteCampaignSuccess,
  deleteEncounterSuccess,
  hideSignUp,
  showChngPwd,
  showCreates,
  showViews,
  showEdits,
  showDeletes,
  hidePops,
  hideSignIn,
  signUpError,
  signInError,
  failure
}
