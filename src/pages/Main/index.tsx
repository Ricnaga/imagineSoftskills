import React from 'react';

import {MainAll} from './styles';

const Main:React.FC = () => {
    return (
        <>
        <MainAll>
        <h1>Desafio Expansion Week</h1>
        <h2>O desafio da Expansion Week será criar uma landing page do zero.</h2>

        <div id="main">
            <p> O objetivo dessa landing page será falar sobre uma soft skill que eu acho mais importante para um desenvolvedor(Dev).
                Todo conteúdo dessa aplicação foi realizada com React | Typescript conforme regras do desafio. 
                Todo o conteúdo postado está referenciado e escrito pelo meu entendimento.
                Conforme o desafio, será inserido outras mídias(vídeos, links, imagens,etc...).
            </p>
        </div>

        <div>
            <p id="questionsTitle">Comecemos com algumas dúvidas:</p>
                <ul id="questions">
                    <li><strong>O que é soft skill ?</strong></li>
                    <li><strong>Por que se deve ter soft skill ?</strong></li>
                    <li><strong>Quais os requisitos para desenvolver ?</strong></li>
                </ul>

        </div>

        
        </MainAll>
        </>
    )
}

export default Main;