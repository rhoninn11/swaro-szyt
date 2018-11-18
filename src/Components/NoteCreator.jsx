import React from 'react';
import { Subscribe} from 'unstated';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import { SworoszytDataContainer } from '../state/SworoszytDataContainer.jsx';

import '../Components-styles/NoteCreator.css';

export default function NoteCreator(props) {
    return (
        
            <Subscribe to={[SworoszytDataContainer]}>
                {sworoszyt => (
                    <div className={'NoteCreator'}>
                        <input className={'NoteCreator-input'} type="text" value={sworoszyt.state.newNote} onChange={sworoszyt.handleNewNoteInput} placeholder={'Add note'}/>
                        <span className={'NoteCreator-button'} onClick={() => sworoszyt.addNote()}><FontAwesomeIcon icon={faPlus}/></span>
                    </div>
                )}
            </Subscribe>
    );
}


