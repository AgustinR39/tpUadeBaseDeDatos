const connection= require ("../connectDB/dBconnection")

function getAllClientes(req,res){
    connection.query('SELECT * FROM cliente',
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
        );
}

function createCliente(req,res) {
    const nombreCliente = req.body.nombreCliente;
    const clienteCuit = req.body.clienteCuit;

    connection.query('INSERT INTO cliente(nombreCliente,clienteCuit) VALUES(?,?)',[nombreCliente, clienteCuit],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function updateCliente(req,res) {
    const id = req.body.id;
    const nombreCliente = req.body.nombreCliente;
    const clienteCuit = req.body.clienteCuit;

    connection.query('UPDATE cliente SET nombreCliente=?,clienteCuit=? WHERE id=?',[nombreCliente,clienteCuit,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function getClienteById(req,res) {
    const clienteId = req.params.id

    const query= "SELECT * FROM cliente WHERE id = ?"

    connection.query(query, [clienteId], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500),send("Error retrieving client from database")
        }else{
            res.json(result)
        }
    })
}

function deleteCliente(req,res) {
    const id = req.params.id;

    connection.query('DELETE FROM cliente WHERE id=?',id,
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
    getAllClientes,
    createCliente,
    updateCliente,
    getClienteById,
    deleteCliente
}