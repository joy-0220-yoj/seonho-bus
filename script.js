const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const osmAttrib = '公車資訊來源:TDX; Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
let osm = new L.TileLayer(osmUrl, {
  attribution: osmAttrib,
  detectRetina: true
})

let map = new L.Map("map", {
  layers: [osm],
  center: [25.035, 121.562],
  zoom: 15,
  zoomControl: true
})

lc = L.control
  .locate({
    strings: {
      title: "Show me where I am, yo!"
    },
    locateOptions: {
      enableHighAccuracy: true
    }
  })
  .addTo(map)

var marker

let customIcon = {
  iconUrl: 'head.png',
  iconSize: [60, 60]
}
let myIcon = L.icon(customIcon)

let iconOptions = {
  title: 'KSH',
  draggable: false,
  icon: myIcon
}

function callAjax(isFirst = false){
  $.ajax({
    url: "https://marine-blocks.000webhostapp.com/EAL-1666.php",
    type: 'get',
    dataType: 'json',
    error: function(xhr) {
      console.log(xhr)
    },
    success: function(response) {
      var lon = response[0].BusPosition.PositionLon
      var lat = response[0].BusPosition.PositionLat
      if (marker) map.removeLayer(marker)
      marker = L.marker([lat, lon], iconOptions)
      map.addLayer(marker)
      if (isFirst) {
        map.panTo(new L.LatLng(lat, lon))
      }
    }
  })
}

callAjax(true)

setInterval(callAjax, 1000 * 12)
