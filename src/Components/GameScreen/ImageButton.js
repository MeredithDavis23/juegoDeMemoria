import React, {Component} from 'react';
import Card from './Card'
import './Board.css'
// import Test from './Test'

class BoardPractice extends Component {

        state = {
            hasFlipped: false,
            lockBoard: false,
        cards: {
            letters: [
                {
                    id: 0,
                    name: "A",
                }, 
                {
                    id: 1,
                    name: "B",
                }, 
                {
                    id: 2,
                    name: "C",
                }, 
                {
                    id: 3,
                    name: "Ch",
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
                }, 
                {
                    id: 8,
                    name: "H",
                }, 
                {
                    id: 9,
                    name: "I",
                }, 
                {
                    id: 10,
                    name: "J",
                }, 
                {
                    id: 11,
                    name: "K",
                }, 
                {
                    id: 12,
                    name: "L",
                }, 
                {
                    id: 13,
                    name: "Ll",
                }, 
                {
                    id: 14,
                    name: "M",
                }, 
                {
                    id: 15,
                    name: "N",
                }, 
                {
                    id: 16,
                    name: "Ñ",
                }, 
                {
                    id: 17,
                    name: "O",
                }, 
                {
                    id: 18,
                    name: "P",
                }, 
                {
                    id: 19,
                    name: "Q",
                }, 
                {
                    id: 20,
                    name: "R",
                }, 
                {
                    id: 21,
                    name: "Rr",
                }, 
                {
                    id: 22,
                    name: "S",
                }, 
                {
                    id: 23,
                    name: "T",
                }, 
                {
                    id: 24,
                    name: "U",
                }, 
                {
                    id: 25,
                    name: "V",
                }, 
                {
                    id: 26,
                    name: "W",
                }, 
                {
                    id: 27,
                    name: "X",
                }, 
                {
                    id: 28,
                    name: "Y",
                }, 
                {
                    id: 29,
                    name: "Z",
                }, 
               
                
            ], 
            
            images: [
                {
                    id: 0,
                    name: "A",
                    image: "https://www.flaticon.com/svg/static/icons/svg/809/809052.svg"
                }, 
                {
                    id: 1,
                    name: "B",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998810.svg"
                }, 
                {
                    id: 2,
                    name: "C",
                    image: "https://www.flaticon.com/svg/static/icons/svg/712/712164.svg"
                }, 
                {
                    id: 3,
                    name: "Ch",
                    image: "https://www.flaticon.com/svg/static/icons/svg/766/766024.svg"
                }, 
                {
                    id: 4,
                    name: "D",
                    image: "https://www.flaticon.com/svg/static/icons/svg/145/145302.svg"
                }, 
                {
                    id: 5,
                    name: "E",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998642.svg"
                }, 
                {
                    id: 6,
                    name: "F",
                    image: "https://www.flaticon.com/svg/static/icons/svg/785/785116.svg"
                }, 
                {
                    id: 7,
                    name: "G",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998592.svg"
                }, 
                {
                    id: 8,
                    name: "H",
                    image: "https://www.flaticon.com/svg/static/icons/svg/3075/3075977.svg"
                }, 
                {
                    id: 9,
                    name: "I",
                    image: "https://www.flaticon.com/svg/static/icons/svg/619/619005.svg"
                }, 
                {
                    id: 10,
                    name: "J",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998659.svg"
                }, 
                {
                    id: 11,
                    name: "K",
                    image: "https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg"
                }, 
                {
                    id: 12,
                    name: "L",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998713.svg"
                }, 
                {
                    id: 13,
                    name: "Ll",
                    image: "https://www.flaticon.com/svg/static/icons/svg/2829/2829831.svg"
                }, 
                {
                    id: 14,
                    name: "M",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998721.svg"
                }, 
                {
                    id: 15,
                    name: "N",
                    image: "https://www.flaticon.com/svg/static/icons/svg/427/427432.svg"
                }, 
                {
                    id: 16,
                    name: "Ñ",
                    image: "https://www.flaticon.com/svg/static/icons/svg/2646/2646433.svg"
                }, 
                {
                    id: 17,
                    name: "O",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998571.svg"
                }, 
                {
                    id: 18,
                    name: "P",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998728.svg"
                }, 
                {
                    id: 19,
                    name: "Q",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1071/1071146.svg"
                }, 
                {
                    id: 20,
                    name: "R",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998654.svg"
                }, 
                {
                    id: 21,
                    name: "Rr",
                    image: "https://www.flaticon.com/svg/static/icons/svg/2892/2892205.svg"
                }, 
                {
                    id: 22,
                    name: "S",
                    image: "https://www.flaticon.com/svg/static/icons/svg/2917/2917242.svg"
                }, 
                {
                    id: 23,
                    name: "T",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998805.svg"
                }, 
                {
                    id: 24,
                    name: "U",
                    image: "https://www.flaticon.com/svg/static/icons/svg/3336/3336003.svg"
                }, 
                {
                    id: 25,
                    name: "V",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998610.svg"
                }, 
                {
                    id: 26,
                    name: "W",
                    image: "https://www.flaticon.com/svg/static/icons/svg/412/412805.svg"
                }, 
                {
                    id: 27,
                    name: "X",
                    image: "https://www.flaticon.com/svg/static/icons/svg/1011/1011093.svg"
                }, 
                {
                    id: 28,
                    name: "Y",
                    image: "https://www.flaticon.com/svg/static/icons/svg/3089/3089814.svg"
                }, 
                {
                    id: 29,
                    name: "Z",
                    image: "https://www.flaticon.com/svg/static/icons/svg/2912/2912369.svg"
                }, 
               
                
            ]
            }
        }

    // flip = () => {
    //     this.setState({
    //         hasFlipped: !this.state.hasFlipped
    //     })
    //     console.log("hello")
    // }

    // handleClick = () => {
    //     console.log("hello")
    // }


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

    resetBoard = () => {
        this.setState({
            // ...this.state,
            // hasFlipped: false
        })
        window.location.reload(false)
      
    }

    
    //wrapping function in parentheses with extra parentheses at end makes it immediately invoked
    // shuffle() {
    //     this.cards.forEach(card => {
    //         let randomPos = Math.floor(Math.random() * 12);
    //     card.style.order = randomPos;
    //     })
    // }
    
    // this.state.cards.forEach(card => card.addEventListener('click', flipCard));

//  const shuffleImage = (images) => {
//         let i = images.length - 1;
//         for(let i=0; i>0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp =images[i]
//             images[i] = images[j]
//             images[j] = temp
//         }
//         return images
//     }
    
    render() {
        // const shuffledImages = shuffleImage(this.props.images)
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

