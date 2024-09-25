import React from 'react'

function Page2() {
  return (
    <div className='w-full h-[100%] sm:h-[144%] '>

      <div className='h-[24%]  bg-[#E4E5DE]  flex justify-center items-center text-4xl p-[2.8rem] text-center font-semibold border-b-2 border-black '>
        <h1>Choose from two formats with promised quality</h1>
      </div>
    
     <div className='lg:flex lg:flex-row h-[72%] '>
     <div className=' bg-[#E4E5DE] flex justify-center items-center flex-col p-10 lg:border-r-2 border-b-2 border-black ' > 
      <h1 className='text-4xl font-semibold  '>Vinyl </h1>
      <p className='mt-6 font-medium lg:px-56 text-lg text-center'>We know how special pressed records are to you. Our products are built for fans, by fans. We make it easy for artists to press vinyl, so the music you love can keep reaching ears in the most beautiful way.</p>
 <img className=' lg:h-[400px]  mt-10 ' src="https://images.prismic.io/qrates-prd/424f7acc-35c0-4570-8223-494675b16eea_image.png?auto=compress,format&rect=4,0,1014,634&w=1038&h=649" alt="" />      

      </div>
     
      
     <div className=' bg-[#E4E5DE] flex justify-center items-center flex-col p-10 border-b-2 border-black ' > 
      <h1 className='text-4xl font-semibold '>Cassette </h1>
      <p className='mt-6 font-medium lg:px-56 text-center text-lg'>Cassettes have always been special to music fans and artists. Whether you are saving a recording of a great concert, or preserving an early demo, there’s no better way to keep that music close than on cassette tapes.</p>
 <img className='lg:h-[400px] mt-10' src="https://images.prismic.io/qrates-prd/e6f25c1e-b82f-4279-8881-7cdff3f3708b_qrates-studio-screenshot+%2813%29.png?auto=compress,format&rect=0,6,1518,949&w=1038&h=649" alt="" />      

      </div>
     
     
     </div>
     
     
     
 
     
    </div>
  )
}

export default Page2
