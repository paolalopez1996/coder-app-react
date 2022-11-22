
import {  useState, createContext} from 'react';


export const CartContext = createContext([])

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])
//Funciones
///agregar producto sin sobreescribir
const addProduct = (item, quantity) => {
  let newCart = [...cart]
  let product = cart.find(product => product.id === item.id);
  if (product) {
    product.quantity += quantity;
    newCart = [...cart];
  } else{
    product = {...item, quantity: quantity};
    newCart = [...cart, product];
  }
  setCart(newCart)
  console.log(newCart)
}

//limpiar carrito
const clearCart = () => setCart([])

//esta en el carrito
const isInCart = (id) => cart.find(prod => prod.id === id) ? true  : false;

//remover 1 producto
const removeProduct = (id) => {
const prodRemove =  cart.filter(prod => prod.id !== id) ;
setCart(prodRemove)
}

//total precio
const totalPrice= () => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0)
}
// total unidades
const totalUnidades = () => {
return cart.reduce((act, next) => act + next.quantity, 0)
}

return (
    <CartContext.Provider   
    value={{ cart, 
     clearCart,
     isInCart, 
     removeProduct, 
     addProduct, 
     totalPrice, 
     totalUnidades}}>
    {children}
    </ CartContext.Provider>
  )
}

export default CartProvider