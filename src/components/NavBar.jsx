import React from 'react'

export default function NavBar() {
  return (
    <div>
        <header className='NavBar--Container'>
                <div className="Navbar--logoContainer">
                    <div className="NavBar--hexagono">
                    <img className='Navbar--logo' src="" alt="" />
                    </div>
                </div>
            <nav className="NavBar">
                <ul className="NavBar--List">
                    <li className="NavBar--item">
                        <a className="NavBar--links" href="#">Home</a> 
                    </li>
                    <li className="NavBar--item">
                        <a className="NavBar--links" href="#">PortFolio</a> 
                    </li>
                    <li className="NavBar--item">
                        <a className="NavBar--links" href="#"> Servicios</a>                      
                    </li>
                    <li className="NavBar--item">
                        <a className="NavBar--links" href="#">Sobre Mi</a>   
                    </li>
                    <li className="NavBar--item">
                        <a className="NavBar--links" href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
