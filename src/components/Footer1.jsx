import React from 'react'
import ImageSlider from './ImageSlider'



function Footer1() {
  return (
    <div className='bg-black '>

      <div className='flex flex-col justify-center items-center'>
        <button className='w-fit border-2 border-white uppercase p-1 text-sm text-white mt-10'>try it now</button>
        <h1 className='text-white p-5 text-4xl text-center lg:text-5xl '>Make it real with Qrates Studio </h1>
        <p className='text-white  text-xl text-center lg:px-96'>Design the look and feel of your vinyl and cassette and use the profit calculator to immediately see how much your project will cost, and how much you'll earn.</p>
         <div className='py-12 lg:py-20'>
         <ImageSlider/>
          </div>
          <button className='w-[95%] lg:w-fit lg:px-28 lg:py-5 bg-[#FFF803] text-black rounded-full uppercase p-3 my-10 text-xs font-semibold '>Try it now</button>
        

      </div>
      

      
      
    </div>
  )
}

export default Footer1
