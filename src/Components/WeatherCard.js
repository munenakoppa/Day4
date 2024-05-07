import React from 'react';

import './WeatherCard.css';

function WeatherCard(props){
    return (
        <div class="column">
        <div class="card">
  
  <h1>{props.day}</h1>
  <p class="price">{props.temperature}</p>
  <p>{props.condition}</p>
  <p><button>Click for more Details</button></p>
</div>
</div>
    )
}


export default WeatherCard;