import React from 'react';
import styled from 'styled-components'

const NormalBox = styled.div`
background: #fff;
min-height: 50px;
min-width: 10em;
`;

const EnormusBox = styled.div`
background: #aaa;
min-height: 50px;
flex: 1;
`;

const BoxWrapper = styled.div`
    display: flex;   
    flex: 1;
`;

function NoteTest() {
    return (
        <BoxWrapper>
            <NormalBox/>
            <NormalBox/>
            <EnormusBox/>
            <NormalBox/>
        </BoxWrapper>
    )
}

export default NoteTest