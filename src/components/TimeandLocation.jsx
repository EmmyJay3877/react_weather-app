import React from 'react'
import { formatToLocaltime } from '../services/weatherService'

const TimeandLocation = ( {weather: {dt, name, country}} ) => {
    // console.log(dt)
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white md:text-xl sm:text-lg font-extralight'>
                {formatToLocaltime(dt)}
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white md:text-3xl sm:text-lg font-medium'>
                {`${name}, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeandLocation