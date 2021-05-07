import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

function Createcard(Contact){
  return (<Card
      key={Contact.id}
      name={Contact.name}
      img={Contact.imgURL}
      tel={Contact.phone}
      email={Contact.email}
       />
  )
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        {Contacts.map(Createcard)}
    </div>
    );
}

export default App;