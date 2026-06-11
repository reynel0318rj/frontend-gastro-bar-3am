import "./Cliente.css";

const proximasReservas = [
  {
    fecha: "Viernes",
    hora: "8:00 p.m.",
    detalle: "Mesa para 4 personas",
  },
  {
    fecha: "Sabado",
    hora: "9:30 p.m.",
    detalle: "Evento con musica en vivo",
  },
];

const favoritos = ["Margarita", "Hamburguesa 3AM", "Brownie con helado"];

const menuCategorias = [
  {
    nombre: "Platos fuertes",
    items: [
      {
        nombre: "Baby beef 3AM",
        descripcion: "Corte de res a la parrilla con papas rusticas y chimichurri.",
        precio: "$42.000",
        imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Costillas BBQ",
        descripcion: "Costillas ahumadas con salsa BBQ, ensalada fresca y papas.",
        precio: "$39.000",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Pasta carbonara",
        descripcion: "Pasta cremosa con tocineta crocante, parmesano y pimienta.",
        precio: "$31.000",
        imagen: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Salmón grillado",
        descripcion: "Salmon a la plancha con vegetales salteados y salsa citrica.",
        precio: "$46.000",
        imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    nombre: "Comidas rapidas",
    items: [
      {
        nombre: "Hamburguesa 3AM",
        descripcion: "Carne artesanal, queso cheddar, tocineta, cebolla caramelizada y salsa de la casa 3AM.",
        precio: "$29.000",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Pizza pepperoni",
        descripcion: "Masa artesanal, salsa napolitana, mozzarella y pepperoni.",
        precio: "$34.000",
        imagen: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Nachos mixtos",
        descripcion: "nachos, carne, pollo, queso fundido, guacamole y pico de gallo.",
        precio: "$27.000",
        imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Alitas picantes",
        descripcion: "Alitas bañadas en salsa buffalo con el toque secreto de la casa 3AM.",
        precio: "$28.000",
        imagen: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    nombre: "Bebidas",
    items: [
      {
        nombre: "Limonada natural",
        descripcion: "Limonada fresca con hierbabuena y hielo.",
        precio: "$9.000",
        imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Jugo tropical",
        descripcion: "Fruta natural de temporada preparada al momento.",
        precio: "$10.000",
        imagen: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Malteada de chocolate",
        descripcion: "Helado, leche y salsa de chocolate con crema.",
        precio: "$16.000",
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Cafe frio",
        descripcion: "Cafe espresso, leche fria y toque de vainilla.",
        precio: "$12.000",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    nombre: "Cocteles",
    items: [
      {
        nombre: "Mojito clasico",
        descripcion: "Ron blanco, hierbabuena, limon, soda y azucar.",
        precio: "$24.000",
        imagen: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Margarita",
        descripcion: "Tequila, triple sec, limon y sal <michelada> .",
        precio: "$26.000",
        imagen: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Gin tonic frutos rojos",
        descripcion: "Ginebra, tonica premium y frutos rojos.",
        precio: "$28.000",
        imagen: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
      },
      {
        nombre: "Piña colada",
        descripcion: "Ron, crema de coco, pina y hielo frappé.",
        precio: "$25.000",
        imagen: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

function Cliente() {
  const cerrarSesion = () => {
    window.location.hash = "#inicio";
  };

  return (
    <main className="cliente-page">
      <header className="cliente-header">
        <div>
          <span>Zona cliente</span>
          <h1>Bienvenido a GastroBar 3AM</h1>
        </div>

        <button type="button" onClick={cerrarSesion}>
          Volver al sitio
        </button>
      </header>

      <section className="cliente-bienvenida">
        <strong>Bienvenido a la zona de clientes</strong>
        <p>Explora nuestro menu, revisa tus reservas y guarda tus favoritos para tu proxima visita.</p>
      </section>

      <section className="cliente-menu">
        <div className="cliente-menu-heading">
          <span>Menu disponible</span>
          <h2>Platos, bebidas, cocteles y comidas</h2>
        </div>

        {menuCategorias.map((categoria) => (
          <section className="menu-categoria" key={categoria.nombre}>
            <h3>{categoria.nombre}</h3>

            <div className="menu-productos">
              {categoria.items.map((item) => (
                <article className="menu-producto" key={item.nombre}>
                  <img src={item.imagen} alt={item.nombre} loading="lazy" />

                  <div className="menu-producto-info">
                    <div>
                      <h4>{item.nombre}</h4>
                      <strong>{item.precio}</strong>
                    </div>
                    <p>{item.descripcion}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="cliente-grid">
        <article className="cliente-card cliente-card-principal">
          <h2>Tu experiencia</h2>
          <p>
            Consulta tus reservas, revisa eventos disponibles y guarda tus productos favoritos para tu proxima visita.
          </p>
          <a href="#reservar">Crear reserva</a>
        </article>

        <article className="cliente-card">
          <h2>Proximas reservas</h2>

          <div className="cliente-lista">
            {proximasReservas.map((reserva) => (
              <div className="cliente-item" key={`${reserva.fecha}-${reserva.hora}`}>
                <strong>{reserva.fecha}</strong>
                <span>{reserva.hora}</span>
                <p>{reserva.detalle}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="cliente-card">
          <h2>Favoritos</h2>

          <ul className="cliente-favoritos">
            {favoritos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Cliente;
