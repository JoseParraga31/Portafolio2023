import React from 'react'
import whatsappImg from "../assets/multimedia/images/whatsapp.png"
import "../assets/css/Whatsapp.css"
function WhatsappBtn() {
  return (
    <div>
        <a href="https://w.app/A24mSU" target='_blank' className="Whatsapp">
            <img src={whatsappImg} alt="whasatpp" className="imgWhatsapp" />
        </a>
    </div>
  )
}

export default WhatsappBtn