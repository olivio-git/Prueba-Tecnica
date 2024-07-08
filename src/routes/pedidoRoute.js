const express =require ('express'); 
const pedidoController = require  ('../controllers/pedidoController');
const multitenantMiddleware = require('../middleware/multitenantMiddleware');

const router = express.Router();

router.post('/create', multitenantMiddleware, pedidoController.createPedido);
router.get('/find/:id', multitenantMiddleware, pedidoController.getPedido);
router.get('/',multitenantMiddleware, pedidoController.getAllPedidos);

module.exports = router;
