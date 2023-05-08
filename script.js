const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const osmAttrib = '公車資訊來源:TDX (每12秒更新位置); Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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

var route = JSON.parse('{"GoDirStops":[{"Name":"南港分局(向陽)","Longitude":121.5937887,"Latitude":25.055748},{"Name":"南港高中","Longitude":121.5949802,"Latitude":25.053019},{"Name":"捷運昆陽站","Longitude":121.593165,"Latitude":25.050346},{"Name":"陸軍後勤指揮部","Longitude":121.59077,"Latitude":25.04983},{"Name":"國華新村","Longitude":121.5878431,"Latitude":25.049084},{"Name":"聯合醫院忠孝院區","Longitude":121.5842297,"Latitude":25.047521},{"Name":"合心廣場","Longitude":121.583351,"Latitude":25.046356},{"Name":"協和祐德高中","Longitude":121.5832524,"Latitude":25.042801},{"Name":"玉成公園(中坡)","Longitude":121.5851435,"Latitude":25.041107},{"Name":"信義行政中心(奉天宮)","Longitude":121.58325,"Latitude":25.03789},{"Name":"松友新村","Longitude":121.580964,"Latitude":25.037055},{"Name":"松山商職(福德)","Longitude":121.5787375,"Latitude":25.036372},{"Name":"國業里","Longitude":121.57704,"Latitude":25.03555},{"Name":"國稅局宿舍","Longitude":121.5751613,"Latitude":25.034071},{"Name":"捷運象山站","Longitude":121.570056,"Latitude":25.033006},{"Name":"信義松仁路口(信義)","Longitude":121.5666876,"Latitude":25.032949},{"Name":"捷運台北101/世貿站(信義)","Longitude":121.56444,"Latitude":25.03308},{"Name":"信義光復路口","Longitude":121.55813,"Latitude":25.0331},{"Name":"信義通化街口","Longitude":121.5546221,"Latitude":25.033193},{"Name":"捷運信義安和站(信義)","Longitude":121.552849,"Latitude":25.033223},{"Name":"信義敦化路口","Longitude":121.549449,"Latitude":25.033377},{"Name":"信義大安路口","Longitude":121.5461666,"Latitude":25.033383},{"Name":"捷運大安站(信義)","Longitude":121.5438266,"Latitude":25.033404},{"Name":"師大附中","Longitude":121.542275,"Latitude":25.033382},{"Name":"信義建國路口","Longitude":121.538468,"Latitude":25.033595},{"Name":"捷運大安森林公園站","Longitude":121.5359159,"Latitude":25.03355},{"Name":"信義新生路口","Longitude":121.5331327,"Latitude":25.033627},{"Name":"信義永康街口","Longitude":121.5301447,"Latitude":25.033765},{"Name":"捷運東門站","Longitude":121.526986,"Latitude":25.034232},{"Name":"信義杭州路口","Longitude":121.5246296,"Latitude":25.035417},{"Name":"中正紀念堂","Longitude":121.52056,"Latitude":25.03739},{"Name":"捷運台大醫院站","Longitude":121.51631,"Latitude":25.04151}],"BackDirStops":[{"Name":"臺北車站(青島)","Longitude":121.517704,"Latitude":25.044844},{"Name":"臺大醫院","Longitude":121.5185042,"Latitude":25.042497},{"Name":"中正紀念堂","Longitude":121.520771,"Latitude":25.037153},{"Name":"信義杭州路口","Longitude":121.5238361,"Latitude":25.0357},{"Name":"捷運東門站","Longitude":121.5269937,"Latitude":25.034134},{"Name":"信義永康街口(捷運東門站)","Longitude":121.529727,"Latitude":25.033693},{"Name":"信義新生路口","Longitude":121.5323283,"Latitude":25.03353},{"Name":"捷運大安森林公園站","Longitude":121.5356316,"Latitude":25.033496},{"Name":"信義建國路口","Longitude":121.539045,"Latitude":25.033441},{"Name":"捷運大安站(信義)","Longitude":121.5432319,"Latitude":25.033323},{"Name":"信義大安路口","Longitude":121.5456,"Latitude":25.0332},{"Name":"信義敦化路口","Longitude":121.548298,"Latitude":25.033262},{"Name":"捷運信義安和站(信義)","Longitude":121.551229,"Latitude":25.033142},{"Name":"信義通化街口","Longitude":121.5539941,"Latitude":25.033087},{"Name":"信義光復路口","Longitude":121.55687,"Latitude":25.03311},{"Name":"捷運台北101/世貿站(信義)","Longitude":121.564536,"Latitude":25.032802},{"Name":"信義松仁路口(信義)","Longitude":121.5671167,"Latitude":25.032733},{"Name":"捷運象山站","Longitude":121.568984,"Latitude":25.032648},{"Name":"國稅局宿舍","Longitude":121.575678,"Latitude":25.03433},{"Name":"松山商職(信義)","Longitude":121.5777733,"Latitude":25.035968},{"Name":"松山商職(福德)","Longitude":121.5787474,"Latitude":25.036219},{"Name":"松友新村","Longitude":121.581141,"Latitude":25.036858},{"Name":"信義行政中心(奉天宮)","Longitude":121.583153,"Latitude":25.037869},{"Name":"中行里","Longitude":121.584886,"Latitude":25.040216},{"Name":"玉成公園(中坡)","Longitude":121.585063,"Latitude":25.041958},{"Name":"協和祐德高中","Longitude":121.583992,"Latitude":25.042564},{"Name":"捷運後山埤站(忠孝)","Longitude":121.5822223,"Latitude":25.044452},{"Name":"聯合醫院忠孝院區","Longitude":121.585736,"Latitude":25.048227},{"Name":"國華新村","Longitude":121.5878735,"Latitude":25.048872},{"Name":"陸軍後勤指揮部","Longitude":121.59096,"Latitude":25.04964},{"Name":"捷運昆陽站","Longitude":121.59306,"Latitude":25.050052},{"Name":"南港高中","Longitude":121.5952331,"Latitude":25.052951},{"Name":"南港分局(向陽)","Longitude":121.5944152,"Latitude":25.055334}]}')

