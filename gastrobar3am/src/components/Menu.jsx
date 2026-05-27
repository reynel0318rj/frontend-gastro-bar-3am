import fondo from "../assets/LOGO 2.png";

function Menu() {
  return (
    <section id="menu" className="section" style={{
                backgroundImage: `url(${fondo})`,
              }}    >

      <h2>Menú</h2>

      <div className="cards">

        <div className="card">
          <h3>Cócteles</h3>
          <p>Mojito, Margarita, Gin Tonic</p>
        </div>

        <div className="card">
          <h3>Comidas</h3>
          <p>Hamburguesas, carnes y snacks premium</p>
        </div>

        <div className="card">
          <h3>Postres</h3>
          <p>Cheesecake, brownies y helados</p>
        </div>

      </div>

    </section>
  );
}

export default Menu;