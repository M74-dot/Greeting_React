import React, { useState } from 'react'



const App = () => {

  const [name,setName] = useState("");

  const inputEvent = (event) => {
    let val = event.target.value;
    setName(val);
  }
  return (
    <>
      <h1>Hello {name}</h1>
      <input type="text" placeholder='Enter Your Name' defaultValue='' onChange={inputEvent}/><br /><br />
      <button>Submit Data </button>
    </>
  )
}

export default App