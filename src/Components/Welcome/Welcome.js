import React, {useState} from 'react';
import NavBar from './NavBar';
import './NavBar.css'

// import translate from 'translate';

// translate.engine = 'google';
// translate.key = 'YOUR-KEY-HERE'

const Welcome = () => {
    const [toggled, setToggle] = useState(false)
    return (
        <div>
            {/* <h3>{translate('Hello world', 'es')}</h3> */}
            <NavBar toggled={toggled} setToggle={setToggle} />
            <div className="welcome">
              <h3 className="temporary header">Welcome to Memory!</h3>
              </div>
        </div>
      );
}
 
export default Welcome;
