const express = require('express');
const router = express.Router();

const controller = require('../controllers/proveedor');

router.get('/proveedores', controller.getAllProveedores)
router.post('/create', controller.createProveedor)
router.put('/update', controller.updateProveedor)
router.get('/proveedores/:id', controller.getProveedorById)
router.delete('/delete/:id', controller.deleteProveedor)

module.exports = router;