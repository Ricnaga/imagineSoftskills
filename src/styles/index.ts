import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

#root{
    width:100vw;
    max-width:1280px;
    margin:0 auto;
    padding: 5px 20px;
    text-align:justify;
    font-size:1em;
}

*{
    margin:0;
    border:0;
    outline:0;
    box-sizing:border-box;    
}

body{
    height:100vh;
    background:linear-gradient(329.54deg, #1E90FF 0%, #87CEFA 100%) no-repeat center;
    background-size:cover;
    font-family: 'Balsamiq Sans', cursive;
    color:#B22222;
}
`;