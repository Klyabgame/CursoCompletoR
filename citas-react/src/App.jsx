import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import { ListadoPacientes } from "./componentes/ListadoPacientes"
import { useEffect, useState } from "react"

function App() {
    const [pacientes, setpacientes] = useState([]);
    const [paciente, setpaciente] = useState({});

    useEffect(() => {
      const obtenerLS=()=>{
        const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [];

        setpacientes(pacientesLS);
      }
      obtenerLS();
    }, []);
    

    useEffect(() => {
      localStorage.setItem('pacientes',JSON.stringify(pacientes));
    }, [pacientes])
    

    const eliminarPaciente=(id)=>{
        /* console.log('eliminando paciente', id); */
        const pacientesActulizado=pacientes.filter(paciente=> paciente.id !==id);
        setpacientes(pacientesActulizado);
      }   

  return (
   <div className="container mx-auto">
      <Header  />
      <div className=" mt-12 md:flex">
        <Formulario 
        setpacientes= {setpacientes}
        pacientes= {pacientes}
        paciente={paciente}
        setpaciente={setpaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setpaciente={setpaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
   </div>
  )
}

export default App
