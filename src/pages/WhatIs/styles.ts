import styled from 'styled-components';

export const WhatisAll = styled.div`
    width:70vw;
    margin:1em auto;
    padding: 0.4em 0;
    animation: up 1s;

    p#skills{
        margin:1em;
        font-size:1.5em;

        p{
            width:60vw;
            margin:0.2em auto;
        }
    }

    @media(max-width:700px){
        width:80vw;

        p#skills{
            font-size:1 em;
        }
    }
`;