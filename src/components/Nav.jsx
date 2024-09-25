import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Nav() {
  return (
    <header>
      <nav className=' lg:h-[80px] h-[62px] w-full flex justify-between items-center'>

      <div className="logo">
        <img className='h-12 p-1 ml-4' src="https://assets.qrates.com/packs/media/logos/qrates-logo-6b1bd403.svg" alt="logo" />
      </div>

     
      <div className='lg:hidden flex flex-row gap-5 text-3xl ' >
        <FaSearch />
      <FaShoppingCart />
     <span className='ml-6 mr-4'>
     <FaBars />
      </span>
       </div>
       <div className=' mr-auto ml-20 gap-8 font-semibold items-center hidden lg:flex'>
       <button className='flex items-center gap-1 ' >Discover Music <IoIosArrowDown /> </button>
       <button className='  ' >For Artists </button>
       <button className='  ' >For Fans </button>
      <a href=""><FaSearch /></a> 
      
      <a href=""><FaShoppingCart /></a>
       </div>
       

     
    <div className=' gap-8 mr-24 hidden lg:flex'>
      <button className='uppercase'>Log in</button>
      <button disabled className='uppercase bg-zinc-400 py-2 px-6 rounded-full text-white '>Make Your Own</button>
    </div>
      </nav>
    </header>
  )
}

export default Nav
