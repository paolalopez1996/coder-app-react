import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
          <Link to='/' class="nav-link" > <img src="./2.png" alt=""  className="logo" /></Link>
          </h1>
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse lista" id="navbarSupportedContent">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <Link to='Category/Tortas Enteras' class="nav-link">Tortas</Link>
              </li>
              <li class="nav-item">
                <Link  to='Category/Porciones' class="nav-link" >Porciones</Link>
              </li>
              <li class="nav-item">
                <Link  to='Category/Cupcakes' class="nav-link" >Cupcakes</Link>
              </li>
              <li class="nav-item">
                <Link  to='Category/Cookies' class="nav-link" >Contacto</Link>
              </li>
            </ul>
          </div>
          <div class="form-inline md-48 cart">
                <CartWidget />
          </div>
        </nav>
      
    )
}

export default Navbar;