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
// path : gestion des liens
const path = require("path");
// mongoose : gestion de la base de donne MongoDB
const mongoose = require("mongoose");

// express :
app.listen(port, () => console.log("Nous sommes le port 3000"));
// morgan :
app.use(morgan("dev"));
// serve-favicon :
app.use(favicon("../front/src/favicon.ico"));
// router : voir fichier router.js
app.use("/", router);
// connection avec la base de donnee (LIEN A RESEIGNER)
mongoose
  .connect("LIEN", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("la connextion a la base de donnee a reussie"))
  .catch(() => console.log("la connexion a echouee !"));
// Shema des donnees a stocker (A REVOIR)
const shemaDesDonnees = mongoose.Schema({
  nom: String,
  sauce: String,
  note: Number,
});
const modelDeDonnee = mongoose.model("sauce", shemaDesDonnees);
// Gestion des donnees
const sauce = modelDeDonnee
  .find()
  .exec()
  .then((sauces) => {
    console.log(sauces);
  })
  .catch();
