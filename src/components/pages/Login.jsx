import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import styles from "./Login.module.css";
import Container from "../layout/Container";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { user, password });
    login(user, password); // integração com o context e api do backend
  };

  return (
    <Container customClass='backgroundLogin'>
      <div className={styles.login_box}>
        <form onSubmit={handleSubmit}>
          <h1>Na sala House</h1>
          <p>{String(authenticated)}</p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            autoComplete="on"
            name="username"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="digite a sua senha"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className={styles.btn_area}>
            <button className={styles.btn}>Entrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;