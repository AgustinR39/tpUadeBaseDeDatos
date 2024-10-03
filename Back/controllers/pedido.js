const connection= require ("../connectDB/dBconnection")

function getAllPedidos(req,res){
    connection.query('SELECT * FROM pedido',
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
        );
}

function createPedido(req,res) {
    const nombreProducto = req.body.nombreProducto;
    const nombreCliente = req.body.nombreCliente;
    const saldoPedido = req.body.saldoPedido;

    connection.query('INSERT INTO pedido(nombreProducto,nombreCliente,saldoTotal) VALUES(?,?,?)',[nombreProducto,nombreCliente,saldoPedido],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function updatePedido(req,res) {
    const id = req.body.id;
    const nombreProducto = req.body.nombreProducto;
    const nombreCliente = req.body.nombreComercial;
    const saldoPedido = req.body.precioCompra;

    connection.query('UPDATE pedido SET nombreProducto=?,nombreCliente=?,saldoPedido=? WHERE id=?',[nombreProducto,nombreCliente, saldoPedido,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function getPedidoById(req,res) {
    const pedidoId = req.params.id

    const query= "SELECT * FROM pedido WHERE id = ?"

    connection.query(query, [pedidoId], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500),send("Error retrieving pedido from database")
        }else{
            res.json(result)
        }
    })
}

function deletePedido(req,res) {
    const id = req.params.id;

    connection.query('DELETE FROM pedido WHERE id=?',id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

module.exports ={
    getAllPedidos,
    createPedido,
    updatePedido,
    getPedidoById,
    deletePedido
}
