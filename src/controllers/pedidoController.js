const response = require('../../config/utils/response.js');
const pedidoService = require('../services/pedido.service.js');

class PedidoController {
  async createPedido(req, res) {
    const pedidoData = { ...req.body, tenantId: req.tenantId };

    try {
      const pedido = await pedidoService.createPedido(pedidoData);
      res.status(201).json(pedido);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getPedido(req, res) {
    const { id } = req.params;
    const { tenantId } = req;
    try {
      const pedido = await pedidoService.getPedido(id, tenantId);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAllPedidos(req, res) {
    const { tenantId } = req;
    try {
      const pedidos = await pedidoService.getAllPedidos(tenantId);
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PedidoController();
