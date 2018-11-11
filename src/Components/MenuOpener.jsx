import React, { Component } from 'react';
import { faAngleRight, faAngleLeft, faAngleUp, faAngleDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Components-styles/MenuOpener.css'

class MenuOpener extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    renderIcon(iconDirection) {
        if (iconDirection === 'up')
            return <FontAwesomeIcon icon={faAngleUp} />
        else if (iconDirection === 'down')
            return <FontAwesomeIcon icon={faAngleDown} />
        else if (iconDirection === 'left')
            return <FontAwesomeIcon icon={faAngleLeft} />
        else if (iconDirection === 'right')
            return <FontAwesomeIcon icon={faAngleRight} />
        else
            return <FontAwesomeIcon icon={faCoffee} />
    }
    render() {
        return (
            <div className="MenuOpener" onClick={this.props.onClick}>
                <div className="MenuOpener-inside">
                 {this.renderIcon(this.props.iconDirection)}

                </div>
            </div>
        );
    }
}



export default MenuOpener;