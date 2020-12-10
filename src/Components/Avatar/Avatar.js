import React from 'react';
import './Avatar.css'
import PokemonImage from './Pokemon'
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [], 
            pokemonListings: [], 
            avatarPic: ''
        }
    }

 

    componentDidMount() {
        this.makePokemon()
        }

        makePokemon() {
            let url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if(data) {
                this.setState({
                pokemon: data.results}, () => {
                    this.state.pokemon.map(pokemon => {
                        fetch(pokemon.url)
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                var temp = this.state.pokemonListings
                                temp.push(data)
                                this.setState({pokemon: temp})
                            }
                        })
                    })
                })
            }
        })
        .catch((error) => console.log("parsing error", error));
        }

        handleClick = (e, pokeImage) => {
            console.log(pokeImage)
        
            
            this.setState({
                   avatarPic: pokeImage
            })
            window.location.href='/game'
        }
        
        randomize() {
            const randomPokemon = Math.floor(Math.random() * 10)
            return this.pokemon[randomPokemon]
        }
    render() {
        const {pokemonListings} = this.state
        const pokeList = pokemonListings.map((poke, index) => {
            return (<PokemonImage handleClick={this.handleClick} poke={poke} />)
        })
        return (
            <div>
            <h1 className="escoge">¡Escoge tu avatar!</h1>
            <button className="back-button" onClick={(e) => {
                e.preventDefault();
                window.location.href='/'}}><span>⮨</span> Regresar</button>
            <div className="avatars" >
            <div className="pokemon">
               {pokeList}
            </div>
        </div>
        </div>
        )
    }
}


export default Avatar









// import React from 'react';
// // import styles from './Avatar.css'
// // import { useHistory } from "react-router-dom";
// import ironman from './ironman.png'
// import superman from './superman.png'
// import frankenstein from './frankenstein.png'
// import supergirl from './supergirlPink.png'
// import unicorn from './unicorn.png'
// import kitty from './kitty.png'
// import avenger from './avenger (5).png'
// import wonderwoman from './wonderwoman.png'
// import './Avatar.css'
// // import src from '*.bmp';





// class Avatar extends React.Component {
//     constructor(props) {
//         super(props);

//     this.state = {
//             avatars: [
//                 {
//                     avatarId: 0, 
//                     name: "Ironman", 
//                     src: ironman

//                 }, 
//                 {
//                     avatarId: 1, 
//                     name: "Superman", 
//                     src: superman

//                 }, 
//                 {
//                     avatarId: 2, 
//                     name: "Frankenstein", 
//                     src: frankenstein

//                 }, 
//                 {
//                     avatarId: 3, 
//                     name: "Supergirl", 
//                     src: supergirl

//                 }, 
//                 {
//                     avatarId: 4, 
//                     name: "Unicorn", 
//                     src: unicorn

//                 }, 
//                 {
//                     avatarId: 5, 
//                     name: "Avenger", 
//                     src: avenger

//                 }, 
//                 {
//                     avatarId: 6, 
//                     name: "Kitty", 
//                     src: kitty

//                 }, 
//                 {
//                     avatarId: 7, 
//                     name: "Wonder Woman", 
//                     src: wonderwoman

//                 }
//             ]
//     }
//     }

// //********************** HELPFUL FOR REDIRECT TO ANOTHER PAGE IMMEDIATELY/
//     // onClick={window.location.href='/game'}

//     addAvatar = (e) => {
//         e.preventDefault();
//         this.setState({
//             avatar: this.avatars.avatarId, 
//             src: this.avatars.src
//         })
//         // this.props.avatar(this.state.avatar)
//     }


//     // addAvatar = (e) => {
//     // // e.preventDefault();
//     // // this.props.avatar(this.state.avatar)
//     // console.log('add')
// // }

//     render() {
 
//         return (
//             <div className="avatars" >
//             <h1 className="escoge">¡Escoge tu avatar!</h1>
//             <div className="avatar-buttons">
//                 {this.state.avatars.map((avatar, avatarId) =>
//                 <img 
//                 key={avatarId}
//                 // onClick={this.addAvatar}
//                 onClick={(e) => {
//                     e.preventDefault();
//                     window.location.href='/game'
//                 }}
//                 avatar={avatar}
//                 src={avatar.src}
//                 alt=""
//                 />
//                 )}
//             </div>
//         </div>
//         )
//     }
// }

// export default Avatar

// eslint-disable-next-line 
{/* <button onClick={this.addAvatar}>
    <img 
    className="ironman"
    src={ironman}
    alt="ironman"
    onClick={this.addAvatar} />
</button> */}

// eslint-disable-next-line 
              {/* <img 
                className="avatar-pic"
                src={ironman}
                alt="ironman"
                onClick={this.addAvatar} />
            <img 
            className="avatar-pic"
            src={superman}
            alt="superman"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={avenger}
            alt="avenger" 
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img className="avatar-pic"
            src={frankenstein}
            alt="frankenstein"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={kitty}
            alt="kitty"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="avatar-pic"
            src={supergirl}
            alt="supergirl"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={unicorn}
            alt="unicorn"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
              <img 
            className="avatar-pic"
            src={wonderwoman}
            alt="wonderwoman"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            /> */}