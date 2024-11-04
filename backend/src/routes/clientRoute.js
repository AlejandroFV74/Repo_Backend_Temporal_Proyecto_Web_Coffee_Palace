// src/routes/clientRoute.js
import express from 'express';
const router = express.Router();

import {
    createClientController,
    getClientsController 
} from '../controllers/clientController.js';

// Ruta para agregar un nuevo cliente
router.post('/clientes', createClientController);
// Ruta para obtenerlos
router.get('/clientes', getClientsController);

export default router;
