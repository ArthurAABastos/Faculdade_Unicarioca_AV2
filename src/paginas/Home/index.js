import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';

const Home = (  ) => {
  return (
    <EstruturaPagina>

      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>Os melhores <span>alunos</span>!</h1>

          <p>
            Confira abaixo todas as especialidades desenvolvidas pelos alunos à sua disposição! 
          </p>

          <ul className="lista-servicos">
            <li>
              <img src="assets/html.png" alt="logo" title="logo"/>
              <p>HTML</p>
            </li>

            <li>
              <img src="assets/css.png" alt="logo" title="logo"/>
              <p>CSS</p>
            </li>

            <li>
              <img src="assets/js.png" alt="logo" title="logo"/>
              <p>JavaScript</p>
            </li>

            <li>
              <img src="assets/react.png" alt="logo" title="logo"/>
              <p>React JS</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="titulo-sessao">Por que nos <b>contratar</b>!</h2>

      <img className="img-kit-dev" src="assets/kit_dev.png" alt="Imagem das funções" title="Imagem do uso das funções"/>

      <ul className="lista-alunos limitar-container">
        <li>
          <h3>Desenvolvemos seu WebSite</h3>
          <p>Criação de sites para qualquer tipo de empreendimento.</p>
        </li>
        <li>
          <h3>WebSites responsívos</h3>
          <p>Sites que se adatam a todos os tipos de dispositivos.</p>
        </li>
        <li>
          <h3>Banco de Dados</h3>
          <p>Armazente as informações dos seus clientes de maneira fácil e rápida.</p>
        </li>
      </ul>      
      
      <div className="home-depoimentos">
        <h2 className="titulo-sessao">Veja alguns desenvolvedores do <b>nosso</b> time...</h2>

        <ul className="lista-depoimentos">
          <li>
            <img className="img-aluno" src="assets/gabriel.jpg" alt="Gabriel-Nascimento" title="Gabriel-Nascimento"/>
            <p>Gabriel Nascimento</p>
            <p>Matrtícula: 2019200071.</p>
          </li>

          <li>
            <img className="img-aluno" src="assets/arthur.jpg" alt="Arthur-Bastos" title="Arthur-Bastos"/>
            <p>Arthur Bastos</p>
            <p>Matrtícula: 2015200804.</p>
          </li>

          <li>
            <img className="img-aluno" src="assets/lucas.jpeg" alt="Lucas-Aguiar" title="Lucas-Aguiar"/>
            <p>Lucas Aguiar</p>
            <p>Matrícula: 2018102744.</p>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/contato" className="btn-contato">Entrar em contato</Link>

      </div>
    </EstruturaPagina>
  );
}

export default Home;
