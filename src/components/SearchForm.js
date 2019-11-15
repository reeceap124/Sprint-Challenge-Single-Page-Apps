import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('second', res.data.results)
        setList(res.data.results.map(val => val.name))
      })
      .catch(err => {
        console.log('there was an error', err)
      })
    }
    
    getCharacters();
    
  }, []);




  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = list.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

const handleChange = e => {
    setSearchTerm(e.target.value);
  };




  return (
    <section className="character-list">
      
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
