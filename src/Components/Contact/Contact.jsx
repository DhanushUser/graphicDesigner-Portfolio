import React, { useEffect } from 'react'
import './contact.css'

import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div id='contact' className='contact my-[100px]'>
        <div className='freelance bg-[#E5E5E5] flex flex-col justify-center items-center'>
            <p className='mb-2 mt-5 text-white px-2 py-1 rounded-lg bg-[#14213D] font-medium'>Freelance</p>
            <h3 className='text-2xl mb-2 font-[550]'>Hire Me As A Freelancer</h3>
            <p>I'm available on different freelancing platform.</p>
            <p>You can hire me on given platforms.</p>

            <div className='flex justify-between items-center my-[50px] transition-[.5s]'>
                <div className='flex flex-col mx-5 '>
                    <h2 className='text-2xl mb-2 font-medium'>FIVERR</h2>
                    <a data-aos="fade-right" target='_blank' href="https://www.fiverr.com/s/XLQ2Vqe" className='c-btn py-1 px-3 border text-center  border-black rounded-2xl hover:bg-transparent font-medium text-sm transition-[5s]'>HIRE ME</a>
                </div>
                <div className='flex flex-col mx-5'>
                    <h2 className='text-2xl mb-2 font-medium'>UPWORK</h2>
                    <a data-aos="fade-left" href="" className='c-btn py-1 px-3 border text-center  border-black rounded-2xl hover:bg-transparent font-medium text-sm transition-[5s]'>HIRE ME</a>
                </div>
            </div>
        </div>

        {/* contact */}

        <div className="contact-details flex flex-col justify-center items-center my-10">
            <p className='c-btn mt-5 text-black px-2 py-1 bg-[#FCA311]  rounded-3xl text-sm font-medium'>Contact us</p>
            <h3 className='text-3xl my-2 text-white font-medium'>How To Contact Us</h3>
            <p className='text-xs  text-white'>You can contact us by completing given form</p>
            <p className='text-xs  text-white mb-3'>This form will directly send us a mail.</p>
            <hr className="border w-[7vw] my-4 border-orange-300" />

            <div data-aos="fade-right" className='min-w-fit bg-white rounded-xl my-3 px-1 py-1 call flex justify-around items-center'>
                <span><i class='bx bxs-phone text-2xl'></i></span>
                <p className='font-medium text-sm'>63803 67182</p>
            </div>
            <div className='min-w-[18rem] bg-white rounded-xl my-3 px-1 py-1 call flex justify-evenly items-center'>
                <span><i class='bx bxl-gmail text-2xl'></i></span>
                <a href="mailto:dhanushsamynathan07@gmail.com"  className='font-medium text-sm'>@dhanushsamynathan07@gmail.com</a>
            </div>
            <div data-aos="fade-left" className='min-w-[18rem] bg-white rounded-xl my-3 px-1 py-1 call flex justify-evenly items-center'>
                <span><i class='bx bxl-instagram-alt text-2xl'></i></span>
                <a href='https://www.instagram.com/dhanush_designs?utm_source=qr&igsh=MXc5NHZvcWt3cDNlaw==' target='_blank' className='font-medium text-sm'>www.instagram.com/dhanush_designs</a>
            </div>
        </div>
    </div>
  )
}

export default Contact