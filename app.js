//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

/* weather.getWeather().then((data) =>
    console.log(data.all_over_data)

) */

//instantiate store
const store = new Store();
const {city,country} = store.getLocalStorage()
//instantiate UI
const ui = new UI();
//instantiate Weather
const weather = new Weather(city, country);
window.addEventListener('DOMContentLoaded', getWeatherdata)



// ui. paint()

document.querySelector('#submit').addEventListener("click", function (e) {

    e.preventDefault();
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;
   
    if (city === '' || country === '') {
        ui.setMassage('Fill the correct information') ;
        ui.clearField();
    } else {
         weather.setLocation(city, country)
          getWeatherdata();
    }
})

function getWeatherdata() {
    weather.getWeather().then((data) => {
        ui.paint(data);
        ui.clearField()

    }).catch(e =>{
           ui.setMassage('City did not found!') 
           ui.clearField()
        })
}