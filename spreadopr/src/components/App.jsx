import React, { useState } from "react";

function App() {
  const [text,addText]= useState("");
  const [notes,addNote]= useState([]);
  function addState(event)
  {
    addText(event.target.value)
  }
  function addNotes()
  {
    addNote((prevItems) => {
      return(
        [...prevItems,text]
      )
    })
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={addState}
        type="text" 
        value={text} 
        />
        <button onClick={addNotes}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
           {notes.map((note) => <li>{note}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
