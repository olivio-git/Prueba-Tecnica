const express =require ('express'); 
const productoController = require  ('../controllers/productoController');
const multitenantMiddleware = require('../middleware/multitenantMiddleware');

const router = express.Router();

router.post('/create',multitenantMiddleware, productoController.createProducto); 
module.exports = router;