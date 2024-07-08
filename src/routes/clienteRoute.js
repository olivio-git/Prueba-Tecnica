const express =require ('express'); 
const clienteController = require  ('../controllers/clienteController');
const multitenantMiddleware = require('../middleware/multitenantMiddleware');

const router = express.Router();

router.post('/create', multitenantMiddleware, clienteController.createCliente); 

module.exports = router;
