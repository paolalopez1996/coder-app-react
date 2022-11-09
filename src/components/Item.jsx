import React from 'react'
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
const Item = ( { producto }) => {
  return (
    <div  className='contenedor-productos'>
          <img src={producto.img} alt={producto.title} className="imagenes"/>
         
          <article>
          <h2>{producto.title}</h2>
          <h2 className='price'>${producto.price}</h2>
         <Link to={`/ItemDetail/${producto.id}`} className="detalles">Ver detalles</Link>
          </article> 
    </div>
  )
}

export default Item