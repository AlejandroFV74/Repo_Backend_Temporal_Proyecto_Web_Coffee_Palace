const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js');

router.post('/', orderController.createOrder); // Ruta para crear un pedido
router.get('/:id', orderController.getOrder);  // Ruta para obtener un pedido

module.exports = router;
