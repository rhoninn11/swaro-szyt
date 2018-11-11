import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAsterisk} from '@fortawesome/free-solid-svg-icons'

import '../Components-styles/Note.css';

function Note(props) {
  return (
      <div className={'Note'}>
          <FontAwesomeIcon icon={faAsterisk}/>
          <span>{props.value}</span>
      </div>
  )
}

Note.propTypes = {
    value: PropTypes.string
}

export default Note


