import React from 'react';

import MenuLink from '../../components/Header';
import {ReferencesAll} from './styles'

const References:React.FC = () => {
    return (
        <>
        <MenuLink />
        <ReferencesAll>
        Referências
        https://www.constructionexec.com/article/soft-skills-are-building-blocks-to-better-teams-in-the-construction-industry
        </ReferencesAll>
        </>
    )
}

export default References;