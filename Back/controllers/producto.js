const connection= require ("../connectDB/dBconnection")

function getAllProductos(req,res){
    const query = "SELECT * from producto"

    connection.query(query,(err,result)=>{
        if (err){
            console.error(err)
            res.status(500).send("Error retrieving notes from database")
        } else {
            res.json(result)
        }
    })
}

function createProducto(req,res) {
    const {nombre, nombreComercial,seleccion,precioVenta,proveedor,precioCompra,fotoProducto} = req.body
    const query = "INSERT INTO producto (nombre, nombreComercial,seleccion,precioVenta,proveedor,precioCompra,fotoProducto) VALUES (?,?,?,?,?,?,?)"

    connection.query(query, [nombre, nombreComercial,seleccion,precioVenta,proveedor,precioCompra,fotoProducto], (err,result)=>{
        if (err) {
            console.error(err)
            res.status(500).send("Error, couldn't insert products")
        } else{
            res.json(result)
        }
    })
}

function updateProducto(req,res) {
    const productoId = req.params.id
    const {nombre, nombreComercial,seleccion,precioVenta,proveedor,precioCompra,fotoProducto} = req.body
    const query = "UPDATE producto SET nombre=?, nombreComercial=?, seleccion=?, precioVenta=?, proveedor=?, precioCompra=?, fotoProducto=? WHERE id=?"

    connection.query(query, [nombre, nombreComercial,seleccion,precioVenta,proveedor,precioCompra,fotoProducto, productoId], (err, result) => {
        if(err) {
            console.error(err)
            res.status(500).send("Error, couldn't update products")
        } else{
            res.json(result)
        }
    })
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
    const productoId= req.params.id

    const query= "DELETE FROM producto WHERE id=?"

    connection.query(query, [productoId], (err, result) => {
        if(err){
            console.error(err)
            res.statust(500).send("Error deleting products from database")
        }else {
            res.json(result)
        }
    })
}

module.exports ={
    getAllProductos,
    createProducto,
    updateProducto,
    getProductoById,
    deleteProducto
}