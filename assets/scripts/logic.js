'use strict'

const printCampaigns = function (campaigns) {
  for (let i = 0; i < campaigns.length; i++) {
    $('#campaignTable').append(
      '<tr class="campaignRow">' +
        '<td>' + campaigns[i].name + '</td>' +
        '<td>' + campaigns[i].scheduled_day + '</td>' +
      '</tr>'
    )
  }
}

const printEncounters = function (encounters) {
  for (let i = 0; i < encounters.length; i++) {
    $('#encounterTable').append(
      '<tr class="encounterRow">' +
        '<td>' + encounters[i].name + '</td>' +
        '<td>' + encounters[i].CR + '</td>' +
        '<td>' + encounters[i].books + '</td>' +
        '<td>' + encounters[i].description + '</td>' +
      '</tr>'
    )
  }
}

module.exports = {
  printCampaigns,
  printEncounters
}
