import fondo from "../assets/fondo.jpeg";


function Nosotros() {
  return (
    <section id="nosotros" className="section" style={{
            backgroundImage: `url(${fondo})`,
          }}>

      <h2>Nosotros</h2>

      <p>
        Gastro Bar 3AM es un espacio exclusivo donde se mezclan
        gastronomía premium, música en vivo y experiencias únicas
        en la ciudad de Bogotá.
      </p>

    </section>
  );
}

export default Nosotros;