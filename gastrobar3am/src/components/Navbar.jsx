import { useState } from "react";
import Login from "../pages/login";

function Navbar() {
  const [loginActivo, setLoginActivo] = useState(null);

  const abrirLogin = (e, tipo) => {
    e.preventDefault();
    setLoginActivo(tipo);
  };

  const loginConfig = {
    admin: {
      titulo: "Admin GastroBar 3AM",
      destino: "#admin",
    },
    cliente: {
      titulo: "Cliente GastroBar 3AM",
      destino: "#cliente",
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
            <a href="#cliente" onClick={(e) => abrirLogin(e, "cliente")}>Cliente</a>
          </li>

          <li>
            <a href="#admin" onClick={(e) => abrirLogin(e, "admin")}>Admin</a>
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
      onCerrar={() => setLoginActivo(null)}
    />
    </>
  );
}

export default Navbar;
