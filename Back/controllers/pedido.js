const connection= require ("../connectDB/dBconnection")

function getAllPedidos(req,res){
    const query = "SELECT * from pedido"

    connection.query(query, (err,result)=>{
        if (err){
            console.error(err)
            res.status(500).send("Error retrieving notes from database")
        } else {
            res.json(result)
        }
    })
}

function createPedido(req,res) {
    const {nombreProducto, nombreCliente, saldoTotal} = req.body
    const query = "INSERT INTO pedido (nombreProducto, nombreCliente, saldoTotal) VALUES (?,?,?)"

    connection.query(query, [nombreProducto, nombreCliente, saldoTotal], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500).send("Error, couldn't insert pedidos")
        } else{
            res.json(result)
        }
    })
}

function updatePedido(req,res) {
    const pedidoId = req.params.id
    const {nombreProducto, nombreCliente, saldoTotal} = req.body
    const query = "UPDATE pedido SET nombreProducto=?, nombreCliente=?, saldoTotal=? WHERE id=?"

    connection.query(query, [nombreProducto, nombreCliente, saldoTotal, pedidoId], (err, result) => {
        if(err) {
            console.error(err)
            res.status(500).send("Error, couldn't update pedidos")
        } else{
            res.json(result)
        }
    })
}

function getPedidoById(req,res) {
    const pedidoId = req.params.id

    const query= "SELECT * FROM pedido WHERE id = ?"

    connection.query(query, [pedidoId], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500),send("Error retrieving product from database")
        }else{
            res.json(result)
        }
    })
}

function deletePedido(req,res) {
    const pedidoId= req.params.id

    const query= "DELETE FROM pedido WHERE id=?"

    connection.query(query, [pedidoId], (err, result) => {
        if(err){
            console.error(err)
            res.statust(500).send("Error deleting pedidos from database")
        }else {
            res.json(result)
        }
    })
}

module.exports ={
    getAllPedidos,
    createPedido,
    updatePedido,
    getPedidoById,
    deletePedido
}
