import React from 'react'
import Cards from './Cards'
import "../assets/css/ItemList.css"
function ItemList({serv}) {
console.log('====================================');
console.log(serv);
console.log('====================================');


return (
    <div className='items'>
        {serv.map( (s) => {
        return( <Cards
            key={s.id}
            {...s}    
            ></Cards>)    
    })}

    </div>
    )}                                                                      


export default ItemList