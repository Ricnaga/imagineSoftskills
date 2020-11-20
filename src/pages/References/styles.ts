import styled from 'styled-components';

export const ReferencesAll = styled.div`
    margin:2em auto;
    font-size:1.5em;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:justify; 
    animation: up 1s;
    
    
    li{
        line-height:1.3em;
        text-transform:uppercase;
        
        a{
            color:#581845;
            text-decoration:none;
        }
    }
`;