const Producto = require("../models/productoModel");
class ProductoDao {

  async createProducto(productoData) {
    const producto = new Producto(productoData);
    return await producto.save();
  }

  async getAllProductos(tenantId) { 
    return await Producto.find({tenantId});
  }
}

module.exports = new ProductoDao();
