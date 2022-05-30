const express = require("express");
const mongoose = require("mongoose");
const favicon = require("serve-favicon");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const userRoutes = require("../routes/routesUser");
const sauceRoutes = require("../routes/routesSauce");
const bodyParser = require("body-parser");

// mongoose : facilite l'acces a MongoBD
// ---------- connect :
// process.env.DB_ACCESS (contient le lien)
// process.env.MONGO_PSWD (contient le mot de passe)
//  ... mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSWD}@
// mongodb://localhost:27017

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

// body parser

app.use(bodyParser.json());
app.use(express.json());

// Contourner la sécurité CORS
/*
accéder à notre API depuis n'importe quelle origine ( '*' ) ;
ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// favicon du serveur
app.use(favicon("./images/nodejs.ico"));
// info server
app.use(morgan("dev"));

// TEST PROBLEME GET
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Route
app.use("/images", express.static(path.join("./images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
