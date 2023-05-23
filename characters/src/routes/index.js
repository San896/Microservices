const { Router } = require("express");
const controlers = require("../controlers");

const router = Router();


router.get("/", controlers.getCharacters)

router.post("/", controlers.createCharacters)


module.exports = router;