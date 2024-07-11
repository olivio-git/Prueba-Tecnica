class ProductoDao {
  async createProducto(productoData, ProductoModel) {
    const producto = new ProductoModel(productoData);
    return await producto.save();
  }

  async getAllProductos(ProductoModel) { 
    return await ProductoModel.find();
  }
}

module.exports = new ProductoDao();
