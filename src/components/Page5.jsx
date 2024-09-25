import React from 'react'

function Page5() {
  return (
    <div className='lg:flex lg:flex-row '>
       {/* Artist toolkit Section */}
<div className='w-full h-[84vh] lg:h-[100vh] bg-[#81836C] flex  items-center flex-col ' >

<img className='px-4 py-10 lg:w-[80%]' src="https://images.prismic.io/qrates-prd/a1f42f14-b65d-419d-85f0-ef0a5462c4b2_artist_toolkit.png?auto=compress,format&rect=0,0,1161,653&w=1198&h=674" alt="" />

<div className='bg-white w-fit uppercase text-sm mt-3 font-semibold p-2 border-black border-2'>Artist Toolkit</div>
<h1 className='text-4xl font-semibold px-4 py-14 text-center'>Take you and your work to next level </h1>
<p className='text-lg  px-4 lg:px-24  text-center pb-10'>We have a lot of informations and tips about music production, physical format and music business for you.</p>
<button className=' p-3 py-4 bg-black w-[90%] lg:w-fit lg:px-20 rounded-full text-white text-xs uppercase'>Learn more</button>
</div>
 {/* Support Section */}

 <div className='w-full h-[84vh] lg:h-[100vh] bg-[#F8D8D8] flex  items-center flex-col lg:border-none border-y-2 border-black ' >

<img className='px-4 py-10 lg:w-[80%] ' src="https://images.prismic.io/qrates-prd/bb2f7ed2-8eaa-45a4-993b-4d07ed4e4296_customersupport.png?auto=compress,format&rect=0,0,1161,653&w=1198&h=674" alt="" />

<div className='bg-white w-fit uppercase text-sm mt-3 font-semibold p-2 border-black border-2'>Customer Support</div>
<h1 className='text-4xl font-semibold px-4 py-14 text-center'>Here to help, whenever you need it. </h1>
<p className='text-lg  px-4 lg:px-24  text-center pb-10'>Whether you’re an artist in the middle of product, or a fan with questions about your order; our team is here to help.</p>
<button className=' p-3 py-4 bg-black w-[90%] lg:w-fit lg:px-20 rounded-full text-white text-xs uppercase'>Contact us</button>
</div>
    </div>
  )
}

export default Page5
