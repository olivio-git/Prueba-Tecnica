const mongoose = require("mongoose");

const createSchemaPedido = (connection) => {
  const pedidoSchema = new mongoose.Schema({ 
    cliente: {
      type: String
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    cantidad: {
      type: Number,
    },
    totalPrice:{
        type: Number
    }
  });
  return connection.model('Pedido', pedidoSchema);
};
 
module.exports = createSchemaPedido;