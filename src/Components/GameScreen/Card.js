import React from 'react';
// import './Card.css'
// import cardFront from './cardFront'
// import cardBack from './cardBack'
import './Board.css'




class Card extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    hasFlipped: false,
  };
  this.flip = this.flip.bind(this)
  }

  flip = (event) => {
    event.preventDefault();
    this.setState({
      hasFlipped: !this.state.hasFlipped
    })
}

// resetBoard() {
//   console.log('reset')
//   this.setState({
//       hasFlipped: false, 
//       lockBoard: false, 
//       letter: null, 
//       image: null
//   })
// }
render () {
  if(this.state.hasFlipped) {
  return (
    // <div className="memory-card">
    // <cardFront />
    // </div>
  <div className="memory-card" onClick={this.flip}> 
    <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />   
</div>
  )
  } else {
    return (   
    // <div className="memory-card">
    //   <cardBack />
    //   </div>
    <div className="memory-card" onClick={this.flip}> 
      <img className="back" src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />   
    </div>
    )
  }
}
}
// render() {
//   return (
//       <div className="memory-card" onClick={this.flip}> 
//       <div className="back">
//          <img src="https://www.flaticon.com/svg/static/icons/svg/3004/3004112.svg" alt="back" />   
//          </div>
//          <div className="front">
//               <img className="front" src="https://www.flaticon.com/premium-icon/icons/svg/2153/2153090.svg" alt="A" />   
//          </div>   
//       </div>
//   )
// }
// }


export default Card;






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