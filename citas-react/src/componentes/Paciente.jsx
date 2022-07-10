import React from 'react'

export const Paciente = () => {
  return (
    <>
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
           <p className=' font-bold mb-3 text-gray-700 uppercase'> Nombre: {""}
             <span className=' font-normal normal-case'>Hook</span>
           </p>
           <p className=' font-bold mb-3 text-gray-700 uppercase'> Propietario: {""}
             <span className=' font-normal normal-case'>Franz</span>
           </p>
           <p className=' font-bold mb-3 text-gray-700 uppercase'> EMail: {""}
             <span className=' font-normal normal-case'>gavino_10@hotmail.es</span>
           </p>
           <p className=' font-bold mb-3 text-gray-700 uppercase'> Alta: {""}
             <span className=' font-normal normal-case'>12-04-1995</span>
           </p>
           <p className=' font-bold mb-3 text-gray-700 uppercase'> Sintomas: {""}
             <span className=' font-normal normal-case'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minus tempora praesentium nemo fuga. Autem, sint ut maiores quibusdam eaque quia soluta placeat, quas esse dolores pariatur unde omnis numquam?</span>
           </p>
        </div>
    </>
  )
}
