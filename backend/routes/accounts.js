const router = require('express').Router();

const AccountController = require('../controllers/AccountController');
const authenticate = require('../middleware/authenticate');
//account
router.post('/signUp', AccountController.register);
router.post('/login', AccountController.login); 
router.get('/read', AccountController.read); 
<<<<<<< HEAD
router.get('/readAll', AccountController.readAll); 
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
router.post('/update', authenticate, AccountController.update); 
router.get('/readAdmin', AccountController.readAdmin); 
// router.post('/login',authenticate, UserController.login);


module.exports = router;