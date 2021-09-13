const router = require('express').Router();

const SpeakerController = require('../controllers/SpeakerController');
const authenticate = require('../middleware/authenticate');

router.post('/create',SpeakerController.create);
router.post('/update', SpeakerController.update);
router.get('/read', SpeakerController.read);
router.get('/readAll', SpeakerController.readAll);

module.exports = router;