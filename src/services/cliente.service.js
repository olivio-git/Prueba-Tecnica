const { ClientError } = require ('../../config/utils/errors');
const clienteDao = require ('../daos/ClienteDao');

class ClienteService {
  async createCliente(clienteData) { 
    if (!clienteData) {
        throw new ClientError("Cliente data is required", 400);
    }
    return await clienteDao.createCliente(clienteData);
  } 
}

module.exports = new ClienteService();
