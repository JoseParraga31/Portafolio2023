import React from 'react'
import "../assets/css/Button.css"
import flecha from "../assets/statics/flecha-correcta.png"
import { Link } from 'react-router-dom'
function Button() {
  return (
    <div>

        <Link className='btn__VerMas'>ver mas <span><img className='btn__flecha' src={flecha} alt="flecha" /></span></Link>

    </div>
  )
}

export default Button