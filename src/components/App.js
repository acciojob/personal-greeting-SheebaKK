
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");

  const handleChange =(e)=>{

    setName(e.target.value);
  }
  return (
    <div>
      Enter your name:<br />
        <input type="text" onChange={handleChange} value={name}/>
        <br />
        {name ? <>Hello {name}!</>:""}
    </div>
  )
}

export default App
