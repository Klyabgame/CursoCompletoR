import React, {  useEffect, useState } from 'react'
import { Error } from './Error';

const Formulario = ({pacientes,setpacientes, paciente, setpaciente}) => {
  const [nombre, setnombre] = useState('');
  const [propietario, setpropietario] = useState('');
  const [email, setemail] = useState('');
  const [alta, setalta] = useState('');
  const [sintomas, setsintomas] = useState('');

  const [error, seterror] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setnombre(paciente.nombre);
      setpropietario(paciente.propietario);
      setemail(paciente.email);
      setalta(paciente.alta);
      setsintomas(paciente.sintomas);
    }

  }, [paciente])
  
  
  
  const crearId=()=>{
    const random=Math.random().toString(36).substring(2);
    const datee=Date.now().toString(36);

    return random+datee;
  }
  
  const handlesubmit=(a)=>{
    a.preventDefault();
    if ([nombre,propietario,email,alta,sintomas].includes('')) {
      seterror(true)
      return;
    }
      seterror(false);
      const objetousuario={
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }
      if (paciente.id) {
        //editando registro
        objetousuario.id=paciente.id

        const pacientesActualizados=pacientes.map(pacienteState=>pacienteState.id===paciente.id ? objetousuario : pacienteState)

        setpacientes(pacientesActualizados);
        setpaciente({});

      } else{
        //nuevo registro
        objetousuario.id=crearId();
        setpacientes([...pacientes,objetousuario]);
      }

      
      setnombre('');
      setpropietario('');
      setemail('');
      setalta('');
      setsintomas('');

  }
  return (
    <div className=" w-1/2">
      <h1 className=' font-black text-3xl text-center'>Seguimientos Paicientes</h1>
      <p className=' text-lg mt-5 text-center mb-10'> Añada pacientes y {''} <span className=' text-indigo-600 font-bold '>Administralos</span></p>
      <form onSubmit={handlesubmit} action="" className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error  mensaje="TODOS LOS CAMPOS SON OBLIGATORIOS"/>}
          <div className="mb-5">
            <label htmlFor="mascota" className=' block text-gray-700 uppercase font-bold'>Mascota</label>
            <input type="text" id='mascota' value={nombre} onChange={(e)=>setnombre(e.target.value)} placeholder='nombre de la mascota' className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className=' block text-gray-700 uppercase font-bold'>Propietario</label>
            <input type="text" id='propietario' value={propietario} onChange={(e)=>setpropietario(e.target.value)}  placeholder='nombre del propietario' className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className=' block text-gray-700 uppercase font-bold'>Email</label>
            <input type="email" id='email' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Ingrese su Correo' className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className=' block text-gray-700 uppercase font-bold'>ALTA</label>
            <input type="date" id='alta'  value={alta} onChange={(e)=>setalta(e.target.value)}  className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className=' block text-gray-700 uppercase font-bold'>sintomas</label>
            <textarea id="sintomas" value={sintomas} onChange={(e)=>setsintomas(e.target.value)}  className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder='Describe los sintomas'></textarea>
          </div>
          <input type="submit"  className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" value={paciente.id?'Editar Paciente' : 'Agregar Paciente'}/>
      </form>
    </div>
  )
}

export default Formulario
