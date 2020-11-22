import React, {Component} from 'react';
import Card from './Card'
import './Board.css'
// import Test from './Test'

class BoardPractice extends Component {

        state = {
            hasFlipped: false,
            lockBoard: false,

            letters: [
            {
                id: 0,
                name: "A",
            }, 
            {
                id: 2,
                name: "B",
            }, 
            {
                id: 3,
                name: "C",
            }, 
            {
                id: 4,
                name: "D",
            }, 
            {
                id: 5,
                name: "E",
            }, 
            {
                id: 6,
                name: "F",
            }, 
            {
                id: 7,
                name: "G",
            }
        ], 

        images: [
            {
                id: 0,
                name: "A",
            }, 
            {
                id: 2,
                name: "B",
            }, 
            {
                id: 3,
                name: "C",
            }, 
            {
                id: 4,
                name: "D",
            }, 
            {
                id: 5,
                name: "E",
            }, 
            {
                id: 6,
                name: "F",
            }, 
            {
                id: 7,
                name: "G",
            }
        ]
        }


    flip = () => {
        this.setState({
            hasFlipped: !this.state.hasFlipped
        })
        console.log("hello")
    }

    handleClick = () => {
        console.log("hello")
    }


    // flipCard = () => {
    //     if (this.state.lockBoard) return; 
    //     if (this === this.state.letter) return;

    //     this.classList.add('flip'); 

    //     if (!this.state.hasFlipped) {
    //         this.setState({
    //             hasFlipped: true,
    //             letter: this
    //         })
           

    //         return;
    //     }
    //     this.setState({
    //         hasFlipped: false,
    //         image: this
    //     })


    //     this.checkForMatch()
    // }
    // checkForMatch = () => {
      
    // let isMatch = this.letter.dataset.framework === this.image.dataset.framework; 

    // isMatch ? this.disableCards() : this.unflipCards();
    // }

    // disableCards = () => {
    //     this.state.letter.removeEventListener('click', this.flipCard)
    //     this.state.image.removeEventListener('click', this.flipCard)
    // }
    
    // unflipCards = () => {
    //     this.setState({
    //         lockBoard: true
    //     })
    
    
    //     setTimeout(() => {
    //         this.state.letter.classList.remove('flip');
    //         this.state.image.classList.remove('flip');
            
    //         this.setState({
    //             lockBoard: false
    //         })
    //     }, 1500)
    // }
    
    //can you use useState instead of setState?
    resetBoard() {
        console.log('reset')
        // this.setState({
        //     hasFlipped: false, 
        //     lockBoard: false, 
        //     letter: null, 
        //     image: null
        // })
    }
    
    //wrapping function in parentheses with extra parentheses at end makes it immediately invoked
    // shuffle() {
    //     this.cards.forEach(card => {
    //         let randomPos = Math.floor(Math.random() * 12);
    //     card.style.order = randomPos;
    //     })
    // }
    
    // this.state.cards.forEach(card => card.addEventListener('click', flipCard));



    render() {
        return (
            <div className="gamescreen">
            <div className="reset-div">
            <button className="reset-button" onClick={this.resetBoard}>Reiniciar</button>
            </div>
                {/* <h1 className="game-header">Game</h1>  */}
            <div className>
               <section className="memory-game">
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
                   <Card />
            </section>
            </div>
        </div>
        )
    }
}

         // eslint-disable-next-line no-lone-blocks
         {/* <div class="memory-card" data-framework="A" onClick={this.flip.bind(this)}> 
                {this.card}
                    <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="A">
                    <img class="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="B">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="B">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg" alt="B" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="C">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="C">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616408.svg" alt="C" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="D">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="D">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/2930/2930627.svg" alt="D" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="E">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="E">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg" alt="E" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="F">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div>
                <div class="memory-card" data-framework="F">
                    <img class="front" src="https://www.flaticon.com/svg/static/icons/svg/616/616451.svg" alt="F" />
                    <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
                </div> */}

export default BoardPractice 

