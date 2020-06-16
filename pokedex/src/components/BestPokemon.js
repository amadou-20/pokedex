import React from 'react';

function BestPokemon(){ 

 const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
 return <div>
  <ul>
    {abilities.map((name) => {

      return (
        <li>{name}</li>
      )
    })}
  </ul>
</div>
}
export default BestPokemon;
