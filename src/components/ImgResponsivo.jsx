import React from 'react'
import "../assets/css/ImgResponsivo.css"
import imgResponsive from "../assets/multimedia/images/Wavy_Bus-20_Single-07_preview_rev_1.png"
import Button from './Button'
const ImgResponsivo = () => {
  return (
    <>
      <div className="imgResponsive__container">
        <div className="bg2">
            <img className="imgResponsive" src={imgResponsive} alt=" img" />
            <div>
              <h2 className='imgResponsivo__txt'>
                Diseños personaliozados <br></br> Full responsive <br></br> las tecnologias mas agiles de
                la actuialidad
              </h2> 
              <div className="btn__container">
                <Button></Button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}



export default ImgResponsivo
