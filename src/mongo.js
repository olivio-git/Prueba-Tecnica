const mongoose  = require ("mongoose");

const mongoConnect = mongoose.connect('mongodb://localhost:27017/PruebaTecnica');

module.exports = mongoConnect;