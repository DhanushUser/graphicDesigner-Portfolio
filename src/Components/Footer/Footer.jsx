import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer w-full min-h-fit bg-black text-white'>
        <div className='flex justify-between items-center  mx-7'>
            <img src={logo} className='w-[50px] bg-white my-4  rounded-[50%] p-0' alt="" />
            <h3 className='font-medium lg:text-[16px] md:text-[15px] sm:text-[14px]'>Dhanush_Designs.</h3>
            <p className='text-[13px] font-medium '>&copy; copyright 2025</p>
        </div>
    </div>
  )
}

export default Footer