class Store {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Gazipur';
        this.defaultCountry = 'BD'
    }

    getLocalStorage() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city')
        }
        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry
        } else {
            this.country = localStorage.getItem('country')
        }
        return {
            city: this.city,
            country: this.country
        }
    }

    setLocalStorage(city, country) {
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
    }

}

