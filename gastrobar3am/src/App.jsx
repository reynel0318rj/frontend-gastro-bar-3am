import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  const [ruta, setRuta] = useState(window.location.hash);

  useEffect(() => {
    const actualizarRuta = () => setRuta(window.location.hash);

    window.addEventListener("hashchange", actualizarRuta);

    return () => {
      window.removeEventListener("hashchange", actualizarRuta);
    };
  }, []);

  if (ruta === "#admin") {
    return <Admin />;
  }

  return <Home />;
}

export default App;
