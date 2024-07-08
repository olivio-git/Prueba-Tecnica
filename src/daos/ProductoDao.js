const Producto = require("../models/productoModel");
class ProductoDao {

  async createProducto(productoData) {
    const producto = new Producto(productoData);
    return await producto.save();
  }
 
}

module.exports = new ProductoDao();
