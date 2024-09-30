import { useParams } from "react-router-dom";
import { proveedores} from "./Datos"
import "../estilos-pagina/mostrar.css";

function DatosProveedor() {

  const { id } = useParams("id")
  
  const proveedor = proveedores.find(prov => prov.id === id)

  return (
    <div className="mt-4">
      <div>
        <p>El ID del proveedor es {proveedor.id}</p>
        <p>El nombre del proveedor es {proveedor.nombre}</p>
        <p>El CUIT del proveedor es {proveedor.cuit}</p>
      </div>
      <div>
      </div>

     
    </div>
  );
}

export default DatosProveedor;