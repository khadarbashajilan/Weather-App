import React from 'react'


const Info = (props) => {
    console.log(props);
  return (
    <div className='maincard'>
      <h2>{props.weatherdata.name} {props.weatherdata.icon}</h2>
      <div className='data'>
      <p>Temperature : {props.weatherdata.temp}℃</p>
      <p>Humidity : {props.weatherdata.humidity}%</p>
      <p>Min Temp : {props.weatherdata.min_temp}℃</p>
      <p>Max Temp : {props.weatherdata.max_temp}℃</p>
      <i>The weather can be described as {props.weatherdata.feels} and feels like {props.weatherdata.temp}℃</i>
      </div>
    </div>
  )
}

export default Info
