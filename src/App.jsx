import "./App.css";

// Componentes
import { NavBar } from "./components/NavBar/NavBar";
import { Presentacion } from "./components/Presentacion/Presentacion";
import { Skills } from "./components/Skills/Skills";
import { Hobbies } from "./components/Hobbies/Hobbies";
import { FormacionAcademica } from "./components/FormacionAcademica/FormacionAcademica";
import { Proyectos } from "./components/Proyectos/Proyectos";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Presentacion></Presentacion>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <FormacionAcademica></FormacionAcademica>
      <Proyectos></Proyectos>

      <section className="formacionAcad"></section>
      <section className="experiencia"></section>
      <section className="contacto"></section>
    </>
  );
}

export default App;
