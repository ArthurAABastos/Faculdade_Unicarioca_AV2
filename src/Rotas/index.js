import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';
import Colaboradores from '../paginas/Colaboradores';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/contato' element={ <Contato /> } />
            <Route exact path='/colaboradores' element={ <Colaboradores /> } />

        </Routes>
    </BrowserRouter>
);

export default Rotas;