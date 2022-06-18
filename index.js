mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

let latitude=22.7868542, longitude=88.3643296;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude,latitude],
    zoom: 16
})

var img1 = document.querySelector('wm')

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([-77.0364997,38.8894677])
.addTo(map)
map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)