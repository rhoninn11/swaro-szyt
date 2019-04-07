import React, { Component } from 'react';
import styled from 'styled-components'

import MenuOpener from './MenuOpener.jsx';
import MenuOption from './MenuOption.jsx';

const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: ${(props) => props.show ? '0':'-12em'};
    display: flex;
    transition: left 0.1s;
    z-index: 100;
`

const Options = styled.div`
    display: flex;
    flex-direction: column;
    background: hsl(40, 20%, 70%);
    padding: 0.6em;
    border-radius: 0.3em;
`


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.showMenu = this.showMenu.bind(this)
    }

    showMenu() {
        console.log('click');
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <MenuWrapper show={this.state.isMenuOpen}>
                <Options>
                    {this.props.items.map((value, idx) => (
                        <MenuOption key={idx} option={value} 
                                    onClick={this.props.itemsHandlers[idx]}/>
                    ))}
                </Options>
                <MenuOpener
                    iconDirection={this.state.isMenuOpen ? 'left' : 'right'}
                    onClick={this.showMenu}/>
            </MenuWrapper>
        );
    }
}
