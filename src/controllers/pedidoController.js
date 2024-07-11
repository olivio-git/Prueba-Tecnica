const PedidoService = require("../services/pedido.service.js");

class PedidoController {
  async createPedido(req, res) {
    const pedidoData = { ...req.body };
    
    if (!req.user || !ConnectionListMultitenants[req.user]) {
      return res.status(500).json({ message: "Invalid tenant information" });
    }
    const PedidoModel = ConnectionListMultitenants[req.user].Pedido;
    const ProductoModel = ConnectionListMultitenants[req.user].Producto;

    try {
      const pedido = await PedidoService.createPedido(pedidoData, PedidoModel, ProductoModel);
      res.status(201).json(pedido);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getPedido(req, res) {
    if (!req.user || !ConnectionListMultitenants[req.user]) {
      return res.status(500).json({ message: "Invalid tenant information" });
    } 
    const PedidoModel = ConnectionListMultitenants[req.user].Pedido;

    const { id } = req.params;
    try {
      const pedido = await PedidoService.getPedido(id,PedidoModel);
      res.status(200).json(pedido);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAllPedidos(req, res) {
    if (!req.user || !ConnectionListMultitenants[req.user]) {
      return res.status(500).json({ message: "Invalid tenant information" });
    } 
    const PedidoModel = ConnectionListMultitenants[req.user].Pedido;
 
    try {
      const pedidos = await PedidoService.getAllPedidos(PedidoModel);
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PedidoController();
