(function() {

  var $PlacesContainer = $('#app-body')

  var API = {
<<<<<<< HEAD
    uri       : 'http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/',
=======
    uri       : '//www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/',
>>>>>>> b14423a49c36ec02c24d78b92470713c872e5c49
    category  : this.category | 'todos',
    close     : this.close | 1500,
    key       : '7c1bdae4-bfc0-4cd9-be2b-2936baa50953'
  }

  var template =
  '<article class="wingo-place">' +
<<<<<<< HEAD
    '<div>' +
    '<h3 class="name">:name:</h3>' +
    '</div>' +
    '<div class="info">' +
    '<p>Domicilio: :calle: :num_E: :num_I: Colonia: :col:</p>' +
    '<a href="tel::tel:" class=":button_call:">Llamar 🚛</a>'
=======
    '<div class="img-container left">' +
    '<h3 class="name">:name:</h3>' +
    '</div>' +
    '<div class="info right">' +
    '<p>Domicilio: :dom: Tel: :tel: </p>'
>>>>>>> b14423a49c36ec02c24d78b92470713c872e5c49
    'Actividad: :desc:</div>' +
    '</article>'

  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, errorFound);
    } else {
    alert('¿Estas usando un navegador actual?')
  }

  function errorFound(error) {
    alert("Un error ocurrió: " + error.code);
    // 0: Error desconocido
    // 1: Permiso denegado
    // 2: Posición no está disponible
    // 3: Timeout
  };

  function getCoords(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
<<<<<<< HEAD
    $.getJSON(API.uri + API.category + '/' + lat + ',' + lon + '/' + 200 + '/' + API.key, getPlaces)
  }

  function getPlaces(places, ulat, ulon) {
    $PlacesContainer.find('.loader').remove()
      console.log(ulat, ulon)

    places.forEach(function (place, lat, lon) {
      // var distancekm = getDistance(ulat, ulon, place.Latitud, place.Longitud)
      var article = template
      .replace(':name:', place.Nombre)
      .replace(':calle:', place.Calle)
      .replace(':num_E:', place.Num_Exterior)
      .replace(':num_I:', place.Num_Interior && place.Num_Interior != 0 ? place.Num_Interior : '')
      .replace(':col:', place.Colonia)
      .replace(':tel:', place.Telefono ? place.Telefono : '')
      .replace(':button_call:', place.Telefono ? 'button u-call icon-telephone' : 'hide')
      .replace(':desc:', place.Clase_actividad)
      // .replace(':desc:', place.Clase_actividad + ' Dist:' + distancekm)
      var $article = $(article)
      $article.hide()
      $PlacesContainer.append($article)
      $article.fadeIn(2000)
    })
  }

})()



function getDistance(ulat, ulon, plat, plon) {
var lat1 = ulat,
    lat2 = plat,
    lon1 = ulon,
    lon2 = plon
var R = 6371 // km
var dLat = (lat2-lat1).toRad()
var dLon = (lon2-lon1).toRad()
var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
var d = R * c
return d
}
=======
    console.log("Tu posición es: " + lat + "," + lon)
    $.getJSON(API.uri + API.category + '/' + lat + ',' + lon + '/' + 200 + '/' + API.key, getPlaces)
  }

  function getPlaces(places) {
    console.log(places)
    places.forEach(function (place) {
      var article = template
      .replace(':name:', place.Nombre)
      .replace(':dom:', place.Calle + ' ' + place.Num_Exterior + ' ' + place.Num_Interior + ' ' + place.Colonia)
      .replace(':tel:', place.Telefono)
      .replace(':desc:', place.Clase_actividad)


      $PlacesContainer.append($(article))
    })
  }

})()
>>>>>>> b14423a49c36ec02c24d78b92470713c872e5c49
