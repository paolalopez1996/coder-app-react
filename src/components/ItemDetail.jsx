import React from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useState, useContext} from 'react';
import { CartContext } from '../Context/CartContext';


const ItemDetail = ( { product }) => {

const [goToCart, setGoToCart] = useState(true);
const {addProduct} = useContext(CartContext)

  const onAdd =  (cantidad) =>{
    setGoToCart(false)
    addProduct(product, cantidad)
   
    // console.log(`haz seleccionado ${cantidad} unidads`)
  }
  return (
    <div className='item'>
        <div className='item-img'>
        <img src={product.img} alt="" className='item-img' />
        </div>
        <div className='descrip'>
        <span id='titulo-detail'>{product.title}</span>
        <p><span>Categoria:</span>  {product.category}</p>
        <p><span>Peso Aprox:</span> {product.peso}</p>
        <p>{product.detail}</p>
        {
          goToCart
            ? 
            <ItemCount 
                initial = {0}
                stock = {product.stock}
                onAdd = {onAdd} 
            />
            : 
            <Link to={"/cart"} className="irCarrito">ir al carrito</Link>
        }
        
        </div>
    </div>

  )
}

export default ItemDetail