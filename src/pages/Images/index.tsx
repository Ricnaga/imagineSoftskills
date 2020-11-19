import React from 'react';

import MenuLink from '../../components/Header'
import ssImg1 from './ss1.png'
import ssImg2 from './ss2.png'
import ssImg3 from './ss3.jpg'
import ssImg4 from './ss4.png'

import {ImageAll} from './styles'

const Images:React.FC = () => {
    return (
        <>
        <ImageAll>
            <img src={ssImg1} alt="soft skill de exemplo"/>
            <img src={ssImg2} alt="soft skill de exemplo"/>
            <img src={ssImg3} alt="soft skill de exemplo"/>
            <img src={ssImg4} alt="soft skill de exemplo"/>
        </ImageAll>
        </>
    )
}

export default Images;