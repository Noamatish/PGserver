var express = require("express");
const WL = require("./address");
var router = express.Router();
const cors = require("cors");
var app = express();
app.use(cors());

/* POST home page. */
router.post("/", function (req, res, next) {
  const { address } = res.body;
  if (!address) res.send("Eroor").status(500);
  const found = WL.find(address);
  if (!found) res.send("Eroor").status(500);
  else res.json(true);
});

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(WL);
  res.render("index", { title: "Express" });
});

module.exports = router;
