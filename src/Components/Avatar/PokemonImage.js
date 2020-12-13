import React from 'react';
import './Avatar.css'

const PokemonImage = ({poke, handleClick}) => {
    return (
        <div>
            <img src={poke.sprites['front_default']} onClick={(e) => {
    // e.preventDefault();
    handleClick(e, poke.sprites['front_default']) }}
    alt =""
    />
        </div>
    )
}

export default PokemonImage
