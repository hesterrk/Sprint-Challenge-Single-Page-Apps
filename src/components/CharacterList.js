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
        return <CharacterCard data={card} />
      }

      )}</h2>
    </section>
  );
}

//saved returning data from axios into state
//map over and we make it return the charactercard component- that will take a sliece of information by passing props "card"
//the card in our map loops over 1st, 2nd etc.. 
//card is a variable as it changes(we put it in curely because of this)- 1st is 1st eleemnt, then second the third eleemtn//
//whatever is in card- give me whats in it
