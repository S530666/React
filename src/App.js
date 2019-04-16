import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
state = {
  username : 'Santhosh'
}

nameChangeEvent = (event) => {
  this.setState({username : event.target.value})
}

  render() {
    const style = {
      color: 'grey',
      border: '1px solid blue'
    };
    return (
      <div className="App">
        <UserInput style={style} click = {this.nameChangeEvent} user = {this.state.username} />
        <UserOutput
          user = {this.state.username}/> 
      </div>
    );
  }
}

export default App;
