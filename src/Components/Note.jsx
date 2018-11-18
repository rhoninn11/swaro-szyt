import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk, faTrashAlt, faUndoAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

import '../Components-styles/Note.css';

function Note(props) {
    return (
        <div className={`Note ${props.done ? 'Note-done' : ''}`}>
            <FontAwesomeIcon icon={faAsterisk} />
            <div className={'Note-text'}>
                {props.value}
            </div>
            <div className={'Note-delete'}>
                <FontAwesomeIcon icon={props.done ? faUndoAlt : faCheck} onClick={props.onMarkAsDone}/>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    )
    //
}

Note.propTypes = {
    value: PropTypes.string
}

export default Note


