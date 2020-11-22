import React from 'react';
// import './Card.css'
import './Game.css'



class Card extends React.Component {


    render() {
      let picture;
      if(this.props.hasFlipped) {
        picture = this.props.picture;
      } else {
        picture = ''
      }
      return (
        <div onClick={this.props.flip} className={`memory-card ${this.props.hasFlipped ? 'has-flipped': ''}`} id="memory-card">
          {picture}
        </div>
      )
    }
  }
  
  export default Card;