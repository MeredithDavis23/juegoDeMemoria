// import React from 'react';
// import BoardPractice from './Deck'
// import './Board.css'



import React, { useState, useEffect } from "react";
import BoardPractice from "./Deck";
import initializeDeck from "./InitializeDeck";
import './Board.css'
// import PokemonImage from "../Avatar/Pokemon";
import shuffle from './InitializeDeck'

export default function Game() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  // const [windowSize, setWindowSize] = useState({
  //   width: undefined, 
  //   height: undefined
  // });


  // useEffect(() => {
  //   setWindowSize(); 
  //   setCards(initializeDeck())
  // }, [])


  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  // useEffect(() => {
  //   preloadImages();
  // }, cards);



  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth, 
  //       height: window.innerHeight
  //     })
  //   }
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])
  // changes size of board based on screen size
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", resizeListener);
  });

  //can flip 2 values but not 3
  const handleClick = (id) => {
    //disables card after flip
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) 
       return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        //gives already solved cards, first flipped, and one just flipped
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1500);
      }
    }
    // console.log(flipped)
  };

  // precache images
  // const preloadImages = () => {
  //   cards.map((card) => {
  //     const src = `/img/${card.type}.png`;
  //     console.log(src);
  //     new Image().src = src;
  //   });
  // };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const resetBoard = () => {
    setFlipped([]);
    setDisabled(false);
    setSolved([]);
    setCards(initializeDeck);
  }

  const isMatch = (id) => {
    //just clicked card
    const clickedCard = cards.find((card) => card.id === id);
    //card you flipped first, compare to clicked card
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    //match them based on the type ("react", 'vue', etc in this example)
    console.log(clickedCard.id)
    console.log(flippedCard.id)
    if((clickedCard.id === 0 && flippedCard.id === 8) || (flippedCard.id === 8 && clickedCard.id === 0)) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[1] && flippedCard[9]) || (clickedCard[9] && flippedCard[1])) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[2] && flippedCard[10]) || (clickedCard[10] && flippedCard[2])) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[3] && flippedCard[11]) || (clickedCard[11] && flippedCard[3])) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[4] && flippedCard[12]) || (clickedCard[12] && flippedCard[4])) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[5] && flippedCard[13]) || (clickedCard[13] && flippedCard[5])) {
      return flippedCard.type === clickedCard.type
    }
    if((clickedCard[6] && flippedCard[14]) || (clickedCard[14] && flippedCard[6])) {
      return flippedCard.type === clickedCard.type
    }
    // else((clickedCard[7] && flippedCard[15]) || (clickedCard[15] && flippedCard[7])) {
    //   return flippedCard.type === clickedCard.type
    // }
    return flippedCard.type === clickedCard.type
  };

 //triple for loop 
//  if(clickedCard[0] && flippedCard[8] || flippedCard[8] && clickedCard[0]) {

//  } else if(clickedCard[1] && flippedCard[9] || clickedCard[9] && flippedCard[1]) {
//  }

  //if becomes true then clicking same card twice
  const sameCardClicked = (id) => flipped.includes(id);



  const resizeBoard = () => {
    setDimension(Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      ),
    );
  };



  return (
    <div>
      <h1 className="game-header">¡Que Comience el Juego!</h1> 
      <div className="game-buttons">
    {/* <img className="avatar" alt="" handleClick={handleClick} ></img> */}
    <button className="back-button" onClick={(e) => {
                e.preventDefault();
                window.location.href='/'}}><span>🡠</span> Regresar</button>
      <button className="reset-button" onClick={resetBoard}>Reiniciar <span>⟲</span></button>
    </div>
    <div className="game-screen">
    {/* <PokemonImage /> */}
    <div className="memory-game">
      <BoardPractice
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        // windowSize={windowSize}
      />
      </div>
    </div>
    </div>
  );
}

// class Game extends React.Component {
//   // state = {
//   //   avatar: this.props.avatars.avatarId
//   // }

