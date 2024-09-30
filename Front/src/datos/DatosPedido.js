import { useParams } from "react-router-dom";
import { pedidos } from "./Datos"
import "../estilos-pagina/mostrar.css";

function DatosPedido() {

  const { id } = useParams("id")
  
  const pedido = pedidos.find(prov => prov.id === id)

  return (
    <div className="mt-4">
      <div>
        <p>El ID del pedido es {pedido.id}</p>
        <p>El producto seleccionado del pedido es {pedido.productoSelect}</p>
        <p>El nombre del cliente es {pedido.cliente}</p>
        <p>La fecha de carga del pedido es {pedido.fechaDeCarga}</p>
        <p>La fecha de entrega del pedido es {pedido.fechaDeEntrega}</p>
        <p>El saldo total del pedido es {pedido.saldoTotal}</p>
      </div>
      <div>
      </div>
    </div>
  );
}

export default DatosPedido;