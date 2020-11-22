// import { render } from 'node-sass'
import React from 'react'
import Card from './Card'
import './Board.css'

class Board extends React.Component {
    constructor(props) {
        super(props);
       
        const fronts = [
            'A' ,
            'B', 
            'C', 
            'D', 
            'E', 
            'F', 
            'G', 
            'H', 
            'I',
        ]
    
    const deck = fronts
    .concat(fronts)
    .sort(() => Math.random() - 0.5) 
    .map(f => {
        return {
            picture: f,
            hasFlipped: false
        }
    })

        this.state = {
            deck: deck,
            firstCard: null
        }

    }

   
flipCard(idx, hasFlipped) {
    this.setState({ 
        deck: this.state.map((f, i) => {
            if (i === idx) {
                return {
                    picture: f.picture,
                    hasFlipped: !f.hasFlipped,
                }
            } else {
                return f
            }
        })
    })
}

flip(idx) {
    if(this.state.firstCard === null) {
        this.setState({firstCard: idx});
    } else {
        const firstCard = this.state.deck[this.state.firstCard].picture;
        const secondCard = this.state.deck[idx].picture;
        if(firstCard === secondCard) {
            this.setState({firstCard: null});
        } else {
            setTimeout(() => {
                this.flipCard(this.state.firstCard, false)
                this.flipCard(idx, false)
                this.setState({firstCard: null})
            }, 1500)
        }
    }
    this.flipCard(idx, !this.state.deck[idx].hasFlipped)
}

 
  render () {
    return (
        this.state.deck.map((f, i) => {
            return(
        <div className='memory-game'>
            <Card 
            className="memory-card"
            flip={() => {this.flip(i)}}
            picture={f.picture} 
            hasFlipped={f.hasFlipped} />
        </div>)
        })
    )
}
}

export default Board