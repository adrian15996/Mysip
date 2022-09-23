import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo.png";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <FontAwesomeIcon icon={faBars} className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a href="/">Paquetes</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">mail@example.com</li>
          <li>
            <FontAwesomeIcon icon={faUser} className="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
