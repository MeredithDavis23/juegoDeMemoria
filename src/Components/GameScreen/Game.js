import React from 'react';
import Board from './Board'
import './Game.css'


function Game() {
    return (
      <div>
        <h1 className="game-header">Jugar</h1> 
        <div className="game-screen">
          <div className="memory-game">
        <Board />
        </div>
        </div>
      </div>
    );
  }
  



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
 
export default Game;