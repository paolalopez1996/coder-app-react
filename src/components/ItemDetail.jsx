import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( { product }) => {
  const onAdd =  (cantidad) =>{
    console.log(`haz seleccionado ${cantidad} unidads`)
  }
  return (
    <div className='item'>
        <div className='item-img'>
        <img src={product.img} alt="" className='item-img' />
        </div>
        <div className='descrip'>
        {product.title}
        <p>Categoria: {product.category}</p>
        <p> stock: {product.stock}</p>
        <p>Peso aprox: {product.peso}</p>
         <p>{product.detail}</p>
         
         <ItemCount 
        initial = {0}
        stock = {product.stock}
        onAdd = {onAdd} />
        </div>
    </div>

  )
}

export default ItemDetail