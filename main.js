import { Tuan_alizeMap, Tuan_addMap, Tuan_upMap } from './map.js';
import { fn_Tuan_search } from './weather.js';
const Tuan_myMap=Tuan_alizeMap()

document.getElementById('Tuan-search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('Tuan-search-input').value;

    fn_Tuan_search(searchInput)
        .then(data => {
            var { temperature, description, icon, lat, lon } = data;

            //const popupContent = `<p><strong>Temperature:</strong> ${temperature}°C</p><p><strong>Description:</strong> ${description}</p><img src="http://openweathermap.org/img/w/${icon}.png">`;

            Tuan_addMap(Tuan_myMap, lat, lon);
            Tuan_upMap(Tuan_myMap, lat, lon, 10);
        });
});
