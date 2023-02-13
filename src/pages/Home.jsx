import React from 'react'
import FeatureProduct from '../components/FeatureProduct'
import Hero from '../components/Hero'

import { useGlobalContext } from '../context/UserContext'

const Home = () => {
  
 
  return (
   <>
    <Hero />
    <FeatureProduct />
   </>
  )
}



export default Home