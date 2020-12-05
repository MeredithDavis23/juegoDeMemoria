// import React, { useState } from 'react'

// const Board = () => {
//     const [flipped, setFlipped] = useState(false)
//     const newGame =[],

//     const letters = [
//             {
//                 id: 0,
//                 name: "A",
//             }, 
//             {
//                 id: 1,
//                 name: "B",
//             }, 
//             {
//                 id: 2,
//                 name: "C",
//             }, 
//             {
//                 id: 3,
//                 name: "Ch",
//             }, 
//             {
//                 id: 4,
//                 name: "D",
//             }, 
//             {
//                 id: 5,
//                 name: "E",
//             }, 
//             {
//                 id: 6,
//                 name: "F",
//             }, 
//             {
//                 id: 7,
//                 name: "G",
//             }, 
//             {
//                 id: 8,
//                 name: "H",
//             }, 
//             {
//                 id: 9,
//                 name: "I",
//             }, 
//             {
//                 id: 10,
//                 name: "J",
//             }, 
//             {
//                 id: 11,
//                 name: "K",
//             }, 
//             {
//                 id: 12,
//                 name: "L",
//             }, 
//             {
//                 id: 13,
//                 name: "Ll",
//             }, 
//             {
//                 id: 14,
//                 name: "M",
//             }, 
//             {
//                 id: 15,
//                 name: "N",
//             }, 
//             {
//                 id: 16,
//                 name: "Ñ",
//             }, 
//             {
//                 id: 17,
//                 name: "O",
//             }, 
//             {
//                 id: 18,
//                 name: "P",
//             }, 
//             {
//                 id: 19,
//                 name: "Q",
//             }, 
//             {
//                 id: 20,
//                 name: "R",
//             }, 
//             {
//                 id: 21,
//                 name: "Rr",
//             }, 
//             {
//                 id: 22,
//                 name: "S",
//             }, 
//             {
//                 id: 23,
//                 name: "T",
//             }, 
//             {
//                 id: 24,
//                 name: "U",
//             }, 
//             {
//                 id: 25,
//                 name: "V",
//             }, 
//             {
//                 id: 26,
//                 name: "W",
//             }, 
//             {
//                 id: 27,
//                 name: "X",
//             }, 
//             {
//                 id: 28,
//                 name: "Y",
//             }, 
//             {
//                 id: 29,
//                 name: "Z",
//             }, 
           
            
//         ], 
//     const images = [
//             {
//                 id: 0,
//                 name: "A",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/809/809052.svg"
//             }, 
//             {
//                 id: 1,
//                 name: "B",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998810.svg"
//             }, 
//             {
//                 id: 2,
//                 name: "C",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/712/712164.svg"
//             }, 
//             {
//                 id: 3,
//                 name: "Ch",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/766/766024.svg"
//             }, 
//             {
//                 id: 4,
//                 name: "D",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/145/145302.svg"
//             }, 
//             {
//                 id: 5,
//                 name: "E",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998642.svg"
//             }, 
//             {
//                 id: 6,
//                 name: "F",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/785/785116.svg"
//             }, 
//             {
//                 id: 7,
//                 name: "G",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998592.svg"
//             }, 
//             {
//                 id: 8,
//                 name: "H",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/3075/3075977.svg"
//             }, 
//             {
//                 id: 9,
//                 name: "I",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/619/619005.svg"
//             }, 
//             {
//                 id: 10,
//                 name: "J",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998659.svg"
//             }, 
//             {
//                 id: 11,
//                 name: "K",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/3069/3069172.svg"
//             }, 
//             {
//                 id: 12,
//                 name: "L",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998713.svg"
//             }, 
//             {
//                 id: 13,
//                 name: "Ll",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/2829/2829831.svg"
//             }, 
//             {
//                 id: 14,
//                 name: "M",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998721.svg"
//             }, 
//             {
//                 id: 15,
//                 name: "N",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/427/427432.svg"
//             }, 
//             {
//                 id: 16,
//                 name: "Ñ",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/2646/2646433.svg"
//             }, 
//             {
//                 id: 17,
//                 name: "O",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998571.svg"
//             }, 
//             {
//                 id: 18,
//                 name: "P",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998728.svg"
//             }, 
//             {
//                 id: 19,
//                 name: "Q",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1071/1071146.svg"
//             }, 
//             {
//                 id: 20,
//                 name: "R",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998654.svg"
//             }, 
//             {
//                 id: 21,
//                 name: "Rr",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/2892/2892205.svg"
//             }, 
//             {
//                 id: 22,
//                 name: "S",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/2917/2917242.svg"
//             }, 
//             {
//                 id: 23,
//                 name: "T",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998805.svg"
//             }, 
//             {
//                 id: 24,
//                 name: "U",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/3336/3336003.svg"
//             }, 
//             {
//                 id: 25,
//                 name: "V",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1998/1998610.svg"
//             }, 
//             {
//                 id: 26,
//                 name: "W",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/412/412805.svg"
//             }, 
//             {
//                 id: 27,
//                 name: "X",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/1011/1011093.svg"
//             }, 
//             {
//                 id: 28,
//                 name: "Y",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/3089/3089814.svg"
//             }, 
//             {
//                 id: 29,
//                 name: "Z",
//                 image: "https://www.flaticon.com/svg/static/icons/svg/2912/2912369.svg"
//             }, 
//         ]

