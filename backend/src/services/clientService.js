
import { Client } from '../models/clientModel.js';

import {ServiceError, ClientErrorCodes} from '../utils/errors/ServiceError.js';

export const saveClient = async (clientData) => {
    const newClient = new Client(clientData);
    try {
        const clientCreated = await newClient.save();
        return clientCreated;
    } catch (error) {
        throw new ServiceError('Error al crear el cliente', ClientErrorCodes.CLIENT_CREATION_FAILED);
    }
};

export const getClients = async () => {
    try {
        const clients = await Client.find();
        return clients;
    } catch (error) {
        throw new ServiceError('Error al obtener los clientes', ClientErrorCodes.CLIENT_NOT_FOUND);
    }
}
