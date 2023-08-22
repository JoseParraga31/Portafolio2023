import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
        <header className='NavBar--Container'>
            <Link to= "/Home">
                <div className="Navbar--logoContainer">
                    <div className="NavBar--hexagono">
                    <img className='Navbar--logo' src="" alt="" />
                    </div>
                </div>
            </Link>
            <nav className="NavBar">
                <ul className="NavBar--List">
                    <li className="NavBar--item">
                        <Link to="/Home" className="NavBar--links" href="#">Home</Link> 
                    </li>
                    <li className="NavBar--item">
                        <Link to="/SobreMi" className="NavBar--links" href="#">Sobre Mi</Link> 
                    </li>
                    {/* <li className="NavBar--item">
                        <a className="NavBar--links" href="#"> Servicios</a>                      
                    </li> */}
                    <li className="NavBar--item">
                        <Link to="/portafolio" className="NavBar--links" href="#">Portafolio</Link>   
                    </li>
                    {/* <li className="NavBar--item">
                        <a className="NavBar--links" href="#">Contacto</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    </div>
    )
}
