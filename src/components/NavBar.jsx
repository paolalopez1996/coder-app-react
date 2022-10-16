import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="brand">
            <img src="./2.png" alt=""  className="logo" />
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse lista" id="navbarSupportedContent">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <a class="nav-link" href="/#">Tortas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Porciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Cupcakes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Cookies</a>
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