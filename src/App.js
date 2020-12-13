import React, {Component} from 'react';
import './App.css';
import Welcome from '../src/Components/Welcome/Welcome'
// import Login from './Components/Login/Login'
// import {Button, TextField} from '@material-ui/core'
// import { BrowserRouter } from 'react-router-dom';
// import Router from "./Router";
// import { bool } from 'prop-types';
// import Login from './Components/Login/Login'


// eslint-disable-next-line no-undef
class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        // exit: false, 
        showLogin: true,
        // loggedIn: false, 
        name: '', 
      }
    }
   


  // handleClick = () => {
  //   this.setState({
  //     loggedIn: !this.state.loggedIn,
  //   });
  //   this.handleClick.bind(this);
  // };
  handleLogin = (name, boolean) => {
    this.setState({name: name, showLogin: boolean})
  }

  render() {
    const { name} = this.state;
    return (
      <div className="App">
        {/* {showLogin ? 
        <Login name={this.handleLogin} /> : null} */}
        <Welcome name={name} />
      </div>
      // this.state.showLogin ? (
    // ) : (
    //   <div>
    //     <div className="wrapper">
    //         <div className="login">
    //             <form>
    //                 <div className="username">
    //                     <label>Username</label>
    //                     <input
    //                     type="name" 
    //                     id="username" 
    //                     name="username" 
    //                     placeholder="Username"
    //                     onChange={this.handleChange}
    //                     />
    //                 </div>
    //                 <button onClick={this.handleClick}>
    //                     Submit
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    //   </div>
    )
  }
  }
export default App;

// eslint-disable-next-line
    {/* {showLogin ? <Login name={this.handleLogin} /> : null} */}
    // eslint-disable-next-line
    {/* <BrowserRouter>
      <Welcome />
      <Router />
  </BrowserRouter> */}

// return this.state.loggedIn ? (
//   <div className="App">
// <Welcome />
//   </div>
// ) : (
//   <div>
//     <div className="login">
//     <TextField
//       className="username"
//       id="username"
//       placeholder="username"
//       margin="normal"
//       variant="outlined"
//     ></TextField>
//     <TextField
//       className="password"
//       id="password"
//       placeholder="password"
//       margin="normal"
//       variant="outlined"
//       color="white"
//     ></TextField>
//     <Button
//       onClick={this.handleClick}
//       variant="contained"
//       color="secondary"
//     >
//       Login
//     </Button>
//   </div>
// </div>
// );
// }
// }
