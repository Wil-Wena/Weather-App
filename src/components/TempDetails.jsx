import React from 'react'
import sun from '../assets/sun.png';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
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
        </div>
    )
}

export default TempDetails