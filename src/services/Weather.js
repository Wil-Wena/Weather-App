import {DateTime} from "luxon";


const API_KEY = "e8c7152b492d98e40d86aa94b269f823";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    console.log(url)

    return fetch(url).then((res) => res.json());
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const {main: details,icon} = weather[0]

    return {
        lat, lon, temp, temp_min, feels_like, temp_max, humidity,
        name, dt, country, sunrise, sunset, details, speed,icon
    }
}
const formatForecastWeather = (data) => {
    let {timezone, daily, hourly}= data;
    //Returns Daily Reports
    daily = daily.slice(1,6).map((m) =>{ 
        return {
            title: formatToLocalTime(m.dt, timezone, 'ccc'),
            temp: m.temp.day,
            icon: m.weather[0].icon
        }
    }
    );


    //Returns Hourly Reports
    hourly =hourly.slice(1,6).map((m) =>{ 
        return {
            title: formatToLocalTime(m.dt, timezone, 'ccc'),
            temp: m.temp.day,
            icon: m.weather[0].icon
        }
    }
    );

    return {timezone, daily, hourly}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    const {lat,lon}= formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData('onecall',
    {
        lat,lon, exclude: 'current, minutely,alerts', units: searchParams.units
    }).then(formatForecastWeather)
    

    return {...formattedCurrentWeather, ...formattedForecastWeather}

}

const formatToLocalTime = (secs, zone,format ="cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)



export default getFormattedWeatherData