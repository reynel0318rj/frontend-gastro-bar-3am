import "./Admin.css";
import { clearToken } from "../services/api";

const resumen = [
  {
    titulo: "Reservas de hoy",
    valor: "18",
    detalle: "6 pendientes por confirmar",
  },
  {
    titulo: "Eventos activos",
    valor: "4",
    detalle: "2 con cupos disponibles",
  },
  {
    titulo: "Ventas estimadas",
    valor: "$2.850.000",
    detalle: "Meta diaria al 72%",
  },
];

const reservas = [
  {
    cliente: "Laura Gomez",
    hora: "8:30 p.m.",
    personas: "4 personas",
    estado: "Confirmada",
  },
  {
    cliente: "Andres Rojas",
    hora: "9:15 p.m.",
    personas: "2 personas",
    estado: "Pendiente",
  },
  {
    cliente: "Valentina Ruiz",
    hora: "10:00 p.m.",
    personas: "6 personas",
    estado: "Confirmada",
  },
];

function Admin() {
  const cerrarSesion = () => {
    clearToken();
    window.location.hash = "#inicio";
  };

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <h1>3AM Admin</h1>

        <nav className="admin-nav">
          <a href="#panel">Panel</a>
          <a href="#reservas-admin">Reservas</a>
          <a href="#menu-admin">Menu</a>
          <a href="#eventos-admin">Eventos</a>
        </nav>

        <button className="admin-logout" type="button" onClick={cerrarSesion}>
          Cerrar sesion
        </button>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <span>Administrador</span>
            <h2>Panel de control</h2>
          </div>

          <a className="admin-back" href="#inicio">
            Volver al sitio
          </a>
        </header>

        <section id="panel" className="admin-summary">
          {resumen.map((item) => (
            <article className="admin-card" key={item.titulo}>
              <p>{item.titulo}</p>
              <strong>{item.valor}</strong>
              <span>{item.detalle}</span>
            </article>
          ))}
        </section>

        <section id="reservas-admin" className="admin-table-section">
          <div className="admin-section-title">
            <h3>Reservas recientes</h3>
            <button type="button">Nueva reserva</button>
          </div>

          <div className="admin-table">
            <div className="admin-table-row admin-table-head">
              <span>Cliente</span>
              <span>Hora</span>
              <span>Personas</span>
              <span>Estado</span>
            </div>

            {reservas.map((reserva) => (
              <div className="admin-table-row" key={reserva.cliente}>
                <span>{reserva.cliente}</span>
                <span>{reserva.hora}</span>
                <span>{reserva.personas}</span>
                <span className={reserva.estado === "Confirmada" ? "estado-ok" : "estado-pendiente"}>
                  {reserva.estado}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-actions">
          <article>
            <h3>Gestionar menu</h3>
            <p>Actualiza categorias, precios y disponibilidad de productos.</p>
            <button type="button">Editar menu</button>
          </article>

          <article>
            <h3>Gestionar eventos</h3>
            <p>Publica eventos, controla cupos y revisa reservas asociadas.</p>
            <button type="button">Editar eventos</button>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Admin;
