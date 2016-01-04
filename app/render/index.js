import $ from 'jquery'
import { $placesContainer, placeTemplate } from '../dom-elements/'

export function renderPlaces (places) {

  $placesContainer.find('.loader').remove()

  places.forEach(function (place) {
    var article = placeTemplate
    .replace(':name:', place.Nombre)
    .replace(':calle:', place.Calle)
    .replace(':num_E:', place.Num_Exterior)
    .replace(':num_I:', place.Num_Interior && place.Num_Interior != 0 ? place.Num_Interior : '')
    .replace(':col:', place.Colonia)
    .replace(':tel:', place.Telefono ? place.Telefono : '')
    .replace(':website:', place.Sitio_internet ? `http://${place.Sitio_internet}` : '')
    .replace(':email:', place.Correo_e ? `mailto:${place.Correo_e}` : '')
    .replace(':button_call:', place.Telefono ? 'button u-link icon-telephone' : 'hide')
    .replace(':button_web:', place.Sitio_internet ? 'button u-link icon-web' : 'hide')
    .replace(':button_mail:', place.Correo_e ? 'button u-link icon-mail' : 'hide')
    .replace(':desc:', place.Clase_actividad)
    var $article = $(article)
    $article.hide()
    $placesContainer.append($article)
    $article.fadeIn(2000)
  })
}
