import "./formacionAcademica.css";
import { Card } from "../Card/Card";

import logoBA from "../../assets/img/logoBA.png";
import logoAlura from "../../assets/img/alura_logo.png";

export const FormacionAcademica = () => {
  return (
    <section id="my-formacion">
      <div className="contenedor-formacion">
        <h1>Formación Académica</h1>
        <div className="contenedor-formacion-card">
          <Card
            nombre="Desarrollo Web Full-Stack Python"
            clase="formacionAcademica"
            imagen={logoBA}
            anioInicio={2022}
            anioFin={2022}
          ></Card>
          <Card
            nombre="Diseño UI/UX"
            clase="formacionAcademica"
            imagen={logoBA}
            anioInicio={2022}
            anioFin={2023}
          ></Card>
          <Card
            nombre="Desarrollo Web Front-End"
            clase="formacionAcademica"
            imagen={logoAlura}
            anioInicio={2022}
            anioFin={2023}
          ></Card>
        </div>
      </div>
    </section>
  );
};
