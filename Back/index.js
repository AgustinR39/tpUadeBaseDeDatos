const express = require('express');
const cors = require('cors');

require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

//PARA PODER PROCESAR JSON
//app.use(express.JSON());
app.use(express.json());

// const PORT = process.env.PORT || 3000;

app.use('/usuario', require('./routes/usuarioRoute'))
app.use('/auth', require('./routes/authRoute'))
app.use('/producto', require('./routes/productoRoute'))
app.use('/proveedor', require('./routes/proveedorRoute'))
app.use('/cliente', require('./routes/clienteRoute'))
app.use('/pedido', require('./routes/pedidoRoute'))

var admin = require("firebase-admin");

var serviceAccount = require("./tp-uade-firebase-adminsdk-ytmyx-8b293b9071.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.listen(3001, () => {
    console.log('Server is running');
});