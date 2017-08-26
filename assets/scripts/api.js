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
    url: app.host + '/campaigns/' + app.user.id,
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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getCampaigns,
  createCampaign
}
