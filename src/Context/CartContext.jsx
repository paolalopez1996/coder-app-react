
import {  useState, createContext} from 'react';

export const CartContext = createContext([])


const CartProvider = ({ children }) => {

const [cart, setCart] = useState([])

console.log(cart)

//Funciones
///agregar producto sin sobreescribir
const addProduct = (item, quantity) => {
  let newCart;
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
const removeProduct = (itemId) => cart.filter(prod => prod.itemId !== itemId) ;


//Funcion para totalizar el Carrito
const totalCart = () => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0)
}

return (
    <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct, totalCart}}>
    {children}
    </ CartContext.Provider>
  )
}

export default CartProvider