import React, { Component } from 'react';
import styled from 'styled-components'


const SquareButton = styled.button`
    background: #465e75;
    color: #fff;
    display: flex;
    min-height: 3em;
    min-width: 3em;
`

const ButtonContent = styled.span`
    margin: auto;
`

class Square extends Component {

    render() {
        return (
            <SquareButton onClick={() => this.props.onClick()}>
                <ButtonContent>{this.props.value}</ButtonContent>
            </SquareButton>
        );
    }
}

export default Square;