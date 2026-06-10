import fondo from "../assets/LOGO 2.png";
import menuCategorias from "../data/menuCategorias";

function Menu() {
  return (
    <section
      id="menu"
      className="section menu-section"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <h2>Menu</h2>

      <div className="menu-publico">
        {menuCategorias.map((categoria) => (
          <section className="menu-publico-categoria" key={categoria.nombre}>
            <h3>{categoria.nombre}</h3>

            <div className="menu-publico-productos">
              {categoria.items.map((item) => (
                <article className="menu-publico-card" key={item.nombre}>
                  <img src={item.imagen} alt={item.nombre} loading="lazy" />

                  <div className="menu-publico-info">
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
      </div>
    </section>
  );
}

export default Menu;
