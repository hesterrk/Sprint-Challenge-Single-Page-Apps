import React, { useEffect, useState } from "react";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        getCharacters(response.data);

    })

    .catch(error => {
      console.error('Server Error', error);
    });
}

getCharacters();
}, []);



  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}


 
     
          
        
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}