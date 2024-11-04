const Cliente = require('../models/clientModel');

exports.agregarCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).send(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerClientes = async (req, res) => {
    try {
      const clientes = await Cliente.find(); 
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };