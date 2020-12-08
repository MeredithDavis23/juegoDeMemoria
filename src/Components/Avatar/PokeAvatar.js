import React from 'react';
import './Avatar.css'
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }
 

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((data) => 
            this.setState({
                pokemon: data.results.url
            })
        )
        .catch((error) => console.log("parsing error", error));

        this.randomize();
        }

        randomize() {
            const randomPokemon = Math.floor(Math.random() * this.pokemon.length)
            return this.pokemon[randomPokemon]
        }

    componentDidUpdate() {
        console.log(this.state.pokemon)
    }
    render() {
 
        return (
            <div className="avatars" >
            <h1 className="escoge">¡Escoge tu avatar!</h1>
            <div className="avatar-buttons">
                {this.state.pokemon.map((pokemon, index) =>
                <img 
                key={index}
                // onClick={this.addAvatar}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/game'
                }}
                pokemon={pokemon}
                src={pokemon.sprites.front_default}
                alt=""
                />
                )}
            </div>
        </div>
        )
    }
}


export default Avatar


// const getPokemon = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
//     .then(res => res.json())
//     .then(data => {
//         let random = Math.floor(Math.random()*20);
//         return fetch(data.results[random].url)
//     })
//     .then(res => res.json())
//     .then(data => {
//         pokemon.push(data)
//         console.log(pokemon);
//     })
//     .then(data => {
//         pokemonData = data;
      
//         pic.setAttribute("src", `${pokemon[0].sprites.front_default}`);
      
//     })
// }