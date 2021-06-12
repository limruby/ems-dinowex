const router = require('express').Router();

const CompetitorController = require('../controllers/CompetitorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', CompetitorController.create);
router.get('/read', CompetitorController.read);
router.get('/readAll', CompetitorController.readAll);
router.post('/update',authenticate, CompetitorController.update);
router.get('/pay', CompetitorController.pay);
router.post('/updatePayment', CompetitorController.updatePayment);

module.exports = router;