// const shuffleArray = (array) => {
//         for (var i = array.length - 1; i > 0; i--) {
//             var j = Math.floor(Math.random() * (i + 1));
//             var temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//         return shuffleArray(newGame)
//     }

// const createNewGame = () => {
//     for(let i=0; i > letters.length; i++) {
//         this.newGame.push(i)
//     }
//     for(let j = 0; j > images.length; j++) {
//         newGame.push(j)
//     }
//     console.log(newGame)
//     return createNewGame(newGame)
// }


// // letterCard = () => {
// //     let letterCard = this.cards.letters.map((letter, id) => {
// //     this.setState({
// //        id: id, 
// //        name: name, 
// //        letter: letter
// //     })
// // this.state.newGame.push(this.state.letterCard)
// // return this.state.newGame
// // }


// resetBoard = () => {
//     this.setState({
//         // ...this.state,
//         // hasFlipped: false
//     })
//     window.location.reload(false)
  
// }

// // shuffleGame() {
// //     this.cards.sort(() => Math.random() - 0.5)
// // }

// //wrapping function in parentheses with extra parentheses at end makes it immediately invoked
// // shuffle() {
// //     this.cards.forEach(card => {
// //         let randomPos = Math.floor(Math.random() * 12);
// //     card.style.order = randomPos;
// //     })
// // }

// // this.state.cards.forEach(card => card.addEventListener('click', flipCard));
//     // const shuffledImages = shuffleImage(this.props.images)
//     return (
//         <div className="gamescreen">
//         <div className="reset-div">
//         <button className="reset-button" onClick={this.resetBoard}>Reiniciar</button>
//         </div>
//             {/* <h1 className="game-header">Game</h1>  */}
//         <div className>
//            <section className="memory-game">
//            <Card />
//             {/* <Card 
//             id={this.state.cards.images.id}/>
//             <Card 
//              id={this.state.cards.images.id}/>
//             <Card 
//             id={this.state.cards.letters.id}/>
//             <Card 
//              id={this.state.cards.images.id}/>
//                <Card
//                id={this.state.cards.letters.id} />
//                <Card 
//                 id={this.state.cards.images.id}/>
//                <Card 
//                id={this.state.cards.letters.id}/>
//                <Card
//                 id={this.state.cards.images.id} />
//                <Card 
//                id={this.state.cards.letters.id}/>
//                <Card 
//                 id={this.state.cards.images.id}/>
//                <Card 
//                id={this.state.cards.letters.id} /> */}
//         </section>
//         </div>
//     </div>
//     )
// }

// export default Board

     