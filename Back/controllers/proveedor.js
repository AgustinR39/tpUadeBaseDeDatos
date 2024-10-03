const connection= require ("../connectDB/dBconnection")

function getAllProveedores(req,res){
    connection.query('SELECT * FROM proveedor',
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
        );
}

function createProveedor(req,res) {
    const proveedorProducto = req.body.proveedorProducto;
    const proveedorCuit = req.body.proveedorCuit;

    connection.query('INSERT INTO proveedor(proveedorProducto,proveedorCuit) VALUES(?,?)',[proveedorProducto, proveedorCuit],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function updateProveedor(req,res) {
    const id = req.body.id;
    const proveedorProducto = req.body.proveedorProducto;
    const proveedorCuit = req.body.proveedorCuit;

    connection.query('UPDATE proveedor SET proveedorProducto=?,proveedorCuit=? WHERE id=?',[proveedorProducto,proveedorCuit,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function getProveedorById(req,res) {
    const proveedorId = req.params.id

    const query= "SELECT * FROM proveedor WHERE id = ?"

    connection.query(query, [proveedorId], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500),send("Error retrieving proveedor from database")
        }else{
            res.json(result)
        }
    })
}

function deleteProveedor(req,res) {
    const id = req.params.id;

    connection.query('DELETE FROM proveedor WHERE id=?',id,
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
    getAllProveedores,
    createProveedor,
    updateProveedor,
    getProveedorById,
    deleteProveedor
}