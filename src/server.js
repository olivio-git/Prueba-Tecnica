const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser"); 
const pedido = require ("./routes/pedidoRoute.js");
const producto = require ("./routes/productoRoute.js");
const cliente = require ("./routes/clienteRoute.js");
const morgan = require("morgan");

const server  = express();

server.use(express.json());
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan('dev'));


server.use('/api/pedidos',pedido)
server.use('/api/productos',producto)
server.use('/api/clientes',cliente)

server.use('/',(req,res)=>{
    res.send('Bienvenido a la API de pedidos')
})



module.exports = server;