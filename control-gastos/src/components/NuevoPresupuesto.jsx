import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto,setpresupuesto}) => {

    const [mensaje, setmensaje] = useState("");

    const handlePresupuesto=(a)=>{
        a.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto)<0){
            setmensaje("no es un Presupuesto valido");
        }else{
            setmensaje("si es un presupuesto valido");
        }
    }


    const handleChange=(e)=>{
        setpresupuesto(e.target.value);
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} action="" className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir presupuesto</label>
                <input type="text" 
                className='nuevo-presupuesto'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={handleChange}

                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto