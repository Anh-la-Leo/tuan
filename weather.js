export function fn_Tuan_search(Tuan_searchInput) {
    const Tuan_apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Tuan_searchInput}&lang=vi&units=metric&appid=062d92a2646152d39eb7845a608226cb`;
    return fetch(Tuan_apiUrl)
   .then(response => response.json())
   .then(data => {
    const Tuan_Weather = data.weather[0];
    const Tuan_temper = Math.round(data.main.temp - 273.15);
    const Tuan_descrip = Tuan_Weather.description;
    const Tuan_icon = Tuan_Weather.icon;

    return{
        Tuan_temper,Tuan_descrip,Tuan_icon,
        lat:data.coord.lat,
        lon:data.coord.lon,
    };
   })
   .catch(error => {
       console.log('Error:', error);
   });
}