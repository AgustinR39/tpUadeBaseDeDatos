import "../estilos-pagina/componentes.css";
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

// import logoProducto from "./IMG COMPONENTES/proveedor-01.png";

function FormProveedor() {
  const [proveedorProducto,setProveedorProducto] = useState("");
  const [proveedorCuit,setProveedorCuit] = useState("");
  const [idProveedor,setIdProveedor] = useState();

  const [editar,setEditar] = useState(false);

  const [proveedorList,setProveedor] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/proveedor/create",{
      proveedorProducto:proveedorProducto,
      proveedorCuit:proveedorCuit
    }).then(()=>{
      getProveedor();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Creación exitosa!!!</strong>",
        html: "<i>El producto <strong>"+proveedorProducto+"</strong> fue registrado con éxito!!!</i>",
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
    Axios.put("http://localhost:3001/proveedor/update",{
      idProveedor:idProveedor,
      proveedorProducto:proveedorProducto,
      proveedorCuit:proveedorCuit,
    }).then(()=>{
      getProveedor();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: "<i>El producto <strong>"+proveedorProducto+"</strong> fue actualizado con éxito!!!</i>",
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

  const deleteProveedor = (val)=>{

    Swal.fire({
      title: 'Confirmar eliminado?',
      html: "<i>Realmente desea eliminar a <strong>"+val.proveedorProducto+"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/proveedor/delete/${val.idProveedor}`).then((res)=>{
          getProveedor();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: val.proveedorProducto+' fue eliminado.',
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function(error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el proveedor!',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
          })
        });
        
      }
    });

    
  }

  const limpiarCampos = ()=>{
    setProveedorProducto("");
    setProveedorCuit("");
    setIdProveedor("");
    setEditar(false);
  }

    const editarProveedor = (val)=>{
      setEditar(true);

      setProveedorProducto(val.proveedorProducto);
      setProveedorCuit(val.proveedorCuit);
      setIdProveedor(val.idProveedor);
    }
  

  const getProveedor = ()=>{
    Axios.get("http://localhost:3001/proveedor/proveedores").then((response)=>{
      setProveedor(response.data);
    });
  }

  getProveedor();


  


  return (
    <div className="container">

    <div className="card text-center">
      <div className="card-header">
        GESTIÓN DE PROVEEDORES
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del proveedor:</span>
          <input type="text"
          onChange={(event)=>{
            setProveedorProducto(event.target.value);
          }}
          className="form-control" value={proveedorProducto} placeholder="Ingrese el nombre del proveedor" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Cuit del proveedor:</span>
          <input type="text" value={proveedorCuit}
           onChange={(event)=>{
            setProveedorCuit(event.target.value);
          }}
          className="form-control" placeholder="Ingrese el cuit del proveedor" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>


      </div>
      <div className="card-footer text-muted">
        {
          editar? 
          <div>
          <button className='btn btn-warning m-2' onClick={update}>Actualizar</button> 
          <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
          </div>
          :<button className='btn btn-success' onClick={add}>Registrar</button>
        }
      
      </div>
    </div>

    <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Cuit</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>

      {
          proveedorList.map((val,key)=>{
            return <tr key={val.idProveedor}>
                    <th>{val.idProveedor}</th>
                    <td>{val.proveedorProducto}</td>
                    <td>{val.proveedorCuit}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button"
                      onClick={()=>{
                        editarProveedor(val);
                      }}
                      className="btn btn-info">Editar</button>
                      <button type="button" onClick={()=>{
                        deleteProveedor(val);
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

export default FormProveedor;
