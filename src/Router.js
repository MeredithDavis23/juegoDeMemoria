import React from 'react'
    import { Switch, Route } from 'react-router'
    import Welcome from './Components/Welcome/Welcome'
    import Avatar from './Components/Avatar/Avatar'
    import Exit from './Components/Welcome/ExitPopup'
    import Game from './Components/GameScreen/Game'
    

    const Router = () => {
        return (
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/avatar" component={Avatar} />
                <Route path="/game" component={Game} />
                <Route path='/exit'  component={Exit} />
            </Switch>
        )
    }

    export default Router