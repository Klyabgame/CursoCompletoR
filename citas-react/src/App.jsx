import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import { ListadoPacientes } from "./componentes/ListadoPacientes"

function App() {

  return (
   <div className="container mx-auto">
      <Header />
      <div className=" mt-12 md:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
   </div>
  )
}

export default App
