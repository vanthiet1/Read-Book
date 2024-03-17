const router = require("express").Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
router.get("/",authMiddleware,userController.getUserInfo);

module.exports = router;
