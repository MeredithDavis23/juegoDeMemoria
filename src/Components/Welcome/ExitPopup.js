import React from "react";
import './Exit.css'

const Exit = () => {
    return ( 
        <div>
            <div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    {/* <div class="beak-top"></div> */}
    <div class="beak-bottom"></div>
  </div>
</div>
            <div className="thanks">
            ¡Hasta el próximo!
            </div>
        </div>
     );
}
 
export default Exit;

// import { createPortal } from "react-dom";
// import styled from "styled-components";
// import PropTypes from "prop-types"; 
// const Portal = ({ children }) => {  
//  const modalRoot = document.getElementById("modal");
//  const el = document.createElement("div");
  
//  useEffect(() => {    
//   modalRoot.appendChild(el);  
//  }, []);   
//  useEffect(() => {    
//   return () => modalRoot.removeChild(el); 
//  });   
// return createPortal(children, el);
// };
// const Modal = ({ children, toggle, open }) => (  
//  <Portal>    
//   {open && (      
//    <ModalWrapper>       
//     <ModalCard>          
//      <CloseButton onClick={toggle}>            
//       <img src="https:icon.now.sh/x/ff0000" alt="close" />
//      </CloseButton>
//       {children}
//     </ModalCard>
//     <Background onClick={toggle} />      
//    </ModalWrapper>    
//   )}  
//  </Portal>
// ); 
// export default Modal; 

// Modal.propTypes = {  
//  children: PropTypes.arrayOf(PropTypes.object).isRequired,
//  toggle: PropTypes.func.isRequired,
//  on: PropTypes.bool.isRequired
// }; 
// const ModalWrapper = styled.div`
//   position: fixed;  top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;  height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const ModalCard = styled.div`
//   position: relative;
//   min-width: 320px;
//   z-index: 10;
//   margin-bottom: 100px;
//   background: white;
//   border-radius: 5px;
//   padding: 15px;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
// `; 
// const CloseButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   border: none;
//   background: transparent;
//   padding: 10px;
//   &:hover {    
//     cursor: pointer;
//   }`; 
// const Background = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background: black;
//   opacity: 0.5;
// `;





// import React, { Component } from "react";

// export default class PopUp extends Component {
//   exitClick = () => {
//     this.props.toggle();
//   };

//   render() {
//     return (
//       <div className="modal">
//         <div className="modal_content">
//           <span className="close" onClick={this.exitClick}>
//             &times;
//           </span>
//           <form>
//             <h3>Register!</h3>
//             <label>
//               Name:
//               <input type="text" name="name" />
//             </label>
//             <br />
//             <input type="submit" />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
