import React from 'react'
import Nav from './Nav';
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../context/UserContext";


const Sidebar = () => {
    const {setShowSidebar} = useGlobalContext()
  return (
    
     <div className='sidebar'>
        <Nav />
        <AiOutlineCloseSquare className='close-btn' onClick={()=>setShowSidebar(false)} />
     </div>

  );
}

export default Sidebar