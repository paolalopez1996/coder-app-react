import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const Navbar = () => {
// Navbar Dinamico
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const catColeccion = collection(db, "categorias")
    getDocs(catColeccion)
        .then((res) => {
            const secciones = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setCategories(secciones)
        })
        .catch((error) => {
            console.log(error);
        })
  }, [])

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
          <Link to='/' className="nav-link" ><img src="./2.png" alt=""  className="logo" /></Link>
          </h1>
          <div className="collapse navbar-collapse lista" id="navbarSupportedContent">
            <ul className="navbar-nav text-center">
            {categories.map((infoItem) => (
                    <Link as={Link}
                        key={infoItem.id}
                        className="nav-link"
                        to={`/Category/${infoItem.path}`}>
                    {infoItem.title}
                    </Link>
                ))}
                <li className="nav-item">
                    <a href="#footer" className="nav-link" >Contacto</a>
                    </li> 
                </ul>
        </div>
        {Navbar && (
            <Link className="links" to="/cart">
                <CartWidget />
            </Link>
        )}
    </nav>
    )
}

export default Navbar;

