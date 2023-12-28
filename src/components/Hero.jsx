import React from 'react'
import ShoppingImg from '../assets/shopping.jpg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className ="mt-5 grid grid-cols-1 md:grid-cols-2 px-4 md:gap-y-0 gap-y-3 gap-x-3 items-center">
    <div className="">
    <h1 className='text-2xl font-bold mb-2'>We are globally number 1.</h1>
    <p>Dhamala Ecom is a thriving and innovative e-commerce venture that has carved its niche in the digital marketplace. Committed to delivering a seamless and personalized shopping experience, our business prides itself on offering a diverse range of high-quality products across various categories, including home goods, electronics, fashion, and more. At Dhamala Ecom, we prioritize customer satisfaction by ensuring a user-friendly website, swift delivery services, and responsive customer support.</p>
    <NavLink to='/products' className='mt-3 block w-[7rem] text-center rounded-lg px-2 py-2 bg-purple-800 text-[#fff]'>Shop At Us</NavLink>
    </div>
    <div className="">
    <img src={ShoppingImg} alt='girl at shopping' className='w-[100%]'/>
    </div>
    </div>
  )
}

export default Hero