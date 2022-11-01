import React from 'react'
import { Link } from "react-router-dom";

const Item = ( { producto }) => {
  return (
    <div>
          <img src={producto.img} alt={producto.title} className="imagenes"/>
          <article>
          <h2>{producto.title}</h2>
          <h3 className='price'>${producto.price}</h3>
         <Link to={`/detail/${producto.id}`} className="detalles">Ver detalles</Link>
          </article> 
    </div>
  )
}

export default Item