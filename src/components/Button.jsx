import React from 'react'
import "../assets/css/Button.css"
import flecha from "../assets/statics/flecha-correcta.png"
function Button() {
  return (
    <div>

        <button className='btn__VerMas'>ver mas <span><img className='btn__flecha' src={flecha} alt="flecha" /></span></button>

    </div>
  )
}

export default Button