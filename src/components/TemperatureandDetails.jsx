import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
} from "@iconscout/react-unicons";
import { iconUrlFromcode } from '../services/weatherService';

const TemperatureandDetails = ({weather: {details, icon, temp, temp_min, temp_max, sunrise,
sunset, speed, humidity, feels_like}}) => {
  return (
    <div>

        <div className='flex items-center justify-center py-6
        md:text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconUrlFromcode(icon)} alt="" 
            className='md:w-20 sm:w-14'
            />
            <p className='md:text-5xl sm:text-4xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light md:text-sm sm:text-xs items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real feel
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light md:text-sm sm:text-xs items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light md:text-sm sm:text-xs items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind
                    <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white
        text-sm py-3'>

            <UilSun />
            <p className='font-light'>High: <span className='font-medium ml-1'> {`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun />
            <p className='font-light'>Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureandDetails