import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
   const [name, setName] = useState('')
   const [lastName, setLastName] = useState('')
   const [number, setNumber] = useState('')
   const [address, setAddress] = useState('')
   const [email1, setEmail1] = useState('')
   const [email2, setEmail2] = useState('')
   const [orderId, setOrderId] = useState('');
   const {cart, totalPrice, clearCart} = useContext(CartContext)
   const totalPrecioCarrito = totalPrice();

   const sendData = (e) => {
    e.preventDefault();
    const objOrder = {
        buyer: {
            name,
            lastName,
            number,
            email1,
            email2
        },
        items: cart,
        total: totalPrecioCarrito,
        date: serverTimestamp(),

    };
    const collenctionProd = collection(db, "orders");
    addDoc(collenctionProd, objOrder)
    .then((res) => {
        setOrderId(res.id);
        clearCart()
    })
    .catch((error) => {
        console.log('Hubo un error', error);
    });
};

const handleName = (e) =>setName(e.target.value)
const handleLastName = (e) =>setLastName(e.target.value)
const handleNumber = (e) =>setNumber(e.target.value)
const handleEmail1 = (e) =>setEmail1(e.target.value)
const handleEmail2 = (e) =>setEmail2(e.target.value)
const handleAddress = (e) =>setAddress(e.target.value)


if (orderId) {
    return (
        <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
    );
}

  return (
    <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form action="" onSubmit={sendData}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleLastName}
                    value={lastName}
                />
                   <input
                    type="number"
                    placeholder="numero"
                    name="numero"
                    onChange={handleNumber}
                    value={number}
                />
                  <input
                    type="email"
                    placeholder="email1"
                    name="email1"
                    onChange={handleEmail1}
                    value={email1}
                />
                   <input
                    type="email"
                    placeholder="email2"
                    name="email2"
                    onChange={handleEmail2}
                    value={email2}
                />
                  <input
                    type="address"
                    placeholder="address"
                    name="address"
                    onChange={handleAddress}
                    value={address}
                />
                <button>Enviar</button>
            </form>
        </div>
  )
}

export default Form