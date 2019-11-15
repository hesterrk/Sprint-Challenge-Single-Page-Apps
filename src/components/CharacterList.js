import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";



export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data);

    })

    .catch(error => {
      console.error('Server Error', error);
    });
}

getCharacters();
}, []);



  return (
    <section className="character-list">
      {character.map(character => {
        return(
          <CharacterCard
          id={character.id}
          name={character.name}
          status={character.status}/>
        )

      })
      
    }
    </section>
  );
}
