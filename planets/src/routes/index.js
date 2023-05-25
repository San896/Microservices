const { Router } = require("express");
const controlers = require("../controlers");
const { planetValidation } = require ('../middlewares')

const router = Router();


router.get("/", controlers.getCharacters)

router.post("/", planetValidation, controlers.createCharacters)


module.exports = router;