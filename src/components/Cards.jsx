import React from 'react'
import ButtonCards from './ButtonCards';
import "../assets/css/Cards.css"
function Cards( serv ) {
      
    console.log('====================================');
    console.log(serv);
    console.log('====================================');
  

  return (
    <div>
      <div className="card__container">
        <div className="card__img">
          <img src={serv.img} alt={serv.titulo} className="img" />
        </div>
     
        <div className="card__tittle">
          <h2 className="tittle">
          {serv.titulo}
          </h2>
        </div>
        <div className="card__descripcion card__descripcion--adds">
          <p className="descripcion">
          {serv.descripcion}
          </p>
        </div>
        <div className="card__button">
          <ButtonCards id={serv.id} ></ButtonCards>
        </div>
      </div>
    </div>
  )
}

export default Cards