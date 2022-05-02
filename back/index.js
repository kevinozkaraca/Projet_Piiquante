const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.sendStatus("Hello je fonctionne !!"));
app.listen(port, () => console.log(`Nous sommes le port ${port}`));
