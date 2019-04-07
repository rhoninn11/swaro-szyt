import React from 'react';
import styled from 'styled-components'
import { Subscribe } from 'unstated';

import { SworoszytDataContainer } from '../state/SworoszytDataContainer.js';

import NoteCreator from './NoteCreator.jsx'
import Note from './Note.jsx';


const ContainerWrapper = styled.div`
border-radius: 3em;
display: flex;
flex-direction: column;
color: #839bc4;
background: #475368;
padding: 2em;

`;


function NoteContainer(props) {
    return (
        <Subscribe to={[SworoszytDataContainer]}>
            {sworoszyt => (
                <ContainerWrapper>
                    {sworoszyt.state.notes.map((note, idx) => (
                        <Note
                            value={note.text}
                            done={note.done}
                            key={idx}
                            markAsDone={() => sworoszyt.markNoteAsDone(idx)}
                            delete={() => sworoszyt.deleteNote(idx)}
                        />
                    ))}
                    <NoteCreator
                        value={sworoszyt.state.newNote}
                        onChange={sworoszyt.handleNewNoteInput}
                        onClick={sworoszyt.addNote}
                    />
                </ContainerWrapper>
            )}
        </Subscribe>

    );
}

export default NoteContainer;