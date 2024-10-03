import "../estilos-pagina/componentes.css";
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

// import logoProducto from "./IMG COMPONENTES/producto-01.png";

function ListaProducto() {
  
  const [nombreProducto,setNombreProducto] = useState("");
  const [nombreComercial,setNombreComercial] = useState("");
  const [precioVenta,setPrecioVenta] = useState();
  const [proveedorProducto,setProveedorProducto] = useState("");
  const [precioCompra,setPrecioCompra] = useState();
  const [idProducto,setIdProducto] = useState();

  const [editar,setEditar] = useState(false);

  const [productList,setProducto] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/producto/create",{
      nombreProducto:nombreProducto,
      nombreComercial:nombreComercial,
      precioVenta:precioVenta,
      proveedorProducto:proveedorProducto,
      precioCompra:precioCompra
    }).then(()=>{
      getProducto();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Creación exitosa!!!</strong>",
        html: "<i>El producto <strong>"+nombreProducto+"</strong> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer:3000
      })
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
  }

  const update = ()=>{
    Axios.put("http://localhost:3001/producto/update",{
      idProducto:idProducto,
      nombreProducto:nombreProducto,
      nombreComercial:nombreComercial,
      precioVenta:precioVenta,
      proveedorProducto:proveedorProducto,
      precioCompra:precioCompra
    }).then(()=>{
      getProducto();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: "<i>El producto <strong>"+nombreProducto+"</strong> fue actualizado con éxito!!!</i>",
        icon: 'success',
        timer:3000
      }).catch(function(error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
        })
      });
    });
  }

  const deleteProducto = (val)=>{

    Swal.fire({
      title: 'Confirmar eliminado?',
      html: "<i>Realmente desea eliminar a <strong>"+val.nombreProducto+"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/producto/delete/${val.idProducto}`).then((res)=>{
          getProducto();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: val.nombreProducto+' fue eliminado.',
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function(error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el producto!',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
          })
        });
        
      }
    });

    
  }

  const limpiarCampos = ()=>{
    setNombreProducto("");
    setNombreComercial("");
    setPrecioVenta("");
    setProveedorProducto("");
    setPrecioCompra("");
    setIdProducto("");
    setEditar(false);
  }

    const editarProducto = (val)=>{
      setEditar(true);

      setNombreProducto(val.nombreProducto);
      setNombreComercial(val.nombreComercial);
      setPrecioVenta(val.precioVenta);
      setProveedorProducto(val.proveedorProducto);
      setPrecioCompra(val.precioCompra);
      setIdProducto(val.idProducto);
    }
  

  const getProducto = ()=>{
    Axios.get("http://localhost:3001/producto/productos").then((response)=>{
      setProducto(response.data);
    });
  }

  getProducto();


  


  return (
    <div className="container">

    <div className="card text-center">
      <div className="card-header">
        GESTIÓN DE PRODUCTOS
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del producto:</span>
          <input type="text"
          onChange={(event)=>{
            setNombreProducto(event.target.value);
          }}
          className="form-control" value={nombreProducto} placeholder="Ingrese un nombre para el producto" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre comercial del producto:</span>
          <input type="text" value={nombreComercial}
           onChange={(event)=>{
            setNombreComercial(event.target.value);
          }}
          className="form-control" placeholder="Ingrese un nombre comercial para el producto" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Precio venta:</span>
          <input type="number" value={precioVenta}
           onChange={(event)=>{
            setPrecioVenta(event.target.value);
          }}
          className="form-control" placeholder="Ingrese un precio de venta" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del proveedor:</span>
          <input type="text" value={proveedorProducto}
           onChange={(event)=>{
            setProveedorProducto(event.target.value);
          }}
          className="form-control" placeholder="Ingrese un proveedor" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Precio de compra:</span>
          <input type="number" value={precioCompra}
           onChange={(event)=>{
            setPrecioCompra(event.target.value);
          }}
          className="form-control" placeholder="Ingrese un precio de compra" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

      </div>
      <div className="card-footer text-muted">
        {
          editar? 
          <div>
          <button className='btn btn-warning m-2' onClick={update}>Actualizar</button> 
          <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
          </div>
          :<button className='btn btn-success' onClick={add}>Crear</button>
        }
      
      </div>
    </div>

    <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Comercial</th>
          <th scope="col">Precio venta</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Precio compra</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>

      {
          productList.map((val,key)=>{
            return <tr key={val.idProducto}>
                    <th>{val.idProducto}</th>
                    <td>{val.nombreProducto}</td>
                    <td>{val.nombreComercial}</td>
                    <td>{val.precioVenta}</td>
                    <td>{val.proveedorProducto}</td>
                    <td>{val.precioCompra}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button"
                      onClick={()=>{
                        editarProducto(val);
                      }}
                      className="btn btn-info">Editar</button>
                      <button type="button" onClick={()=>{
                        deleteProducto(val);
                      }} className="btn btn-danger">Eliminar</button>
                    </div>
                    </td>
                  </tr>
            
          })
        }
        
        
      </tbody>  
    </table>


    </div>
  );
}

export default ListaProducto;


