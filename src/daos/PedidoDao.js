class PedidoDao {
  async createPedido(pedidoData,PedidoModel,ProductoModel) {
    const producto = await ProductoModel.findById(pedidoData.product);
    if (!producto) {
      throw new Error("Product not found");
    } 
    const totalPrice = producto.precio*pedidoData.cantidad;
    producto.stock = producto.stock - pedidoData.cantidad; 
    await producto.save();
    const pedido = new PedidoModel({...pedidoData,totalPrice:totalPrice}); 
    return await pedido.save();
  }

  async getPedido(id,PedidoModel) {
    return await PedidoModel.findById(id);
  }

  async getAllPedidos(PedidoModel) {
    return await PedidoModel.find();
  }
}

module.exports = new PedidoDao();
