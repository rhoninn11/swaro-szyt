import React, { Component } from 'react';
import styled from 'styled-components'

import { faAngleRight, faAngleLeft, faAngleUp, faAngleDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CenteredIcon = styled(FontAwesomeIcon)` margin: auto;`

const OpenerWrapper = styled.div`
    min-width: 3em;
    min-height: 3em;
    border-radius: 50%;
    background: #4f2;
    opacity: 0.1;
    transition: opacity 0.5s;
    display: flex;
    align-self: center;

    &:hover{opacity: 0.84;}
`

class MenuOpener extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    selectIcon(prop) {
        let {iconDirection} = prop;

        if (iconDirection === 'up')
            return faAngleUp;
        else if (iconDirection === 'down')
            return faAngleDown;
        else if (iconDirection === 'left')
            return faAngleLeft;
        else if (iconDirection === 'right')
            return faAngleRight;
        else
            return faCoffee;
    }

    render() {
        return (
            <OpenerWrapper onClick={this.props.onClick}>
                <CenteredIcon icon={this.selectIcon(this.props)}>
                </CenteredIcon>
            </OpenerWrapper>
        );
    }
}

export default MenuOpener;