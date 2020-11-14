import React from 'react';
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
    return (
        <div className="avatars">
            <h1>Pick your Avatar</h1>
            <a href="ironman.png">
            <img className="ironman"
            src={ironman}
            alt="ironman" />
            </a>
            <img className="superman"
            src={superman}
            alt="superman" />
            <img className="avenger"
            src={avenger}
            alt="avenger" />
            <img className="frankenstein"
            src={frankenstein}
            alt="frankenstein" />
            <img className="kitty"
            src={kitty}
            alt="kitty" />
            <img className="supergirl"
            src={supergirl}
            alt="supergirl" />
            <img className="unicorn"
            src={unicorn}
            alt="unicorn" />
            <img className="wonderwoman"
            src={wonderwoman}
            alt="wonderwoman" />
        </div>
    )
}

export default Avatar