const { Router } = require("express");
const controlers = require("../controlers");
const { characterValidation } = require ('../middlewares')

const router = Router();


router.get("/", controlers.getCharacters)

router.post("/", characterValidation, controlers.createCharacters)


module.exports = router;