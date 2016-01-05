import $ from 'jquery'
import page from 'page'

var $placesContainer = $('#app-body')
var $searchPlaces = $placesContainer
  .find('form')
  .submit(function(ev) {
    ev.preventDefault()

    var busq = $(this)
      .find('input[type="text"]')
      .val()

    page(`/search?q=${busq}`)
  })

var placeTemplate = `<article class="wingo-place">
  <div>
  <h3 class="name">:name:</h3>
  </div>
  <div class="info">
  <p>Domicilio: :calle: :num_E: :num_I: Colonia: :col:</p>
  <a href="tel::tel:" class=":button_call:">☎ Llamar</a>
  <a href=":website:" class=":button_web:">🗺 Web</a>
  <a href=":email:" class=":button_mail:">📧 Mail</a>
  <p><small>Actividad: :desc:</small></p></div>
  </article>`

var errorTemplate =
`<div id="errorHandler" class="wingo-place errorBox hide">
  <h5 class="errorBox__title">:errorTitle:</h5>
  <p class="errorBox__text">:errorText:</p>
</div>`

export {
  $placesContainer,
  $searchPlaces,
  placeTemplate,
  errorTemplate
  }
