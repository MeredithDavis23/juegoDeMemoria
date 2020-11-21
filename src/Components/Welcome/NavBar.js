import React, { useEffect } from "react";
import './NavBar.css';
import {Link} from 'react-router-dom'
// import Modal from './ExitPopup'
// import Popup from 'reactjs-popup'
// import {HiOutlineEmojiHappy} from "react-icons"



export default function NavBar(props) {
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


  return (
    <div className="buttons">
      <button>
      <ul>
        <span role="img" class="emoji" aria-label="Choose an Avatar">
          🧍
        </span>{" "}
          <Link to="/avatar" className='link'>Escoge un avatar</Link>
      </ul>
      </button>
      <button>
      <ul>
        <span role="img" class="emoji" aria-label="Play Game">
        😃 
        </span>{" "}
          <Link to="/game" className='link'>Jugar</Link>
      </ul>
      </button>
      <button>
        <ul>
          <span role="img" class="emoji" aria-label="Exit">
            ❌
          </span>{" "}
          <Link to="/exit" className='link'>Salir</Link>
        </ul>
      </button>
    </div>
    // <div className="navBar">
    //   <div className="dropdown">
    //     <div className="buttonDiv">
    //       <button className="button" onClick={handleToggle}>
    //         <span className="button--middle" />
    //         <div className="dropdown-content">
    //           {props.toggled && (
    //             <ul className="ul">
    //               <li>
    //                 <span role="img" aria-label="Choose an Avatar">
    //                 🧍
    //                 </span>{" "}
    //                 <Link to="/avatar" className='link'>Escoge un avatar</Link>
    //               </li>
    //               <li>
    //                 <span role="img" aria-label="Play Game">
    //                 😃
    //                 </span>{" "}
    //                 <Link to="/game" className='link'>Jugar</Link>
    //               </li>
    //               <li>
    //                 <span role="img" aria-label="Exit">
    //                 ❌
    //                 </span>{" "}
    //                 <Link to="/exit" className='link'>Salir</Link>
    //               </li>
    //             </ul>
    //           )}
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

