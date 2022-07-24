import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setpresupuesto] = useState(2000)

  return (
    <>
      <Header 
      presupuesto={presupuesto}
      setpresupuesto={setpresupuesto}
      />
    </>
  )
}

export default App
