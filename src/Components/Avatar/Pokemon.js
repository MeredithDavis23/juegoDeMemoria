import React, { useEffect } from 'react';
import './Avatar.css'

const PokemonImage = ({poke}) => {
    useEffect(() => {console.log(poke)})
    return (
        <div>
            <img src={poke.sprites['front_default']} onClick={(e) => {
    e.preventDefault();
    window.location.href='/game'}} alt =""
    />
        </div>
    )
}

export default PokemonImage

// onClick={(e) => {
//     e.preventDefault();
//     window.location.href='/game'}}