import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UsuarioContext } from "../Contexts/User";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, user, loading } = useContext(UsuarioContext);

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  if (loading) {
    return <p>carregando</p>;
  }

  return (
    <>
      <button
        onClick={() => {
          signIn({
            email: "teste@teste.me",
            password: "123123"
          });
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;