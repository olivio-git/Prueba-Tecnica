const mongoose = require("mongoose");

const createSchemaProducto = (connection) => {
  const productoSchema = new mongoose.Schema({
    nombre: {
      type: String,
    },
    precio: {
      type: Number,
    },
    stock: {
      type: Number,
    },
  });
  return connection.model("Producto", productoSchema);
};

module.exports = createSchemaProducto;
