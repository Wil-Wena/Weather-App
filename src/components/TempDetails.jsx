import React from 'react'
import sun from '../assets/sun.png';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown
} from "@iconscout/react-unicons";

function TempDetails() {
    return (
        <div className='text-white'>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-400'> <p>Cloudy or whatever</p> </div>
            <div className='flex items-center justify-between py-3'>
                <img src={sun} alt="" className='w-20 h-20' />
                <p className='text-4xl'> 34°</p>
                <div className='flex flex-col text-white space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className='mr-2' />
                        Real feels
                        <span className='font-medium ml-1'>40°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className='mr-2' />
                        Humidity
                        <span className='font-medium ml-1'>50%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className='mr-2' />
                        RWind
                        <span className='font-medium ml-1'>3 km/h</span>
                    </div>
                </div>

            </div>
             <div className='flex flex-row items-center justify-center space-x-2 py-3 text-sm'>
                    <UilSun />
                    <p className='font-light'> Rise:
                        <span className='font-medium ml-1'>08:00 AM</span>
                    </p>
                    <p className='font-light'>|</p>

                    <UilSunset />
                    <p className='font-light'> Sunset:
                        <span className='font-medium ml-1'>1:30 PM</span>
                    </p>
                    <p className='font-light'>|</p>

                    <UilArrowUp />
                    <p className='font-light'> High:
                        <span className='font-medium ml-1'>70°</span>
                    </p>
                    <p className='font-light'>|</p>

                     <UilArrowDown />
                    <p className='font-light'> Low:
                        <span className='font-medium ml-1'>20°</span>
                    </p>
            </div> 
            
        </div>
    )
}

export default TempDetails