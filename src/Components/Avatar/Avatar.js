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

const Avatar = () => {
    // const [wobble, setWobble] = React.useState(0)
    return (
        <div className="avatars">
            <h1>¡Escoge tu avatar!</h1>
            <div className="avatar-buttons">
            <a href="ironman.png">
            <img 
            className="ironman"
            src={ironman}
            alt="ironman"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
                 />
            </a>
            <img 
            className="superman"
            src={superman}
            alt="superman"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="avenger"
            src={avenger}
            alt="avenger" 
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="frankenstein"
            src={frankenstein}
            alt="frankenstein"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="kitty"
            src={kitty}
            alt="kitty"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="supergirl"
            src={supergirl}
            alt="supergirl"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="unicorn"
            src={unicorn}
            alt="unicorn"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            <img 
            className="wonderwoman"
            src={wonderwoman}
            alt="wonderwoman"
            // onClick={() => setWobble(1)}
            // onAnimationEnd={() => setWobble(0)}
            // wobble={wobble}
            />
            </div>
        </div>
    )
}

export default Avatar