const redesSociales = [
  {
    nombre: "Facebook",
    usuario: "gastrobar3AM",
    url: "https://www.facebook.com/gastrobar3AM",
    icono: "https://cdn.simpleicons.org/facebook/ffffff",
    clase: "facebook",
  },
  {
    nombre: "X",
    usuario: "gastrobar3AM",
    url: "https://x.com/gastrobar3AM",
    icono: "https://cdn.simpleicons.org/x/ffffff",
    clase: "x",
  },
  {
    nombre: "Instagram",
    usuario: "gastrobar3AM",
    url: "https://www.instagram.com/gastrobar3AM",
    icono: "https://cdn.simpleicons.org/instagram/ffffff",
    clase: "instagram",
  },
  {
    nombre: "TikTok",
    usuario: "gastrobar3AM",
    url: "https://www.tiktok.com/@gastrobar3AM",
    icono: "https://cdn.simpleicons.org/tiktok/ffffff",
    clase: "tiktok",
  },
];

function Contacto() {
  return (
    <section id="contacto" className="section contacto-section">
      <h2>Contacto</h2>

      <div className="redes-contacto">
        {redesSociales.map((red) => (
          <a
            className={`red-card ${red.clase}`}
            href={red.url}
            key={red.nombre}
            target="_blank"
            rel="noreferrer"
          >
            <span className="red-emblema" aria-hidden="true">
              <img src={red.icono} alt="" />
            </span>

            <div>
              <h3>{red.nombre}</h3>
              <p>{red.usuario}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contacto;
