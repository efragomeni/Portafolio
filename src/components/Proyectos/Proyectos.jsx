import "./proyectos.css";
import data from "../../assets/projects-data.json";

export const Proyectos = () => {
  let proyectos = data;

  const ProyectoCard = ({ proyecto, invertido }) => (
    <div
      className={`contenedor-proyectos-individual ${
        invertido ? "invertido" : ""
      }`}
    >
      <div className="contenedor-proyectos-individual-detalle-detalle">
        <h3>{proyecto.nombre}</h3>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.github} target="_blank">
          Github <img src="./src/assets/img/arrow.svg" alt="" />
        </a>
        <a href={proyecto.demo} target="_blank">
          Ver demo <img src="./src/assets/img/arrow.svg" alt="" />
        </a>
      </div>
      <div className="contenedor-proyectos-individual-img">
        <img src={proyecto.imagen} alt={proyecto.nombre} />
      </div>
    </div>
  );

  return (
    <section id="mis-proyectos">
      <div className="contenedor-proyectos">
        <h1>Mis proyectos</h1>
        {/* <div className="contenedor-proyectos-individual">
          <div className="contenedor-proyectos-individual-detalle-detalle">
            <h3>{proyectos[0].nombre}</h3>
            <p>{proyectos[0].descripcion}</p>
            <a
              href="https://github.com/efragomeni?tab=repositories"
              target="_blank"
            >
              Github <img src="./src/assets/img/arrow.svg" alt="" />
            </a>
          </div>
          <div className="contenedor-proyectos-individual-img">
            <img src={proyectos[0].imagen} alt="" />
          </div>
        </div> */}
        {/* {proyectos.map((p, i) => (
          <ProyectoCard key={i} proyecto={p} />
        ))} */}

        {proyectos.map((p, i) => (
          <ProyectoCard key={i} proyecto={p} invertido={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};
