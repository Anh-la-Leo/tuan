export function Tuan_alizeMap() {
    const Tuan_Mymap = L.map('Tuan_map').setView([15.9742, 107.8687], 6);

    // Thêm layer tilemap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(Tuan_Mymap);
    return Tuan_Mymap

}

export function Tuan_addMap(Mymap, lat, lon) {
    const Tuan_marker =  L.marker([lat, lon])
    .addTo(Mymap)
    .openPopup();
}
export function Tuan_upMap(map, lat, lon, zoomLevel) {
    map.setView([lat, lon], zoomLevel);
}