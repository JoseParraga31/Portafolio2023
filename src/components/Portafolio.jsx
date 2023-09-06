import React from 'react'
import "../assets/css/Portafolio.css"
import mail from "../assets/multimedia/images/IconoMail.svg"
import github from "../assets/multimedia/images/IconoGithub.svg"
import whatsapp from "../assets/multimedia/images/whatsapp1.png"
import DesarrolloWebCd from "../assets/multimedia/images/62ca0aef7ba5350024395a23.png"
import JsCd from "../assets/multimedia/images/63508b54252ed4000e6d5008.png"
import ReactCd from "../assets/multimedia/images/63dd3472e81391000e1db5b4.png"
import Oliver from "../assets/multimedia/images/OliverYSuPandilla.png"
import petShop from "../assets/multimedia/images/PetShopReact.png"
import { Link } from 'react-router-dom'
function Portafolio() {
  return (
    <>
      <div className='container'>
          <div className="SobreMi__Container">
                <h1 className="Portafolio__Titutlo">
                    Portafolio
                </h1>
            <div className="Portafolio__DatosSobreMi">
              <div className="Portafolio__Datos">
                <h3 className="datos__titulo">
                  Contacto
                </h3>
                <div className="iconContacto__container">
                  <a href="mailto:DevJoseparraga@gmail.com"><img className='iconContacto' src={mail} alt="mail" /></a>
                  <a href="https://github.com/JoseParraga31"><img className='iconContacto' src={github} alt="Github" /></a>
                  <a href="https://w.app/A24mSU"><img className='iconContacto' src={whatsapp} alt="Github" /></a>
                </div>
              </div> 
              <div className="Portafolio__SobreMI">
                    <h4 className="SobreMi__titulo">
                    Sobre Mi
                    </h4>
                  <div className="Datos__SobreMi">
                    <div className="DatosIdeomas__Container">
                      <div className="Datos__Container">
                        <h5 className="Nombre__titulo Margin">
                          Nombre y Apellido:
                        </h5>
                        <p className="NombreApellido__SobreMi Margin">
                          Jose Parraga
                        </p>
                      </div>
                      <ul className="Idiomas__SobreMi ">

                      <h5 className="Idiomas__titulo Margin">
                      Idiomas:
                      </h5>
                        <li className="Idioma__Item Margin">Español - Nativo</li>
                        <li className="Idioma__Item Margin">Ingles - Intermedio</li>
                      </ul>
                    </div>
                    <div className="Portafolio__Descripcion Margin">
                        <p className="Descripcion Margin">
                        Cuento con más de 10 años de experiencia liderando y formando equipos de trabajo en el area gastronomica. Como profesional soy perseverante, autodidacta y resolutivo, con tendencia a la autogestión. Cuento con excelentes habilidades sociales y de trabajo en equipo. Actualmente mis capacidades como desarrollador comprenden el manejo de las tecnologias de HTML5, CSS3, SCSS, GitHub, JavaScrip, React y FireBase.
                        </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
      <div className="container">
        <div className="Certificados__Container">
          <div className="Certificado__Card">
            <div className="Certificado__titulo">
              <h2 className="titulo">Certificado en desarrollo web</h2>
            </div>
            <div className="Certificado__img">
              <img className='img__certificado' src={DesarrolloWebCd} alt="DesarrolloWeb" />
            </div>
          </div>
          <div className="Certificado__Card">
            <div className="Certificado__titulo">
              <h2 className="titulo">Certificado en JavaScript</h2>
            </div>
            <div className="Certificado__img">
              <img className='img__certificado' src={JsCd} alt="JavaScript" />
            </div>
          </div>
          <div className="Certificado__Card">
            <div className="Certificado__titulo">
              <h2 className="titulo">Certificado en React</h2>
            </div>
            <div className="Certificado__img">
              <img className='img__certificado' src={ReactCd} alt="React" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Trabajos__container">
          <div className="Trabajos__Card">
            <div className="Trabajos__titulo">
              <h2 className="titulo__Trabajos">Web oliver y su pandilla</h2>
            </div>
            <div className="Trabajos__img">
              <a href="https://oliverysupandilla.vercel.app/" className="Link" >
                <img className='img__Trabajos' src={Oliver} alt="React" />
              </a>
            </div>
            <div className="Trabajos__Link">
              <Link href="https://oliverysupandilla.vercel.app/" className="Link" >Ir a la web</Link>
            </div>
          </div>   
            <div className="Trabajos__Card">
            <div className="Trabajos__titulo">
              <h2 className="titulo__Trabajos">Web PetShop</h2>
            </div>
            <div className="Trabajos__img">
              <a href="https://petshopparraga.netlify.app/ " className="Link" >
                <img className='img__Trabajos' src={petShop} alt="React" />
              </a>
            </div>
            <div className="Trabajos__Link">
              <Link  to="https://petshopparraga.netlify.app/ " className="Link" >Ir a la web</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portafolio