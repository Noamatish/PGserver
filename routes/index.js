const express = require("express");
const WL = require("./address");
const checkMerkle = require("./utils");
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
  console.log('im here')
  res.render("index", { title: "Express" });
});

/* POST home page. */
router.post("/wl", function (req, res, next) {
  const { address } = req.body;
  if (!address) return res.json("Error - no address").status(500);
  const found = WL.find((w) => w === address);
  if (!found) return res.json(false);
  else return res.json(true);
});

/* POST home page. */
router.post("/check", function (req, res, next) {
  const { address } = req.body;
  if (!address) return res.json("Error - no address").status(500);
  const proof = checkMerkle(address);
  if (!proof) return res.json(false);
  else return res.json(proof);
});

module.exports = router;
