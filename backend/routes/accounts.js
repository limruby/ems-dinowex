const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const authenticate = require('../middleware/authenticate');
//account
router.post('/signUp', AccountController.register);
router.post('/login', AccountController.login); 
router.get('/read', AccountController.read); 
<<<<<<< HEAD
router.get('/readAll', AccountController.readAll); 
router.post('/update', authenticate, AccountController.update); 
router.get('/readAdmin', AccountController.readAdmin); 
=======
router.post('/update', authenticate, AccountController.update); 

>>>>>>> 2dbc05f (sponsor sign up updated)
// router.post('/login',authenticate, UserController.login);


module.exports = router;