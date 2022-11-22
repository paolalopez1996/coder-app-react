import React, { useEffect } from 'react'
import {useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {
const [cantidad, setCantidad] = useState(parseInt(initial));


const Sumar =() => {
    cantidad < stock ? setCantidad(cantidad + 1 )  : alert('llegaste al limite de compra de este producto');
}
const Restar =() => {
        setCantidad(cantidad - 1)
} 
    const Reset = () => {
        setCantidad(0)
    }
    const agregar = () => {
      
      onAdd(cantidad);
}
      
    useEffect(() =>{
      setCantidad(parseInt(initial))
    }, [initial]
    )
  return (
    <div className='contenedorBotones'>
            <button disabled = {cantidad > stock } onClick ={Sumar} className="signos"> + </button>
            <p className='contador-result' cantidad = {cantidad}>{cantidad}</p>
            <button disabled = {cantidad < 1}  onClick =  {Restar} className="signos"> - </button>
            <button disabled = {cantidad <= 0 || cantidad > stock} onClick={agregar}  >agregar al carrito</button>
            <button onClick={Reset} disabled = {cantidad <= 0}>reset</button>
        </div>
  )
}

export default ItemCount

