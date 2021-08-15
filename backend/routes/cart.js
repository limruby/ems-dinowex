const router = require('express').Router();

const CartController = require('../controllers/CartController');

router.post('/addToCart', CartController.addToCart);
router.get('/deleteOrder', CartController.deleteOrder); 
router.get('/readCart', CartController.readCart); 
router.get('/userReadCart', CartController.userReadCart);
router.get('/readOrder', CartController.readOrder)
router.post('/updateCart', CartController.updateCart); 

module.exports = router;