var geojsonGo = {
  "type": "FeatureCollection",
  "features": []
}
var geojsonBack = {
  "type": "FeatureCollection",
  "features": []
}

var i = 0
route.GoDirStops.forEach(stop => {
  geojsonGo.features.push({
    "type": "Feature",
    "properties": {
      "id": i,
      "popup": "ping_" + i,
      "Name": stop.Name
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ stop.Longitude, stop.Latitude ]
    }
  })
  i++
})

var j = 0
route.BackDirStops.forEach(stop => {
  geojsonBack.features.push({
    "type": "Feature",
    "properties": {
      "id": j,
      "popup": "ping_" + j,
      "Name": stop.Name
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ stop.Longitude, stop.Latitude ]
    }
  })
  j++
})

function onGoEachDot(feature, layer) {
  layer.bindPopup('<table style="width:180px"><tbody><tr><td><div><b>去程:</b></div></td><td><div>' + feature.properties.Name + '</div></td></tr><tr class><td><div></div></td></tr></tbody></table>');
}
goLayer = L.geoJson(geojsonGo, {
  onEachFeature: onGoEachDot,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    });
  }
})
goLayer.addTo(map)

function onBackEachDot(feature, layer) {
  layer.bindPopup('<table style="width:180px"><tbody><tr><td><div><b>回程:</b></div></td><td><div>' + feature.properties.Name + '</div></td></tr><tr class><td><div></div></td></tr></tbody></table>');
}
backLayer = L.geoJson(geojsonBack, {
  onEachFeature: onBackEachDot,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    });
  }
})
backLayer.addTo(map)

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
  title: 'Seon Ho',
  draggable: false,
  icon: myIcon,
  zIndexOffset: 1000
}

function callAjax(isFirst = false){
  $.ajax({
    url: "https://marine-blocks.000webhostapp.com/EAL-1666.php",
    type: 'get',
    dataType: 'json',
    error: function(xhr) {
      Toastify({
        text: "公車資訊抓取失敗",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
          background: "red",
        }
      }).showToast()
    },
    success: function(response) {
      if (response.length == 0) {
        Toastify({
          text: "目前無公車資訊",
          duration: 3000,
          gravity: "top",
          position: "center",
          style: {
            background: "red",
          }
        }).showToast()
      } else {
        var lon = response[0].BusPosition.PositionLon
        var lat = response[0].BusPosition.PositionLat
        if (marker) map.removeLayer(marker)
        marker = L.marker([lat, lon], iconOptions)
        map.addLayer(marker)
        if (isFirst) {
          map.panTo(new L.LatLng(lat, lon))
        }
      }
    }
  })
}

callAjax(true)

setInterval(callAjax, 1000 * 12)
