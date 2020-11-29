import React from 'react';
// import styles from './Avatar.css'
import ironman from './ironman.png'
import superman from './superman.png'
import frankenstein from './frankenstein.png'
import supergirl from './supergirlPink.png'
import unicorn from './unicorn.png'
import kitty from './kitty.png'
import avenger from './avenger (5).png'
import wonderwoman from './wonderwoman.png'
import './Avatar.css'


// const addAvatar = (e) => {
//     e.preventDefault();
//     this.props.avatar(this.state.avatar)
// }




class Avatar extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        avatar: ''
    }
    }

    addAvatar = (e) => {
    // e.preventDefault();
    // this.props.avatar(this.state.avatar)
    console.log('add')
}

    render() {
        return (
            <div className="avatars" >
            <h1 className="escoge">¡Escoge tu avatar!</h1>
            <div className="avatar-buttons">
                <img 
                className="avatar-pic"
                src={ironman}
                alt="ironman"
                onClick={this.addAvatar} />
            <img 
            className="avatar-pic"
            src={superman}
            alt="superman"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={avenger}
            alt="avenger" 
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img className="avatar-pic"
            src={frankenstein}
            alt="frankenstein"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={kitty}
            alt="kitty"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="avatar-pic"
            src={supergirl}
            alt="supergirl"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
             <img 
            className="avatar-pic"
            src={unicorn}
            alt="unicorn"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
              <img 
            className="avatar-pic"
            src={wonderwoman}
            alt="wonderwoman"
            onClick={this.addAvatar}
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            </div>
        </div>
        )
    }
}

export default Avatar

{/* <button onClick={this.addAvatar}>
    <img 
    className="ironman"
    src={ironman}
    alt="ironman"
    onClick={this.addAvatar} />
</button> */}