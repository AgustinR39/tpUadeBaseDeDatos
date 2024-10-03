const express = require('express');
const router = express.Router();

const controller = require('../controllers/producto');

router.get('/productos', controller.getAllProductos)
router.post('/create', controller.createProducto)
router.put('/update', controller.getProductoById)
router.get('/productos/:id', controller.getProductoById)
router.delete('/delete/:id', controller.deleteProducto)

module.exports = router;