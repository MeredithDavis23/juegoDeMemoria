import React, {Component} from 'react';
import './App.css';
import Welcome from '../src/Components/Welcome/Welcome'



// eslint-disable-next-line no-undef
class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        exit: false, 
        avatar: '',

      }
    }

    addAvatar = (e) => {
      e.preventDefault();
      this.props.avatar(this.state.avatar)
      console.log("add")
  }

    render() {
      return (
        <div className="App">
    <Welcome />
        </div>
      );
    }
    }


export default App;
