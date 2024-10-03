import "../estilos-pagina/componentes.css";
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

// import logoProducto from "./IMG COMPONENTES/pedido-01.png";

function Pedido() {
  const [nombreProducto,setNombreProducto] = useState("");
  const [nombreCliente,setNombreCliente] = useState("");
  const [saldoPedido,setSaldoPedido] = useState();
  const [idPedido,setIdPedido] = useState();

  const [editar,setEditar] = useState(false);

  const [pedidoList,setPedido] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/pedido/create",{
      nombreProducto:nombreProducto,
      nombreCliente:nombreCliente,
      saldoPedido:saldoPedido
    }).then(()=>{
      getPedido();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Creación exitosa!!!</strong>",
        html: "<i>El pedido <strong>"+nombreProducto+"</strong> fue registrado con éxito!!!</i>",
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
    Axios.put("http://localhost:3001/pedido/update",{
      idPedido:idPedido,
      nombreProducto:nombreProducto,
      nombreCliente:nombreCliente,
      saldoPedido:saldoPedido,
    }).then(()=>{
      getPedido();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Actualización exitosa!!!</strong>",
        html: "<i>El pedido <strong>"+nombreProducto+"</strong> fue actualizado con éxito!!!</i>",
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

  const deletePedido = (val)=>{

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
        Axios.delete(`http://localhost:3001/pedido/delete/${val.idPedido}`).then((res)=>{
          getPedido();
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
            text: 'No se logró eliminar el pedido!',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
          })
        });
        
      }
    });

    
  }

  const limpiarCampos = ()=>{
    setNombreProducto("");
    setNombreCliente("");
    setSaldoPedido("");
    setIdPedido("");
    setEditar(false);
  }

    const editarPedido = (val)=>{
      setEditar(true);

      setNombreProducto(val.nombreProducto);
      setNombreCliente(val.nombreCliente);
      setSaldoPedido(val.saldoPedido);
      setIdPedido(val.idPedido);
    }
  

  const getPedido = ()=>{
    Axios.get("http://localhost:3001/pedido/pedidos").then((response)=>{
      setPedido(response.data);
    });
  }

  getPedido();


  


  return (
    <div className="container">

    <div className="card text-center">
      <div className="card-header">
        GESTIÓN DE PEDIDOS
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del producto:</span>
          <input type="text"
          onChange={(event)=>{
            setNombreProducto(event.target.value);
          }}
          className="form-control" value={nombreProducto} placeholder="Ingrese el nombre del producto" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre del cliente:</span>
          <input type="text"
          onChange={(event)=>{
            setNombreCliente(event.target.value);
          }}
          className="form-control" value={nombreCliente} placeholder="Ingrese el nombre del cliente" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Salde del pedido:</span>
          <input type="text" value={saldoPedido}
           onChange={(event)=>{
            setSaldoPedido(event.target.value);
          }}
          className="form-control" placeholder="Ingrese el saldo del pedido" aria-label="Username" aria-describedby="basic-addon1"/>
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
          <th scope="col">Producto</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cliente</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>

      {
          pedidoList.map((val,key)=>{
            return <tr key={val.idPedido}>
                    <th>{val.idPedido}</th>
                    <td>{val.nombreProducto}</td>
                    <td>{val.nombreCliente}</td>
                    <td>{val.saldoPedido}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button"
                      onClick={()=>{
                        editarPedido(val);
                      }}
                      className="btn btn-info">Editar</button>
                      <button type="button" onClick={()=>{
                        deletePedido(val);
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

export default Pedido;