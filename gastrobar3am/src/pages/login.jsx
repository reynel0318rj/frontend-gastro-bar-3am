import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          password,
        }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert("Bienvenido " + datos.nombre);
        localStorage.setItem("token", datos.token);
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="contenedor-login">
      <form className="login-card" onSubmit={iniciarSesion}>
        <h2>🍸 GastroBar 3AM</h2>

        <input
          type="text"
          placeholder="Usuario"
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

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;