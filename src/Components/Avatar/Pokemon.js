import React, { useEffect } from 'react';
import './Avatar.css'

const PokemonImage = ({poke, handleClick}) => {
    useEffect(() => {console.log(poke)})
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

// onClick={(e) => {
//     e.preventDefault();
//     window.location.href='/game'}}