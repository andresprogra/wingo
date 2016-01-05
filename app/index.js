import $ from 'jquery'
import page from 'page'
import qs from 'qs'

import getCoords from './get-coords'
import {getPlaces, searchPlaces} from './denue-api-client/'
import {renderPlaces} from './render'
import errorHandler from './error-handler/'

page('/', function (ctx, next) {
  getCoords(function(err, lat, lon){
    if (err) errorHandler(err, 'Ha ocurrido algo!')

    getPlaces(lat, lon, function(places) {
      renderPlaces(places)
    })
  })
})

page('/search', function (ctx, next) {
  getCoords(function(err, lat, lon){
    if (err) errorHandler(err, 'Ups!')
    const busq = qs.parse(ctx.querystring)
    searchPlaces(busq.q, lat, lon, function(places) {
      renderPlaces(places)
    })
  })
})

page()
