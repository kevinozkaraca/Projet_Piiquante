const express = require("express");
const router = express.Router();
const multer = require("../divers/configurationMulter");
const authentification = require("../divers/authentification");
const controlesSauce = require("../controles/controlesSauce");

router.get("/", authentification, controlesSauce.getAllSauce);
router.get("", authentification, controlesSauce.getAllSauce);
router.post("/", authentification, multer, controlesSauce.createSauce);
router.get("/:id", authentification, controlesSauce.getOneSauce);
router.put("/:id", authentification, multer, controlesSauce.modifySauce);
router.delete("/:id", authentification, controlesSauce.deleteSauce);
router.post("/:id/like", authentification, controlesSauce.likeSauce);

module.exports = router;
