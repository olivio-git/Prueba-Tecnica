const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
    tenantId: { type: String, required: true },
    nombre: {
        type: String
    },
    apellido: {
        type:String
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;