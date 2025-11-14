import "./formacionAcademica.css";
import { Card } from "../Card/Card";

import logoBA from "../../assets/img/logoBA.png";
import logoAlura from "../../assets/img/alura_logo.png";
import { useState } from "react";

export const FormacionAcademica = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfCertificados, setPdfCertificados] = useState("");

  const abrirModal = (pdf) => {
    setPdfCertificados(`/certificados_academicos/${pdf}`);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setPdfCertificados("");
  };

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
            onClick={() => abrirModal("FullStack.pdf")}
          ></Card>
          <Card
            nombre="Diseño UI/UX"
            clase="formacionAcademica"
            imagen={logoBA}
            anioInicio={2022}
            anioFin={2023}
            onClick={() => abrirModal("UI-Ux.pdf")}
          ></Card>
          <Card
            nombre="Desarrollo Web Front-End"
            clase="formacionAcademica"
            imagen={logoAlura}
            anioInicio={2022}
            anioFin={2023}
            onClick={() => abrirModal("Alura.pdf")}
          ></Card>
        </div>
        {showModal && (
          <div className="modal-overlay" onClick={cerrarModal}>
            <div
              className="modal-contenido"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="cerrar-btn" onClick={cerrarModal}>
                X
              </span>
              <iframe
                src={pdfCertificados}
                width="100%"
                height="600px"
                title="Certificado"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
