import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify'

const Inputs = ({setQuery, units, setUnit}) => {
  const [city, setCity] = useState('')


  const handleSearchclick = ()=>{
    if (city !== '') setQuery({q: city})
  }

  const handleLocClick = () =>{
    if(navigator.geolocation) {
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition(position => {
        toast.success('Location fetched')
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        })
      }
      )
    }
  }

  const handleUnitChange = (e)=>{
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnit(selectedUnit)
  }
  return (
    <div className='flex flex-row justify-center my-6'>
        
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input
             value={city}
             onChange={e=> setCity(e.currentTarget.value)}
             type="text" 
                    className='md:text-xl sm:text-sm font-light w-full p-2 focus:outline-none capitalize placeholder:lowercase' 
                    placeholder='Search for city....'/>

            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" 
            onClick={handleSearchclick}/>
            <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocClick}/>

        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='md:text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>℃</button>
            <p className='md:text-xl text-white mx-1'>|</p>
            <button name='imperial' className='md:text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>℉</button>
        </div>
    </div>
  )
}

export default Inputs