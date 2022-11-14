import React from 'react'
import sun from '../assets/sun.png';

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'></div>
            <p className='text-white font-medium'>{title}</p>
            <hr className='my-2'/>

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>08:30 PM</p>
                    <img src={sun} className='w-12 my-1' alt="" />
                    <p className='text-xl'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>08:30 PM</p>
                    <img src={sun} className='w-12 my-1' alt="" />
                    <p className='text-xl'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>08:30 PM</p>
                    <img src={sun} className='w-12 my-1' alt="" />
                    <p className='text-xl'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>08:30 PM</p>
                    <img src={sun} className='w-12 my-1' alt="" />
                    <p className='text-xl'>22°</p>
                </div>
            </div>

            
    </div>
  )
}

export default Forecast