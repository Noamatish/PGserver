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
  console.log(address);
  console.log("im here mfer");
  if (!address) return res.json("Error - no address").status(500);
  const found = WL.find((w) => w === address);
  if (!found) return res.json(false);
  else return res.json(true);
});

module.exports = router;
