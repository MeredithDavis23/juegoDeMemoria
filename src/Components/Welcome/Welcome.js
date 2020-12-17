
import React from 'react';
import NavBar from './NavBar';
import './NavBar.css'
// import './Login.css'

class Welcome extends React.Component {

  state = {
    loggedIn: false
}


setToggle() {
  this.setState({
    toggled: true
  })
}

handleClick = () => {
  this.setState({
    loggedIn: !this.state.loggedIn,
  });
  this.handleClick.bind(this);
};

render() {
  return this.state.loggedIn ? (
    <div className="welcome-screen">
          <div className="welcome">
            <h3 className="temporary-header">¡Bienvenidos a Pókememoria!</h3>
          </div>
          <NavBar />
      </div>
      ) : (
      <div> 
         <NavBar />
         <div className="login">
          <form className="login-form" onSubmit={this.handleClick}>
        <div className="firstname">
          <label for="username">User Name  </label>
            <input type="text" id="fname" name="username" placeholder="Username" />
            </div>
          <div className="lastname">
           <label for="lname">Last Name  </label>
               <input type="password" id="password" name="password" placeholder="Password" />
           </div>
            <div className="submit-button">
            <input type="submit" id="submit" value="Submit" />
           </div>
         </form>
         </div>

      </div>

  )
}
}

export default Welcome 


// const Welcome = () => {
//     const [toggled, setToggle] = useState(false)

 

//     return (
//         <div className="welcome-screen">
//             <div className="welcome">
//               <h3 className="temporary-header">¡Bienvenidos a Pókememoria!</h3>
//             </div>
//             <NavBar toggled={toggled} setToggle={setToggle} />
          
//         </div>
//       );
// }
 
// export default Welcome

// class Welcome extends React.Component {

//     state = {
//       toggled: false, 
//       showLogin: true, 
//       name: "",
//   }


//   handleLogin = (name, boolean) => {
//     this.setState({name: name, showLogin: boolean})
//   }

//   setToggle() {
//     this.setState({
//       toggled: true
//     })
//   }

//   render() {
//     return (
//       <div className="welcome-screen">
//             <div className="welcome">
//               <h3 className="temporary-header">¡Bienvenidos a Pókememoria!</h3>
//             </div>
//             {this.showLogin ? <Login name={this.handleLogin} /> : null}
//             <NavBar name={this.name} />
          
//         </div>

//     )
//   }
// }

// export default Welcome 