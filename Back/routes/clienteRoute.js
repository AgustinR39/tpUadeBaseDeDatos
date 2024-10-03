const express = require('express');
const router = express.Router();

const controller = require('../controllers/cliente');

router.get('/clientes', controller.getAllClientes)
router.post('/create', controller.createCliente)
router.put('/update', controller.updateCliente)
router.get('/clientes/:id', controller.getClienteById)
router.delete('/delete/:id', controller.deleteCliente)

module.exports = router;