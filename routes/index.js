const express = require("express");
const WL = require("./address");
const router = express.Router();

// app.use(cors());
// app.use(bodyParser.json({ limit: "100mb" }));
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

// app.options("*", cors(corsOptions));

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(WL);
  res.render("index", { title: "Express" });
});

/* POST home page. */
router.post("/wl", function (req, res, next) {
  const { address } = req.body;
  console.log(req.body);
  console.log("im here mfer");
  if (!address) res.send("Eroor").status(500);
  const found = WL.find(address);
  if (!found) res.send("Eroor").status(500);
  else res.json(true);
});

module.exports = router;
