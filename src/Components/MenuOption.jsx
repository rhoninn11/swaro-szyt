import React, { Component } from 'react';

import '../Components-styles/MenuOption.css';


class MenuOption extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div className="MenuOption" onClick={this.props.onClick}>{this.props.option}</div>
        );
    }
}

export default MenuOption;