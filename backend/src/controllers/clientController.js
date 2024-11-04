
import { saveClient } from '../services/clientService.js';
import createError from 'http-errors';
//const Cliente = require('../models/clientModel');

/*exports.agregarCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).send(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
};
*/

export const createClientController = async (req, res, next) => {
  try {
      const clientData = req.body;
      const clientCreated = await saveClient(clientData);
      res.status(201).json({ message: 'Cliente creado', data: clientCreated });
  } catch (e) {
      if (e.code === 'CLIENT_CREATION_FAILED') {
          next(createError(500, 'Error al crear el cliente'));
      } else {
          next(e);
      }
  }
};

export const obtenerClientes = async (req, res) => {
    try {
      const clientes = await Cliente.find(); 
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };