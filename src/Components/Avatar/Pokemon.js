import React from 'react';
import './Avatar.css'

const PokemonImage = ({poke}) => {
    return (
        <div className>
            <img src={poke.sprites['front_default']} alt =""
             onClick={(e) => {
                e.preventDefault();
                window.location.href='/game'}}/>
        </div>
    )
}

export default PokemonImage