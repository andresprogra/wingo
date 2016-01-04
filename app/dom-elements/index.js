import $ from 'jquery'

var $placesContainer = $('#app-body')

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

export { $placesContainer, placeTemplate }
