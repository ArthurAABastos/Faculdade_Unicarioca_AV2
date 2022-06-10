import React from 'react';
import { Link } from 'react-router-dom';

import './estilo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/test.png" alt="av2-devweb" title="av2-devweb"/>
          <p className="topo-nome-empresa">AV2 - Desenvolvimento Web</p>
        </Link>

        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/contato">Contato</Link>
          <Link className="topo-link" to="/colaboradores">Colaboradores</Link>
        </nav>
      </div>
    </header>
  );
}

export default Topo;