import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import { ListadoPacientes } from "./componentes/ListadoPacientes"
import { useState } from "react"

function App() {
    const [pacientes, setpacientes] = useState([]);

  return (
   <div className="container mx-auto">
      <Header  />
      <div className=" mt-12 md:flex">
        <Formulario 
        setpacientes= {setpacientes}
        pacientes= {pacientes}
        />
        <ListadoPacientes pacientes={pacientes}/>
      </div>
   </div>
  )
}

export default App
