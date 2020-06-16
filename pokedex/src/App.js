import React from 'react';
import Logo from './components/Logo';
import CaughtPokemon from './components/CaughtPokemon';
import PokedexArrow from './components/PokedexArrow';
import BestPokemon from './components/BestPokemon';

function App() {
  return <div>
    <Logo/>
    <PokedexArrow/>
    <CaughtPokemon/>
    <BestPokemon/>
  </div>;
}

export default App;
