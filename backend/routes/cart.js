const router = require('express').Router();

const CartController = require('../controllers/CartController');

router.post('/addToCart', CartController.addToCart);
<<<<<<< HEAD
router.post('/cancelCart', CartController.cancelCart); 
router.get('/readCart', CartController.readCart); 
router.post('/updateCart', CartController.updateCart); 
router.get('/userReadCart', CartController.userReadCart); 
=======
router.get('/deleteOrder', CartController.deleteOrder); 
router.get('/readCart', CartController.readCart); 
router.get('/userReadCart', CartController.userReadCart);
router.get('/readOrder', CartController.readOrder)
router.post('/updateCart', CartController.updateCart); 
>>>>>>> booth

module.exports = router;