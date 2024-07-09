const response = require ('../../config/utils/response.js');
const productoService = require ('../services/producto.service.js');

class ProductoController {
  async createProducto(req, res) {
    const productoData = { ...req.body, tenantId: req.tenantId }
    try {
      const producto = await productoService.createProducto(productoData);
      response(res,200,producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } 
  async getAllProductos(req, res) {
    const { tenantId } = req;  
    try {
      console.log(tenantId)
      const producto = await productoService.getAllProductos(tenantId);
      response(res,200,producto);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }  
}

module.exports = new ProductoController();
