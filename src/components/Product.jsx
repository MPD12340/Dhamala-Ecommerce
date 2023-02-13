import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from "./Helpers/FormatPrice";

const Product = ({elem}) => {
    const {id , name , image , price , category} = elem
  return (
    <NavLink to={`/singleproduct/${id}`} className="single-pro">
        <div className='card'>
            <img src={image} alt={name} className="elem-img" />
            <span className="caption">{category}</span>
        </div>
        <div className='product-info'>
            <h3>{name}</h3>
        <p className='price'><FormatPrice price = {price} /></p>
        </div>
    </NavLink>
  )
}

export default Product