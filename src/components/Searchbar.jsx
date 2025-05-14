import React, { useState } from 'react'


    const Searchbar = (props) => {
    let [city, setcity] = useState('');
   
    const handlechange=(e)=>{
        setcity(e.target.value);
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        props.fetch(city);
        setcity('');
    }

  return (
    <>
    <form onSubmit={handlesubmit}>
      <h4>City</h4>
      <input placeholder='Enter a city name' aria-label='city' type="text" value={city} onChange={handlechange}  required/>
      <button >Search</button>
    </form>
    </>
  )
}

export default Searchbar
