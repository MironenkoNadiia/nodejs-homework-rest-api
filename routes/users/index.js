const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");


router.post('/register', ctrl.reg)

router.post("/login", ctrl.logIn);

router.post("/logout", ctrl.logOut);

module.exports = router;
