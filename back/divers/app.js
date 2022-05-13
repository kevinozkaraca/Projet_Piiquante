const express = require("express");
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const userRoutes = require("../routes/routesUser");
const sauceRoutes = require("../routes/routesSauce");

// mongoose : facilite l'acces a MongoBD
mongoose
  .connect("mongodb://localhost/27017", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
// favicon du serveur
app.use(favicon("./images/nodejs.ico"));
// Contourner la sécurité CORS
/*
accéder à notre API depuis n'importe quelle origine ( '*' ) ;

ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;

envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
//information supplémentaire sur le serveur
app.use(morgan("dev"));

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
