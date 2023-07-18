
import react from "react"
import { Link } from "react-router-dom";
import './App.css';
import Buscador from "./Buscador"
import Navegacion from "./Navegacion";
import CartWidget from "./CartWidget";
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "./logo";

const NavBar = () =>{
    return (
   

        <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li> <Navegacion/></li>
          </ul>
          <div className="bolsa">
            <a className="nav-link bolsa" href="#">
              <FaShoppingCart />
            </a>
          </div>
          <Buscador contBuscar="Buscar Productos" />
        </div>
      </div>
    </nav>
    
    );
}

export default NavBar;




