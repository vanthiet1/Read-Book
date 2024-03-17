const router = require("express").Router();
const bookFreeController = require('../../controllers/bookController/bookFreeControllers');

router.get("/",bookFreeController.getBookGenre);


module.exports = router;
