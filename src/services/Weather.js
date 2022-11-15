import { data } from "autoprefixer";

const API_KEY = "e8c7152b492d98e40d86aa94b269f823";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    console.log(url)

    return fetch(url).then((res) => res.json());
}

const formattedCurrentWeather = (data) =>{
    const {
        cord: {lat, lon},
        main:{temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

        return {lat,lon,temp,temp_min, feels_like,temp_max,humidity,
        name,dt,country,sunrise,sunset,weather,speed
        }

}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather',searchParams).then(formattedCurrentWeather)
}

 export default getWeatherData