import fondo from "../assets/fondo.jpeg";

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >

      <div className="overlay">

        <h1>GASTRO BAR 3AM</h1>

        <p>
          La mejor experiencia nocturna en Bogotá
        </p>

        <div className="hero-buttons">

          <a href="#eventos">
            <button className="btn-primary">
              Ver Eventos
            </button>
          </a>

          <a href="#menu">
            <button className="btn-secondary">
              Explorar Menú
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;