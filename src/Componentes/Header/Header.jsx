import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../img/logo.webp"

const Header = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contatos">Contatos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header