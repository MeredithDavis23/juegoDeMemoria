import React, { alert, useState, useEffect } from "react";
import BoardPractice from "./Deck";
import initializeDeck from "./InitializeDeck";
import './Board.css'
import 'reactjs-popup/dist/index.css';


// https://5fd3d8790bdcbe51a0344930--spanish-poke-game.netlify.app/exit

export default function Game(props) {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [hasWon, setHasWon] = useState(false)



  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);


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
      } if (solved.length === 16) {
        setHasWon(true)
        alert.alert("¡Felicidades!")
      }
    }
  };


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
    if((clickedCard.id === 0 && flippedCard.id === 9) || (flippedCard.id === 0 && clickedCard.id === 9)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 1 && flippedCard.id === 10) || (clickedCard.id === 10 && flippedCard.id === 1)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 2 && flippedCard.id === 11) || (clickedCard.id === 11 && flippedCard.id === 2)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 3 && flippedCard.id === 12) || (clickedCard.id === 12 && flippedCard.id === 3)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 4 && flippedCard.id === 13) || (clickedCard.id === 13 && flippedCard.id === 4)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 5 && flippedCard.id === 14) || (clickedCard.id === 14 && flippedCard.id === 5)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 6 && flippedCard.id === 15) || (clickedCard.id === 15 && flippedCard.id === 6)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 7 && flippedCard.id === 16) || (clickedCard.id === 16 && flippedCard.id === 7)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    if((clickedCard.id === 8 && flippedCard.id === 17) || (clickedCard.id === 17 && flippedCard.id === 8)) {
      setSolved([...solved, flipped[0], id]);
      resetCards();
    }
    return flippedCard.type === clickedCard.type
  };
  

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
    <img className="avatar" alt="" handleClick={handleClick} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" ></img>
    <button className="back-button" onClick={(e) => {
                e.preventDefault();
                window.location.href='/'}}><span>🡠</span> Regresar</button>
      <button className="reset-button" onClick={resetBoard}>Reiniciar <span>⟲</span></button>
      <button className="exit-button" onClick={(e) => {
                e.preventDefault();
                window.location.href='https://5fd421d5be7263c09741db4c--spanish-poke-game.netlify.app/exit'}}> Salir <span>✖</span></button>
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
        hasWon={hasWon}
        // windowSize={windowSize}
      />
      </div>
    </div>
    </div>
  );
}
