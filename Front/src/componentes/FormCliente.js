import "../estilos-pagina/componentes.css";
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

// import logoProducto from "./IMG COMPONENTES/cliente-01.png";

function FormCliente() {
  const [nombreCliente,setNombreCliente] = useState("");
  const [clienteCuit,setClienteCuit] = useState("");
  const [idCliente,setIdCliente] = useState();

  const [editar,setEditar] = useState(false);

  const [clienteList,setCliente] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/cliente/create",{
      nombreCliente:nombreCliente,
      clienteCuit:clienteCuit
    }).then(()=>{
      getCliente();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Creación exitosa!!!</strong>",
        html: "<i>El producto <strong>"+nombreCliente+"</strong> fue registrado con éxito!!!</i>",
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
    Axios.put("http://localhost:3001/cliente/update",{
      idCliente:idCliente,
      nombreCliente:nombreCliente,
      clienteCuit:clienteCuit,
    }).then(()=>{
      getCliente();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: "<i>El cliente <strong>"+nombreCliente+"</strong> fue actualizado con éxito!!!</i>",
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

  const deleteCliente = (val)=>{

    Swal.fire({
      title: 'Confirmar eliminado?',
      html: "<i>Realmente desea eliminar a <strong>"+val.nombreCliente+"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/cliente/delete/${val.idCliente}`).then((res)=>{
          getCliente();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: val.nombreCliente+' fue eliminado.',
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function(error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el cliente!',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
          })
        });
        
      }
    });

    
  }

  const limpiarCampos = ()=>{
    setNombreCliente("");
    setClienteCuit("");
    setIdCliente("");
    setEditar(false);
  }

    const editarCliente = (val)=>{
      setEditar(true);

      setNombreCliente(val.nombreCliente);
      setClienteCuit(val.clienteCuit);
      setIdCliente(val.idCliente);
    }
  

  const getCliente = ()=>{
    Axios.get("http://localhost:3001/cliente/clientes").then((response)=>{
      setCliente(response.data);
    });
  }

  getCliente();


  


  return (
    <div className="container">

    <div className="card text-center">
      <div className="card-header">
        GESTIÓN DE CLIENTES
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del cliente:</span>
          <input type="text"
          onChange={(event)=>{
            setNombreCliente(event.target.value);
          }}
          className="form-control" value={nombreCliente} placeholder="Ingrese el nombre del cliente" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Cuit del cliente:</span>
          <input type="text" value={clienteCuit}
           onChange={(event)=>{
            setClienteCuit(event.target.value);
          }}
          className="form-control" placeholder="Ingrese el cuit del cliente" aria-label="Username" aria-describedby="basic-addon1"/>
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
          <th scope="col">Cliente</th>
          <th scope="col">Cuit</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>

      {
          clienteList.map((val,key)=>{
            return <tr key={val.idCliente}>
                    <th>{val.idCliente}</th>
                    <td>{val.nombreCliente}</td>
                    <td>{val.clienteCuit}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button"
                      onClick={()=>{
                        editarCliente(val);
                      }}
                      className="btn btn-info">Editar</button>
                      <button type="button" onClick={()=>{
                        deleteCliente(val);
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

export default FormCliente;

