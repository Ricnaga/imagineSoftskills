import styled from 'styled-components';

export const HeaderNav = styled.nav`
    display:flex;
    justify-content:space-around;

    font-family: 'Comfortaa', cursive;
    font-size:2em;

    margin:0.3em auto;
    
    a{
        text-decoration:none;
        color:#581845;
        transition: opacity 0.2s;

        &:hover{
            opacity:0.5;
        }
    }

    @media(max-width:720px){
        font-size:0.6em;

        a{
            padding:0.18em;
            background-color:#FFC300;

            display:flex;
            align-items:center;

            text-align:center;

            border-radius:1em;
        }

    }
`;