require("dotenv").config();
const { default: mongoose } = require("mongoose");
const jwtService = require("../services/jwt.service");
const createSchemaProducto = require("../models/productoModel");
const createSchemaPedido = require("../models/pedidoModel");

global.ConnectionListMultitenants = [];

module.exports = async (req, res, next) => {
  const tenantAuthorization = req.header("Authorization");
  
  if (!tenantAuthorization || !tenantAuthorization.startsWith("Bearer ")) {
    return res.status(400).json({ message: "tokenTenantUser is required" });
  }
  
  const tenantToken = tenantAuthorization.split(" ")[1];
  const verifiedToken = await jwtService.verifyToken(tenantToken);
  
  if (!verifiedToken || !verifiedToken.nombre) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const dbName = `${process.env.PREFIX_TENANT}${verifiedToken.nombre}`;
  
  try {
    if (!ConnectionListMultitenants[dbName]) {
      const uriConnection = `${process.env.MONGO_URI}/${dbName}`;
      const connection = await mongoose.createConnection(uriConnection);
      
      connection['Producto'] = createSchemaProducto(connection);
      connection['Pedido'] = createSchemaPedido(connection);
      
      ConnectionListMultitenants[dbName] = connection;
    }
    
    req.user = dbName; // Assigning the user to the request object
    next();
  } catch (error) {
    res.status(500).json({ message: "Database connection error" });
  }
};
