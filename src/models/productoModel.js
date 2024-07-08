 const mongoose = require("mongoose");
 
const productoSchema= new mongoose.Schema({
    tenantId: { type: String, required: true },
    nombre: {
        type: String,
    }, 
    precio: {
        type: Number,
    },
    stock: {
        type: Number,
    }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;