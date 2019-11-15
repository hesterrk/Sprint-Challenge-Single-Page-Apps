import React from "react";
import CharacterList from './CharacterList';


export default function CharacterCard(character) {
return (
<div>
     <h3>Id: {character.id}</h3>
     <p>Name:{character.name}</p>
     <p>Status:{character.status}</p>
   </div>
    

  ); 
}


 
  