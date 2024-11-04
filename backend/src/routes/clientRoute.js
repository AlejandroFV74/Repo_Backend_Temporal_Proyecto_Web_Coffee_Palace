// src/routes/clientRoute.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Ruta para agregar un nuevo cliente
router.post('/clientes', clientController.agregarCliente);

router.get('/clientes', clientController.obtenerClientes);

module.exports = router;
