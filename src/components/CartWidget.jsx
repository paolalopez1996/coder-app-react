import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext)
  return (
    <>
    <i className="fa-solid fa-cart-shopping fa-2x"></i>  
    <span>{totalUnidades() !== 0 && totalUnidades()}</span>
    </>
  )
}


export default CartWidget
