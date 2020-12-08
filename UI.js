class UI {
    constructor() {
        this.behavior = document.querySelector('#w-behave');
        this.tempa = document.querySelector('#w-tempa');
        this.pressure = document.querySelector('#w-pressure');
        this.humidity = document.querySelector('#w-humidity');
        this.icon = document.querySelector('#w-img');
        this.cityName = document.querySelector('#cityName')
    }
    /*  paint(){
              weather.getWeather().then((data) =>{
                 this.tempa.textContent =data.main_data.temp;
                 this.pressure.textContent = data.main_data.pressure;
                 this.humidity.textContent = data.main_data.humidity;
                 this.behavior.textContent = data.all_over_data.main;
              }
            )
         } */
    // paint(weather) {
    //     this.tempa.textContent = weather.main_data.temp;
    //     this.pressure.textContent = weather.main_data.pressure;
    //     this.humidity.textContent = weather.main_data.humidity;
    //     this.behavior.textContent = weather.all_over_data.main;
    // }

    paint({
        main_data,
        all_over_data,
        cityName
    }) {
        this.tempa.textContent = main_data.temp;
        this.pressure.textContent = main_data.pressure;
        this.humidity.textContent = main_data.humidity;
        this.behavior.textContent = all_over_data.main;
        this.cityName.textContent = cityName;
        const icode = all_over_data.icon;
        let iconurl = "http://openweathermap.org/img/w/" + icode + ".png";
        this.icon.setAttribute('src', iconurl)

    }

    clearField() {
        document.getElementById('city').value = '';
        document.getElementById('country').value = '';
    }

    setMassage(mass){
        const div = document.createElement('div');
        const form = document.querySelector('form');
        div.className = `alert alert-danger`;
        div.textContent = `${mass}`;

        form.insertAdjacentElement('beforebegin',div)

        setTimeout(()=>{
            div.remove()
        },2000)
    }

}