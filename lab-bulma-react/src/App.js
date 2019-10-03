import React, { Component } from 'react';
import logo from './logo.svg';
import CoolButton from './components/CoolButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}

export default App;
