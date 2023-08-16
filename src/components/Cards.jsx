import React from 'react'
import Button from './Button'

function Cards() {
  return (
    <div>
      <div className="card__container">
        <div className="card__img">
          <img src="" alt="" className="img" />
        </div>
      </div>
      <div className="card__tittle">
        <h4 className="tittle">

        </h4>
      </div>
      <div className="card__descripcion">
          <p className="descripcion">

          </p>
      </div>
      <div className="card__button">
        <Button></Button>
      </div>
    </div>
  )
}

export default Cards