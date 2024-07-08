const Cliente = require("../models/clienteModel");

class ClienteDao {
  async createCliente(clienteData) {
    const cliente = new Cliente(clienteData);
    return await cliente.save();
  } 
}

module.exports = new ClienteDao();
