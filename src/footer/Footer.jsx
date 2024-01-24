import React from 'react'
import { GiHerbsBundle } from "react-icons/gi";

const Footer = () => {
  return (
    <>
    <div className=' flex justify-around mt-5    full'>
    <div className='flex grid grid-cols-3 '>
        <div className='flex    bg-stone-100 w-72 mr-4 rounded-lg'>
        <div className='text-5xl p-5 '>
            <GiHerbsBundle   />
            </div>
            <div className='w-52 mt-1'>
            <span className='font-bold '>Advance <br/></span>
            <span className='mt-4'>Advance 5 star 
                medical technologies</span>
            </div>
        </div>
        <div className='flex   bg-stone-100 w-72 mr-4 rounded-lg'>
            <div className='text-5xl p-5 '>
            <GiHerbsBundle /> 
            </div>
            <div className='w-52 mt-1'>
                <span className='font-bold'>Specialised <br/> </span>
                <span>Highly experienced and specialised staff.</span>

            </div>
        </div>
        <div className='flex    bg-stone-100 w-72  rounded-lg'>
        <div className='text-5xl p-5'>
            <GiHerbsBundle />
            </div>
            <div className='w-52 mt-1'>
                <span className='font-bold'>
                    Customised <br/>
                </span>
                <span>Fully customised beauty programs.</span>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer