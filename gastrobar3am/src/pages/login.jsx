import React, { useState } from "react";
import { getTokenFromResponse, loginUser, setToken } from "../services/api";
import "./login.css";

function Login({ abierto = false, onCerrar, titulo = "Admin GastroBar 3AM", destino = "#admin" }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    setCargando(true);
    setError("");

    try {
      const credenciales = {
        usuario,
        email: usuario,
        password,
      };

      const respuesta = await loginUser(credenciales);
      const token = getTokenFromResponse(respuesta);

      if (!token) {
        throw new Error("La API no devolvió un token válido.");
      }

      setToken(token);
      window.location.hash = destino;
      onCerrar?.();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "No se pudo iniciar sesión.");
    } finally {
      setCargando(false);
    }
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

        <h2 id="login-titulo">{titulo}</h2>

        {error ? <p className="login-error" role="alert">{error}</p> : null}

        <input
          type="text"
          placeholder="Usuario o correo"
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

        <button type="submit" disabled={cargando}>
          {cargando ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}

export default Login;
