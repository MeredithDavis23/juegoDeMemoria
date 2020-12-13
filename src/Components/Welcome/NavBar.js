import React, { useEffect} from "react";
import './NavBar.css';
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
// import '../Login/Login.css'
// import Modal from './ExitPopup'
// import Popup from 'reactjs-popup'
// import {HiOutlineEmojiHappy} from "react-icons"



export default function NavBar(props) {
  // const loggedIn = useState(false)
  console.log(props);
  // const handleToggle = () => {
  //   props.setToggle(!props.toggled);
  // };
  useEffect(() => {
    console.log(props.toggled);
  });

//   const togglePop = () => {
//     this.setState({
//       exit: !this.state.exit
//     })
//   }

// const handleClick = () => {
//  return this.props.history.push({
//   state: {image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
//   })
// }


  return (
    <div>
    <Login />
    <div className="navBar-buttons">
      <button className="navBar">
      <ul>
        <span role="img" className="emoji" aria-label="Choose an Avatar">
        😃 
        </span>{" "}
          <Link to="/avatar" className='link'>Escoge un Avatar para Jugar</Link>
      </ul>
      </button>
      {/* <button onClick={handleClick} className="navBar">
      <ul>
        <span role="img" className="emoji" aria-label="Play Game">
        😃 
        </span>{" "}
          <Link to="/game" className='link'>A Jugar</Link>
      </ul>
      </button> */}
      <button className="navBar">
        <ul>
          <span role="img" className="emoji" aria-label="Exit">
            ❌
          </span>{" "}
          <Link to="/exit" className='link'>Salida</Link>
        </ul>
      </button>
    </div>
    </div>
  )
}

