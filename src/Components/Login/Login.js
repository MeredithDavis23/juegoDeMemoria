import React from 'react';

const Login = () => {
    return (
        <div></div>
    )
}

export default Login



// import React, { useState } from 'react';
// import './Login.css'
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import './Login.css'
// import { render } from '@testing-library/react';


// class Login extends React.Component {
//     state = {};

//     handleChange = (e) => {
//         this.setState({ name: e.target.value})
//     }

//     handleClick = (e) => {
//         e.preventDefault();
//         this.setState({
//             showLogin: false
//         })
//       };

// render() {
//     return (
//         <div className="wrapper">
//             <div className="login">
//                 <form>
//                     <div className="username">
//                         <label>Username</label>
//                         <input
//                         type="name" 
//                         id="username" 
//                         name="username" 
//                         placeholder="Username"
//                         onChange={this.handleChange}
//                         />
//                     </div>
//                     <button onClick={this.handleClick}>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// }

// export default Login







// const Login = () => {
//   const [user, setUser] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name === "user") {
//       setUser(e.target.value);
//     } else {
//       // setPassword(evt.target.value);
//     }
//   };
//     const handleClick = (e) => {
//     e.preventDefault()
//     document.cookie = "loggedIn=true; max-age=60*1000";
//     window.location.replace("/welcome")
//     }



//       return (
//           <div className="login">
//           <form className="login-form" onSubmit={handleClick}>
//         <div className="firstname">
//           <label for="username">User Name  </label>
//             <input type="text" id="fname" name="username" placeholder="Username" />
//             </div>
//             <div className="lastname">
//             <label for="lname">Last Name  </label>
//                 <input type="password" id="password" name="password" placeholder="Password" />
//             </div>
//             <div className="submit-button">
//             <input type="submit" id="submit" value="Submit" />
//             </div>
//             </form>
//             </div>
//       )
//     }
 // eslint-disable-next-line
              {/* <TextField
                required 
                onChange={handleChange}
                className="username"
                id="username"
                placeholder="username"
                margin="normal"
                variant="filled"
              ></TextField>
              <TextField
               required 
               onChange={handleChange}
                className="password"
                id="password"
                placeholder="password"
                style={{ marginTop: 15 }}
                type="password"
                margin="normal"
                variant="filled"
                color="white"
              ></TextField>
              <Button
                className="login-button"
                variant="contained"
                type="submit"
                style={{
                    background: "#E84855",
                    color: "#fbf7ef",
                    fontFamily: "IBM Plex Mono",
                  }}
              >
                Login
              </Button> */}
 


// export default Login