import { Link } from 'react-router-dom'

export default function Encabezado () {
return (
    <div>
      <h1>PROGRAMACION III</h1>  
      <ul>
      <li>
      <Link to= "/Inicio">INICIO </Link>
      </li>
      <li>
      <Link to= "/Contacto">CONTACTO </Link>
      </li>
      <li>
      <Link to= "/Productos">PRODUCTOS </Link>
      </li>
      </ul>
      <hr/>
    </div>    
)
}
