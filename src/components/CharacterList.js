import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const[character, setCharacter] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState([]);

    //third slice of state to compare it against character name- only display what matches what we type in//

  const [matchCharacter, setMatchCharacter] = useState();
  


  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results)
        setFilterCharacter(response.data.results)
        console.log(character);  
        
      })

      .catch(err => {
        console.log(err)
      });


  }, []);


  //this useEffect passes in matchCharacter state as its argument, uses it in its dependency array because we want it to fire again every time another character is searched for

  useEffect(() => {
   search(matchCharacter)
  }, [matchCharacter])

//when we type in box, it will fire down and save on state
//event is the typing, the target is search box, value is the value of searchbox (what is in the box itself)

//This chnangeHandler function moniters what the user types into the form: whatever they type is set and saved on state: on the matchCharacter state

  function changeHandler(event) {
    setMatchCharacter(event.target.value)
  }



  //search function uses our data (set to our 1st state): filters through the data and accesses its 'name' property in the data and uses the method lowercase to put the names to lower case and to include our third state to lower case too 
  //then we are setting whatever the reslt of this is to filtercharacter state : updating filtercharacter state 

function search(matchCharacter) {
  const result = character.filter(card => card.name.toLowerCase().includes(matchCharacter.toLowerCase())
  
  )
  setFilterCharacter(result)
}


//map over and returning  the charactercard component- that will take a the info by recieving the props "card" that CL will pass down to it


  return (
    <section className="character-list">
      {/* //passing down the changeHandler function as prop to SF */}
      <SearchForm changeHandler = {changeHandler}/>
      <h2>{filterCharacter.map(card => {
        return <CharacterCard key={card.id}data={card} />
      }

      )}</h2>
    </section>
  );
}

