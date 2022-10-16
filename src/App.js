// import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; 


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer saludo = "Hola bienvenidos a la pagina que te endulza la vida!!"
                      productos = {["tortas, ", "Porciones, ", "Cookies "]}
    />
   </>
  );
}

export default App;


