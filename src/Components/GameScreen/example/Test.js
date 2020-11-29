import React from 'react';

class Test extends React.Component {
    
    state = {
    
      }

    pleaseFlip = () => {
        console.log("hello")
    }
    
    render() { 
        return ( 
            <div>
                <button onClick={this.pleaseFlip}> Button </button>
            </div>
         );
    }
}
 
export default Test;
