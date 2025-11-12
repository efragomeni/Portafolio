import React from "react";
import fotoPerfil from "../../assets/img/fotoPerfil.png";
import arrow from "../../assets/img/arrow.svg";

import "./presentacion.css";

export const Presentacion = () => {
  return (
    <section className="presentacion">
      <div className="contenedor-presentacion">
        <div id="sobreMi" className="contenedor-presentacion-texto">
          <h1>
            Hola, mi nombre es <span>Erika Fragomeni</span>
          </h1>
          <p>
            <p>
              Soy desarrolladora en formación, con estudios y cursos en el área
              de IT, actualmente terminando el terciario en Desarrollo de
              Software. Me considero una persona muy curiosa: cuando algo me
              apasiona, investigo, practico y aprendo hasta perder la noción del
              tiempo. Disfruto crear proyectos personales y colaborar con
              emprendimientos, donde fui ganando experiencia práctica en
              desarrollo y diseño. Más adelante me gustaría continuar con una
              licenciatura, aunque todavía no decidí en cuál enfocarme.
            </p>
          </p>
        </div>
        <div className="contenedor-presentacion-img">
          <img
            src={fotoPerfil}
            alt="Erika Fragomeni"
            className="fotoPerfil"
          />
        </div>
      </div>
      <div className="contenedor-presentacion-redes">
        <ul>
          <li>
            <a
              href="https://github.com/efragomeni?tab=repositories"
              target="_blank"
            >
              Github <img src={arrow} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erika-fragomeni/"
              target="_blank"
            >
              Linkedin <img src={arrow} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
