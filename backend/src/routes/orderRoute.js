/*import express from 'express';
const router = express.Router();
//const orderController = require('../controllers/orderController.js');
import orderController from '../controllers/orderController.js'

router.post('/', orderController.createOrder); // Ruta para crear un pedido
router.get('/:id', orderController.getOrder);  // Ruta para obtener un pedido

export default router;
