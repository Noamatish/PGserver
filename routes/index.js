var express = require("express");
const WL = require("./address");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const { address } = res.body;
  if (!address) res.send("Eroor").status(500);
  const found = WL.find(address);
  if (!found) res.send("Eroor").status(500);
  else res.json(true);
});

module.exports = router;
