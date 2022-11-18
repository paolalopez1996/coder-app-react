import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
          <Link to='/' className="nav-link" > <img src="./2.png" alt=""  className="logo" /></Link>
          </h1>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse lista" id="navbarSupportedContent">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link to='Category/Tortas Enteras' className="nav-link">Tortas</Link>
              </li>
              <li className="nav-item">
                <Link  to='Category/Porciones' className="nav-link" >Porciones</Link>
              </li>
              <li className="nav-item">
                <Link  to='Category/Cupcakes' className="nav-link" >Cupcakes</Link>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link" >Contacto</a>
              </li>
            </ul>
          </div>
          {Navbar && (
                <Link className="link" to="/cart">
                    <CartWidget />
                </Link>
            )}
         
        </nav>
      
    )
}

export default Navbar;