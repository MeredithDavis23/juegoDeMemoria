import React from 'react';
// import Board from './Board'
// import './Game.css'
import BoardPractice from './ImageButton'
// import Test from './Test'
import './Board.css'
// import ironman from '../Avatar/ironman.png'
// import superman from './superman.png'
// import frankenstein from './frankenstein.png'
// import supergirl from './supergirlPink.png'
// import unicorn from './unicorn.png'
// import kitty from './kitty.png'
// import avenger from './avenger (5).png'
// import wonderwoman from './wonderwoman.png'
// import Avatar from '../Avatar/Avatar'

class Game extends React.Component {
  state = {
    avatar: ''
  }

  handleAvatar = (avatar) => {
    this.setState({ avatar: avatar})
    console.log('working')
  }

  render() {
    const {avatar} = this.props
    return (
      <div className="game-screen" avatar={this.handleAvatar}>
        <h1 className="game-header">Jugar</h1> 
        <img className="avatar">{avatar}</img>
          <div className="memory-game">
          <BoardPractice />
        </div>
        </div>
    );
  }
}
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
 
export default Game;