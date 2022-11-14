import React from 'react'
import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'


//Input location component
function Entry() {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="Search" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none f
        capitalize placeholder:lowercase' placeholder='Search location'/>
        <UilSearch size={30} className='text-white cursor-pointer transition ease-out hover:scale-95'/>
        <UilLocationPoint size={30} className='text-white cursor-pointer transition ease-out hover:scale-95'/>
      </div>
        <div className='flex flex-row w-1/4 items-center justify-center text-white'>
          <button name='metric' className='text-xl font-light ' >°C</button>
          <p className='mx-1 text-lg'>|</p>
          <button name='imperial'className='text-xl font-light' >°F</button>
        </div>
    </div>
  )
}

export default Entry