import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <form>
    <h1 className='especial'>CONTACTO</h1>

    <label for = "email"> Correo Electronico </label>
    <br/>
    
    <input id ="email" type = "email" required /> 
    <br/><br/>

    <label for = "mensaje"> Mensaje </label>
    <br/>
    <textarea id ="mensaje" ></textarea>
    <br/><br/>

    <button type ="button" >enviar</button>
    </form>
  )
}

export default Contacto