import "./Navbar.css";

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
        <NavLink to="/products">Produtos</NavLink>
    </nav>
  )
}

export default Navbar