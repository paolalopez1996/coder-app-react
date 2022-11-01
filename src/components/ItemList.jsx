import React from 'react'
import Item from './Item'



const ItemList = ({ items }) => {
  return (
    <>
    {items.map((producto) => {
            return (
            <Item key={producto.id} producto={producto}/>
            );
        })};

    </>
  )
}

export default ItemList