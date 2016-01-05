import $ from 'jquery'

export default function getCoords(callback) {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoords, errorFound);
    } else {
    callback('¿Estas usando un navegador actual?')
  }

  function errorFound(error) {
    var err = {
      message : '',
      code    : error.code
    }
    if (error.code === 0) err.message = ' Honestamente, no se que pasó'
    if (error.code === 1) err.message = ' Necesitamos tu ubicación para darte información precisa, porfavor autoriza la aplicación'
    if (error.code === 2) err.message = ' Tu posición no está disponible. ¿Acaso vives en el Polo Norte?'
    if (error.code === 3) err.message = ' Esto demoró demasiado tiempo. Que raro!'
      callback(err)
    // 0: Error desconocido
    // 1: Permiso denegado
    // 2: Posición no está disponible
    // 3: Timeout
  };

  function getCoords(position) {
    callback(null, position.coords.latitude, position.coords.longitude)
  }
}