import React from 'react';
import bimg from '../images/pizza.jpeg';
function MenuItem({image,name,price}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${bimg})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem;