import "./hobbies.css";
import { Card } from "../Card/Card";

// import photoImg from "../../assets/img/Photo.svg";
import skateImg from "../../assets/img/Skate.svg";
import photoImg from "../../assets/img/Camera.svg";
import dogImg from "../../assets/img/dog.svg";


export const Hobbies = () => {
  return (
    <section className="hobbies">
      <div className="contenedor-hobbies">
        <h1 id="my-hobbies">Hobbies</h1>
        <div className="contenedor-hobbies-cards">
          <Card nombre="Patinar" clase="hobbie" imagen={skateImg} ></Card>
          <Card nombre="Fotografia" clase="hobbie" imagen={photoImg}></Card>
          <Card nombre="Mis perros" clase="hobbie" imagen={dogImg}></Card>
              </div>
      </div>
    </section>
  );
};
