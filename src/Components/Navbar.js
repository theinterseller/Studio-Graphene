import React from 'react'
import { Link } from "react-router-dom"
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  return (
    <>

      <div class="p-2 w-full ">
        <header class="bg-slate-100 w-full p-2">
          <nav class=" flex flex-row items-center justify-between w-full shadow-xl shadow-slate-400">
            <Link to="/"> <p className='ml-5 text-3xl'><FaShopify /></p></Link>
            <div class="hidden md:flex flex-row font-medium p-4 gap-7 text-xl">
              <Link to="/">Home</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
            <div class="md:hidden p-3 ">&#x21c5;</div>
          </nav>
        </header>
      </div>
    </>

  )
}

export default Navbar;