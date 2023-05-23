const { Router } = require("express");
const controlers = require("../controlers");

const router = Router();


router.get("/", controlers.getFilms)

router.post("/", controlers.createFilms)


module.exports = router;