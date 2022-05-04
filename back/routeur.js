const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log("Demande de page test");
  res.end("Page test methode Get");
});
router.post("/test", (req, res) => {
  console.log("Demade formulaire");
  res.end("Page test methode Post");
});

// gestion du 404
router.use((req, res, suite) => {
  const error = new Error("La page demandee n'existe pas");
  error.status = 404;
  // gestion des autres erreurs
  suite(error);
});
// gestion des autres erreurs serveur 500
router.use((error, req, res, suite) => {
  res.status(error.status || 500);
  res.end(error.message);
});
module.exports = router;
