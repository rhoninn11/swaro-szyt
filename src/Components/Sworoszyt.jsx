import React, { Component } from 'react';
import { Provider } from 'unstated';

import '../Components-styles/Sworoszyt.css'

import NoteCreator from './NoteCreator.jsx';
import NoteContainer from './NoteContainer.jsx';

import { SworoszytDataContainer } from '../state/SworoszytDataContainer.jsx';

const Data = new SworoszytDataContainer();
Data.Init();

class Sworoszyt extends Component {
    constructor(props) {
        super(props);
        this.log = this.log.bind(this);
    }

    log() {
        console.log('message');
    }

    render() {
        return (
            <div className={`Sworoszyt Sworoszyt-${this.props.visible ? 'show' : 'hide'}`}>
            <div className={'Sworoszyt-container'}>
                <Provider inject={[Data]}>
                    <NoteContainer/>
                </Provider>
            </div>
            </div>
        );
    }
}

export default Sworoszyt;
