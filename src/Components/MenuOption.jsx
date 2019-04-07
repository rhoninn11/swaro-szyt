import React, { Component } from 'react';
import styled from 'styled-components';


const OptionWrapper = styled.div`
    height: 2em;
    width: 10em;
    margin: 0.1em;
    transition: width 0.5s;
    
    border-radius: 1em;
    background: hsl(40, 40%, 70%);
    border: 2px solid black;
    display: flex;
    text-align: left;

    &:hover{width: 12em;}
`
const OptionContent = styled.span` 
    margin: auto;
    flex: 1;
`


class MenuOption extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <OptionWrapper onClick={this.props.onClick}>
                <OptionContent>{this.props.option}</OptionContent>
            </OptionWrapper>
        );
    }
}

export default MenuOption;