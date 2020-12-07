import React from 'react';

const PokemonImage = ({pokemon}) => {
    return (
        <div>
            <img src={pokemon.sprites['front_default']} alt ="" />
        </div>
    )
}

export default PokemonImage