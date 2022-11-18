
import './App.css';
import React from 'react'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './Context/CartContext';
import { Footer } from './components/Footer';
import Form from './components/form/Form';



function App() {
  return (
    <BrowserRouter>
     <CartProvider>
     <Navbar /> 
     <Routes>
      <Route path='/' element={<ItemListContainer/>} saludo={"Bienvenidos a nuestra pagina web"}/>
       <Route path="/category/:categoryName" element={<ItemListContainer/>}  />
      <Route path='/ItemDetail/:idProducto' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/form" element={<Form />} />
    </Routes>
    <Footer />
    </CartProvider>
    
   </BrowserRouter>
  );
}

export default App;


