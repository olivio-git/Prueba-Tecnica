const { ClientError } = require ('../../config/utils/errors');
const pedidoDao = require ('../daos/PedidoDao');

class PedidoService {
  async createPedido(pedidoData) { 
    if (!pedidoData) {
        throw new ClientError("Pedido data is required", 400);
    }
    return await pedidoDao.createPedido(pedidoData);
  }

  async getPedido(id,tenantId) {
    return await pedidoDao.getPedido(id,tenantId);
  }
  async getAllPedidos(tenantId) {
    return await pedidoDao.getAllPedidos(tenantId);
  }
}

module.exports = new PedidoService();
