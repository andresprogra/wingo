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