import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import {FaLinkedin } from 'react-icons/fa'
import Logo from './assets/img/logo.png'
import {VscLocation } from 'react-icons/vsc'
import { BiPhone } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'

import { FaWhatsappSquare } from 'react-icons/fa';
 



const Footer = () => {
  return (

    <div className='w-full bg-slate-500 flex flex-col items-center text-sm relative bottom-0' >
      <div className='grid h-auto w-full lg:w-3/4 sm:w-full  gap-y-8 lg:gap-x-16 sm:grid-cols-2 md:grid-cols-4 text-white p-4 md:p-8'>
            {/* logo and contact goes here */}
      <div className='flex flex-col gap-y-4 md:items-start'>
        <div className='flex justify-start items-center'>
         <img src={Logo} alt="logo" className='w-20 h-20' />
            {/*<span className='text-xl font-semibold text-white tracking-wider '><span className=' font-serif'> P</span><span className='font-serif'>A</span ><span className=' font-serif'>N</span><span className= 'font-serif'>C</span><span className= 'font-serif'>O</span><span className= 'font-serif'>N</span><span className= 'font-serif'>G</span></span>*/}
            <div className='text-xl font-semibold text-white tracking-wider'>
                <span className='font-serif'>P</span>
                <span className='font-serif'>a</span>
                <span className='font-serif'>n</span>
                <span className='font-serif'>c</span>
                <span className='font-serif'>o</span>
                <span className='font-serif'>n</span>
                <span className='font-serif'>g</span>
            </div>
            <div className='text-xl font-semibold text-white tracking-wider ml-2'>
                <span className='font-serif'>L</span>
                <span className='font-serif'>u</span>
                <span className='font-serif'>m</span>
                <span className='font-serif'>e</span>
                <span className='font-serif'>r</span>
            </div>
        </div>

       <div className='flex text-white gap-x-4'>
         <FaFacebook/>
           <a href="https://api.whatsapp.com/send?phone=6282360126640&text=Mau%20Pancong%20Lumer%0AAtas%20nama%20:%0AAlamat%20:%0AVarian%20rasa%20:">
           <FaWhatsappSquare/>
           </a>
         {/*<FaTwitter  />*/}
         <a href="https://www.instagram.com/ketagihan_pancongbatam/?hl=en"><FaInstagram /></a>
         {/*<a href="https://www.linkedin.com/in/idahosa-joshua/"> <FaLinkedin /></a>*/}
       </div>
      </div>
       

   {/* CONTACT LOCATION SECTION */}
      <div className='flex flex-col ml-8'>
       <h5 className='font-bold text-lg py-2'>
        Contact
       </h5>
       <div className='flex flex-col gap-y-3'>
          <div className='flex gap-x-2 items-start'>
          <VscLocation  className='mt-1'/>
          <p> Bida Ayu blok H, Pintu 2½ - Piayu</p>
          {/* //location */}
          </div>

          <div className='flex items-center gap-x-2'>

          <BiPhone />
          <p> +62 823-6012-6640</p>
          </div>

          <div className='flex items-center gap-x-2'>

          {/*<MdOutlineEmail />*/}
          {/*<p>pancong_lumer.com</p>*/}
          </div>
          </div>  
      </div>

      <div>
       
      <h5 className='font-bold text-lg py-2'>
        Support
       </h5>
        <div className='flex flex-col gap-y-3'>
          <p>FAQ</p>
          <p>Shippings and Returns</p>
          <p>Contact us</p>
          <p>Our Partners</p>

        </div>
        


      </div>
     {/* info section */}
      <div>
        
      <h5 className='font-bold text-lg py-2'>
        Info
       </h5>
       <div className='flex flex-col gap-y-3'>
          <p>Dates</p>
          <p>Parties</p>
          <p>Birthdays</p>
          <p>Menu</p>
        </div>
      </div>

    


      </div>

      <span className='text-white text-[12px] flex justify-center py-2 text-center'> &copy; Made with 💖 by Diah Nur Annisa. All right Reserved </span>

    </div>
    
  )
}

export default Footer