import { useState } from "react";
import Login from "../pages/login";

function Navbar() {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const abrirLogin = (e) => {
    e.preventDefault();
    setMostrarLogin(true);
  };

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
            <a href="#admin" onClick={abrirLogin}>Admin</a>
          </li>

        </ul>
      </nav>

      <a href="#reservar">
        <button className="btn-reservar">
          Reservar
        </button>
      </a>

    </header>
    <Login abierto={mostrarLogin} onCerrar={() => setMostrarLogin(false)} />
    </>
  );
}

export default Navbar;
