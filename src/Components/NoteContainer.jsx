import React from 'react';
import { Subscribe } from 'unstated';

import { SworoszytDataContainer } from '../state/SworoszytDataContainer.jsx';

import '../Components-styles/NoteContainer.css';

import NoteCreator from './NoteCreator.jsx'

import Note from './Note.jsx';


function NoteContainer(props) {
    return (
        <Subscribe to={[SworoszytDataContainer]}>
            {sworoszyt => (
                <div className={'NoteContainer'}>
                    {sworoszyt.state.notes.map((note, idx) => <Note value={note.text} key={idx} />)}
                    <NoteCreator />
                </div>
            )}
        </Subscribe>
    );
}

export default NoteContainer;