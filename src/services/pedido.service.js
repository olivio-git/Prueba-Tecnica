const { ClientError } = require ('../../config/utils/errors');
const PedidoDao = require ('../daos/PedidoDao');

class PedidoService { 
  async createPedido(pedidoData,PedidoModel,ProductoModel) { 

    if (!pedidoData) {
        throw new ClientError("Pedido data is required", 400);
    }
    return await PedidoDao.createPedido(pedidoData,PedidoModel,ProductoModel);
  }

  async getPedido(id,PedidoModel) {
    return await PedidoDao.getPedido(id,PedidoModel);
  }
  async getAllPedidos(PedidoModel) {
    return await PedidoDao.getAllPedidos(PedidoModel);
  }
}

module.exports = new PedidoService();
