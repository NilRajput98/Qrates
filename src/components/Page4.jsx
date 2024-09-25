import React from 'react'
import { FaArrowDown } from "react-icons/fa";

function Page4() {
  return (

    
    <div>
     {/* Start Your Project Section */}
     <div className='w-full h-[23vh] bg-black flex flex-col items-center' >
        <h1 className='text-white text-[2.2rem]  text-center  pt-9 ' >Start a new project</h1>
        <h1 className='text-white text-[1.6rem]  text-center font-medium  pb-6'><FaArrowDown /></h1>
        
        <button className='border-[2px] p-3 w-full border-white rounded-full text-white uppercase'>Make Your Own</button>


     </div>
    

     
    </div>
  )
}

export default Page4
