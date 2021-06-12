const router = require('express').Router();

const SponsorController = require('../controllers/SponsorController');
const authenticate = require('../middleware/authenticate');

router.post('/create', SponsorController.create);
router.get('/read', SponsorController.read);
<<<<<<< HEAD
router.get('/readAll', SponsorController.readAll);
router.post('/update',authenticate, SponsorController.update);
router.get('/pay', SponsorController.pay)
router.post('/updatePayment', SponsorController.updatePayment)
=======
router.post('/update',authenticate, SponsorController.update);
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed

module.exports = router;