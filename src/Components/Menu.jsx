import React, { Component } from 'react';

import '../Components-styles/Menu.css';

import MenuOpener from './MenuOpener.jsx';
import MenuOption from './MenuOption.jsx';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
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
            <div className={`Menu Menu-${this.state.isMenuOpen ? 'show' : 'hide'}`}>
                <div className="Menu-options">
                    {this.state.items.map((value, idx) => <MenuOption key={idx} option={value} onClick={this.props.itemsHandlers[idx]}></MenuOption>)}
                </div>
                <MenuOpener
                    iconDirection={this.state.isMenuOpen ? 'right' : 'left'}
                    onClick={this.showMenu}
                />
            </div>
        );
    }
}
