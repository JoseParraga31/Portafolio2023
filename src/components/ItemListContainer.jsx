import React from 'react'
import "../assets/css/ItemListContainer.css"
import Cards from './Cards'
function ItemListContainer() {



  return (
    <div>

        <div className="items__container">
            <div className="card1">
              <Cards></Cards>
            </div>
            <div className="card2">
              <Cards></Cards>
            </div>
            <div className="card2">
              <Cards></Cards>
            </div>
        </div>
        
    </div>
  )
}

export default ItemListContainer