const response = require("../../config/utils/response.js");
const productoService = require("../services/producto.service.js");

class ProductoController {
  async createProducto(req, res) {
    if (!req.user || !ConnectionListMultitenants[req.user]) {
      return res.status(500).json({ message: "Invalid tenant information" });
    }

    const ProductoModel = ConnectionListMultitenants[req.user].Producto;
    const productoData = { ...req.body };

    try {
      const producto = await productoService.createProducto(
        productoData,
        ProductoModel
      );
 
      await ConnectionListMultitenants[req.user].close();
      delete ConnectionListMultitenants[req.user];

      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllProductos(req, res) {  
    if (!req.user || !ConnectionListMultitenants[req.user]) {
      return res.status(500).json({ message: "Invalid tenant information" });
    }
    const ProductoModel = ConnectionListMultitenants[req.user].Producto; 
    try {
      const productos = await productoService.getAllProductos(ProductoModel); 
      await ConnectionListMultitenants[req.user].close();
      delete ConnectionListMultitenants[req.user];
      res.status(200).json(productos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ProductoController();
