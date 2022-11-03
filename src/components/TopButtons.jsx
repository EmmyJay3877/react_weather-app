import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            title: 'london'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        },
    ]

  return (
    <div className='flex item-center justify-between my-6'>
        {
            cities.map(city=>{
                return <button key={city.id} className='text-white md:text-lg sm:text-sm font-medium transition px-4 ease-out hover:scale-125'
                onClick={()=> setQuery({q: city.title})}>{city.title}</button>
            })
        }
    </div>
  )
}

export default TopButtons