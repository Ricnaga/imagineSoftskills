import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import MenuLink from './components/Header'
import Routes from './routes'

import GlobalStyle from './styles'
const App: React.FC = () => (
    <>
    
    <BrowserRouter>
        <MenuLink/>
        <Routes />
    </BrowserRouter>
    <GlobalStyle/>
    </>
)

export default App;