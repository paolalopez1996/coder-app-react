import React from 'react'
import  { CartContext }  from '../../Context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from '../sweetAlert/SweetAlert';


const Cart = () => {
  const {cart, clearCart, removeProduct, totalPrice, totalUnidades} = useContext(CartContext); 
 
  
  if (cart.length === 0){
    return (
      <div className='elige-prod'>
      <SweetAlert />
      <div className= "ir-prod">
      <Link  to={"/"} className = 'ir-productos'>ir a productos</Link>
      </div>
      </div>
    )
  }
  
  return (
    <div>
          {cart?.map((prod) => (
              <div className='total-productos' key={prod.id}>
                <div className='total-prod-img'>
                <img src={prod.img} alt={prod.title} width="200px" height="150px" />
                </div>
                <div className='total-prod-info'>
                  <h3>{prod.title}</h3>
                      <h3>Total items: {prod.quantity}</h3>
                      <button className='button-cart' onClick={() => removeProduct(prod.id)}>
                          Eliminar
                      </button>
                  </div>
                      
              </div>
          ))}
          <div className='total-botones'>
          <h2>monto a pagar: {totalPrice()}$</h2>
          <h1>total unidades : {totalUnidades()}</h1>
          <button className='button-cart' onClick={clearCart}>Vaciar carrito</button>
          <Link className='button-cart' to={"/"} >seguir comprando</Link>
          <Link className='button-cart' to={"/Form"}>Ir a pagar</Link>
          </div>
          
    </div>
  );
};

export default Cart;