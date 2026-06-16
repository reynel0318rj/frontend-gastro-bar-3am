import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Cliente from "./pages/Cliente";
import { getMe, getToken } from "./services/api";
import { getRoleFromResponse } from "./services/api";

function App() {
  const [ruta, setRuta] = useState(window.location.hash);
  const [rol, setRol] = useState(null);
  const [cargandoRol, setCargandoRol] = useState(true);

  useEffect(() => {
    const actualizarRuta = () => setRuta(window.location.hash);

    window.addEventListener("hashchange", actualizarRuta);

    return () => {
      window.removeEventListener("hashchange", actualizarRuta);
    };
  }, []);

  useEffect(() => {
    async function validarRuta() {
      if (ruta !== "#admin" && ruta !== "#cliente") {
        setRol(null);
        setCargandoRol(false);
        return;
      }

      const token = getToken();
      if (!token) {
        setRol(null);
        setCargandoRol(false);
        window.location.hash = "#inicio";
        return;
      }

      setCargandoRol(true);
      try {
        const datos = await getMe();
        const roleFromMe = String(getRoleFromResponse(datos) || "").toLowerCase();
        setRol(roleFromMe || null);
        if (ruta === "#admin" && roleFromMe !== "admin" && roleFromMe !== "administrador") {
          window.location.hash = "#inicio";
        }
        if (ruta === "#cliente" && !["cliente", "user", "usuario", "customer"].includes(roleFromMe)) {
          window.location.hash = "#inicio";
        }
      } catch (error) {
        setRol(null);
        window.location.hash = "#inicio";
      } finally {
        setCargandoRol(false);
      }
    }

    validarRuta();
  }, [ruta]);

  const esAdmin = rol === "admin" || rol === "administrador";
  const esCliente = ["cliente", "user", "usuario", "customer"].includes(rol);

  if ((ruta === "#admin" || ruta === "#cliente") && cargandoRol) {
    return null;
  }

  if (ruta === "#admin") {
    return esAdmin ? <Admin /> : <Home />;
  }

  if (ruta === "#cliente") {
    return esCliente ? <Cliente /> : <Home />;
  }

  return <Home />;
}

export default App;
