import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [datos, setDatos] = useState({nombre:'', codigo:''})
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleChangeNombre = (event) => setNombre(event.target.value.trim());  
  const handleChangeCodigo = (event) => setCodigo(event.target.value.trim());

  const handleIngresar = () => {
    let validacionInput1 = nombre.length > 3;
    let validacionInput2 = codigo.length >= 6;
    
    if(validacionInput1 && validacionInput2){
      setDatos({nombre:nombre, codigo:codigo});
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
    
  }

  return (
    <>
    <div style={{display:'flex',flexDirection: 'column', backgroundColor:'gray'}}>
      <input type="text" placeholder='Nombre' style={{marginBottom: '10px'}}onChange={handleChangeNombre}/>
      <input type="text" placeholder='Codigo ISBN' onChange={handleChangeCodigo}/>
      <button style={{backgroundColor:"green", marginTop: '10px'}}onClick={handleIngresar}> Ingresar </button>
    </div>
      {show ?
      <>
        <Card datos={datos}/>
      </>
      :
      null
      }
      {error && <h3 style={{ color: 'red'}}>Por favor chequea que la información sea correcta</h3>}


      
    </>
  )
}

export default App
