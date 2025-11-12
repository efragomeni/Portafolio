import "./skills.css";
import { Card } from "../Card/Card";

/*.*.*.*.*  Imagenes para las skills  *.*.*.*.*/
import reactLogo from "../../assets/react.svg";
import htmlLogo from "../../assets/img/HTML5.svg";
import cssLogo from "../../assets/img/CSS3.svg";
import jsLogo from "../../assets/img/JS.svg";
import figmaLogo from "../../assets/img/FIGMA.svg";
import psLogo from "../../assets/img/PS.svg";
import mongoLogo from "../../assets/img/MONGO.svg";
import questLogo from "../../assets/img/QUESTION.svg";

export const Skills = () => {
  return (
    <section id="my-skill" className="skills">
      <div className="contenedor-skills">
        <h1>Skills</h1>
        <div className="contenedor-skills-cards uno">
          <Card
            nombre="HTML 5"
            clase="skill"
            imagen={htmlLogo}
            porcentaje="75"
          ></Card>
          <Card
            nombre="CSS 3"
            clase="skill"
            imagen={cssLogo}
            porcentaje="65"
          ></Card>
          <Card
            nombre="JavaScript"
            clase="skill"
            imagen={jsLogo}
            porcentaje="60"
          ></Card>
          <Card
            nombre="React"
            clase="skill"
            imagen={reactLogo}
            porcentaje="70"
          ></Card>
        </div>
        <div className="contenedor-skills-cards dos">
          <Card
            nombre="Figma"
            clase="skill"
            imagen={figmaLogo}
            porcentaje="80"
          ></Card>

          <Card
            nombre="Photoshop"
            clase="skill"
            imagen={psLogo}
            porcentaje="85"
          ></Card>

          <Card
            nombre="Mongo DB"
            clase="skill"
            imagen={mongoLogo}
            porcentaje="20"
          ></Card>
          <Card
            nombre="Proximamente"
            clase="skill"
            porcentaje="100"
            imagen={questLogo}
          ></Card>
        </div>
      </div>
    </section>
  );
};
