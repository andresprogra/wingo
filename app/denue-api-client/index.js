import $ from 'jquery'
import {$placesContainer} from 'app/dom-elements/'
import errorHandler from 'app/error-handler'

var API = {
  uri       : 'http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/',
  category  : 'todos',
  close     : 200,
  key       : '7c1bdae4-bfc0-4cd9-be2b-2936baa50953'
}

function cleanPlaces(){
  $placesContainer.find('.wingo-place').remove()
}

export function getPlaces(lat, lon, callback) {
  cleanPlaces()

  var uri = `${API.uri}${API.category}/${lat},${lon}/${API.close}/${API.key}`
  $.getJSON(uri, function(json, textStatus) {
      callback(json)
  })
  .fail(function(err) {
    errorHandler(err.responseJSON, 'Oops!')
    callback(null)
  })
}

export function searchPlaces (q, lat, lon, callback) {
  cleanPlaces()
  $('<div class="loader">').appendTo($placesContainer)
  var uri = `${API.uri}${q}/${lat},${lon}/${API.close}/${API.key}`
  $.getJSON(uri, function(json, textStatus) {
      callback(json)
  })
  .fail(function(err) {
    errorHandler(err.responseJSON, 'Oops!')
    callback(null)
  })
}