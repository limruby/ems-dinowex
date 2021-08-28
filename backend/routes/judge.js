const router = require('express').Router();

const JudgeController = require('../controllers/JudgeController');
const authenticate = require('../middleware/authenticate');

router.post('/create',JudgeController.create);
router.get('/read', JudgeController.read);
router.get('/readAll', JudgeController.readAll);

module.exports = router;