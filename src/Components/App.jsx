import React, { Component } from 'react';

import logo from '../logo.svg';

import '../Components-styles/App.css';

import Board from './Board.jsx';
import Menu from './Menu.jsx';
import Sworoszyt from './Sworoszyt.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soroszytVisibility: false,
      canvasVisibility: false
    };

    this.toggleSworoszyt = this.toggleSworoszyt.bind(this);
  }

  toggleSworoszyt() {
    let swoTogg = this.state.soroszytVisibility;

    this.setState({
      soroszytVisibility: !swoTogg,
      canvasVisibility: this.state.canvasVisibility && !swoTogg ? false : this.state.canvasVisibility
    });
  }

  render() {
    return (
      <div className="App">

        <Menu items={['opcja 1', 'opcja 2', 'opcja 3']} itemsHandlers={[this.toggleSworoszyt, () => console.log('empty'),  () => console.log('empty')]}></Menu>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Board />
        </header>
        <Sworoszyt visible={this.state.soroszytVisibility} />
      </div>
    );
  }
}

export default App;
