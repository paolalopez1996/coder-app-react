import React from 'react'
import  { CartContext }  from '../../Context/CartContext'
import { useContext } from 'react';


const Cart = () => {
  const {cart, clearCart, removeProduct} = useContext(CartContext); 

  return (
    <div>
          {cart?.map((prod) => (
              <div key={prod.id}>
                  <img src={prod.img} alt={prod.title} width="80px" />
                  <div>
                      <h3>{prod.title}</h3>
                      <h3>{prod.cantidad}</h3>
                      <button onClick={() => removeProduct(prod.id)}>
                          Eliminar
                      </button>
                  </div>
              </div>
          ))}
          <h2>Total:$</h2>
          <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;