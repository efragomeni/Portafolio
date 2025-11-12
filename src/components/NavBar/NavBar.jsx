import React, { useEffect, useState } from "react";
import WhatsAppLogo from "../../../public/icons/WA.svg";

import "./navBar.css";
import { Hamburger } from "../Hamburger/Hamburger";

export const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // scrollea hacia abajo → se oculta el navbar.
        setVisible(false);
      } else {
        // scrollea hacia arriba o está cerca del top → se muestra el navbar.
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navBar ${visible ? "visible" : "oculta"}`}>
      <div>
        <img src="/stars.svg" alt="" />
        <p>Erika Fragomeni</p>
      </div>
      {/* Para PC */}
      <ul className={`menu-principal ${menuAbierto ? "abierto" : ""}`}>
        <li>
          <a href="#sobreMi">Sobre mi</a>
        </li>
        <li>
          <a href="#my-skill">Skills</a>
        </li>
        <li>
          <a href="#my-hobbies">Hobbies</a>
        </li>
        <li>
          <a href="#my-formacion">Formación</a>
        </li>
        <li>
          <a href="#mis-proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#">efragomeni@gmail.com</a>
        </li>
        <li>
          <a
            href="https://wa.me/5491140381507"
            target="_blank"
            class="contacto-whatsapp"
          >
            ¿Hablamos?
            <img src={WhatsAppLogo} alt="WhatsApp" />
          </a>
        </li>
      </ul>
      {/* Para Moviles */}
      <div className="hamburger" onClick={toggleMenu}>
        <Hamburger className="" />
      </div>
    </nav>
  );
};
