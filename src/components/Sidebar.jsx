import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { urls } from '../utils/Links';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


const Sidebar = ({openSidebar , setOpenSidebar}) => {
  return (
   <div className={` ${openSidebar ? 'sidebar open' : 'sidebar'}`}>
    <ul className='flex flex-col items-center gap-y-6 text-xl py-4'>
    {urls.map((url , index)=>(
<li key={index}><NavLink to={url.path} onClick={()=>setOpenSidebar(false)}>{url.name}</NavLink></li>
    ))}
    <li className='relative'><NavLink to="/cart" onClick={()=>setOpenSidebar(false)}><FiShoppingCart className="text-[1.45rem]" /><span className='absolute top-[-0.65rem] left-2 text-[1rem] rounded-xl px-1 bg-purple-600 text-[#fff]'>10</span></NavLink></li>
    </ul>
    <button className='text-xl fixed top-2 right-4' onClick={()=>setOpenSidebar(false)}><FaRegWindowClose /></button>
    </div>
  )
}

export default Sidebar