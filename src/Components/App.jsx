import React, { Component } from 'react';
import styled, { createGlobalStyle , keyframes } from 'styled-components';

import logo from '../logo.svg';

import Board from './Board.jsx';
import Menu from './Menu.jsx';
import Sworoszyt from './Sworoszyt.jsx';


const GlobalStyle = createGlobalStyle`
  body {margin: 0; padding: 0;}

  *,
  *:before,
  *:after {box-sizing: border-box;}
`
const AppLink = styled.div`color: #61dafb;`;

const AppWrapper = styled.div`text-align: center;`;

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


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
      <>
        <GlobalStyle />
        <AppWrapper>

          <Menu items={['Lista', 'opcja 2']} itemsHandlers={[this.toggleSworoszyt, () => console.log('empty')]}></Menu>

          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <AppLink href="https://reactjs.org" target="_blank"
              rel="noopener noreferrer">
              Learn React
            </AppLink>
            <Board />
          </AppHeader>
          <Sworoszyt visible={this.state.soroszytVisibility} />
        </AppWrapper>
      </>
    );
  }
}

export default App;
