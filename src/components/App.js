
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");

  const handleChange =(e)=>{

    setName(e.target.value);
  }
  return (
    <div>
      <p>Enter your name: </p>
        <input type="text" onChange={handleChange} value={name}/>
        <br />
        <p>{name ? <p>Hello {name}!</p>:""}</p>
    </div>
  )
}

export default App
