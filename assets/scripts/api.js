'use strict'

const app = require('./app')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const getCampaigns = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/users/' + app.user.id + '/campaigns/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getEncounters = function (data) {
  return $.ajax({
    method: 'GET',
    url: app.host + '/users/' + app.user.id + '/campaigns/' + data + '/encounters/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createCampaign = function (campaignName, campaignDay) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/campaigns/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'campaign': {
        'name': campaignName,
        'scheduled_day': campaignDay,
        'user_id': app.user.id
      }
    }
  })
}

const createEncounter = function (campaignId, encounterName, encounterCr, encounterBooks, encounterDesc) {
  return $.ajax({
    method: 'POST',
    url: app.host + '/users/' + app.user.id + '/campaigns/' + campaignId + '/encounters',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'encounter': {
        'name': encounterName,
        'CR': encounterCr,
        'books': encounterBooks,
        'description': encounterDesc
      }
    }
  })
}

const updateCampaign = function (campaignName, updateName, updateDay) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/users/' + app.user.id + '/campaigns/' + campaignName,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'campaign': {
        'name': updateName,
        'scheduled_day': updateDay,
        'user_id': app.user.id
      }
    }
  })
}

const updateEncounter = function (campaignName, encounterName, updateName, updateCr, updateBooks, updateDesc) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/users/' + app.user.id + '/campaigns/' + campaignName + '/encounters/' + encounterName,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'encounter': {
        'name': updateName,
        'CR': updateCr,
        'books': updateBooks,
        'description': updateDesc
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getCampaigns,
  getEncounters,
  createCampaign,
  createEncounter,
  updateCampaign,
  updateEncounter
}
