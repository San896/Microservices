const { Router } = require("express");
const controlers = require("../controlers");
const { planetValidation } = require ('../middlewares')

const router = Router();


router.get("/", controlers.getPlanets)

router.post("/", planetValidation, controlers.createPlanets)


module.exports = router;