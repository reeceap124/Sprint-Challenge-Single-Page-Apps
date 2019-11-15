import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log('there was an error', err)
      })
    }
    
    getCharacters();
    
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map(character => (
        <CharacterCard key={character.id} name={character.name}/>
      ))
      }
    </section>
  );
}
