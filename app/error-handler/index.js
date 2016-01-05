import $ from 'jquery'
import {errorTemplate, $placesContainer} from 'app/dom-elements'

export default function errorHandler(err, title) {
  var newError = errorTemplate
  .replace(':errorTitle:', title)
  .replace(':errorText:', err)
  $(newError).appendTo($placesContainer).fadeIn(1500)
}