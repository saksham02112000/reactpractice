import React, { useState } from "react";


function App() {

  const [name,setName]= useState("");
  const [lname,setLname]= useState("");
  const [finalname,setFinalname]= useState("");

  function firname(event){
      setName(event.target.value);
  }
  function lastname(event){
    setLname(event.target.value);
}
  function finalclick(event)
  {
    setFinalname(name+" "+lname);
    event.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {finalname} </h1>
      <form onClick={finalclick}>
        <input 
        onChange={firname} 
        name="fName" 
        placeholder="First Name"
        value={name} 
        />
        <input 
        onChange={lastname} 
        name="lName" 
        placeholder="Last Name" 
        value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
