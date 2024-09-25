import React from 'react'

function Hero() {
  return (
    <div className='h-screen lg:h-[150vh] w-full bg-black p-4 lg:px-72  lg:pt-24 lg:flex '>
      <div className='lg:w-[40vw]'>
      <button className='uppercase font-medium border-[2px] border-white text-white py-1 px-3 mt-2  '>For Artists</button>
  <h1 className='text-white font-semibold text-4xl mt-6 lg:w-[40vw] lg:text-6xl '>Music in your hands. Without the barriers.</h1>
  <h1 className='text-white font-normal text-2xl mt-6 lg:w-[35vw] '>Full-service production, a global retail network, customer support - and you keep up to 85% of profits. ↓</h1>

      </div>
  
  <div className='flex  w-[50%] items-center   lg:-translate-x-[35rem]     '>

    <img className='w-[14rem] lg:w-[36rem] lg:translate-y-10 lg:translate-x-7    -rotate-12 mt-52 ml-4 border-2 border-black ' src="https://images.prismic.io/qrates-prd/8b532562-a28c-4e07-b2ab-1ddf0e2eaa91_top_section_image_2.png?auto=compress,format&rect=0,11,657,821&w=1200&h=1500" alt="" />
    <img className='w-[15rem] lg:w-[38rem] lg:-translate-y-64  rotate-12 mt-5 mb-10 -ml-14 border-2 border-black ' src="https://images.prismic.io/qrates-prd/00bc2c69-9625-4bd3-a662-b9451150fe05_top_section_image_1.png?auto=compress,format&rect=0,14,613,766&w=1200&h=1500" alt="" />
    <img className='w-[7.5rem] lg:w-[22rem]  ml-60 rotate-12  absolute mt-96 lg:translate-x-96 lg:translate-y-10 ' src="https://assets.qrates.com/packs/media/sticker/paid-42cd4b49.svg" alt="" />
   

  </div>

      
    </div>
  )
}

export default Hero
