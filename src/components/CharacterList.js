import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const[character, setCharacter] = useState([]);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results)
        console.log(character);  
        
      })

      .catch(err => {
        console.log(err)
      });


    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>{character.map(card => {
        return <CharacterCard />
      }
      
      )}</h2>
    </section>
  );
}
