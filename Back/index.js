const express = require('express');
const cors = require('express');

require('dotenv').config()

const app = express();

app.use(cors())

//PARA PODER PROCESAR JSON
//app.use(express.JSON());
app.use(express.json());

//LLAMAR A LA RUTAS
const proveedorroutes = require('./routes/proveedorRoute');
const clienteroutes = require('./routes/clienteRoute');
const productoroutes = require('./routes/productoRoute');
const pedidoroutes = require('./routes/pedidoRoute');


// const PORT = process.env.PORT || 3000;

app.use('/usuario', require('./routes/usuarioRoute'))
app.use('/auth', require('./routes/authRoute'))
app.use('/api/proveedor',proveedorroutes)
app.use('/api/cliente',clienteroutes)
app.use('/api/producto',productoroutes)
app.use('/api/pedido',pedidoroutes)

var admin = require("firebase-admin");

var serviceAccount = require("./tp-uade-firebase-adminsdk-ytmyx-8b293b9071.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.listen(3001, () => {
    console.log('Server is running');
});