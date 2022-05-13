const controlesUser = require("../controles/controlesUser");
const express = require("express");
const router = express.Router();

router.post("/signup", controlesUser.signup);
router.post("/login", controlesUser.login);

module.exports = router;
