import React, { useState } from 'react'

    const Searchbar = (props) => {
    let [city, setcity] = useState('');
   
    const handlechange=(e)=>{
        setcity(e.target.value);
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(city);
        props.fetch(city);
        setcity('');
    }

  return (
    <>
    <form onSubmit={handlesubmit} className='flex flex-col items-center gap-2 '>
      <h4 className='me-145'>City</h4>
      <input placeholder='Enter a city name' aria-label='city' type="text" className='border-2 rounded-md px-2 py-0.5 w-150' value={city} onChange={handlechange}  required/>
      <button className='border-2 rounded-md px-2 py-0.5 me-133'>Search</button>
    </form>
    </>
  )
}

export default Searchbar
