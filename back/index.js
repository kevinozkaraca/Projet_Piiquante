// express : gestion serveur localhost
const express = require("express");
const app = express();
const port = 3000;
// morgan : information supplementaire sur le serveur
const morgan = require("morgan");
// serve-favicon : gestion de la favicon
const favicon = require("serve-favicon");
// router : fichier externe de gestion des routes
const router = require("./routeur");

// express :
app.listen(port, () => console.log("Nous sommes le port 3000"));
// morgan :
app.use(morgan("dev"));
// serve-favicon :
app.use(favicon("../front/src/favicon.ico"));
// router : voir fichier router.js
app.use("/", router);
