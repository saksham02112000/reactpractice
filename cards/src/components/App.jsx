import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function Createcard(details)
{
  return(
    <Card
    id={details.id}
    emoji={details.emoji}
    name={details.name}
    meaning={details.meaning}
    />
  )
};


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(Createcard)}

      </dl>
    </div>
  );
}

export default App;
