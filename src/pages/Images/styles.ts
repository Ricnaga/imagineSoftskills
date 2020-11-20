import styled from 'styled-components';

export const ImageAll = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    img{
        width:60vw;
        margin:1em;
    }

    @media(max-width:720px){

        img{
            width:80vw;
        }
    }
`;