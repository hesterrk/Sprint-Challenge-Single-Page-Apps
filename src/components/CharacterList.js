import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom';


export default function CharacterList(props) {
  
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results);

    })

    .catch(error => {
      console.error('Server Error', error);
    });
}

getCharacters();
}, []);



  return (
    <section className="character-list">
      <Link to='/'><button>Home</button></Link>
      <Link to='/search'><button>Search</button></Link>


      {character.map(character => (
    <CharacterCard key={character.id} character={character} />
))}
 </section>
 );
 } 
     
     //filter should be method//
     
     
     
     
      {/* {character.map(character => {
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
} */}

