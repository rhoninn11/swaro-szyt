import React from 'react';
import styled from 'styled-components';
import { Provider } from 'unstated';

import NoteContainer from './NoteContainer.jsx';

import { SworoszytDataContainer } from '../state/SworoszytDataContainer.js';

const SwaroszytWrapper = styled.div`
    display: flex;
    background: hsl(60, 23%, 70%);
    padding: 6vh 6vw; 
    min-height: 20vh;
`

const SwaroszytTab = styled.div`
    position: fixed;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
    left: ${(props) => props.visible ? '0' : '100vw'};
    transition: left 0.5s;
`

const Data = new SworoszytDataContainer();
Data.Init();

function Sworoszyt(props) {
    return (
        <SwaroszytTab visible={props.visible}>
            <SwaroszytWrapper>
                <Provider inject={[Data]}>
                    <NoteContainer />
                </Provider>
            </SwaroszytWrapper>
        </SwaroszytTab>
    );
}

export default Sworoszyt;
