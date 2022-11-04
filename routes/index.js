const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const WL = require("./address");
const router = express.Router();
const app = express();

// app.use(cors());
// app.use(bodyParser.json({ limit: "100mb" }));
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

// app.options("*", cors(corsOptions));

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "POST");

  // Request headers you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(WL);
  res.render("index", { title: "Express" });
});

/* POST home page. */
router.post("/wl", function (req, res, next) {
  const { address } = res.body;
  console.log(res.body);
  console.log("im here mfer");
  if (!address) res.send("Eroor").status(500);
  const found = WL.find(address);
  if (!found) res.send("Eroor").status(500);
  else res.json(true);
});

module.exports = router;
