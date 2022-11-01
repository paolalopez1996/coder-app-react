// import logo from './logo.svg';
import './App.css';
 import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import cart from './components/cart/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Navbar /> 
     <Routes>
      <Route path='/' element={<ItemListContainer/>} saludo={"Bienvenidos a nuestra pagina web"}/>
       <Route path="/category/:categoryName" element={<ItemListContainer/>}  />
      <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<cart />} />
    
    </Routes>
   </BrowserRouter>
  );
}

export default App;


