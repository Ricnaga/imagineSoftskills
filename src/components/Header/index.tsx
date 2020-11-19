import React from 'react';
import {Link} from 'react-router-dom';

import {HeaderNav} from './styles';

const Header:React.FC = () => {
    return (
        <HeaderNav>
            <Link to="/"> Página principal </Link> |
            <Link to="/WhatIs"> O que é? </Link> |
            <Link to="/why"> Por que ? </Link> |
            <Link to="/Images"> Ibagens </Link> |
            <Link to="/references"> Referências </Link>
        </HeaderNav>
    )
}

export default Header;