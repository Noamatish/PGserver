const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const WL = require("./address");
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

// app.options("*", cors(corsOptions));

/* POST home page. */
router.post("/", function (req, res, next) {
  const { address } = res.body;
  console.log(res.body);
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
