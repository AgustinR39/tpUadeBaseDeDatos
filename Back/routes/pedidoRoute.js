const express = require('express');
const router = express.Router();

const controller = require('../controllers/pedido');

router.get('/pedidos', controller.getAllPedidos)
router.post('/guardar', controller.createPedido)
router.put('/modificar-pedido', controller.updatePedido)
router.get('/pedidos/:id', controller.getPedidoById)
router.delete('/eliminar/:id', controller.deletePedido)

module.exports = router;