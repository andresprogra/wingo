import $ from 'jquery'

var API = {
  uri       : 'http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/',
  category  : 'todos',
  close     : 1500,
  key       : '7c1bdae4-bfc0-4cd9-be2b-2936baa50953'
}

export function getPlaces(lat, lon, callback) {
  $.ajax(API.uri + API.category + '/' + lat + ',' + lon + '/' + API.close + '/' + API.key, {
    success: function (data, textStatus, xhr) {
      callback(data)
    }
  })
}

export function searchPlaces (q, lat, lon, callback) {
  API.category = q
  $.ajax(API.uri + API.category + '/' + lat + ',' + lon + '/' + API.close + '/' + API.key, {
    success: function (data, textStatus, xhr) {
      callback(data)
    }
  })
}