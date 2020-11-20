import React from 'react';

import {WhyAll} from './styles'

const Why:React.FC = () => {
    return (
        <>
        <WhyAll>
            <p id="whyHeader">
                Eis alguns pontos para se destacar do por que devemos adquirir melhor soft skills, os benefícios de um profissional com soft skills são foco, engajamento, motivação, produtividade e melhorar preparação para as exigências do mercado de trabalho.
                Quanto maior soft skill do profissional, mais positivamente é afetado no ambiente corporativo e produtividade da equipe. Outro benefício é maior preparação para o mercado de trabalho.
            </p>

            <ul id="points">
                <li>Melhor relacionamento com os demais profissionais, equipes e clientes.</li>
                <li>Foco</li>
                <li>Motivação</li>
                <li>Agilidade em adquirir cargos de liderança</li>
            </ul>
        </WhyAll>
        </>
    )
}

export default Why;