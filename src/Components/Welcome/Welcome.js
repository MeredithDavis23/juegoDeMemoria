import React, {useState} from 'react';
import NavBar from './NavBar';
import './NavBar.css'


const Welcome = () => {
    const [toggled, setToggle] = useState(false)

 

    return (
        <div className="welcome-screen">
            <div className="welcome">
              <h3 className="temporary-header">¡Bienvenidos a Pókememoria!</h3>
            </div>
            <NavBar toggled={toggled} setToggle={setToggle} />
          
        </div>
      );
}
 
export default Welcome;
