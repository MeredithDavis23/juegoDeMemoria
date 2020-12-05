
import React from 'react';
import Card from './Card'

class LetterCard extends React.Component {
    
 state = {
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
    ]
 }

    render() {
        return (
            <div className="memory-card" id="letter-card">
        
    {this.state.letters.map((letter, id) => {
    return (   
            <Card
            key={id}
            id={letter.id}
            name={letter.name}
            className="letter-card"
            onClick={console.log(letter.name)} /> 
            )
        })}
    </div>
)
}
}

export default LetterCard 