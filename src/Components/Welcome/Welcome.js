import React, {useState} from 'react';
import NavBar from './NavBar';
import './NavBar.css'

// import translate from 'translate';

// translate.engine = 'google';
// translate.key = 'YOUR-KEY-HERE'

const Welcome = () => {
    const [toggled, setToggle] = useState(false)

 

    return (
        <div className="welcome-screen">
            {/* <h3>{translate('Hello world', 'es')}</h3> */}
            <div className="welcome">
              <h3 className="temporary-header">¡Bienvenidos a Pókememoria!</h3>
            </div>
            <NavBar toggled={toggled} setToggle={setToggle} />
          
        </div>
      );
}
 
export default Welcome;
