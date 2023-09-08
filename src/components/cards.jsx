import React from 'react';
import "./card.css";
import axios from 'axios';
function cards(title ,description) {
  return (
     <div className='card'>
     <h1>{title}</h1>
       <a> {description}</a>
       <div>
        <button className='btn'>Comprar ahora</button>
        </div>
       
    </div> 
  )
}

export default cards