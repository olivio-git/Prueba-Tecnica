const { ClientError } = require('../../config/utils/errors');
const productoDao = require('../daos/ProductoDao');

class ProductoService {
  async createProducto(productoData, ProductoModel) {
    if (!productoData) {
      throw new ClientError("Producto data is required", 400);
    }
    return await productoDao.createProducto(productoData, ProductoModel);
  }

  async getAllProductos(ProductoModel) {
    return await productoDao.getAllProductos(ProductoModel);
  }
}

module.exports = new ProductoService();
