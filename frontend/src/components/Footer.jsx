import React from "react";
import Logo from "../assets/Logo.jpg";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <img src={Logo} alt="Logo" className={styles.navLogo} />
      </div>
      <div className={styles.politicsContainer}>
        <a href="/">Politicas de Privacidad</a>
        <p>-</p>
        <a href="/">Politica de Cookies</a>
      </div>
      <div className={styles.containerIcon}>
        <a href="https://www.facebook.com/MYSIP-126152794594517/">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>

        <a href="https://wa.me/527531543816?text=Bienvenido%20a%20Mysip%20donde%20tenemos%20una%20solucion%20a%20tu%20alcance.">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};
