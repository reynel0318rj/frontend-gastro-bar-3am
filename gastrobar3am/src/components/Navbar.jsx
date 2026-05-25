function Navbar() {
  return (
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

        </ul>
      </nav>

      <a href="#reservar">
        <button className="btn-reservar">
          Reservar
        </button>
      </a>

    </header>
  );
}

export default Navbar;