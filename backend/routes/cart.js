const router = require('express').Router();

const CartController = require('../controllers/CartController');

router.post('/addToCart', CartController.addToCart);
router.post('/cancelCart', CartController.cancelCart); 
router.get('/readCart', CartController.readCart); 
router.post('/updateCart', CartController.updateCart); 
router.get('/userReadCart', CartController.userReadCart); 

module.exports = router;