//   handleAvatar = (avatars) => {
//     this.setState({ avatars: avatars.avatarId, src: avatars.src})
//     console.log('working')
//   }

//   render() {
//     // const {avatar} = this.props
//     return (
//       <div className="game-screen" avatars={this.handleAvatar}>
//         <h1 className="game-header">Jugar</h1> 
//         {/* <Avatar className="avatar" /> */}
//         <img className="avatar" alt="" src={"https://www.flaticon.com/svg/static/icons/svg/145/145302.svg"}></img>
//           <div className="memory-game">
//           <BoardPractice />
//         </div>
//         </div>
//     );
//   }
// }
  // const { avatar } = this.props
 

  // cards.find(function(value, idx) {
  //   if(letters.index === images.index) {
  //     this.setState({

  //     })
  //   }
  // }


//   {props.state.cards.map(card => {
//     return <BoardPractice
//     key={card.id}
//     id={card.id}
//     title={card.title}/>
//   })
// }


// class Game extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             hasFlipped: false,
//             lockBoard: false,
//         }

//     }

//     flip() {
//         this.setState({
//             hasFlipped: !this.state.hasFlipped
//         })
//     }

    // let firstCard, secondCard

    // const flipCard = () => {
    //     if (lockBoard) return; 
    //     if (this === firstCard) return;

    //     this.classList.add('flip'); 

    //     if (!hasFlipped) {
    //         hasFlipped = true;
    //         firstCard = this;

    //         return;
    //     }

    //     hasFlipped = false;
    //     secondCard = this;

    //     checkForMatch()
    // }
    // const checkForMatch = () => {
    //     //do cards match?
    // let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; 

    // isMatch ? disableCards() : unflipCards();
    // }

    // function disableCards() {
    //     firstCard.removeEventListener('click', flipCard)
    //     secondCard.removeEventListener('click', flipCard)
    // }
    
    // function unflipCards() {
    // lockBoard = true;
    
    //     setTimeout(() => {
    //         firstCard.classList.remove('flip');
    //         secondCard.classList.remove('flip');
    
    //         lockBoard = false;
    //     }, 1500)
    // }
    
    // function resetBoard() {
    //     [hasFlipped, lockBoard] = [false, false];
    //     [firstCard, secondCard] = [null, null];
    // }
    
    // //wrapping function in parentheses with extra parentheses at end makes it immediately invoked
    // (function shuffle() {
    //     cards.forEach(card => {
    //         let randomPos = Math.floor(Math.random() * 12);
    //     card.style.order = randomPos;
    //     })
    // })()
    
    // cards.forEach(card => card.addEventListener('click', flipCard));



//     render() {
//         let card;
//         if(this.state.hasFlipped) {
//             card = this.props.card
//         } else {
//             card = 'B'
//         }
//         if (this.state.hasFlipped)
//         return (
//             <div>
//                 <h1 className="game-header">Game</h1> 
//             <div class="game-screen">
//                <section class="memory-game">
//                 <div class="memory-card" data-framework="A" onClick={this.flip.bind(this)}> 
//                 {card}
//                     <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="A">
//                     <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="B">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="B">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="C">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="C">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="D">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="D">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="E">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="E">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="F">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//                 <div class="memory-card" data-framework="F">
//                     <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
//                     <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//                 </div>
//             </section>
//             </div>
//             </div>
//         )
//     }
// }




// const Game = () => {
  
//     return (
//         <div>
//             <h1 className="game-header">Game</h1> 
//         <div class="game-screen">
//            <section class="memory-game">
//             <div class="memory-card" data-framework="A">
//                 <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="A">
//                 <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="B">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="B">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="C">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="C">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="D">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="D">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="E">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="E">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="F">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//             <div class="memory-card" data-framework="F">
//                 <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
//                 <img class="back" src="https://www.flaticon.com/premium-icon/icons/svg/1001/1001798.svg" alt="back" />
//             </div>
//         </section>
//         </div>
//         </div>
//      );
// }
 
// export default Game;