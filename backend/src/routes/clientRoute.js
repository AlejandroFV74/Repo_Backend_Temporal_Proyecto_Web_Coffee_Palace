// src/routes/clientRoute.js
import express from 'express';
const router = express.Router();

import {createClientController } from '../controllers/clientController.js';

// Ruta para agregar un nuevo cliente
router.post('/clientes', createClientController);

//router.get('/clientes', clientController.obtenerClientes);

export default router;
