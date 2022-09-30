import React from "react";
import Logo from "../assets/Logo.png";
import styles from "../styles/Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>
      <div>
        <a href="/">Politicas de Privacidad</a>-
        <a href="/">Politica de Cookies</a>
      </div>
      <div></div>
    </footer>
  );
};
