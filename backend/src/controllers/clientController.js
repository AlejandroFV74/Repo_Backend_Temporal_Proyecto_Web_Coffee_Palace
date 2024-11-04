
import { saveClient, getClients } from '../services/clientService.js';
import createError from 'http-errors';
import { ClientErrorCodes } from '../utils/errors/ServiceError.js';
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

export const getClientsController = async (req, res, next) => {
  try {
      const clients = await getClients();
      res.status(200).json({ data: clients });
  } catch (e) {
    if (e instanceof ServiceError) {
      switch(e.code){
          case ClientErrorCodes.CLIENT_FETCH_FAILED:
              next(createError(500, 'Error al obtener los clients'));
              break;
          default:
              next(e);
      }
    }else{
      next(e);
    }
  }
}

export const obtenerClientes = async (req, res) => {
    try {
      const clientes = await Cliente.find(); 
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };