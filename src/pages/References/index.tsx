import React from 'react';

import MenuLink from '../../components/Header';
import {ReferencesAll} from './styles'

const References:React.FC = () => {
    return (
        <>
        <MenuLink />
        <ReferencesAll>
            <ul>
                <li>https://qariaty.com/soft-skills/</li>
                <li>https://www.edools.com/soft-skills/</li>
                <li>https://fia.com.br/blog/soft-skills/</li>
                <li>https://www.napratica.org.br/como-desenvolver-soft-skills/</li>
                <li>https://www.hrbartender.com/2019/recruiting/top-soft-skills-employers/</li>
                <li>https://mundozumm.com.br/soft-skills-valorizadas-empresas/</li>
                <li>https://www.vagas.com.br/profissoes/6-soft-skills-mais-demandadas-pelos-empregadores/</li>
                <li>https://www.constructionexec.com/article/soft-skills-are-building-blocks-to-better-teams-in-the-construction-industry</li>
            </ul>
        </ReferencesAll>
        </>
    )
}

export default References;