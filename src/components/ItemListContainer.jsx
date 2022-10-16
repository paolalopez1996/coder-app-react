import React from 'react'


const ItemListContainer = (props) => {
  return (
    <div className='mensaje'>
        <p> {props.saludo}</p>
        <p>{props.productos} y mucho más!!</p>
    </div>
  )
}

export default ItemListContainer;