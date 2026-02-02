const MAP_SIZE = 8192;
const bounds = [[0, 0], [MAP_SIZE, MAP_SIZE]];

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: 2,
    zoomControl: true,
    dragging: true,
    scrollWheelZoom: true,
    touchZoom: true
});

L.imageOverlay(
    "https://i.imgur.com/6Z8YB7m.jpg",
    bounds
).addTo(map);

map.fitBounds(bounds);
map.setView([MAP_SIZE / 2, MAP_SIZE / 2], -2);

map.setMaxBounds(bounds);
map.on("drag", () => {
    map.panInsideBounds(bounds, { animate: false });
});
