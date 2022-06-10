import './App.css';
import Rotas from './Rotas';
import api from "./services/api";
import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/ArthurAABastos")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
    <div className="App">
      <Rotas />

      <div className="App">
        <p>Usuário: {user?.login}</p>
        <p>Biografia: {user?.bio}</p>


      </div>

    </div>
  );
}

export default App;
