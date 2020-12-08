//get and use api 

class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.appId = 'e479bd3e14fc33e3ecc41559a0a964e9';
    }
    async getWeather() {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appId}&units=metric`)
            .then(data => {
                return data.json()
            })
        return {
            main_data: data.main,
            all_over_data: data.weather[0],
            cityName: data.name
        }
    }
    setLocation(city, country) {
        this.city = city;
        this.country = country
    }
}