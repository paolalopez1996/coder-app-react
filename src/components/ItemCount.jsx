import React, { useEffect } from 'react'
import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
const [cantidad, setCantidad] = useState(parseInt(initial));
const Sumar =() => {
        setCantidad(cantidad + 1)
}
const Restar =() => {
        setCantidad(cantidad - 1)
} 
    const Reset = () => {
        setCantidad(0)
    }
    useEffect(() =>{
      setCantidad(parseInt(initial))
    }, [initial]
    )
  return (
    <div className='contenedorBotones'>
            <button disabled = {cantidad >= stock} onClick ={Sumar} className="signos"> + </button>
            <p className='contador-result' cantidad = {cantidad}>{cantidad}</p>
            <button disabled = {cantidad < 1}  onClick =  {Restar} className="signos"> - </button>
            <button disabled = {cantidad <= 0} onClick = {() => onAdd(cantidad)}  >agregar al carrito</button>
            <button onClick={Reset} >reset</button>
        </div>
  )
}

export default ItemCount


// const [cantidad, setCantidad] = useState(0);
// const Sumar =() => {
//         setCantidad(cantidad + 1)
// }
// const Restar =() => {
//         setCantidad(cantidad - 1)
// } 
//     const Reset = () => {
//         setCantidad(0)
//     }

