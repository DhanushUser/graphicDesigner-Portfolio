import React from 'react'
import './hero.css'
import hero_image from '../../assets/hero-pic.png'
import Resume from '../../assets/MyResume.pdf'


const Hero = () => {
  return (
    <div id='hero' className='hero flex'>

      <div className="hero-bg">
        
      </div>

      <div className="hero-container lg:flex md:flex sm:block  lg:mx-[70px] md:mx-[0px]">

        <div className="hero-left ">
          <img className='hero-banner ' src={hero_image} alt="" />
        </div>

        <div className="name lg:mt-[25%] md:mt-[22%] sm:mt-[20%]">
          <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-white font-[550] my-2'>I'm <span className='lg:text-5xl md:text-4xl sm:text-3xl text-[#ffa200] font-[550]'>Dhanush!</span></h2>
          <h4 className='text-xl text-white my-2 font-[550]'>Graphic Designer</h4>

          <div className="para my-2">
            <p className='text-white text-[14px]'>Familier with adobe photoshop and illustrator.</p>
          </div>

          <div className="links my-4">
            <a target='_blank' href="https://www.instagram.com/dhanush_designs?utm_source=qr&igsh=MXc5NHZvcWt3cDNlaw==" className='c-btn'>Instagram</a>
            <a download={"dhanushResume"} href={Resume} className='c-btn'>Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero