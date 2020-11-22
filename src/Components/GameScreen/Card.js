import React from 'react';
// import './Card.css'
// import './Game.css'



class Card extends React.Component {


  handleClick = () => {
    console.log("hello")
}

    render() {
      // this.props.hasFlipped
     
      return (
          <div className="memory-card" onClick={this.handleClick}> 
                {/* {this.card} */}
                    <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
                    <img className="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
          </div>
      )
    }
  }
  
  export default Card;

//   render() {
//     let picture;
//     if(this.props.hasFlipped) {
//       picture = this.props.picture;
//     } else {
//       picture = ''
//     }
//     return (
//       <div onClick={this.props.flip} className={`card ${this.props.hasFlipped ? 'has-flipped': ''}`} id="memory-card">
//         <div className="front">
//         <img class="front" src={picture} alt="A" />
//         <img class="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />
//         </div>
//       </div>
//     )
//   }
// }