import { DateTime } from "luxon";

const API_KEY = "c059d42eda30032bcd4d85cfd74ceb97"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType , searchParams) => {
    const url = new URL (BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url).then(res=>res.json())
}

const formatCurrentWeather = (data)=>{
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        timezone,
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, country, name, dt, sunrise
    , sunset, timezone, details, icon, speed
}
}

const getFormattedWeatherData = async(searchParams)=>{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then(formatCurrentWeather)

    return {...formattedCurrentWeather}
}

const formatToLocaltime = (secs, format) => {
    const result = DateTime.fromSeconds(secs).toFormat("cccc, dd LLL yyyy")
    return(result)
}

const iconUrlFromcode = (code)=>`https://openweathermap.org/img/wn/${code}@2x.png`

export {iconUrlFromcode, formatToLocaltime}

export default getFormattedWeatherData