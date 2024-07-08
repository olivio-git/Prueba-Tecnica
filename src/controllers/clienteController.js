const response = require ('../../config/utils/response.js');
const clienteService = require ('../services/cliente.service.js');

class ClienteController {
  async createCliente(req, res) {
    const userData ={...req.body,tenantId:req.tenantId};
    try {
      const cliente = await clienteService.createCliente(userData);
      response(res,200,cliente);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } 
}

module.exports = new ClienteController();
