import React from "react";
import "../estilos-pagina/mostrar.css";


function MostrarDatos({
  id,
  nombre,
  seleccion,
  nombreComercial,
  precioVenta,
  proveedor,
  precioCompra,
  fotoProducto,
  eliminarProducto,
}) {
  return (
    <div className="mg-2">
      <div>
        <p>El ID del producto es {id}</p>
        <p>El nombre del producto es {nombre}</p>
        <p>La talla del producto es {seleccion}</p>
        <p>El nombre commercial del producto es {nombreComercial}</p>
        <p>El precio de venta del producto es ${precioVenta}</p>
        <p>El proveedor del producto es ${proveedor}</p>
        <p>El precio de compra del producto es ${precioCompra}</p>
        <p>La imagen del producto es {fotoProducto}</p>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => eliminarProducto(id)}
        >
          Delete
        </button>
      </div>

     
    </div>
  );
}

export default MostrarDatos;