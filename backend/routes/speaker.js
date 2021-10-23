const router = require('express').Router();

const SpeakerController = require('../controllers/SpeakerController');

router.post('/create',SpeakerController.create);
router.post('/update', SpeakerController.update);
router.get('/read', SpeakerController.read);
router.get('/readAll', SpeakerController.readAll);
router.get('/display', SpeakerController.display);

module.exports = router;