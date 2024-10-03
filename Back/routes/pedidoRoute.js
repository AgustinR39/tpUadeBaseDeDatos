const express = require('express');
const router = express.Router();

const controller = require('../controllers/pedido');

router.get('/pedidos', controller.getAllPedidos)
router.post('/create', controller.createPedido)
router.put('/update', controller.updatePedido)
router.get('/pedidos/:id', controller.getPedidoById)
router.delete('/delete/:id', controller.deletePedido)

module.exports = router;