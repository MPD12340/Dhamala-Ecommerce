import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { urls } from '../utils/Links';
import Sidebar from './Sidebar';
const Header = () => {
  const [openSidebar , setOpenSidebar] = useState(false)
  return (
    <>
    <div className='w-[100vw] h-[5rem] bg-red-300 flex items-center'>
      <div className='w-[90%] mx-auto flex justify-between'>
        <NavLink to='/' className="block text-[1.45rem] font-semibold">Dhamala Ecom</NavLink>
        <button className='block md:hidden' onClick={()=>setOpenSidebar(true)}><RxHamburgerMenu className='text-xl ' /></button>
        <ul className='hidden md:flex gap-x-6 text-[1rem]'>
          {urls.map((url, index) => (
            <li key={index}><NavLink to={url.path}>{url.name}</NavLink></li>
          ))}
          <li className='relative'><NavLink to="/cart"><FiShoppingCart className="text-[1.45rem]" /><span className='absolute top-[-0.65rem] left-2 text-[1rem] rounded-xl px-1 bg-purple-600 text-[#fff]'>10</span></NavLink></li>
        </ul>
      </div>
      </div>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </>
  )
}

export default Header