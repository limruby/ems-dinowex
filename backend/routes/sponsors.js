const router = require('express').Router();

const SponsorController = require('../controllers/SponsorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', SponsorController.create);
router.get('/read', SponsorController.read);
router.get('/readAll', SponsorController.readAll);
router.post('/update',authenticate, SponsorController.update);
router.get('/pay', SponsorController.pay)
router.post('/updatePayment', SponsorController.updatePayment)

module.exports = router;