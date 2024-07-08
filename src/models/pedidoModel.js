 const mongoose = require("mongoose");
 
const pedidoSchema = new mongoose.Schema({
    tenantId: { type: String, required: true },
    cliente: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    },
    cantidad: {
        type: Number,
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido; 