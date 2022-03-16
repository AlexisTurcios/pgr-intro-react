import Inicio from './Inicio';
import Encabezado from './Encabezado';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Contacto from './Contacto';
import Productos from './Productos';

function App() {
  //JSX: mexcla de HTML y JavaScript
  return (
    <>
    <Encabezado />
    <Routes>
    <Route path =  '/' element = {<Inicio/>}/>
    <Route path =  '/Contacto' element = {<Contacto/>}/>
    <Route path =  '/Producto' element = {<Productos/>}/>
    </Routes>
    </>
  );
}

export default App;
