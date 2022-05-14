const jwt = require("jsonwebtoken");
//Authentification par token
module.exports = (req, res, next) => {
  try {
    // recuperation dans le header du token / correction et verification
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "${process.env.TOKEN}");
    const userId = decodedToken.userId;

    // Comparaison de l'ID utilisateur et du token
    if (req.body.userId && req.body.userId !== userId) {
      throw "ID user non valide !";
    } else {
      next();
    }
    // récupération du throw
  } catch (error) {
    res.status(401).json({ error: error | "Requête non valide !" });
  }
};
