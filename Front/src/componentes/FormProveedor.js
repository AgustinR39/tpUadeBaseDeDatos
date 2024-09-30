import React, { useState, useEffect } from "react";
import { proveedores } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import logoProducto from "./IMG COMPONENTES/proveedor-01.png";

function FormProveedor() {
  const [proveedorList, setProveedorList] = useState([]);

  useEffect(() => {
    setProveedorList(proveedores)
  }, [])


  const [inputProveedor, setInputProveedor] = useState({
    id: "",
    nombre: "",
    cuit: "",
  });

  const handleChangeProveedor = (event) => {
    const { name, value } = event.target;
    setInputProveedor({
      ...inputProveedor,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProveedorList([...proveedorList, inputProveedor]);
  };

   const eliminarProducto = (id) => {
     const tareasActualizadas = proveedorList.filter(
       (inputProveedor) => inputProveedor.id !== id
     );
     setProveedorList(tareasActualizadas);
   };

  return (
    <div className="container">
    <div className="logo-container">
      <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
    </div>

    <div className="d-flex justify-content-center align-item-center">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <input
            className="form-control"
            type="id"
            name="id"
            placeholder="ID del proveedor"
            value={inputProveedor.id}
            onChange={handleChangeProveedor}
          />
        </div>
        <div className="col-md-12">
          <input
            className="form-control"
            type="text"
            name="nombre"
            placeholder="Nombre del proveedor"
            value={inputProveedor.nombre}
            onChange={handleChangeProveedor}
          />
        </div>
        <div className="col-md-12">
          <input
            className="form-control"
            type="text"
            name="cuit"
            placeholder="CUIT del proveedor"
            value={inputProveedor.cuit}
            onChange={handleChangeProveedor}
          />
        </div>
        </div>
        <button className="boton-send" type="submit">Enviar</button>
      </form>
    </div>
      <hr />

      <div className="card mb-3 shadow-8 surface-card border-round-sm h-100rem w-70rem font-semibold">
        <DataTable value={proveedorList} tableStyle={{ minWidth: "50rem" }} selectionMode="single"
          onRowClick={(event) => {
            console.log(event.data);
            window.location.href = `/formproveedor/${event.data.id}`;
          }}>
          <Column field="id" header="ID"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="cuit" header="CUIT"></Column>
        </DataTable>
      </div>

      { <div>
        {proveedorList.map((value, index) => (
          <div className="card mb-3 shadow-8 surface-card border-round-sm h-100rem w-70rem font-semibold">
          <div key={index} className="mg-4">
            <p>El ID del proveedor es {value.id}</p>
            <p>El nombre del proveedor es {value.nombre}</p>
            <p>El CUIT del proveedor es {value.cuit}</p>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => eliminarProducto(value.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div> }
    </div>
  );
}

export default FormProveedor;
