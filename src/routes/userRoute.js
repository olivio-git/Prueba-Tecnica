const express =require ('express'); 
const clienteController = require  ('../controllers/userController');
const multitenantMiddleware = require('../middleware/multitenantMiddleware');
const router = express.Router();

router.post('/create', clienteController.createUser); 
router.post('/create/client/', clienteController.createClient); 
router.post('/login', clienteController.loginUser); 

module.exports = router;
