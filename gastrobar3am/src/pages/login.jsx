import React, { useState } from "react";
import "./login.css";

function Login({ abierto = false, onCerrar }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = (e) => {
    e.preventDefault();
    window.location.hash = "#admin";
    onCerrar?.();
  };

  if (!abierto) {
    return null;
  }

  return (
    <div className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-titulo">
      <button className="login-backdrop" type="button" aria-label="Cerrar login" onClick={onCerrar} />

      <form className="login-card" onSubmit={iniciarSesion}>
        <button className="login-close" type="button" aria-label="Cerrar" onClick={onCerrar}>
          x
        </button>

        <h2 id="login-titulo">Admin GastroBar 3AM</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contrasena"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
