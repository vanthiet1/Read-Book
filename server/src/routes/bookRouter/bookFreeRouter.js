const router = require("express").Router();
const bookFreeController = require('../../controllers/bookController/bookFreeControllers');

// router Home
router.post("/",bookFreeController.addBookFree);
router.get("/",bookFreeController.getBookFree);
router.get("/:id",bookFreeController.getAnBookFree);


module.exports = router;