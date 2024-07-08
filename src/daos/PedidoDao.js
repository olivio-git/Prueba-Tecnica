const Pedido = require("../models/pedidoModel");
class PedidoDao {
  async createPedido(pedidoData) {
    const pedido = new Pedido(pedidoData);
    return await pedido.save();
  }

  async getPedido(id,tenantId) { 
    return await Pedido.find({_id: id , tenantId: tenantId});
  }

  async getAllPedidos(tenantId) {
    return await Pedido.find({ tenantId});
  }
}

module.exports = new PedidoDao();
