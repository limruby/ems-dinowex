const router = require('express').Router();

const VisitorController = require('../controllers/VisitorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', VisitorController.create);
router.get('/read', VisitorController.read);
router.post('/update',authenticate, VisitorController.update);
router.get('/readAll', VisitorController.readAll);
router.get('/pay', VisitorController.pay);
router.post('/updatePayment', VisitorController.updatePayment);

module.exports = router;