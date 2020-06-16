import React from 'react';

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <div>
   <p>caught 0 pokemon on:</p>{date}

  </div>;
}

export default CaughtPokemon;
