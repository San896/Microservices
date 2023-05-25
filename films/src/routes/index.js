const { Router } = require("express");
const controlers = require("../controlers");
const { filmValidation } = require ('../middlewares')

const router = Router();


router.get("/", controlers.getFilms)

router.post("/", filmValidation, controlers.createFilms)


module.exports = router;