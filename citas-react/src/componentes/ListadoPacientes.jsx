
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes, setpaciente,eliminarPaciente}) => {


  
  
  return (
    <div className=' md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
      {pacientes&& pacientes.length? (
        <>
            <h2 className=' font-black text-3xl text-center'>PACIENTES</h2>
            <p className='text-xl mt-5 text-center mb-10'>
              ADMINISTRA TUS {""}
              <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
            {
              pacientes.map(paciente=>(
                < Paciente key={paciente.id} 
                paciente={paciente}
                setpaciente={setpaciente}
                eliminarPaciente={eliminarPaciente}
                />
              ))
            }
        </>
      ): (
        <>
            <h2 className=' font-black text-3xl text-center'>NO HAY PACIENTES</h2>
            <p className='text-xl mt-5 text-center mb-10'>
             Agrega tus pacientes {""}
              <span className='text-indigo-600 font-bold'>y podras verlos aqui</span>
            </p>
        </>

      )}
        
        
    </div>
  )
}
