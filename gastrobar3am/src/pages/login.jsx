import React, { useEffect, useState } from "react";
import {
  getRoleFromResponse,
  getTokenFromResponse,
  loginUser,
  registerUser,
  setToken,
} from "../services/api";
import "./login.css";

function Login({ abierto = true, onCerrar, titulo = "Admin GastroBar 3AM", destino = "#admin", modo = "login" }) {
  const [modoInterno, setModoInterno] = useState(modo);
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setModoInterno(modo);
    setError("");
    setMensaje("");
  }, [modo]);

  const iniciarSesion = async (e) => {
    e.preventDefault();

    setCargando(true);
    setError("");

    try {
      let respuesta;

      if (modoInterno === "register") {
        const nuevoUsuario = {
          name: nombre.trim(),
          email: email.trim(),
          password,
          phone: phone.trim(),
        };

        respuesta = await registerUser(nuevoUsuario);
      } else {
        const credenciales = {
          usuario: usuario.trim(),
          email: usuario.trim(),
          password,
        };

        respuesta = await loginUser(credenciales);
      }

      const token = getTokenFromResponse(respuesta);

      if (token) {
        setToken(token);

        const rol = String(getRoleFromResponse(respuesta) || "").toLowerCase();
        const destinoFinal =
          rol === "admin" || rol === "administrador"
            ? "#admin"
            : rol === "cliente" || rol === "user" || rol === "usuario"
              ? "#cliente"
              : destino;

        window.location.hash = destinoFinal;
        onCerrar?.();
        return;
      }

      if (modoInterno === "register") {
        setMensaje("Registro exitoso. Ahora puedes iniciar sesión.");
        setNombre("");
        setEmail("");
        setPhone("");
        setPassword("");
      } else {
        throw new Error("La API no devolvió un token válido.");
      }
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
        {mensaje ? <p className="login-success" role="status">{mensaje}</p> : null}

        {modoInterno === "register" ? (
          <>
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Usuario o correo registrado"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button type="submit" disabled={cargando}>
          {cargando ? (modoInterno === "register" ? "Registrando..." : "Ingresando...") : (modoInterno === "register" ? "Registrarse" : "Ingresar")}
        </button>

        <div className="login-toggle">
          {modoInterno === "register" ? (
            <p>
              ¿Ya tienes cuenta? <button type="button" onClick={() => setModoInterno("login")}>Ingresar</button>
            </p>
          ) : (
            <p>
              ¿No tienes cuenta? <button type="button" onClick={() => setModoInterno("register")}>Registrarse</button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
