import React from 'react'

function Page6() {
  return (
    <div  >
      {/* Community Section */}

<div className='w-full h-[37vh] lg:h-[43vh]  flex  items-center justify-center flex-col border-b-2 border-black ' >



<div className='bg-white w-fit uppercase text-xs  font-semibold p-1  border-black border-2'>Community</div>
<h1 className='text-4xl font-semibold px-4 pt-7 pb-5 text-center'>Join a growing community.</h1>
<p className='text-lg  px-4  text-center pb-4'>We're building a home for the next generation vinyl lovers and cassette junkies. Get in front of fans, connect with artists, labels and stores.</p>
<button className=' p-2 py-3  border-2 border-black w-[90%] rounded-full text-black font-semibold text-sm uppercase'>read more stories</button>
</div>
{/* Artists on qrates Section */}
<div className='w-full h-screen  bg-[#FFF803] px-4 lg:flex lg:flex-row-reverse '>
  <div className='px-2 py-8 lg:w-[50vw] lg:flex lg:justify-center'>
    <img className='h-[531px] w-[456px] lg:w-fit lg:h-[95%] bg-cover   border-2 border-black ' src="https://images.prismic.io/qrates-prd/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg?auto=compress,format" alt="" />
   

  


  </div>
  <div className='lg:w-[50vw] lg:p-40 lg:flex lg:flex-col lg:justify-between lg:items-start' >
  <h1 className='bg-white border-2 border-black w-fit p-1 uppercase text-sm font-semibold px-2' > Artist on qrates </h1>
  <div>
  <p className='py-8 text-xl lg:text-2xl font-medium'> "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."

</p>
<button className='uppercase underline font-medium pb-16'>-Sol</button>
  </div>

  <div className='flex gap-2 ' >
    <button className='bg-black w-9 h-9 rounded-full text-white'>1</button>
    <button className='border-2 border-black w-9 h-9 rounded-full text-black'>2</button>
  </div>
  </div>
  

</div>
      
    </div>
  )
}

export default Page6
