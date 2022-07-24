import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto,setpresupuesto}) => {
  return (
    <header>
        <h1>planificador de gastos</h1>
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        />
    </header>
  )
}

export default Header