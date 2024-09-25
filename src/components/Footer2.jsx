import React from 'react'
import LanguageSelector from './LanguageSelector';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer2() {
  return (
    <div className='bg-black h-screen p-5'>

<div className='flex flex-wrap gap-16 lg:justify-between lg:px-16 lg:pt-20'>

<div>
        <h1 className='uppercase text-white font-medium text-lg'>For artists</h1>
        <ul className='text-white my-3 text-lg'>
          <li>For Artists</li>
          <li>How it Works</li>
          <li>Artist Toolkit</li>
          <li>Referral Program</li>
        </ul>
      </div>

      <div>
        <h1 className='uppercase text-white font-medium text-lg'>For Fans</h1>
        <ul className='text-white my-3 text-lg'>
          <li>For Fans</li>
          <li>Records</li>
          <li>Cassettes</li>
          <li>Stories</li>
        </ul>
      </div>

      <div>
        <h1 className='uppercase text-white font-medium text-lg'>Our Company</h1>
        <ul className='text-white my-3 text-lg'>
          <li>About Qrates</li>
          <li>Careers</li>
          <li>Partners</li>
          
        </ul>
      </div>

      <div>
        <h1 className='uppercase text-white font-medium text-lg'>Help</h1>
        <ul className='text-white my-3 text-lg'>
          <li>Support Center</li>
          <li>Contact Us</li>
          <li>Returns</li>
          <li>Shipping</li>
        </ul>
      </div>


</div>
    
    <div className='flex justify-center items-center gap-3 my-16 lg:hidden'>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl pt-3 ' ><FaFacebookF /></button>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl  ' ><FaInstagram /></button>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl  '><FaTwitter /></button>
    </div>

<div className='lg:flex lg:flex-row lg:justify-between lg:translate-y-96 lg:px-16'>
<div className='pt-12'>
  <img src="https://assets.qrates.com/packs/media/logos/qrates-logo-footer-498fa5b7.svg" alt="" />
  </div>

<div>
<div className='pt-16'>
<LanguageSelector />
</div>

<div className=' justify-center items-center gap-2 my-4 hidden lg:flex'>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl pt-3 ' ><FaFacebookF /></button>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl  ' ><FaInstagram /></button>
      <button className='w-10 h-10 bg-white rounded-full flex justify-center items-center text-3xl  '><FaTwitter /></button>
    </div>


<div className='flex justify-between pt-8 lg:pt-1'> 
  <p className='text-sm text-white' ><a href="">Terms of Service</a></p>
  <p className='text-sm text-white' ><a href="">Privacy Policy <br />© TDMS Inc.</a></p>
  <p className='text-sm text-white' > Legal Information</p>
</div>


</div>
</div>

      
    </div>
  )
}

export default Footer2
