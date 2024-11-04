
import { Client } from '../models/clientModel.js';

import ServiceError from '../utils/errors/ServiceError.js';

export const saveClient = async (clientData) => {
    const newClient = new Client(clientData);
    try {
        const clientCreated = await newClient.save();
        return clientCreated;
    } catch (error) {
        throw new ServiceError('Error al crear el cliente', 'CLIENT_CREATION_FAILED');
    }
};
