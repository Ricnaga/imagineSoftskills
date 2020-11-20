import React from 'react';

import {WhatisAll} from './styles'

const WhatIs:React.FC = () => {
    return (
        <>
        <WhatisAll>
             <p id="content">
                Existe dois tipos de skills que um profissional pode ter, hard skills e soft skills. 
                Hard skills são habilidades técnicas, geralmente ensinadas e aprimoradas durante a escola/faculdade.
                Soft skills são habilidades voltadas a personalidade e comportamento do profissional, habilidades mentais, emocionais e sociais. 
                São habilidades relacionadas a forma de se relacionar e interagir com as pessoas. 
                De forma alguma soft skills são adquiridas com capacitação técnica.
                Soft skills são mais difíceis de se adquirir do que hard skills mas é possível obter, os meios mais comuns são através de um curso ou lendo um livro e praticar o que foi absorvido de informação.
                A geração mais moderna aparenta se preocupar mais com a formação acadêmica para o mercado de trabalho e não se atentam a habilidades como inteligência emocional.
                Isso dificulta a estabilidade no mercado de trabalho pois o que mais é cobrado no ensino médio são as hard skills. 
                O adolescente ao sair da fase e iniciar a vida adulta encontram dificuldades em fortalecer a inteligência emocional.
                Eis algumas práticas para melhorar soft skills:
            </p>

            <p id="skills">
                <p> <strong>Autoconhecimento:</strong> Praticar autoconhecimento é necessário para identificar onde necessita ser melhorado.</p>
                <p> <strong>Busque desafios:</strong> sair da zona de conforto e principalmente vencer desafios é uma das ferramentas para melhorar suas soft skills.</p>
                <p> <strong>Referências:</strong> Busque referências de pessoas que você se inspira.</p>
                <p> <strong>feedback:</strong> Peça feedback para saber como melhorar seu lado profissional.</p>
            </p>

        </WhatisAll>
        </>
    )
}

export default WhatIs;