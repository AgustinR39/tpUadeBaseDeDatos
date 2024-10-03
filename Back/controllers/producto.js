const connection= require ("../connectDB/dBconnection")

function getAllProductos(req,res){
    connection.query('SELECT * FROM producto',
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
        );
}

function createProducto(req,res) {
    const nombreProducto = req.body.nombreProducto;
    const nombreComercial = req.body.nombreComercial;
    const precioVenta = req.body.precioVenta;
    const proveedorProducto = req.body.proveedorProducto;
    const precioCompra = req.body.precioCompra;

    connection.query('INSERT INTO producto(nombreProducto,nombreComercial,precioVenta,proveedorProducto,precioCompra) VALUES(?,?,?,?,?)',[nombreProducto,nombreComercial,precioVenta,proveedorProducto,precioCompra],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function updateProducto(req,res) {
    const id = req.body.id;
    const nombreProducto = req.body.nombreProducto;
    const nombreComercial = req.body.nombreComercial;
    const precioVenta = req.body.precioVenta;
    const proveedorProducto = req.body.proveedorProducto;
    const precioCompra = req.body.precioCompra;

    connection.query('UPDATE producto SET nombreProducto=?,nombreComercial=?,precioVenta=?,proveedorProducto=?,precioCompra=? WHERE id=?',[nombreProducto,nombreComercial,precioVenta,proveedorProducto,precioCompra,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
}

function getProductoById(req,res) {
    const productoId = req.params.id

    const query= "SELECT * FROM producto WHERE id = ?"

    connection.query(query, [productoId], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500),send("Error retrieving product from database")
        }else{
            res.json(result)
        }
    })
}

function deleteProducto(req,res) {
    const id = req.params.id;

    connection.query('DELETE FROM producto WHERE id=?',id,
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
    getAllProductos,
    createProducto,
    updateProducto,
    getProductoById,
    deleteProducto
}