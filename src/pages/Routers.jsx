// import '../App.css'
import { GrMenu } from 'react-icons/gr'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
export const Routers = () => {

 const [menuVisible, setMenuVisible] = useState(false);
 const menu_mobile = ()=> {
  setMenuVisible(!menuVisible)
 }
  return (
    <>
        <header className="header">
        <nav className="nav">
            <img src="/img/Panaderia_Felíz.png" alt="logo"/>
          <button className="nav-toggle" aria-label={menuVisible ? 'Cerrar menú' : 'Abrir menú'}
            onClick={menu_mobile}>
            <GrMenu />
          </button>
          <ul className={`nav-menu ${menuVisible ? 'nav-menu_visible' : ''}`}>
            <li className="nav-menu-item">
              <Link to="/" className="nav-menu-link nav-link">Inicio</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Servicios" className="nav-menu-link nav-link">Servicios</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Nosotros" className="nav-menu-link nav-link">Nosotros</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Productos" className="nav-menu-link nav-link">Productos</Link>
            </li>
          </ul>
        </nav>
        </header>
        <Outlet/>
    </>
  )
}

export default Routers