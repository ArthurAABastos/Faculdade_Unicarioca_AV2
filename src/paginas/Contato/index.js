import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';

import './estilo.css';

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Alunos <b>Participantes</b></h2>

          <p>Turma 953 - DESENVOLVIMENTO DE APLICAÇÕES WEB 2022/1 </p>

          <ul className="lista-alunos">
            <li>
              <img className="img-aluno" src="assets/jessica.jpeg" alt="Jessica-Silva" title="Jessica-Silva"/>
              <p>Jessica Silva</p>
              <p>Matrícula: 2014103724</p>
            </li>

            <li>
              <img className="img-aluno" src="assets/joel.png" alt="Joel-Bastos" title="Joel-Bastos"/>
              <p>Joel Bastos</p>
              <p>Matrícula: 2020101430</p>
            </li>

            <li>
              <img className="img-aluno" src="assets/brunna.jpeg" alt="Brunna-Mattos" title="Brunna-Mattos"/>
              <p>Brunna Mattos</p>
              <p>Matrícula: 2019200268</p>
            </li>
          </ul>

        </div>
        
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>

          <p>Rua Vensceslau, 192 - Unidade RJ - Méier 
          </p>

          <Mapa />
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Contato;
