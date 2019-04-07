import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreatorWrapper = styled.div`
    display: flex;
    align-items: center;
    color: aliceblue;
`

const CreatorInput = styled.input`
    flex: 1;
    background: none;
    border: none;
    border-bottom: solid 2px;
    padding: 5px;
    color: aliceblue;
`

const CreatorAddButton = styled.span`
    display: flex;
    padding: 1em;
    margin-left: 10px;
    border-radius: 50%;
    background: rgba(54, 75, 105, 0.5);
    box-shadow: 5px 5px 5px 1px #132441;
    transition: box-shadow 0.2s;
    cursor: pointer;

    &:active{ background: rgba(94, 100, 109, 0.5);}
    &:hover{ box-shadow: 10px 10px 7px 0.1px #132441;
             background: rgba(60, 81, 109, 0.5);}
`
const CenteredIcon = styled(FontAwesomeIcon)` margin: auto;`;

export default function NoteCreator(props) {
    return (
        <CreatorWrapper>
            <CreatorInput type="text" value={props.value} onChange={(e) => props.onChange(e)} placeholder={'Add note'} />
            <CreatorAddButton onClick={() => props.onClick()}> <CenteredIcon icon={faPlus} /></CreatorAddButton>
        </CreatorWrapper>
    );
}
