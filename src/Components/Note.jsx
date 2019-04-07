import React from 'react'
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faTrashAlt, faUndoAlt, faCheck } from '@fortawesome/free-solid-svg-icons'


const NoteText = styled.div`
    flex: 1;
    word-break: break-all;
    text-align: left;
    margin: auto;
`;

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyldeFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin: 2px;

    &:hover{ color: #b89f72; }
`;

const RotatingFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin: 2px;
`;

const SingleNoteWrapper = styled.div`
    color: ${(props) => props.done ? '#5b6e5c' : '#88b48a;'};
    text-decoration: ${(props) => props.done ? 'line-through' : 'none;'};
    display: flex;


    &:hover{ color: #568b7c; }
    &:hover ${RotatingFontAwesomeIcon}{ animation: ${rotate} 2s linear infinite;}
`;


function Note(props) {
    return (
        <SingleNoteWrapper done={props.done}>
            <RotatingFontAwesomeIcon icon={faAsterisk} />
            <NoteText > {props.value} </NoteText>

            <StyldeFontAwesomeIcon icon={props.done ? faUndoAlt : faCheck} onClick={props.markAsDone} />
            <StyldeFontAwesomeIcon icon={faTrashAlt} onClick={props.delete} />

        </SingleNoteWrapper>
    )
    //
}

Note.propTypes = {
    value: PropTypes.string
}

export default Note


