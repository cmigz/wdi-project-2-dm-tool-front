'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordError)
}

const onGetCampaigns = function (event) {
  event.preventDefault()
  api.getCampaigns()
    .done(ui.getCampaignsSuccess)
    .fail(ui.failure)
}

const onGetEncounters = function (event) {
  event.preventDefault()
  const campaignName = $('#reference-name').val()
  api.getEncounters(campaignName)
    .done(ui.getEncountersSuccess)
    .fail(ui.failure)
}

const onCreateCampaign = function (event) {
  event.preventDefault()
  console.log(event)
  const campaignName = $('#campaign-id').val()
  const campaignDay = $('#campaign-day').val()
  console.log(campaignName)
  console.log(campaignDay)
  api.createCampaign(campaignName, campaignDay)
    .done(ui.createCampaignSuccess)
    .fail(ui.failure)
}

const onCreateEncounter = function (event) {
  event.preventDefault()
  const campaignId = $('#encounter-campaignID').val()
  const encounterName = $('#encounter-name').val()
  const encounterCr = $('#encounter-cr').val()
  const encounterBooks = $('#encounter-books').val()
  const encounterDesc = $('#encounter-description').val()
  api.createEncounter(campaignId, encounterName, encounterCr, encounterBooks, encounterDesc)
    .done(ui.createEncounterSuccess)
    .fail(ui.failure)
}

const onUpdateCampaign = function (event) {
  event.preventDefault()
  const campaignName = $('#campname').val()
  const updateName = $('#updateName').val()
  const updateDay = $('#updateDay').val()
  api.updateCampaign(campaignName, updateName, updateDay)
    .done(ui.updateCampaignSuccess)
    .fail(ui.failure)
}

const onUpdateEncounter = function (event) {
  event.preventDefault()
  const campaignName = $('#campname-encounterUp').val()
  const encounterName = $('#encountname-encounterUp').val()
  const updateName = $('#updateName-encountUp').val()
  const updateCr = $('#updateCR').val()
  const updateBooks = $('#updateBooks').val()
  const updateDesc = $('#updateDesc').val()
  api.updateEncounter(campaignName, encounterName, updateName, updateCr, updateBooks, updateDesc)
    .done(ui.updateEncounterSuccess)
    .fail(ui.failure)
}

const onDeleteCampaign = function (event) {
  event.preventDefault()
  const campaignName = $('#camp-delete').val()
  api.deleteCampaign(campaignName)
    .done(ui.deleteCampaignSuccess)
    .fail(ui.failure)
}

const onDeleteEncounter = function (event) {
  event.preventDefault()
  const campaignName = $('#campName-delete').val()
  const encounterName = $('#encountName-delete').val()
  api.deleteEncounter(campaignName, encounterName)
    .done(ui.deleteEncounterSuccess)
    .fail(ui.failure)
}

const clearForms = () => {
  $('input, textarea').val('')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#get-campaigns').on('click', onGetCampaigns)
  $('#get-encounters').on('submit', onGetEncounters)
  $('#create-campaign').on('submit', onCreateCampaign)
  $('#create-encounter').on('submit', onCreateEncounter)
  $('#update-campaign').on('submit', onUpdateCampaign)
  $('#update-encounter').on('submit', onUpdateEncounter)
  $('#delete-campaign').on('submit', onDeleteCampaign)
  $('#delete-encounter').on('submit', onDeleteEncounter)
  $('#oldUser').on('click', ui.hideSignUp)
  $('#newUser').on('click', ui.hideSignIn)
  $('#chngPwd').on('click', ui.showChngPwd)
  $('#crtCamp').on('click', ui.showCreates)
  $('#viewCamp').on('click', ui.showViews)
  $('#editCamp').on('click', ui.showEdits)
  $('#deleteCamp').on('click', ui.showDeletes)
  $('.updated, .deleted, .created, .changed').on('click', ui.hidePops)
  $('form').on('submit', clearForms)
}
module.exports = {
  addHandlers
}
