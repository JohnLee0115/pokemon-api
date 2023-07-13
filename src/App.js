import './App.css';
import React, {useState} from 'react';


function App() {
  const [pokemonList, setPokemonList] = useState([])

  const FetchPokemon = (e) => {
    e.preventDefault();

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => {
        return response.json();
      }).then(response => {
        setPokemonList(response.results);
      }).catch(err=>{
        console.log(err);
      })
  }
  
  return (
    <div className="App">
      <button onClick={FetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map( (pokemon, i) => 
        <div className='flex'>
          <li key={i}>{pokemon.name}</li>
        </div>
        
        ) }
      </ul>
    </div>
  );
}

export default App;
