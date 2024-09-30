import React from "react";
import { useParams } from "react-router-dom"
import { productos } from "./Datos";
import "../estilos-pagina/mostrar.css";

function DatosProducto() {

  const { id } = useParams("id")
  
  const producto = productos.find(product => product.id === id)

  return (
    <div className="mt-4">
      <div>
        <p>El ID del producto es {producto.id}</p>
        <p>El nombre del producto es {producto.nombre}</p>
        <p>La talla del producto es {producto.seleccion}</p>
        <p>El nombre commercial del producto es {producto.nombreComercial}</p>
        <p>El precio de venta del producto es ${producto.precioVenta}</p>
        <p>El proveedor del producto es ${producto.proveedor}</p>
        <p>El precio de compra del producto es ${producto.precioCompra}</p>
        <p>La imagen del producto es {producto.fotoProducto}</p>
      </div>
      <div>
      </div>

     
    </div>
  );
}

export default DatosProducto;