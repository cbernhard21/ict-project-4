/* Christopher Bernhard
ICT 4510
University of Denver
script to display map for final project
*/


'use strict'

export function displayMap() {
  const coords = [39.678121, -104.961753]; //university of denver coords
  const map = L.map('map').setView(coords, 13);

  const settings = {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2Jlcm5oYXJkIiwiYSI6ImNra3JjMGQ4NDAxMTUybnF0NmRjYmgybGcifQ.EO4xXGkO9HznNQ_sg41tmA'
  }

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${settings.accessToken}`, settings).addTo(map);

  const marker = L.marker(coords).addTo(map);
}