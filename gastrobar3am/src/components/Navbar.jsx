import { useState } from "react";
import Login from "../pages/login";

function Navbar() {
  const [loginActivo, setLoginActivo] = useState(null);

  const abrirLogin = (e, tipo) => {
    e.preventDefault();
    setLoginActivo(tipo);
  };

  const loginConfig = {
    login: {
      titulo: "Iniciar sesión GastroBar 3AM",
      destino: "#cliente",
      modo: "login",
    },
    registro: {
      titulo: "Registro GastroBar 3AM",
      destino: "#cliente",
      modo: "register",
    },
  };

  const configActual = loginActivo ? loginConfig[loginActivo] : null;

  return (
    <>
    <header className="navbar">

      <div className="logo">
        GASTRO BAR 3AM
      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <a href="#inicio">Inicio</a>
          </li>

          <li>
            <a href="#nosotros">Nosotros</a>
          </li>

          <li>
            <a href="#eventos">Eventos</a>
          </li>

          <li>
            <a href="#menu">Menú</a>
          </li>

          <li>
            <a href="#contacto">Contacto</a>
          </li>

          <li>
            <a href="#login" onClick={(e) => abrirLogin(e, "login")}>Ingresar</a>
          </li>

          <li>
            <a href="#registro" onClick={(e) => abrirLogin(e, "registro")}>Registrarse</a>
          </li>

        </ul>
      </nav>

      <a href="#reservar">
        <button className="btn-reservar">
          Reservar
        </button>
      </a>

    </header>
    <Login
      abierto={Boolean(loginActivo)}
      titulo={configActual?.titulo}
      destino={configActual?.destino}
      modo={configActual?.modo}
      onCerrar={() => setLoginActivo(null)}
    />
    </>
  );
}

export default Navbar;
