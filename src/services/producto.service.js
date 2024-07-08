const { ClientError } = require ('../../config/utils/errors');
const productoDao = require ('../daos/ProductoDao');

class ProductoService {
  async createProducto(productoData) {  
    if (!productoData) {
        throw new ClientError("Producto data is required", 400);
    }
    return await productoDao.createProducto(productoData);
  } 
}

module.exports = new ProductoService();
