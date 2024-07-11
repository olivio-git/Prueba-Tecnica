require('dotenv').config();
const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const cookieParser = require ("cookie-parser"); 
const mongoose = require ("mongoose");
const pedido = require ("./routes/pedidoRoute.js");
const producto = require ("./routes/productoRoute.js");
const user = require ("./routes/userRoute.js");
const morgan = require("morgan");

const server  = express();
mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME_AUTH}`)
const DB  = mongoose.connection;

DB.on('error',(error)=>console.error(error));
DB.once('open',()=>console.log('Conectado a la base de datos de usuarios: ',DB.name));
DB.on('disconnected',()=>console.log('Desconectado de la base de datos de usuarios'));

server.use(express.json());
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan('dev'));


server.use('/api/pedidos',pedido)
server.use('/api/productos',producto)
server.use('/api/users',user)

server.use('/',(req,res)=>{
    res.send('Bienvenido a la API de pedidos')
})



module.exports = server;