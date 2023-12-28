import React from 'react'
import { customContextProvider } from '../context/ProductContext'

const FeatureProduct = () => {
  const name = customContextProvider()
  return (
    <div className='mt-5 px-4'>
    <h1 className='text-2xl font-semibold text-center'>Our Products : {name}</h1>
    </div>
  )
}

export default FeatureProduct