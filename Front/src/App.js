import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Auth } from "./componentes/Auth";
import Navbar from "./componentes/Navbar";
import ListaProducto from "./componentes/ListaProducto";
import DatosProducto from "./datos/DatosProducto";
import FormProveedor from "./componentes/FormProveedor";
import DatosProveedor from "./datos/DatosProveedor";
import FormCliente from "./componentes/FormCliente";
import DatosClientes from "./datos/DatosCliente";
import CatalogoProducto from "./componentes/CatalogoProducto";
import DatosCatalogo from "./datos/DatosCatalogo";
import Pedido from "./componentes/Pedido";
import DatosPedido from "./datos/DatosPedido";
import Reportes from "./componentes/Reportes";
import { Usuarios } from "./componentes/Usuarios";

//pokelogo
import logoPoke from "./IMG/poke logo.png"; 
import { useEffect } from "react";

function App() { 

  return (

    <div className='background-app'>
    <div className='container'>
      <div className="logo-container">
        <img src={logoPoke} alt="Logo" className="app-logo" />
      </div> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route
            path="/listaproducto"
            element={<ProtectedRoute><ListaProducto /></ProtectedRoute>}
          ></Route>
          <Route
            path="/listaproducto/:id"
            element={<ProtectedRoute><DatosProducto /></ProtectedRoute>}
          ></Route>
          <Route
            path="/formproveedor"
            element={<ProtectedRoute><FormProveedor /></ProtectedRoute>}
          ></Route>
          <Route
            path="formproveedor/:id"
            element={<ProtectedRoute><DatosProveedor /></ProtectedRoute>}
          ></Route>
          <Route
            path="/formcliente"
            element={<ProtectedRoute><FormCliente /></ProtectedRoute>}
          ></Route>
          <Route
            path="formcliente/:id"
            element={<ProtectedRoute><DatosClientes /></ProtectedRoute>}
          ></Route>
          <Route
            path="/catalogoproducto"
            element={<ProtectedRoute><CatalogoProducto /></ProtectedRoute>}
          ></Route>
          <Route
            path="/catalogoproducto/:nombre"
            element={<ProtectedRoute><DatosCatalogo /></ProtectedRoute>}
          ></Route>
          <Route
            path="/pedido"
            element={<ProtectedRoute><Pedido /></ProtectedRoute>}
          ></Route>
          <Route
            path="/pedido/:id"
            element={<ProtectedRoute><DatosPedido /></ProtectedRoute>}
          ></Route>
          <Route
            path="/reportes"
            element={<ProtectedRoute><Reportes /></ProtectedRoute>}
          ></Route>
          <Route
            path="/usuarios"
            element={<ProtectedRoute><Usuarios /></ProtectedRoute>}
          ></Route>
        </Routes>
      </BrowserRouter>
      </div>
       <div className="container-fluid pie-index">
     <footer className="footer">
     <h5>Trabajo Práctico Final: <b>Grupo 2</b>.-</h5>
     <p><i>Integrantes:</i> Artilles, Lautaro;  Cabral, Rodrigo;  Lamarre, Patrice;  Ronchi, Agustín;  Sánchez Rizzotti, Amanda;  Volante, Franco.</p>
     </footer>
    </div>
    </div>
  );
}

const ProtectedRoute = ({redirectPath = "/login", children}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("firebaseToken")

    if (!token) {
      navigate(redirectPath)
    }
  }, [])

  return children
}

export default App;
