var prizren = L.marker([42.22135564031889, 20.73201731991925]).bindPopup('This is Littleton, CO.'),
    mitrovic    = L.marker([42.90179736114999, 20.8983078729642]).bindPopup('This is Denver, CO.'),
    peje    = L.marker([42.66248865716018, 20.292777434942504]).bindPopup('This is Aurora, CO.'),
    gjakov    = L.marker([42.39169147592774, 20.441392034542314]).bindPopup('This is Golden, CO.');


var cities = L.layerGroup([prizren, mitrovic, peje, gjakov]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [42.66385414166273, 21.157262206595398],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


var baseMaps = {
    "OpenStreetMap": osm,
    "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

var gerrmi = L.marker([42.67502389882573, 21.21086320459483]).bindPopup('This is Crown Hill Park.'),
    qytetit = L.marker([42.567302940495686, 21.142131728871384]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([gerrmi, qytetit]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");