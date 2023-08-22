import React from 'react'
import "../assets/css/Footer.css"
import copy from "../assets/multimedia/images/simbolo-de-copyright.png"
function Footer() {
  return (
    <div className="footer">
        <p className='CopyR' ><img className='imgC' src={copy}></img>CopyRight DevJoseParraga 2023<img className='imgC' src={copy}></img></p>
    </div>
  )
}

export default Footer