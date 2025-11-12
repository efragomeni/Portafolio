// import { useState } from "react";
// import "./card.css";

// export const Card = ({ nombre, imagen, clase }) => {
//   const [voltear, setVoltear] = useState(false);

//   if (clase === "skill") {
//     return (
//       <div
//         className={`contenedor-card skill ${voltear ? "voltear" : ""}`}
//         onClick={() => setVoltear(!voltear)}
//       >
//         <div className={`contenedor-card skill ${!voltear ? "frente":""}`}>

//           <img src={imagen} alt={nombre} />
//           <h3>{nombre}</h3>
//         </div>
//         <div className={`contenedor-card skill ${voltear ? "dorso":""}`}>

//           <img src={imagen} alt={nombre} />
//           <h3>{nombre}</h3>
//         </div>

//       </div>
//     );
//   } else {
//     return (
//       <div className="contenedor-card">
//         <img src={imagen} alt={nombre} />
//         <h3>{nombre}</h3>
//       </div>
//     );
//   }
// };
import { useState } from "react";
import "./card.css";
import { CirculoProgreso } from "../CirculoProgreso/CirculoProgreso";

export const Card = ({
  nombre,
  imagen,
  clase,
  porcentaje,
  anioInicio,
  anioFin,
}) => {
  const [voltear, setVoltear] = useState(false);

  if (clase === "skill") {
    return (
      <div
        className={`contenedor-card skill ${voltear ? "voltear" : ""}`}
        onClick={() => setVoltear(!voltear)}
      >
        <div className="contenedor-card-inner">
          {/* Frente */}
          <div className="card-frente">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
          </div>

          {/* Dorso */}
          <div className="card-dorso">
            {/* <p>{`${nivel}`}</p> */}
            <CirculoProgreso porcentaje={`${porcentaje}`}></CirculoProgreso>
          </div>
        </div>
      </div>
    );
  }

  // Caso hobbie
  if (clase === "hobbie") {
    return (
      <div className="contenedor-card hobbie">
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
      </div>
    );
  }

  // Caso formacion
  if (clase === "formacionAcademica") {
    return (
      <div className="contenedor-card formacionAcademica">
        <img src={imagen} alt={nombre} />
        <h3>{nombre}</h3>
        <p>
          {anioInicio} - {anioFin}
        </p>
      </div>
    );
  }

  // Caso normal
  return (
    <div className="contenedor-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
    </div>
  );
};
