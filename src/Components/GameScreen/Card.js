import React from 'react';
import PropTypes from 'prop-types'
// import './Card.css'
// import cardFront from './cardFront'
// import cardBack from './cardBack'
import './Board.css'


export default function Card({
  handleClick,
  id,
  type,
  flipped,
  height,
  width,
  disabled,
  solved
}) {
  return (
    <div
      className={`memory-card ${flipped ? "flipped" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={
            flipped || solved
              ? `../img/abeja.svg`
              : "https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg"
          }
          alt=""
        ></img>
      </div>
    </div>
  );
}

Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};







//   render() {   
//     return (
//         <div onClick={this.flip} className={"memory-card" + (this.state.hasFlipped ? " hasFlipped" : "")}> 
//         <div className="back">
//              <img src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />   
//         </div>
//         <div className="front">
//              <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />   
//         </div>
//         </div>
//     )
//   }
// };



  //   render() {
  //     this.props.hasFlipped
     
  //     return (
  //         <div className="memory-card" onClick={this.flip}> 
  //             {this.props.hasFlipped ? (
  //         <div className="back">
  //            <img src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />   
  //            </div>
  //            ) : (
  //            <div className="front">
  //                 <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />   
  //            </div>
  //         )}     
  //         </div>
  //     )
  //   }
  // }


//   render() {
//     // this.props.hasFlipped
   
//     return (
//         <div onClick={this.flip} className={"memory-card" + (this.state.hasFlipped ? " hasFlipped" : "")}> 
//                   <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />
//                   <img className="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />   
//         </div>
//     )
//   }
// }

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
// 