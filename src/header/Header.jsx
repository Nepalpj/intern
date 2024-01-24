import React from 'react'
import logo from "../img/logo.png"

const Header = () => {
  return (
    <>
    <div className='flex  place-content-center  text-lg mt-4 font-sans'>
        <div className='mr-14 flex'>
          <div className='w-10 mr-2'>
          <img src={logo} alt="" />

          </div>
            <span className='text-pink-500'>Beauty</span>
            <span>Lab</span>

        </div>
        <div className=''>
            <span className='pr-12 font-sans'>Beauty</span>
            <span className='pr-12'>Treatment</span>
            <span className='pr-12'>About</span>
            <span className='pr-12'>Product</span>
            <span className='pr-12'>Price List</span>
        </div>
        <div className='ml-8'>
            <span className='text-pink-500'>Free Consultation</span>
        </div>
    </div>
    </>
  )
}

export default Header