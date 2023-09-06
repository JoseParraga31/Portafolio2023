import React from 'react'
import "../assets/css/ButtonCards.css"
import { Link } from 'react-router-dom'

function ButtonCards(id) {
 
 console.log('====================================');
 console.log(id.id);
 console.log('====================================');

  return (
    <div>
        <Link to={`serviceDetail/${id.id}`} className='card__VerMas'><span className='card__txt'> ver mas</span></Link>
    </div>
  )
}

export default ButtonCards