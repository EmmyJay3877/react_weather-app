import React from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeandLocation from './components/TimeandLocation'
import TemperatureandDetails from './components/TemperatureandDetails'
import getFormattedWeatherData from './services/weatherService'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clear from "./imgs/clear.png"
import cloudy from "./imgs/cloudy.png"

const App = () => {

  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    const fetchweather = async()=>{
      const message = query.q ? query.q : 'current location'
      toast.info('Fetching weather for ' + message)
      await getFormattedWeatherData({...query, units}).then(data=>{
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
        setWeather(data);
        // console.log(weather);
      })
    }

    fetchweather();
  }, [query, units])

  const threshold = units === 'metric' ? 20 : 60

  return (
    <div className='flex justify-center'>
      {
        weather === null || weather === undefined
        ?
        <img className='absolute inset-0 h-full w-full bg-center' src={ clear } alt="" />
        :
        <img className='absolute inset-0 h-full w-full bg-center' src={ weather.temp <= threshold ? cloudy : clear } alt="" />
      }
    <div className="absolute inset-0 mx-auto md:w-fit sm:w-fit mt-12 bg-gray-900 bg-opacity-50 bg-center bg-cover md:px-20 sm:px-12 py-5
    h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnit={setUnit}/>

      {weather && (
        <div className="div">
            <TimeandLocation weather={weather} />
            <TemperatureandDetails weather={weather} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
      </div>
    </div>

    
  )
}

export default App