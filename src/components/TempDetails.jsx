import React from 'react'
import sun from '../assets/sun.png';

function TempDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-400'> <p>Cloudy or whatever</p> </div>
        <div className='flex items-center justify-between py-3'>
            <img src={sun} alt="" className='w-20 h-20'/>
            <p className='flex flex-col text-white space-y-2'> 34°</p>
        </div>
    </div>
  )
}

export default TempDetails