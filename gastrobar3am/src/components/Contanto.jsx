function Contacto() {
  return (
    <section id="Contacto" className="section">

      <h2>Contacto</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Correo"
        />

        <textarea
          placeholder="Mensaje"
        ></textarea>

        <button type="submit">
          Enviar
        </button>

      </form>

    </section>
  );
}

export default Contacto;