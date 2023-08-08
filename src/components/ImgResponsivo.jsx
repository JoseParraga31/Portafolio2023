import React from 'react'
import "../assets/css/ImgResponsivo.css"
import imgResponsive from "../assets/multimedia/images/Wavy_Bus-20_Single-07_preview_rev_1.png"
const ImgResponsivo = () => {
  return (
    <>
      <div className="imgResponsive__container">
          <img className="imgResponsive" src={imgResponsive} alt=" img" />
          <div>
            <h2 className='imgResponsivo__txt'>
              Diseños personaliozados <br></br> Full responsive <br></br> las tecnologias mas agiles de
              la actuialidad
            </h2> 
              <button className='btn__VerMas'>ver mas </button>
          </div>
      </div>
    </>
  )
}



export default ImgResponsivo
