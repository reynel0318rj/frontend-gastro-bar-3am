import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Eventos from "../components/Eventos";
import Menu from "../components/Menu";
import Contacto from "../components/Contanto";
import Reservar from "../components/reservar";
import Login from "../pages/login";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Eventos />
      <Menu />
      <Reservar />
      <Contacto />
      <Login />
    </>
  );
}

export default Home;